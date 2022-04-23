import axios from 'axios';

export default api = axios.create({

    baseURL: "https://hotels-com-provider.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": "SUA_KEY_RAPID",
        "x-rapidapi-host": "LINK_DO_HOST"
    }
});
