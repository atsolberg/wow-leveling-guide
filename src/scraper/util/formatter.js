/**
 * Format a time in milliseconds to `*h*m*s`
 * @param {number} millis - time in milliseconds
 * @returns {string} - duration as `*h*m*s`.
 */
function duration(millis) {
  const seconds = millis / 1000;
  const r_sec = seconds % 60;
  const full_sec = Math.floor(r_sec) >= 1;
  const showSec = r_sec > 0 && full_sec;

  const minutes = seconds / 60;
  const r_min = minutes % 60;
  const full_min = Math.floor(r_min) >= 1;
  const showMin = r_min > 0 && full_min;

  const hours = minutes / 60;

  let d = '';

  if (hours > 1) d += `${Math.floor(hours)}h`;
  if (showMin) d += `${d.length > 0 ? ' ' : ''}${Math.floor(r_min)}m`;
  if (showSec) d += `${d.length > 0 ? ' ' : ''}${Math.floor(r_sec)}s`;

  return d;
}

export default {
  duration,
};
