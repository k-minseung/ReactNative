import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserHome from "../screens/UserHomeScreen";
import UserList from "../screens/UserListScreen";
import UserProfile from "../screens/UserProfileScreen";

//1. 스택생성
//생성된 스택으로부터 Navigator,Screen 컴포넌트를 사용할 수 있다.
const Stack = createStackNavigator();

const UserStack = () => {
    return( 
        <Stack.Navigator>
            <Stack.Screen name="Home" component={UserHome} />
            <Stack.Screen name="List" component={UserList} />
            <Stack.Screen name="Profile" component={UserProfile} />
        </Stack.Navigator>
    )
}
export default UserStack;