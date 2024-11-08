import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatList,Detail } from "../screens/ChatScreen";

const Stack = createStackNavigator();

const ChatStackNavigator = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatList}  />
        <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>
    )
}

export default ChatStackNavigator;