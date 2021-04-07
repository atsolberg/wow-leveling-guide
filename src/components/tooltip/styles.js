import { css } from '@emotion/react';

const styles = css`
  &.tt-container {
    display: none;
    position: absolute;
    z-index: 1;
  }

  &.tt-container.active {
    display: block;
    max-width: 320px;
  }

  .tt-icon {
    position: absolute;
    top: 4px;
    right: 102%;
  }

  /* wow head styles start */

  .wh-tt {
    max-width: 100%;
    min-width: 200px;
    overflow: visible !important;
    // noinspection CssUnknownTarget
    background: url(/assets/wh/tooltip.png) no-repeat;
    background-size: cover;
    border: 1px solid #666;
    border-radius: 4px;
    border-top-color: #999;
    border-left-color: #888;
    padding: 8px;
  }

  .wh-tt table {
    border-spacing: 0;
    border-collapse: collapse;
    margin: 0;
    width: auto;
  }

  .wh-tt table,
  .wh-tt td,
  .wh-tt th,
  .wh-tt tbody {
    border: 0 !important;
  }

  .wh-tt td {
    max-width: 500px;
  }

  .wh-tt td,
  .wh-tt th {
    font-family: Verdana, open sans, Arial, helvetica neue, Helvetica,
      sans-serif;
    font-size: 12px;
    line-height: 17px;
    color: #fff;
  }

  .wh-tt td {
    text-align: left;
    vertical-align: top;
  }

  .wh-tt th {
    vertical-align: top;
  }

  .wh-tt b {
    color: inherit !important;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
  }

  .q,
  .q a,
  .color-q,
  .wh-tt .q a,
  .q.fa:before {
    color: #ffd100 !important;
  }

  .q1,
  .q1 a,
  .color-q1,
  .wh-tt .q1 a,
  .q1.fa:before {
    color: #fff !important;
  }

  .q2,
  .q2 a,
  .color-q2,
  .wh-tt .q2 a,
  .q2.fa:before {
    color: #1eff00 !important;
  }

  .q3,
  .q3 a,
  .color-q3,
  .wh-tt .q3 a,
  .q3.fa:before {
    color: #0070dd !important;
  }

  .q4,
  .q4 a,
  .color-q4,
  .wh-tt .q4 a,
  .q4.fa:before {
    color: #a335ee !important;
  }

  .q5,
  .q5 a,
  .color-q5,
  .wh-tt .q5 a,
  .q5.fa:before {
    color: #ff8000 !important;
  }

  .wh-tt .q,
  .wh-tt .q a,
  .wh-tt .color-q,
  .wh-tt .wh-tt .q a,
  .wh-tt .q.fa:before {
    color: #ffd100 !important;
  }

  .wh-tt .q1,
  .wh-tt .q1 a,
  .wh-tt .color-q1,
  .wh-tt .wh-tt .q1 a,
  .wh-tt .q1.fa:before {
    color: #fff !important;
  }

  .wh-tt .q2,
  .wh-tt .q2 a,
  .wh-tt .color-q2,
  .wh-tt .wh-tt .q2 a,
  .wh-tt .q2.fa:before {
    color: #1eff00 !important;
  }

  .wh-tt .q3,
  .wh-tt .q3 a,
  .wh-tt .color-q3,
  .wh-tt .wh-tt .q3 a,
  .wh-tt .q3.fa:before {
    color: #0070dd !important;
  }

  .wh-tt .q4,
  .wh-tt .q4 a,
  .wh-tt .color-q4,
  .wh-tt .wh-tt .q4 a,
  .wh-tt .q4.fa:before {
    color: #a335ee !important;
  }

  .wh-tt .q5,
  .wh-tt .q5 a,
  .wh-tt .color-q5,
  .wh-tt .wh-tt .q5 a,
  .wh-tt .q5.fa:before {
    color: #ff8000 !important;
  }

  .moneygold,
  .moneysilver,
  .moneycopper,
  .moneyitem {
    background: no-repeat right center;
    color: #fff;
    display: inline-block;
  }

  .wh-tt .moneygold,
  .wh-tt .moneysilver,
  .wh-tt .moneycopper,
  .wh-tt .moneyitem {
    color: #fff;
  }

  .moneycopper {
    padding-right: 15px;
    // noinspection CssUnknownTarget
    background-image: url(/assets/wh/money-copper.gif);
  }

  .moneysilver {
    padding-right: 15px;
    // noinspection CssUnknownTarget
    background-image: url(/assets/wh/money-silver.gif);
  }

  .moneygold {
    padding-right: 15px;
    // noinspection CssUnknownTarget
    background-image: url(/assets/wh/money-gold.gif);
  }

  /* wow head styles end */
`;

export default styles;
