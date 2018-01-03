import ENV from './Env.json';

export default class Products {

    static fetchProducts(token, {query = '', gender = '', available = false, category = null, price = null, rating= null}) {
        let url = `${ENV['apiRoot']}/products?`;
        if (query) url += `q=${query}`;
        if (gender) url += `&gender=${gender}`;
        if (available) url += '&count_gte=0';
        if (category && category > 0) url += `&categoryId=${category}`;
        if (price) {
            if (price[0] === price[1]) {
                url += `&cost=${price[0]}`;
            } else {
                url += `&cost_gte=${price[0]}`;
                url += `&cost_lte=${price[1]}`;
            }
        }
        if (rating) {
            if (rating[0] === rating[1]) {
                url += `&rating=${rating[0]}`;
            } else {
                url += `&rating_gte=${rating[0]}`;
                url += `&rating_lte=${rating[1]}`;

            }
        }
        return fetch(url, {
            method: 'get',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token
            },
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        });
    }

    static fetchProduct(id, token) {
        return fetch(`${ENV['apiRoot']}/products/${id}`, {
            method: 'get',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
        }).then(response => {
            return response
        }).catch(err => {
            return err;
        })
    }
}