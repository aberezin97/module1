import { expect } from 'chai';
import HTTPTransport from './http';

describe('Проверяем что модуль отправки сообщений возвращает ошибки', () => {
    it('GET метод', async () => {
        const http = new HTTPTransport();
        try {
            await http.get('http://my-fake-address.foo.bar.baz.com');
        }
        catch (error) {
            expect(error).not.equal(undefined);
        }
    })

    it('POST метод', async () => {
        const http = new HTTPTransport();
        try {
            await http.post('http://my-fake-address.foo.bar.baz.com');
        }
        catch (error) {
            expect(error).not.equal(undefined);
        }
    })

    it('PUT метод', async () => {
        const http = new HTTPTransport();
        try {
            await http.put('http://my-fake-address.foo.bar.baz.com');
        }
        catch (error) {
            expect(error).not.equal(undefined);
        }
    })

    it('DELETE метод', async () => {
        const http = new HTTPTransport();
        try {
            await http.delete('http://my-fake-address.foo.bar.baz.com');
        }
        catch (error) {
            expect(error).not.equal(undefined);
        }
    })
})