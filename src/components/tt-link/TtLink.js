import React, { useEffect, useRef, useState } from 'react';
import { string, node, oneOf } from 'prop-types';
import cx from 'classnames';

import client from '../../utils/client';
import styles from './styles';

const types = ['item', 'quest', 'npc'];

TtLink.propTypes = {
  id: string.isRequired,
  type: oneOf(types),
  children: node,
};
function TtLink({ id, type = 'item', children }) {
  const ref = useRef();
  const [tt, setTt] = useState();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const over = () => {
      if (!hovered) client({ endpoint: `/tt/items/${id}.html` }).then(setTt);
      setHovered(true);
    };
    el.addEventListener('mouseover', over);
    return () => el.removeEventListener('mouseover', over);
  }, [id, hovered]);

  return (
    <span css={styles} className={cx('tt-link', `--${type}`)}>
      <div className="tt" dangerouslySetInnerHTML={{ __html: tt }} />
      <a
        ref={ref}
        data-item-id={id}
        href={`http://www.wowhead.com/item=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </span>
  );
}

export default TtLink;
