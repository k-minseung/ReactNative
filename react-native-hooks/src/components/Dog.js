import React, {useState} from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";

const StyledImage = styled.Image`
    background-color : #7f8c8d;
    width : 300px;
    height : 300px;
`;

const ErrorMessage = styled.Text`
    font-size : 18px;
    color : #e74c3c;
`;
//-----------------------------------------------------------------
const Loadingmessage = styled.Text`
    font-size: 18px;
    color : #2ecc71`



// ↓ 요청할 URL
const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
    const {data, error, inProgress} = useFetch(URL);
    return(
        <>
            {inProgress && (<Loadingmessage>The API request in progress</Loadingmessage>)}
            <StyledImage source={data?.message ? { uri : data.message} : null} />
            <ErrorMessage>{error?.message} </ErrorMessage>
        </>
    )
}
export default Dog;
