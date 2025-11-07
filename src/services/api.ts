import axios from 'axios';

export const api = axios.create({
  baseURL: "https://136.248.85.49:1509",
  headers: {
    "Content-Type": "application/json",
  },
});