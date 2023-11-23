import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';
const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: GITHUB_ACCESS_TOKEN ? `Bearer ${GITHUB_ACCESS_TOKEN}` : undefined,
  },
});

export default api;
