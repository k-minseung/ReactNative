import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.SafeAreaView`
    align-items : center;
    ackground-color : #ffffff`
;

const StyledText = styled.Text`
    font-size:30px;
    margin-bottom:10px;`
;

const BookMainScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>BookMain</StyledText>
            <Button title="도서목록보기"
                    onPress={()=>navigation.navigate('BookList')}
            />
        </Container>
    )
}
export default BookMainScreen;