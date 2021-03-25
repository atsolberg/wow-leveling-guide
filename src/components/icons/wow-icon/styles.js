import { css } from '@emotion/core';
import bg from '../../../images/icon-overlay.png';
import hl from '../../../images/icon-highlight-md.png';

const styles = src => css`
  display: inline-block;
  font-family: open sans, Arial, helvetica neue, Helvetica, sans-serif;
  position: relative;
  z-index: 0;
  &.-md {
    height: 44px;
    width: 44px;
  }

  ins {
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    position: absolute;
    z-index: 5;
  }
  &.-md ins {
    height: 36px;
    width: 36px;
    left: 4px;
    top: 4px;
    border-radius: 4px;
  }

  del {
    background-repeat: no-repeat;
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  &.-md del {
    background-image: url(${bg});
    height: 44px;
    width: 44px;
  }

  a {
    display: block;
    left: 3px;
    position: absolute;
    top: 3px;
    z-index: 20;
  }
  &.-md a {
    height: 38px;
    width: 38px;
    background: url(${hl}) no-repeat 38px 0;
    border-radius: 4px !important;
  }
`;

export default styles;
