import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Container = styled.View`
    flex : 1;
    align-items : center;
    ackground-color : #ffffff`
;

const StyledText = styled.Text`
    font-size:30px;
    margin-bottom:10px;`
;

const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
  ];


const UserList = ({navigation}) =>{
    const _onPress = user =>{
        navigation.navigate('Profile',{name: user.name, email: user.email})
    } 
    return(
        <Container>
            <StyledText>User List</StyledText>
            {users.map((user)=>(
                <Button title={user.name} onPress={()=>_onPress(user)} />
            ))}
        </Container>
    )
}

export default UserList;