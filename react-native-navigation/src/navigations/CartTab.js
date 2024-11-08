import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Home, Cart, Profile } from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const CartTabIcon = ({name,size,color})=>{
    return (<MaterialCommunityIcons name={name} size={size} color={color} />)}

const CartTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon : props => {
                    let name = '';
                    let size = 24;
                    if(route.name === 'Home') name = 'home'
                    else if(route.name === 'Cart') name = 'cart'
                    else name = 'account'
                    return CartTabIcon({ ...props, name, size});
                },
                tabBarStyle:{
                    backgroundColor:'#ffffff',
                    borderTopColor:'purple',
                    borderTopWidth:3,
                },
                tabBarActiveTintColor : 'blue',
                tabBarInactiveTintColor : 'gray',

            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default CartTabNavigator;