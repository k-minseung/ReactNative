import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items:center;`
;

const StyledText = styled.Text`
    font-size:30px;
    margin-bottom:10px;`
;

const books=[
    {id:'1', title: '홍길동전', description: '이것은 홍길동전의 설명입니다.'},
    {id:'2', title: '콩쥐팥쥐', description: '이것은 콩쥐팥쥐의 설명입니다.'},
    {id:'3', title: '신데렐라', description: '이것은 신데렐라의 설명입니다.'},
    {id:'4', title: '우투리전', description: '이것은 우투리전의 설명입니다.'},
    {id:'5', title: '운수좋은날', description: '이것은 운수좋은날의 설명입니다.'},
]

const BookList = ({navigation}) => {

    const _onPress = book => {
        navigation.navigate('BookDetail',{title:book.title, description: book.description})
    };

    return(
        <Container>
            <StyledText>BookList</StyledText>
            {books.map(book=>(
                <Button key={book.id} title={book.title} description={book.description} onPress={()=>_onPress(book)}/>
            ))}
        </Container>
    )
}

export default BookList;