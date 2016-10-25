import ES6Promise from 'es6-promise';

import 'whatwg-fetch';

ES6Promise.polyfill();

const RSSLoader = {
    getJSON: url => {
        return fetch(url)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            });
    }
};

export default RSSLoader;
