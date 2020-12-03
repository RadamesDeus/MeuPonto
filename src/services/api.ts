import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.dimepkairos.com.br/',
});

export default api;
