import openWeatherAPI from './api';
import { OPEN_WEATHER__API_KEY } from '@env';

const getForecastWeather = async (lat, lon) => {

    const config = {
        params: {
            lat: lat,
            lon: lon,
            appid: OPEN_WEATHER__API_KEY,
            units:"metric",
            lang: "pt_br"
        },
    };

    try {

        const response = await openWeatherAPI.get("data/2.5/forecast", config);
        return response;
        
    } catch (e) {
        return JSON.stringify({"status": 400, "error": e});

    }
};

export default getForecastWeather;