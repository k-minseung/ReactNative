import React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";

const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.Background};
`;

const ChannelCreation = ({navigation}) => {
    return(
        <Container>
            <Text style={{fontSize:24}}>Channel Creation</Text>
            <Button title="Channel" onPress={()=>navigation.navigate('Channel')} />
        </Container>
    )
}
export default ChannelCreation;