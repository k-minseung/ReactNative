import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/DrawerHomeScreen";
import ProfileScreen from "../screens/DrawerProfileScreen";
import { TouchableOpacity, View, Text,StyleSheet } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

//props로 전달되는 내용
// navigation, state, descriptors, 드로어 항목들을 전달받는다
//state : 드로어의 현재 상태에 대한 정보가 담긴 객체,현재활성화된 스크린을 확인하거나 특정스크린의 상태에 따라 Ui를 변경할 떄 사용한다.
//descriptors : 각 스크린에 대한 설정 정보들이 담겨있는 객체. 각 항목에 개한 옵션, 아이콘, 라벨 등을포함

const CustomDrawerContent = (props) => {
    return(
        //DrawerContentScrollView : 드로어 내용을 스크롤 할 수 있는 컴포넌트로
        //기본 드로어 항목을 감싸고 추가 콘텐츠를 넣을 수 있다.
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            {/* 커스텀 드로어의 헤더 영역 */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Custom Drawer</Text>
            </View>

            {/* 기본 드로어 메뉴 항목 표시 : 드로어에 설정된 스크린 목록을 보여줌 */}
            <DrawerItemList {...props} />

            {/* 커스텀버튼 */}
            <TouchableOpacity
                style={styles.customButton}
                onPress={()=> alert("Custom Button Pressed")}
            >
                <MaterialCommunityIcons name="star" size={24} color="white"/>
                <Text style={styles.customButtonText}>CustomButton</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator
            drawerContent={(props)=><CustomDrawerContent {...props}/>}
            screenOptions={({navigation})=>({
                drawerStyle:{backgroundColor: '#e6e6e6',  //배경색
                    width:240, //drawer 너비
                    borderWidth:4, //drawer 테두리 두께
                    borderColor:'green', //drawer 테두리 색상
                },
                drawerLabelStyle:{fontSize:20,}, //drawer 너비 글씨 스타일
                drawerActiveTintColor:'#4caf50',  // 선택된 메뉴 색상
                drawerInactiveTintColor: '#757575', //선택안된 메뉴 색상
                drawerPosition:'right',//서랍이 나오는 위치
                headerTitleAlign:'center', // 헤더 제목 위치
                headerStyle :{ //헤더스타일
                    backgroundColor:'#4CAF50'
                },
                headerTitleStyle:{ //헤더제목의 스타일
                    fontSize:24,
                    fontWeight:"bold",
                    color:'#fff'
                },
                headerTitle : "Drawer Test", // 헤더 제목
                headerLeft: () => null, // 헤더 왼쪽 
                headerRight: ()=>( // 헤더 오른쪽
                    <TouchableOpacity 
                        onPress={() => navigation.toggleDrawer()}
                        style={{marginRight: 15}}
                    >
                        <MaterialCommunityIcons name="menu" size={28} color="black"/>
                    </TouchableOpacity>
                ),
                drawerType:'slide' // 슬라이드 여부
            })}>
            <Drawer.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon:({color,size})=>(
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}/>
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon:({color,size})=>(
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
                />
        </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    drawerContent : {
        flex : 1,
    },
    header:{
        padding:20,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    headerText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    customButton:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        margin: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
    },
    customButtonText:{
        color:'white',
        margineLeft: 10,
        fontSize: 16,
    }
})



export default DrawerNavigator;