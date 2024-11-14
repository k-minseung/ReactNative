import React, { useContext } from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Button } from "../components";
import { logout } from "../utils/Firebase";
import { UserContext } from "../contexts";

const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.Background};
`;


const Profile = ()=>{

    const dispatch = useContext(UserContext);

    const _handleLogoutButtononPress = async () => {
        try {
            await logout();
        } catch (error) {
            console.log('Profile logout : ',error.message)
        } finally{
            dispatch({});
        }
    }
    return(
        <Container>
            <Text style={{fontSize:24}}>Profile</Text>
            <Button title={logout} onPress={_handleLogoutButtononPress} />
        </Container>
    )
}
export default Profile;