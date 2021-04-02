import { css } from '@emotion/react';
import bg from '../../../images/icon-overlay.png';
import hl from '../../../images/icon-highlight-md.png';

function styles(name) {
  const icon = name.includes('.jpg') ? name : `${name}.jpg`;
  return css`
    display: inline-block;
    font-family: open sans, Arial, helvetica neue, Helvetica, sans-serif;
    position: relative;
    z-index: 0;
    &.-md {
      height: 44px;
      width: 44px;
    }
    &.-lg {
      height: 56px;
      width: 56px;
    }

    ins {
      background-image: url(/assets/icons/${icon});
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
    &.-lg ins {
      height: 48px;
      width: 48px;
      left: 4px;
      top: 4px;
      border-radius: 4px;
    }

    del {
      background-repeat: no-repeat;
      background-size: cover;
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
    &.-lg del {
      background-image: url(${bg});
      height: 56px;
      width: 56px;
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
    &.-lg a {
      height: 50px;
      width: 50px;
      background: url(${hl}) no-repeat 50px 0;
      border-radius: 4px !important;
    }
  `;
}

export default styles;
