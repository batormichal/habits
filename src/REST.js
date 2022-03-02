import axios from "axios";


export const get = (url) => {
    return axios.get(url).then((response) => {
        console.log(response)
        return response.data;
    });
}

export const post = (url, data) => {
    return axios.post(url, data).then((response) => {
        console.log(response)
        return response.data;
    });
}

