import React from "react";
import { WeatherImg, Card, Metric, Title, City, Description, Body, DateText, HourText, CurrentInfos, BoxInfos, BoxText, BoxTitle, BoxContent } from "./styles";
import { View, ActivityIndicator, StyleSheet, Dimensions, Text } from "react-native";
import { OPEN_WEATHER__API_IMAGE } from '@env';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import Header from "../Header";

const Temp = (props) => {

  var width = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 150,
      height: 150,
      margin: "auto"
    },

    container: {
      padding: 15
    }
  });

  var days = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];

  const getImageWeather = (icon) => {
    return `${OPEN_WEATHER__API_IMAGE + icon}@4x.png`
  }

  const getDateFormatted = (timestamp) => {
    let date = new Date(timestamp * 1000);
    return days[date.getDay()];
  }

  const getHourFormatted = (timestamp) => {
    let date = new Date(timestamp * 1000);
    return `${date.getHours()}h`;
  }

  const windDirectionStyle = {
    width: 20,
    height: 15,
    transform: [{
      rotate: `${props.wind.deg}deg`
    }]
  };

  console.log(windDirectionStyle);
  return (
    <>
      <View>
        <LinearGradient
        // Button Linear Gradient
        colors={['#327d96', '#1E1E2C']}
        style={styles.container}>          
          {!props.temp ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            <Body>
                {/* <WeatherImg url={getImageWeather(props.img)}/> */}
                {props.date ? (
                  <DateText>
                      {getDateFormatted(props.date)} <HourText>{getHourFormatted(props.date)}</HourText>
                  </DateText>
                  ) : (
                    <DateText>
                      Data não encontrada
                    </DateText>
                  )}
                <Card>
                  <Title>
                    {props.temp}
                  </Title>
                  <Metric>
                    °C
                  </Metric>
                </Card>
                <Description>{props.description}</Description>
                <CurrentInfos>

                    <BoxInfos>
                      <BoxContent>
                        <BoxTitle>sensação</BoxTitle>
                        <BoxText><MaterialCommunityIcons name="weather-cloudy" size={12} color="ffffff90" /> {Math.round(props.main.feels_like)}°</BoxText>
                      </BoxContent>
                      <BoxContent>
                        <BoxTitle>umidade</BoxTitle>
                        <BoxText><Ionicons name="water-outline" size={12} color="#ffffff90" /> {Math.round(props.main.humidity)}%</BoxText>
                      </BoxContent>
                    </BoxInfos>

                    <BoxInfos>
                      <BoxContent>
                        <BoxTitle>máx.</BoxTitle>
                        <BoxText><AntDesign name="arrowup" size={12} color="#ffffff90" /> {Math.round(props.main.temp_max)}°</BoxText>
                      </BoxContent>
                      <BoxContent>
                        <BoxTitle>min.</BoxTitle>
                        <BoxText><AntDesign name="arrowdown" size={12} color="#ffffff90" /> {Math.round(props.main.temp_min)}°</BoxText>
                      </BoxContent>
                    </BoxInfos>

                    <BoxInfos>
                      <BoxContent>
                        <BoxTitle>vento</BoxTitle>
                        <BoxText><Feather name="wind" size={12} color="#ffffff90" /> {Math.round(props.wind.speed * 3.6)}km/h</BoxText>
                      </BoxContent>
                      <BoxContent>
                        <BoxTitle>direção</BoxTitle>
                        <View style={windDirectionStyle}> 
                          <AntDesign name="arrowright" size={12} color="#ffffff"/>
                        </View>
                      </BoxContent>
                    </BoxInfos>
                </CurrentInfos>
            </Body>
          )}
        </LinearGradient>
      </View>
    </>
  );
}

export default Temp;