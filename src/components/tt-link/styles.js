import { css } from '@emotion/react';

const styles = css`
  &.tt-link {
    &.--item,
    &.--object {
      color: #c63;
    }

    &.--quest {
      color: #fc0;
      font-weight: bold;
    }
    &.--npc {
      color: limegreen;
    }

    .tt-anchor {
      white-space: nowrap;
    }
  }
`;

export default styles;
