import { to_json } from 'xmljson';

import 'whatwg-fetch';

export const fetchFeed = url => {
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

export const parseFeed = xmlString => {
    return new Promise(function (resolve, reject) {
        to_json(xmlString, function (error, json) {
            if (error) {
                reject(error);
            } else {
                resolve(json);
            }
        });
   });
};

export default {
    getFeed: url => fetchFeed(url).then(parseFeed)
};
