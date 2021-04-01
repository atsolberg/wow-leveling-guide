import React, { useEffect, useRef, useState } from 'react';
import { string, node, oneOf } from 'prop-types';
import cx from 'classnames';

import client from '../../utils/client';
import logger from '../../utils/logger';
import styles from './styles';

const types = ['item', 'object', 'quest', 'npc'];

function logError(err, type, id) {
  const msg = `Failed to load tool tip for type: ${type} and id: ${id}`;
  logger.log(msg, err);
}

TtLink.propTypes = {
  id: string.isRequired,
  type: oneOf(types),
  children: node,
};
function TtLink({ id, type = 'item', children }) {
  const linkRef = useRef();
  const ttRef = useRef();
  const [data, setData] = useState();
  const [icon, setIcon] = useState();
  const [tt, setTt] = useState();
  const [hovered, setHovered] = useState(false);

  // Fetch tooltip markup on first hover
  useEffect(() => {
    const el = linkRef.current;

    function over() {
      if (!hovered) {
        client(`/tt/items-plus-data/${id}.html`)
          .then(setTt)
          .catch((err) => logError(err, type, id));
      }
      setHovered(true);
    }

    el.addEventListener('mouseover', over);
    return () => el.removeEventListener('mouseover', over);
  }, [id, hovered, type]);

  // Set name from tooltip markup once available
  useEffect(() => {
    if (tt && !data) {
      const script = ttRef.current.querySelector('script');
      const data = JSON.parse(script.innerHTML);
      const parts = data.image.split('/');
      setData(data);
      setIcon(parts[parts.length - 1].replaceAll('_', '-'));
    }
  }, [data, tt]);

  return (
    <span css={styles} className={cx('tt-link', `--${type}`)}>
      <div className="tt-container">
        {icon && (
          <div className="tt-icon">
            <img alt="" src={`/assets/icons/${icon}`} />
          </div>
        )}
        <div
          ref={ttRef}
          className="tt wh-tt"
          dangerouslySetInnerHTML={{ __html: tt }}
        />
      </div>
      <a
        ref={linkRef}
        className="tt-anchor"
        data-item-id={id}
        href={`https://classic.wowhead.com/item=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </span>
  );
}

export default TtLink;
