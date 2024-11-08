import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    align-items : center;
    ackground-color : #ffffff`
;

const StyledText = styled.Text`
    font-size:30px;
    margin-bottom:10px;`
;

const UserHome = ({navigation}) =>{
    return(
        <Container>
            <StyledText> User Home</StyledText>
            <Button title="유저 목록 보기" onPress={()=>navigation.navigate('List')}/>
        </Container>
    )
}

export default UserHome;