import React, { Fragment, useCallback, useContext, useEffect, useState } from "react";
import getCurrentWeather from  "../../services/openWeather/getCurrentWeather";
import * as Location from 'expo-location';
import { Container, Title, City } from "./styles";
import { Image, View, ActivityIndicator, StyleSheet, Text } from "react-native";

import Temp from '../../components/Temp';
import Temps from "../../components/Tabs/Temps";
import Header from "../../components/Header";
import { LocationContext } from "../../contexts/location";

export default function Main () {

  const [currentWeather, setCurrentWeather] = useState(undefined);
  
  const [errorMsg, setErrorMsg] = useState(null);

  const {location, setLocation, setCityName} = useContext(LocationContext);

  useEffect(() => {
    
    (async () => {

      console.log(location);
      if (!location || location == undefined) {
        const geolocation = await getGeo(); //ok

        if (geolocation) {
          const weather = await getWeather(geolocation.coords);
          console.log(weather);
          setCurrentWeather(weather);
        }

      } else {
        console.log(location);
        const weather = await getWeather(location.coords);
        console.log(weather);
        setCurrentWeather(weather);
      }

    })();

  }, [location]);

  const getGeo = useCallback(async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    return location;
  });

  const getWeather = useCallback(async ({latitude, longitude}) => {

    var weather = await getCurrentWeather(latitude, longitude);

    if (weather.status === 200) {
      setCurrentWeather(weather.data);
      setCityName(weather.data.name);
      return weather.data;
    }

    return null;

  }, []);


  return (
    <>
      <Container>
        <Header city={"Não localizado"}/>
          {currentWeather == null || currentWeather == undefined ? (
            <View style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <ActivityIndicator size="large"  color="#ffffff"/>
              <Text style={{color: "#ffffff"}}>{JSON.stringify(location)}</Text>
              {console.log(location)}

            </View>
          ) : (
            <View>
              {currentWeather.main && currentWeather.name ? (
                <View>
                  <Temp city={currentWeather.name} main={currentWeather.main} wind={currentWeather.wind} temp={Math.round(currentWeather.main.temp)} img={currentWeather.weather[0].icon} description={currentWeather.weather[0].description} date={currentWeather.dt}/>
                  <Temps/>
                </View>
              ): (
                <View>
                  <Title>Cidade/temperatura não encontrada.</Title>
                </View>
              )}
            </View>
          )}
      </Container>
    </>
  );
}