import ES6Promise from 'es6-promise';

import { to_json } from 'xmljson';

import 'whatwg-fetch';

ES6Promise.polyfill();

const fetchFeed = url => {
    return fetch(url)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.text();
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        });
};

const parseFeed = xmlString => {
    return new Promise(function (resolve, reject) {
        to_json(xmlString, function (error, json) {
            if (error) {
                reject(error);
            } else {
                let items = json.rss.channel.item; // Object not array!
                resolve(Object.keys(items).map(key => items[key]));
            }
        });
   });
};

export default {
    getFeed: url => fetchFeed(url).then(parseFeed)
};
