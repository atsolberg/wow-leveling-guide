import { bool, object, oneOf, shape, string } from 'prop-types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import cx from 'classnames';

import { Types } from '../../utils/constants';
import usePrevious from '../../hooks/usePrevious';
import WowIcon from '../icons/wow-icon/WowIcon';

import styles from './styles';

Tooltip.propTypes = {
  content: string,
  active: bool,
  data: shape({
    target: object,
    type: oneOf(Types),
    id: string,
  }),
};
function Tooltip({ content, active, data }) {
  const ref = useRef();
  const [icons, setIcons] = useState({});
  const { target, type, id } = data;
  const previousTarget = usePrevious(target);

  // Add icon from content script data
  useLayoutEffect(() => {
    const key = `${type}_${id}`;
    if (content && !icons[key]) {
      const script = ref.current.querySelector('script');
      const data = JSON.parse(script.innerHTML);
      const parts = data.image.split('/');
      const name = parts[parts.length - 1].replaceAll('_', '-');
      setIcons({ ...icons, [key]: name });
    }
  }, [content, icons, type, id]);

  // Add track mouse movement
  useEffect(() => {
    let cleaup = () => {};
    function move(e) {
      const { style, clientWidth: width, clientHeight: height } = ref.current;
      const bodyWidth = document.body.clientWidth;
      const bodyHeight = document.body.clientHeight;
      const fits = {
        x: e.pageX + width + 10 < bodyWidth,
        y: e.pageY + height + 10 < bodyHeight,
      };

      style.left = fits.x ? `${e.pageX + 10}px` : `${bodyWidth + 5 - width}px`;
      style.top = fits.y ? `${e.pageY + 10}px` : `${bodyHeight + 5 - height}px`;
    }

    if (active) {
      target.addEventListener('mousemove', move);
      cleaup = () => target.removeEventListener('mousemove', move);
    }

    return cleaup;
  }, [active, target, previousTarget]);

  const icon = icons[`${type}_${id}`];

  return (
    <div ref={ref} css={styles} className={cx('tt-container', { active })}>
      {icon && (
        <div className="tt-icon">
          <WowIcon name={icon} size="lg" />
        </div>
      )}
      <div className="tt wh-tt" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Tooltip;
