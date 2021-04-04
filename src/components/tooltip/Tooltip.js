import { bool, object, shape, string } from 'prop-types';
import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

import usePrevious from '../../hooks/usePrevious';
import WowIcon from '../icons/wow-icon/WowIcon';

import styles from './styles';

Tooltip.propTypes = {
  active: bool,
  target: object,
  data: shape({
    icon: string.isRequired,
    tooltip: string.isRequired,
  }),
};
function Tooltip({ target, active, data }) {
  const ref = useRef();
  const previousTarget = usePrevious(target);

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

  const icon = data?.icon;

  return (
    <div ref={ref} css={styles} className={cx('tt-container', { active })}>
      {icon && (
        <div className="tt-icon">
          <WowIcon name={icon} size="lg" />
        </div>
      )}
      <div
        className="tt wh-tt"
        dangerouslySetInnerHTML={{ __html: data?.tooltip }}
      />
    </div>
  );
}

export default Tooltip;
