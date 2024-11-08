import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex : 1;
    justify-content: top;
    align-items: center;
    background-color: #ffffff;
`
const StyledText = styled.Text`
    font-size: 25px;
    color: black;
`


export const Friend = () => {
    return(
        <Container>
            <StyledText> Frind List </StyledText>
        </Container>
    )
}

export const Settings = () => {
    return(
    <Container>
        <StyledText> Settings </StyledText>
    </Container>
    )
}

// ↑ 탭 네비게이션에서 사용할 화면

// ↓ 스택 네비게이션에서 사용할 화면

export const ChatList = ({navigation}) => {
    return(
        <Container>
            <StyledText> Chat List </StyledText>
            <Button
                title="채팅방이동하기"
                onPress={()=>navigation.navigate('Detail')} />
        </Container>
    )
}


export const Detail = ({navigation}) => {
    return(
        <Container>
            <StyledText> Detail </StyledText>
        </Container>
    )
}

