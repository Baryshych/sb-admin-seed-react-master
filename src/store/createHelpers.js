/**
 * Created by madow_000 on 20.03.2017.
 */
import fetch from '../core/fetch';

export async function graphqlRequest(query, variables) {
  const fetchConfig = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query, variables}),
    credentials: 'include',
  };
  const resp = await fetchKnowingCookie('http://192.168.56.1:3003/graphql', fetchConfig);
  if (resp.status !== 200) throw new Error(resp.statusText);
  return resp.json();
};

const fetchKnowingCookie = createFetchKnowingCookie();

function createFetchKnowingCookie() {
  if (!process.env.BROWSER) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);
      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      // if (isLocalUrl && options.credentials === 'include') {
      if (options.credentials === 'include') {
        const headers = {
          ...options.headers,
          // cookie,
        };
        return fetch(url, {...options, headers});
      }

      return fetch(url, options);
    };
  }

  return fetch;
}

