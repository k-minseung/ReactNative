import React from "react";
import styled from "styled-components";
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from "./navigations/Stack";
import UserStack from "./navigations/UserStack";
import TabNavigator from "./navigations/Tab";
import CartTabNavigator from "./navigations/CartTab";
import ChatTabNavigator from "./navigations/ChatTab";
import DrawerNavigator from "./navigations/Drawer";


// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items:center;`
// ;

const App = () => {
    return(
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default App;