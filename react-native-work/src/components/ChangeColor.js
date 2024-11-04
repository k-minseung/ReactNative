import React from "react";
import { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
    background-color:${(props)=>props.color};`
;

const ChangeColorButton = styled.Pressable`
    padding : 16px;
    background-color: #3498db;
    border-radius : 8px;`
;

const ButtonText = styled.Text`
    color : white;
    font-size : 18px;
    `
;


//----------------------------------------------------------------------------

const BackgroundColorChange = () => {
    const[color,setColor] = useState('#ffffff')

    const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setColor(randomColor);
    }

    return (
        <AppContainer color={color}>
            <ChangeColorButton onPress={changeColor}>
                <ButtonText>Click</ButtonText>
            </ChangeColorButton>
        </AppContainer>
    )

}

export default BackgroundColorChange;


