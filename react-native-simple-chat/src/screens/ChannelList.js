import React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";
 

const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.Background};
`;

const ChannelList = ({navigation})=>{
    return(
        <Container>
            <Text style={{fontSize:24}}>Channel List</Text>
            <Button title="ChannelCreation"
            onPress={()=>navigation.navigate('ChannelCreation')} />
        </Container>
    )
}
export default ChannelList;