import React, { useMemo } from 'react';
import { node } from 'prop-types';
import { useLoggedReducer } from '../hooks/useLoggedReducer';

import hub, { useSubscription } from '../utils/hub';
import client from '../utils/client';
import logger from '../utils/logger';
import Tooltip from '../components/tooltip/Tooltip';

export const TooltipContext = React.createContext();
const hover = hub.topics.tooltip_target_hover;
const unhover = hub.topics.tooltip_target_unhover;

function logError(err, type, id) {
  const msg = `Failed to load tool tip for type: "${type}" and id: "${id}"`;
  logger.log(msg, err);
}

const initial = {
  data: {},
  hovering: false,
  target: null,
  type: null,
  id: null,
};

function reducer(draft, action) {
  const { payload } = action;
  switch (action.type) {
    case 'data': {
      const key = `${payload.type}_${payload.id}`;
      draft.data[key] = payload.data;
      break;
    }

    case 'hover': {
      const { target, type, id } = payload;
      draft.hovering = true;
      draft.target = target;
      draft.type = type;
      draft.id = id;
      break;
    }

    case 'unhover': {
      draft.hovering = false;
      break;
    }

    default: {
      throw new Error(`unknown action type"${action.type}"`);
    }
  }

  return draft;
}
Object.defineProperty(reducer, 'name', { value: 'TooltipProvider' });

TooltipProvider.propTypes = {
  children: node,
};
function TooltipProvider({ children, ...props }) {
  const [state, dispatch] = useLoggedReducer(reducer, initial);
  const { data, target, type, id, hovering } = state;

  useSubscription(hover, (target) => {
    const { type, id } = target.dataset;
    const tt = data[`${type}_${id}`];
    if (!tt) {
      // Fetch the tooltip for this target
      client(`/tt/items-plus-data/${id}.html`)
        .then((data) => {
          dispatch({ type: 'data', payload: { data, type, id } });
        })
        .catch((err) => logError(err, type, id));
    }

    dispatch({ type: 'hover', payload: { target, type, id } });
  });

  useSubscription(unhover, () => {
    dispatch({ type: 'unhover' });
  });

  const value = useMemo(
    () => ({
      hover: ({ currentTarget }) => hub.pub(hover, currentTarget),
      unhover: ({ currentTarget }) => hub.pub(unhover, currentTarget),
    }),
    []
  );

  const tt = data[`${type}_${id}`];

  return (
    <TooltipContext.Provider value={value} {...props}>
      <Tooltip content={tt} active={hovering} data={{ target, type, id }} />
      {children}
    </TooltipContext.Provider>
  );
}

export default TooltipProvider;
