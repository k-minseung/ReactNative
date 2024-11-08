import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const UserProfile = ({route}) => {
    return(
        <Container>
            <StyledText>User Profile</StyledText>
            <StyledText>name : {route.params.name}</StyledText>
            <StyledText>email : {route.params.email}</StyledText>
        </Container>
    )
}

export default UserProfile;