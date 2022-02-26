class EventBus {
  private listeners: Record<string, Array<Function>>;

  constructor() {
    this.listeners = {};
  }

  // Подписать слушателя
  public on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  // Отписать слушаетля
  public off(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: Function) => listener !== callback
    );
  }

  // Оповестить слушателей
  public emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: Function) => {
      listener(...args);
    });
  }
}

export default EventBus;
