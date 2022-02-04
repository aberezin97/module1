enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

interface RequestOptions {
  timeout?: number;
  withCredentials?: boolean;
  data?: any;
  headers?: Record<string, any>;
}

function queryStringify(data: Record<string, any>) {
  let output = '?';
  Object.keys(data).forEach((key) => {
    output += `${key}=${data[key]}&`;
  });
  return output.slice(0, output.length - 1);
}

class HTTPTransport {
  public get = (
    url: string,
    options: RequestOptions = { withCredentials: false, timeout: 5000 }
  ) => {
    // eslint-disable-next-line no-param-reassign
    // url += queryStringify(options.data);
    return this.request(url, METHODS.GET, options);
  };

  // PUT, POST, DELETE
  public put = (
    url: string,
    options: RequestOptions = { withCredentials: false, timeout: 5000 }
  ) => this.request(url, METHODS.PUT, options);

  public post = (
    url: string,
    options: RequestOptions = { withCredentials: false, timeout: 5000 }
  ) => this.request(url, METHODS.POST, options);

  public delete = (
    url: string,
    options: RequestOptions = { withCredentials: false, timeout: 5000 }
  ) => this.request(url, METHODS.DELETE, options);

  private request = (url: string, method: METHODS, options: RequestOptions) => {
    const { data, headers, timeout, withCredentials } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (timeout) {
        xhr.timeout = timeout;
      }
      if (withCredentials) {
        xhr.withCredentials = withCredentials;
      }

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      const isNotDataMethod =
        method === METHODS.GET || method === METHODS.DELETE;
      if (isNotDataMethod || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };
}

export default HTTPTransport;
