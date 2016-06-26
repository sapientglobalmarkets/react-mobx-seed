import 'whatwg-fetch';

export default function request(url, options) {
    return fetch(url, options)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        });
}
