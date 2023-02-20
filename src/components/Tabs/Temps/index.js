import { Container, TabsContainer, TabItem, DayText, Weather, Temp, Max, Min, HourText, DateText } from "./styles";
import getForecastWeather from "../../../services/openWeather/getForecastWeather";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { OPEN_WEATHER__API_IMAGE } from '@env';
import { LocationContext } from "../../../contexts/location";

const Temps = () => {

    const [forecastWeather, setForecastWeather] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(null);

    const {location} = useContext(LocationContext);


    var days = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];

    useEffect(() => {
        (async () => {
            console.log(location);
            let forecast = await getForecast(location.coords);
            console.log(forecast);
            setForecastWeather(forecast);
        })();
    }, [location]);

    const getForecast = useCallback(async ({ latitude, longitude }) => {

        var forecast = await getForecastWeather(latitude, longitude);

        if (forecast.status === 200) {
            return forecast.data.list;
        }

        return null;

    }, []);

    const getDayOfWeek = (timestamp) => {
        let date = new Date(timestamp * 1000);
        return days[date.getDay()];
    }

    const getHourFormatted = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hour = date.toLocaleString("pt-BR", { hour: 'numeric', hour: '2-digit', hour12: false });
        return `${hour}h`;
    }

    const getImageWeather = (icon) => {
        return `${OPEN_WEATHER__API_IMAGE + icon}@4x.png`
    }

    return (
        <Container>
            {!forecastWeather ? (
                <ActivityIndicator size="large" color="#ffffff" />
            ) :

                <TabsContainer>
                    {forecastWeather.map((forecast, index) => {
                        return (
                            <TabItem key={index}>
                                <DateText>
                                    <DayText>{getDayOfWeek(forecast.dt)}</DayText>
                                    <HourText>{getHourFormatted(forecast.dt)}</HourText>
                                </DateText>
                                <Image
                                    style={{ margin: "auto", width: "100%", height: 50, overflow: "visible" }}
                                    source={{ uri: getImageWeather(forecast.weather[0].icon) }}
                                />
                                <Temp>
                                    <Max>{Math.round(forecast.main.temp_max)}°</Max>
                                    <Min>{Math.round(forecast.main.temp_min) - 1}°</Min>
                                </Temp>
                            </TabItem>
                        )
                    })}
                </TabsContainer>
            }

        </Container>
    )
};

export default Temps;