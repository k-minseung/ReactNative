//로기인 되었으면 welcome , 홍길동님 
//로그아웃 버튼
//로그인버튼
import React,{useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { View, Button, Text, } from "react-native";

const HomeScreen = () => {
    const {user,login,logout} = useContext(UserContext); 

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {user ? <>
            <Text>Welcome, {user.name}</Text>
            <Button title="Logout" onPress={logout} />
            </>
             : 
            <Text>
                <Button title="Login" onPress={login} />
            </Text>}
        </View>

    )
}

export default HomeScreen;