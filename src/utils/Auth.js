import ENV from './Env.json';

export default class Auth {

    static sessionTokenHeader = ENV['sessionTokenHeader'];

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

    static signout(token, login) {
        fetch(`${ENV["apiRoot"]}/logout`, {
            method: 'post',
            headers: {...[ENV['defaultHeaders']], [this.sessionTokenHeader]: token},
            body: JSON.stringify({login})
        }).then(response => {
            if (response.status === 200) console.log("signed out")
        });
    }
};
