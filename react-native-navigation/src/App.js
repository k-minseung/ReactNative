import React from "react";
import styled from "styled-components";
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from "./navigations/Stack";
import BookStackNavigation from "../../react-native-Book/src/navigations/BookStack";

const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items:center;`
;

const App = () => {
    return(
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default App;