/**
 * Simple fetch wrapper based on KCD's blog:
 * https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 */

/** Returns true if this is a json response. */
export function isJson(resp) {
  if (!resp?.getResponseHeader && !resp?.headers) return false;

  try {
    const header = resp.getResponseHeader
      ? resp.getResponseHeader('content-type') // XMLHttpResponse
      : resp.headers.get('content-type'); // Fetch API Response
    return !!header.match(/application\/json/i);
  } catch (err) {
    return false;
  }
}

/** Add url search params to url */
export function buildUrl(endpoint, params = {}) {
  const isFullUrl = !endpoint.startsWith('/');

  const url = isFullUrl
    ? new URL(endpoint)
    : new URL(endpoint, window.location.origin);

  Object.entries(params).forEach(([k, v]) => {
    url.searchParams.append(k, v);
  });

  return url.href;
}

/**
 * Build a message for an `Error` using the response data.
 * Text responses will be truncated to the first line of the response.
 * Object responses will be JSON stringified.
 * @param {*} data - the response data
 * @return {string}
 */
function getErrorMessage(data) {
  let msg = '';

  if (typeof data === 'string') {
    // First line
    msg = data.match(/^([^\n]+)\n/g)[0].replace(/\n/g, '');
    msg = `"${msg}"`;
  } else if (typeof data === 'object') {
    msg = JSON.stringify(data, null, 2);
  } else {
    msg = String(data);
  }

  return msg;
}

/**
 * Build the request and return the fetch promise.
 * See https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 * @param {string} endpoint - url to fetch
 * @param {any} [body] - optional post body. if present, the method will default to 'POST'
 * @param {object} [params] - optional url params. added as params to the endpoint url
 * @param {RequestInit} [customConfig] - fetch `config` overrides
 * @return {Promise<Response>}
 */
function client({
  endpoint,
  body,
  params = {},
  customConfig = {},
  asXhr = true,
  asJson = true
}) {
  const headers = {
    Accept: 'application/json'
  };

  if (asXhr) headers['X-Requested-With'] = 'XMLHttpRequest';

  if (asJson) headers['Content-Type'] = 'application/json';

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) config.body = JSON.stringify(body);
  config.method = config.method.toUpperCase();

  const url = buildUrl(endpoint, params);

  return fetch(url, config).then(async response => {
    const data = isJson(response)
      ? await response.json()
      : await response.text();

    if (response.ok) return data;

    // Error Response
    const msg = getErrorMessage(data);
    const error = new Error(msg);
    error.data = data;
    error.response = response;

    return Promise.reject(error);
  });
}

export default client;
