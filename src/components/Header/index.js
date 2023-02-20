import React, { useContext } from "react";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Btn, City, Content, Name } from "./styles";
import { StatusBar, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "../../contexts/location";


const Header = () => {

    const heightStatusBar = StatusBar.currentHeight; 
    const navigation = useNavigation();
    const {cityName} = useContext(LocationContext);

    return (
        <>
            <Content>
                <Btn></Btn>
                <City><FontAwesome name="map-marker" size={14} color="white" style={{paddingRight: 10}}/>  <Name>{cityName ?? "Não localizado"}</Name></City>
                <Btn onPress={() => navigation.navigate("Search")}><MaterialIcons name="search" size={24} color="white" /></Btn>
            </Content>
        </>
    );
}

export default Header;