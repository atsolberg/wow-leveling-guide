import React, { useEffect, useRef, useState } from 'react';
import { string, node } from 'prop-types';
import cx from 'classnames';

import client from '../../utils/client';
import styles from './styles';

ItemLink.propTypes = {
  id: string.isRequired,
  children: node,
};
function ItemLink({ id, children }) {
  const ref = useRef();
  const [tt, setTt] = useState();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const over = () => {
      setHovered(true);
      if (!tt) client({ endpoint: `/db/items/tt/${id}.html` }).then(setTt);
    };
    const out = () => setHovered(false);

    el.addEventListener('onmouseover', over);
    el.addEventListener('onmouseout', out);

    return () => {
      el.removeEventListener('onmouseover', over);
      el.removeEventListener('onmouseout', out);
    };
  }, [id, tt]);

  return (
    <>
      <a
        ref={ref}
        css={styles}
        className="item"
        data-item-id={id}
        href={`http://www.wowhead.com/item=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
      <div
        className={cx('tt', { hovered })}
        dangerouslySetInnerHTML={{ __html: tt }}
      />
    </>
  );
}

export default ItemLink;
