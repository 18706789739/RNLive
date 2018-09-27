import React, {Component} from 'react';
export default class FetchUtils extends React.Component {
    static send(param) {

        let request;
        let{
            method,
            url,
            data,
            callback,
            headers
        } = param

        headers = headers ? headers : 'application/json'

        if (method === 'get') {
            request = new Request(url, {
                method: 'GET',
                headers: ({
                    'Content-Type': headers
                })
            });
        } else if (method === 'post') {
            request = new Request(url, {
                method: 'POST',
                headers: ({
                    'Content-Type': headers
                }),
                body: JSON.stringify(data)
            });
        }
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);//1
            });
    }
}
