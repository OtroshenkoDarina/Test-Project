import {localStorageGet, localStorageRemove} from "../localStorage";
import axios from "axios";

export default class Base {
    constructor() {
        this.url = process.env.REACT_APP_API || window.location.origin;
    }

    getToken() {
        return localStorageGet("token", "");
    }

    getAuthHeader() {
        return { headers: { Authorization: `Bearer ${this.getToken()}` } };
    }

    getUrl(path) {
        return `${this.url}/${path}`;
    }

    errorCatch(error) {
        const code = error?.response?.status;
        const message = error?.response?.data?.message;

        switch (code) {
            case 401:
                localStorageRemove("token");

                if (window.location.pathname === "/webinar") {
                    window.location.pathname = '/signup'
                } else {
                    window.location.pathname = "/login";
                }
                return { status: false, message };
            default:
                return { status: false, message };
        }
    }

    get(url, config) {
        return axios
            .get(this.getUrl(url), { ...this.getAuthHeader(), ...config })
            .then((res) => res.data)
            .catch(this.errorCatch);
    }

    post(url, data, config) {
        return axios
            .post(this.getUrl(url), data, { ...this.getAuthHeader(), ...config })
            .then((res) => res.data)
            .catch((error) => ({ status: false, message: error }));
    }

    put(url, data, config) {
        return axios
            .put(this.getUrl(url), data, { ...this.getAuthHeader(), ...config })
            .then((res) => res.data)
            .catch((error) => ({ status: false, message: error }));
    }

    delete(url, data, config) {
        return axios
            .delete(this.getUrl(url), { ...this.getAuthHeader(), ...config })
            .then((res) => res.data)
            .catch((error) => ({ status: false, message: error }));
    }

    getThirdParty(url, config) {
        return axios
            .get(url, config)
            .then((res) => res.data)
            .catch((error) => ({ status: false, message: error }));
    }

    postThirdParty(url, data, config) {
        return axios
            .post(url, data, config)
            .then((res) => res.data)
            .catch((error) => ({ status: false, message: error }));
    }
}
