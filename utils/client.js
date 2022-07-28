// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export const booksBaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
export async function client(endpoint, { body, method, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.text();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' });
};

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'POST', body });
};

client.delete = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'DELETE' });
};
