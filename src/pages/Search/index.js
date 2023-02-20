import React, { useCallback, useContext, useRef, useState } from "react";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Header, Content, Btn, List, Item, ItemText } from "./styles";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import getGeocodeByLocal from  "../../services/openWeather/getGeocodeByLocal";
import { LinearGradient } from "expo-linear-gradient";
import { LocationContext } from "../../contexts/location";


export default function Search () {

    const styles = StyleSheet.create({
        container: {
          display: 'flex',
          alignItems: 'flex-end',
          paddingHorizontal: 15,
          paddingVertical: 10
        }
      });

    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [loading, setLoading] = useState(false);
    const [hasCities, setHasCities] = useState(false);
    const [cities, setCities] = useState(undefined);

    const {location, setLocation} = useContext(LocationContext);


    const getSearch = useCallback(async (query) => {

        console.log(query);

        var citiesList = await getGeocodeByLocal(query);
    
        if (citiesList.status === 200) {
            setCities(citiesList.data);
            setHasCities(true);
            return citiesList.data;
          }

          setHasCities(false);
          return null;
        
    }, []);

    const getNameCity = (city) => {
        var name = city.name;
        var country = city.country;

        if (city.state) {
            name = `${name} - ${city.state}`;
        }

        return `${name} - ${country}`;
    };

    return (
        <>
            <Content>
                <LinearGradient
                // Button Linear Gradient
                colors={['#327d96', '#1E1E2C']}
                style={styles.container}>          
                    <Btn onPress={() => navigation.navigate("Main")}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </Btn>
                    <Searchbar 
                    placeholder="Pesquisar cidade..."
                    loading={loading}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onIconPress={() => {
                        getSearch(searchQuery);
                    }}
                    style={{width: "100%"}}
                    />
                </LinearGradient>

                    {
                        hasCities === true ? (
                            <List>
                                {cities.map((city, index) => {
                                    return (
                                        
                                        <Item key={index} onPress={() => {
                                            setLocation({
                                                coords: {
                                                    latitude: city.lat,
                                                    longitude: city.lon
                                                }
                                            });
                                            console.log(location);
                                            console.log(city);
                                            navigation.navigate("Main");
                                        }}>
                                            <ItemText>{getNameCity(city)}</ItemText>
                                        </Item>
                                    );
                                })}
                            </List>
                        ) : (
                            <View>

                            </View>
                        )
                    }
            </Content>
        </>
    );
}