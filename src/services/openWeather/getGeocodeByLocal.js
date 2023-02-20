import openWeatherAPI from './api';
import { OPEN_WEATHER__API_KEY } from '@env';

const getGeocodeByLocal = async (city) => {

    const config = {
        params: {
            q: city,
            appid: OPEN_WEATHER__API_KEY,
            lang: "pt_br",
            limit: "10"
        },
    };

    try {

        const response = await openWeatherAPI.get("geo/1.0/direct", config);
        return response;
        
    } catch (e) {
        return JSON.stringify({"status": 400, "error": e});

    }
};

export default getGeocodeByLocal;