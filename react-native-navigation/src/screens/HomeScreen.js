import React from "react";
import { Button, Pressable } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:skyblue;
`;
const StyledText = styled.Text`
  font-size: 25px;
  color: #ffffff
  
`;


export const Home = () =>{
    return(
        <Container>
            <StyledText>"Welcom to the Show"</StyledText>
        </Container>
    )
}

export const Cart = () =>{
    return(
        <Container>
            <StyledText>"Your Cart is Empty"</StyledText>
            <Button title="Add Item" onPress={()=> alert('장바구니에 추가되었습니다.')} />
        </Container>
    )
}

export const Profile = () =>{
    return(
        <Container>
            <StyledText>"Your Profile"</StyledText>
        </Container>
    )
}