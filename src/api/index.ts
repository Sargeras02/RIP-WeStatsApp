import { Api } from './WeStatsApiModel';

export const api = new Api({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    xsrfCookieName: "session_id",
});