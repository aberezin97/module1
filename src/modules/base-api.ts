class BaseAPI {
  protected baseUrl = 'https://ya-praktikum.tech';
  // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
  create(): Promise<unknown> {
    throw new Error('Not implemented');
  }

  request(): Promise<unknown> {
    throw new Error('Not implemented');
  }

  update(): Promise<unknown> {
    throw new Error('Not implemented');
  }

  delete(): Promise<unknown> {
    throw new Error('Not implemented');
  }
}

export default BaseAPI;
