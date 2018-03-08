import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000,
  headers: {
    'Accept': 'application/vnd.github.machine-man-preview+json'
  }
});

export default client;