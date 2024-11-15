import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Button, Image, Input } from "../components";
import { logout, getCurrentUser, updateUserInfo } from "../utils/Firebase";
import { UserContext, ProgressContext } from "../contexts";
import { Alert } from "react-native";
import { ThemeContext } from "styled-components";


const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.Background};
    justify-content : center;
    align-items : center;
    padding : 0 20px;
`;


const Profile = ()=>{

    const {dispatch} = useContext(UserContext);
    const {spinner} = useContext(ProgressContext);
    const theme = useContext(ThemeContext);

    //현재 로그인한 유저의 정보를 가져온다
    const user = getCurrentUser();
    console.log(user);

    //유저의 프로필 사진 url을 가지고 와서 state에 저장
    const[photoUrl,setPhotoUrl] = useState(user.photoURL);

    //로그아웃 버튼 함수
    const _handleLogoutButtononPress = async () => {
        try {
            spinner.start();
            await logout();
        } catch (error) {
            console.log('Profile logout : ',error.message)
        } finally{
            dispatch({});
            spinner.stop();
        }
    }
    
    //수정된 이미지 만들기
    const _handlePhotoChange = async Url => {
        try {
            spinner.start();
            const photoUrl = await updateUserInfo(Url);
            setPhotoUrl(photoUrl)
        } catch (error) {
            Alert.alert('Photo error',error.message)
        } finally{
            spinner.stop();
        }
    }

    return(
        <Container>
            <Image 
                url={photoUrl}
                onChangeImage={_handlePhotoChange}
                showButton
                rounded
                
            />
            <Input label="Name" value={user.displayName} disabled />
            <Input label="Email" value={user.email} disabled />
            <Button
                title="logout"
                onPress={_handleLogoutButtononPress}
                containerStyle={{marginTop:30, backgroundColor: theme.buttonLogout}}
            
            />
        </Container>
    )
}
export default Profile;