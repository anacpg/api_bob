import request from 'request';
import { C } from '../common';
import { LogProvider } from '.';

function call (method, url, { body, headers, query }) {
  const options = { method, url };
  if (headers) Object.assign(options, { headers });
  if (body) Object.assign(options, { body, json: true });
  if (query) Object.assign(options, { qs: query });

  return new Promise((resolve, reject) => {
    LogProvider.debug(`#provider #request Call in progress: ${JSON.stringify(options)}`);

    return request(options, (error, response, json = '{}') => {
      if (error) {
        LogProvider.error(`#provider #request Call failed to [${method}] ${url}. ${error}`);
        return reject(error);
      }
      const code = response.statusCode;
      try {
        if (typeof json === 'string') json = JSON.parse(json);
      } catch (e) {
        if (response.statusCode !== C.CODE.SUCCESS_EMPTY) {
          LogProvider.warning('#provider #request Response body is not a valid JSON');
        }
      }
      LogProvider.debug(`#provider #request Call success [${method}] ${url}: <${code}> ${JSON.stringify(json)}`);
      return resolve({
        response, headers: response.headers, body: json, code: response.statusCode,
      });
    });
  });
}

export default {
  get: (url, options = {}) => call('get', url, options),
  post: (url, options = {}) => call('post', url, options),
  put: (url, options = {}) => call('put', url, options),
};
