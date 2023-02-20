import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../pages/Main";
import Search from "../pages/Search";
import Sea from "../pages/Search";

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = (props) => {
   return (
      <NavigationContainer onReady={props.onLayoutRootView}>
        <Navigator 
          initialRouteName="Main"
        >
            <Screen 
                name="Main" 
                component={Main}
                options={{
                    headerShown: false,
                    animationEnabled: true
                }}
            />
            <Screen 
                name="Search" 
                component={Search}
                options={{
                    headerShown: false,
                    animationEnabled: true
                }}
            />
        </Navigator>
      </NavigationContainer>
   )
};

export default Routes;