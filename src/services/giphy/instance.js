import axios from 'axios';

const giphyService = axios.create({
    baseURL: 'https://api.giphy.com/v1',
    timeout: 10000,
    params: {
        api_key: 'TzfWgRbk4xX865d8NRVoNmSkc3Sfvptr',
    },
});

export default giphyService;