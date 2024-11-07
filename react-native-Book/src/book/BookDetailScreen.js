import React,{useLayoutEffect} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const BookDetail = ({route}) => {
    return(
        <Container>
            <StyledText>BookDetail</StyledText>
            <StyledText>Title : {route.params.title}</StyledText>
            <StyledText>Description : {route.params.description}</StyledText>
        </Container>
    )
}

export default BookDetail;