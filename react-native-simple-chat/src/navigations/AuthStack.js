import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import {Login, Signup} from "../screens";

//스택객체 만들기
const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle:{backgroundColor: ThemeContext.background},
            }}>
                <Stack.Screen
                    name="Login"
                    component={Login}

                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}

                />                
        </Stack.Navigator>
    )
}
export default AuthStack;