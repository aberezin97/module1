import HTTPTransport from "../modules/http";
import BaseAPI from "../modules/base-api";

const authSigninAPIInstance = new HTTPTransport();

class AuthSigninAPI extends BaseAPI {
    data: any;
    constructor(data) {
        super();
        this.data = data;
    }
}