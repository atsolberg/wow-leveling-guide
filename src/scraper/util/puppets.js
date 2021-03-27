/**
 * Collection of functions meant to be run with puppeteer's
 * $eval and $$eval callbacks.
 */

export function text(node) {
  return node.innerText;
}
