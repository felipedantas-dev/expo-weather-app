import axios from "axios";
import { OPEN_WEATHER__API_URL } from '@env';

const openWeatherAPI = axios.create({
    baseURL: OPEN_WEATHER__API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json; charset=UTF-8'
    },
});

export default openWeatherAPI;