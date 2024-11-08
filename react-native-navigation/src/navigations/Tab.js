import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Mail, Meet, Settings } from "../screens/TabScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons'

//이름 크기 색상만 주면 아이콘 컴포넌트를 만들어주는 함수
const TabIcon = ({name,size,color})=>{
    return (<MaterialCommunityIcons name={name} size={size} color={color} />)}

//1.TapNavigation 생성
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Settings"
                    screenOptions={({ route }) => ({
                        tabBarIcon: props => {
                        let name = '';
                        if (route.name === 'Mail') name = 'email';
                        else if (route.name === 'Meet') name = 'video';
                        else name = 'cog';
                        return TabIcon({ ...props, name });
                        },
                        tabBarLabelPosition: 'beside-icon',
                        tabBarShowLabel:false,
                        tabBarStyle:{
                            backgroundColor:'#54b7f9',
                            borderTopColor:'#ffffff',
                            borderTopWidth:2,
                        },
                        tabBarActiveTintColor : '#ffffff',
                        tabBarInactiveTintColor : '#0b92e9',
                    })}
        >
            <Tab.Screen name="Mail"
                    component={Mail}
                    options={{
                        tabBarLabel :'Inbox',
                        tabBarIcon: props =>
                            TabIcon({
                                ...props, name: props.focused ? 'email' : 'email-outline'
                            })
                    }}       
            />

            <Tab.Screen name="Meet"
                    component={Meet}
                    // options={{tabBarIcon: props => TabIcon({...props,name: 'video'})}}
                    options={{
                        tabBarLabel :'inbox',
                        tabBarIcon: props =>
                            TabIcon({
                                ...props, name: props.focused ? 'video' : 'video-outline'
                            })
                    }}  
                    
            />

            <Tab.Screen name="Settings"
                    component={Settings}
                    // options={{tabBarIcon: props => TabIcon({...props,name: 'cog'})}}
                    options={{
                        tabBarLabel :'inbox',
                        tabBarIcon: props =>
                            TabIcon({
                                ...props, name: props.focused ? 'cog' : 'cog-outline'
                            })
                    }}  
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;