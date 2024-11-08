import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Friend, Settings } from "../screens/ChatScreen";
import ChatStackNavigator from "./ChatStack";

const Tab = createBottomTabNavigator();

const CartTabIcon = ({name,size,color})=>{
    return (<MaterialCommunityIcons name={name} size={size} color={color} />)}

const ChatTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon : props => {
                    let name = '';
                    let size = 24;
                    if(route.name === 'Friend') name = 'account'
                    else if(route.name === 'Chat') name = 'chat'
                    else name = 'cog'
                    return CartTabIcon({ ...props, name, size});
                },
                tabBarStyle:{   
                    backgroundColor:'#ffffff',
                    borderTopColor:'black',
                    borderTopWidth:3,
                    tabBarBadge:2,
                },
                tabBarActiveTintColor : 'black',
                tabBarInactiveTintColor : 'gray',

        })}>
        <Tab.Screen name="Friend" component={Friend} />
        <Tab.Screen name="Chat" component={ChatStackNavigator} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    )
}

export default ChatTabNavigator;