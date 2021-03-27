/**
 * NOTE!!!!!
 *
 *
 *
 * This file is meant to be run in the browser context.
 */

window.ats_text = function text(node) {
  return node.innerText;
};

window.ats_QUALITY = [
  'Poor',
  'Common',
  'Uncommon',
  'Rare',
  'Epic',
  'Legendary',
];

/**
 * Return the qaulity baseed on the `q` class:
 * q0: junk, q1: common, q2: uncommon, q3: rare, q4: epic, q5: legendary
 * @param {Node} elem - the html element
 * @returns {string|null}
 */
window.ats_findQuality = function findQuality(elem) {
  const classes = Array.from(elem.classList);
  const q = classes.find((c) => c.startsWith('q') && c.length === 2);

  return q ? window.ats_QUALITY[Number(q.substring(1))] : null;
};
