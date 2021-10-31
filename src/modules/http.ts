enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any>) {
  let output = '?';
  Object.keys(data).forEach((key) => {
    output += `${key}=${data[key]}&`;
  });
  return output.slice(0, output.length - 1);
}

class HTTPTransport {
  get = (url: string, options = { data: {}, timeout: 5000 }) => {
    // eslint-disable-next-line no-param-reassign
    url += queryStringify(options.data);
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  // PUT, POST, DELETE
  put = (url: string, options = { timeout: 5000 }) => this.request(
    url,
    { ...options, method: METHODS.PUT },
    options.timeout,
  );

  post = (url: string, options = { timeout: 5000 }) => this.request(
    url,
    { ...options, method: METHODS.POST },
    options.timeout,
  );

  delete = (url: string, options = { timeout: 5000 }) => this.request(
    url,
    { ...options, method: METHODS.DELETE },
    options.timeout,
  );

  request = (url: string, options: Record<string, any>, timeout: number) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      const isDataMethod = method === METHODS.GET || method === METHODS.DELETE;
      if (isDataMethod || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

      setTimeout(() => reject(), timeout);
    });
  };
}

export default HTTPTransport;
