import ENV from './Env.json';

export default class Auth {

    static fetchProducts(token) {
        return fetch(`${ENV['apiRoot']}/products`, {
            method: 'get',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        });
    }
}