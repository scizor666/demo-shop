import ENV from './Env.json';

export default class Auth {

    static sessionTokenHeader = ENV['sessionTokenHeader'];

    static isAuthenticated() {
        return Boolean(localStorage.getItem(this.sessionTokenHeader));
    }


    static authenticate(data) {
        return fetch(`${ENV["apiRoot"]}/login`, {
            method: 'post',
            headers: ENV['defaultHeaders'],
            body: JSON.stringify(data)
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        });
    }

    static signout() {
        const sessionToken = localStorage.removeItem(this.sessionTokenHeader);
        fetch(`${ENV["apiRoot"]}/logout`, {
            method: 'post',
            headers: {...[ENV['defaultHeaders']], [this.sessionTokenHeader]: sessionToken},
            body: JSON.stringify({login: localStorage.getItem('login')})
        }).then(response => {
            if (response.status === 200) console.log("signed out")
        });
    }
};
