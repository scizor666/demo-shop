import ENV from './Env.json';

export default class Categories {

    static fetchCategories(token) {
        return fetch(`${ENV['apiRoot']}/categories`, {
            method: 'get',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        });
    }

    static fetchCategory(id, token) {
        return fetch(`${ENV['apiRoot']}/categories/${id}`, {
            method: 'get',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        })
    }
}