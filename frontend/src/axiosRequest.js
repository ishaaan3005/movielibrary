import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';

export const publicRequest = axios.create({
    baseURL: baseUrl
});

// Configure to use localhost for local development
export const userPublicRequest = axios.create({
    baseURL: 'http://localhost:5173/', 
});
