import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Ex.UserScreen";
import { ListScreen } from "../screens/Ex.UserScreen";
import { ProfileScreen } from "../screens/Ex.UserScreen";
//1. 스택생성
//생성된 스택으로부터 Navigator,Screen 컴포넌트를 사용할 수 있다.
const Stack = createStackNavigator();

const UserStack = () => {
    return( 
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
export default UserStack;