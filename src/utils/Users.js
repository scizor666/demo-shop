import ENV from './Env.json';

export default class Users {

    static ADMIN = 'Admin';

    static sessionTokenHeader = ENV['sessionTokenHeader'];

    static authenticate(credentials) {
        return fetch(`${ENV["apiRoot"]}/login`, {
            method: 'post',
            headers: ENV['defaultHeaders'],
            body: JSON.stringify(credentials)
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

    static userInfo(token, login) {
        return fetch(`${ENV['apiRoot']}/users?login=${login}`, {
            method: 'get',
            headers: {...[ENV['defaultHeaders']], [this.sessionTokenHeader]: token},
        })
            .then(response => response)
            .catch(err => err);
    }

    static role(token, id) {
        return fetch(`${ENV['apiRoot']}/roles?id=${id}`, {
            method: 'get',
            headers: {...[ENV['defaultHeaders']], [this.sessionTokenHeader]: token},
        })
            .then(response => response)
            .catch(err => err);
    }
};
