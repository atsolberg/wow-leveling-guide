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
    // noinspection CssUnknownTarget
    background: url(/assets/wh/tooltip.png);
    font-family: Verdana, open sans, Arial, helvetica neue, Helvetica,
      sans-serif;
    font-size: 12px;
    line-height: 17px;
    color: #fff;
  }

  .wh-tt td {
    padding: 8px 4px 1px 9px;
    text-align: left;
    vertical-align: top;
  }

  .wh-tt th {
    padding: 3px;
    vertical-align: top;
  }

  .tt.wh-tt td {
    overflow: auto;
    text-overflow: clip;
  }

  .wh-tt td td {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wh-tt td th,
  .wh-tt td td {
    background: 0 0;
  }

  .wh-tt td td {
    padding: 0;
    text-align: left;
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
  .wh-tt .q.fa:before,
  .iconsmall .q,
  .iconsmall .q a,
  .iconsmall .color-q,
  .iconsmall .wh-tt .q a,
  .iconsmall .q.fa:before,
  .iconmedium .q,
  .iconmedium .q a,
  .iconmedium .color-q,
  .iconmedium .wh-tt .q a,
  .iconmedium .q.fa:before,
  .iconlarge .q,
  .iconlarge .q a,
  .iconlarge .color-q,
  .iconlarge .wh-tt .q a,
  .iconlarge .q.fa:before {
    color: #ffd100 !important;
  }

  .wh-tt .q1,
  .wh-tt .q1 a,
  .wh-tt .color-q1,
  .wh-tt .wh-tt .q1 a,
  .wh-tt .q1.fa:before,
  .iconsmall .q1,
  .iconsmall .q1 a,
  .iconsmall .color-q1,
  .iconsmall .wh-tt .q1 a,
  .iconsmall .q1.fa:before,
  .iconmedium .q1,
  .iconmedium .q1 a,
  .iconmedium .color-q1,
  .iconmedium .wh-tt .q1 a,
  .iconmedium .q1.fa:before,
  .iconlarge .q1,
  .iconlarge .q1 a,
  .iconlarge .color-q1,
  .iconlarge .wh-tt .q1 a,
  .iconlarge .q1.fa:before {
    color: #fff !important;
  }

  .wh-tt .q2,
  .wh-tt .q2 a,
  .wh-tt .color-q2,
  .wh-tt .wh-tt .q2 a,
  .wh-tt .q2.fa:before,
  .iconsmall .q2,
  .iconsmall .q2 a,
  .iconsmall .color-q2,
  .iconsmall .wh-tt .q2 a,
  .iconsmall .q2.fa:before,
  .iconmedium .q2,
  .iconmedium .q2 a,
  .iconmedium .color-q2,
  .iconmedium .wh-tt .q2 a,
  .iconmedium .q2.fa:before,
  .iconlarge .q2,
  .iconlarge .q2 a,
  .iconlarge .color-q2,
  .iconlarge .wh-tt .q2 a,
  .iconlarge .q2.fa:before {
    color: #1eff00 !important;
  }

  .wh-tt .q3,
  .wh-tt .q3 a,
  .wh-tt .color-q3,
  .wh-tt .wh-tt .q3 a,
  .wh-tt .q3.fa:before,
  .iconsmall .q3,
  .iconsmall .q3 a,
  .iconsmall .color-q3,
  .iconsmall .wh-tt .q3 a,
  .iconsmall .q3.fa:before,
  .iconmedium .q3,
  .iconmedium .q3 a,
  .iconmedium .color-q3,
  .iconmedium .wh-tt .q3 a,
  .iconmedium .q3.fa:before,
  .iconlarge .q3,
  .iconlarge .q3 a,
  .iconlarge .color-q3,
  .iconlarge .wh-tt .q3 a,
  .iconlarge .q3.fa:before {
    color: #0070dd !important;
  }

  .wh-tt .q4,
  .wh-tt .q4 a,
  .wh-tt .color-q4,
  .wh-tt .wh-tt .q4 a,
  .wh-tt .q4.fa:before,
  .iconsmall .q4,
  .iconsmall .q4 a,
  .iconsmall .color-q4,
  .iconsmall .wh-tt .q4 a,
  .iconsmall .q4.fa:before,
  .iconmedium .q4,
  .iconmedium .q4 a,
  .iconmedium .color-q4,
  .iconmedium .wh-tt .q4 a,
  .iconmedium .q4.fa:before,
  .iconlarge .q4,
  .iconlarge .q4 a,
  .iconlarge .color-q4,
  .iconlarge .wh-tt .q4 a,
  .iconlarge .q4.fa:before {
    color: #a335ee !important;
  }

  .wh-tt .q5,
  .wh-tt .q5 a,
  .wh-tt .color-q5,
  .wh-tt .wh-tt .q5 a,
  .wh-tt .q5.fa:before,
  .iconsmall .q5,
  .iconsmall .q5 a,
  .iconsmall .color-q5,
  .iconsmall .wh-tt .q5 a,
  .iconsmall .q5.fa:before,
  .iconmedium .q5,
  .iconmedium .q5 a,
  .iconmedium .color-q5,
  .iconmedium .wh-tt .q5 a,
  .iconmedium .q5.fa:before,
  .iconlarge .q5,
  .iconlarge .q5 a,
  .iconlarge .color-q5,
  .iconlarge .wh-tt .q5 a,
  .iconlarge .q5.fa:before {
    color: #ff8000 !important;
  }

  .moneygold,
  .moneysilver,
  .moneycopper,
  .moneyitem,
  .moneyachievement,
  .moneysocketmeta,
  .moneysocketred,
  .moneysocketyellow,
  .moneysocketblue,
  .moneysocketprismatic {
    background: no-repeat right center;
    color: #fff;
    display: inline-block;
  }

  .wh-tt .moneygold,
  .wh-tt .moneysilver,
  .wh-tt .moneycopper,
  .wh-tt .moneyitem,
  .wh-tt .moneyachievement,
  .wh-tt .moneysocketmeta,
  .wh-tt .moneysocketred,
  .wh-tt .moneysocketyellow,
  .wh-tt .moneysocketblue,
  .wh-tt .moneysocketprismatic {
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
