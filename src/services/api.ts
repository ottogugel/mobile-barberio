import axios from 'axios';

export const api = axios.create({
    baseURL: "http://137.131.135.29:1509",
    headers: {
        "Content-Type": "application/json"
    }
})