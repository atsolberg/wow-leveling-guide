import { css } from '@emotion/core';
import v from './variables';

const styles = css`
  html {
    box-sizing: border-box;
    font-family: ${v.fontFamily};
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${v.darkGray};
    color: #abb2bf;
  }

  a {
    &,
    &:hover,
    &:focus {
      color: ${v.lightBlue};
    }
  }

  h1 {
    color: #999;
    font-size: 2rem;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #58f;
  }

  em {
    font-style: italic;
  }
  strong {
    font-weight: bold;
  }
  hr {
    border-top: 1px solid #ccc;
  }

  .item {
    color: #c63;
  }
  .quest {
    color: #ffcc00;
    font-weight: bold;
  }
`;

export default styles;
