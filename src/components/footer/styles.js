import { css } from '@emotion/core';
import v from '../../styles/variables';

const styles = css`
  color: #fff;
  background-color: ${v.black};

  text-align: center;
  padding: 30px 15px;

  a {
    color: #fff;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${v.lightBlue};
    }
  }
`;

export default styles;
