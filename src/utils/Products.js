import ENV from './Env.json';

export default class Products {

    static fetchProducts(token, {
        query = '',
        gender = '',
        available = false,
        category = null,
        price = null,
        rating = null,
        page = 1,
        limit = 6
    }) {
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
        url += `&_page=${page}&_limit=${limit}`;
        return fetch(url, {
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token}
        });
    }

    static fetchProduct(id, token) {
        return fetch(`${ENV['apiRoot']}/products/${id}`, {
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token}
        });
    }

    static createProduct(token, payload) {
        return fetch(`${ENV['apiRoot']}/products`, {
            method: 'post',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
            body: JSON.stringify(payload)
        });
    }

    static updateProduct(id, token, payload) {
        return fetch(`${ENV['apiRoot']}/products/${id}`, {
            method: 'put',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
            body: JSON.stringify(payload)
        });
    }

    static deleteProduct(id, token) {
        return fetch(`${ENV['apiRoot']}/products/${id}`, {
            method: 'delete',
            headers: {...ENV['defaultHeaders'], [ENV['sessionTokenHeader']]: token},
        });
    }
}