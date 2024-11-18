import React,{useState,useEffect,useLayoutEffect, useContext} from "react";
import styled,{ThemeContext} from "styled-components";
import { Text, FlatList, Alert } from "react-native";
import { db, createMessage, getCurrentUser } from "../utils/Firebase";
import { collection, onSnapshot, orderBy, query, doc } from "firebase/firestore";
import {Input} from '../components'
import { GiftedChat,Send } from "react-native-gifted-chat";
import {MaterialIcons} from '@expo/vector-icons'

const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.background};
`;

const SendButton = props => {
    const theme = useContext(ThemeContext);
    return(
        <Send  
            {...props}
            disabled={!props.text}
            containerStyle={{
                width:44,
                height: 44,
                alignItems:"center",
                justifyContent:"center",
                marginHorizontal:4,
            }}
        >
            <MaterialIcons
                name="send"
                size={24}
                color={({theme})=>props.text ? theme.sendButtonActive: theme.sendButtonInactive}
            />
        </Send>
    )
}


const Channel = ({navigation,route}) => {
    const[message,setMessage] = useState([]);
    const[text,setText] = useState([])

    useEffect(()=>{
        const docRef= doc(db, 'channels',route.params.id)
        const collectionQuery = query(
            collection(db,`${docRef.path}/message`),
            orderBy('createdAt','desc')
        )
        const unsubscribe = onSnapshot(collectionQuery, (snapshot) =>{
            const list=[];
            snapshot.forEach(doc => {
                list.push(doc.data())
            });
            setMessage(list);
        })
        return()=> unsubscribe();
    },[])

    //헤더를 각각의 채팅방의 title로 지정
    useLayoutEffect(()=>{
        navigation.setOptions({headerTitle: route.params.title || 'Channel'})
    },[])

    return(
        <Container>
            <FlatList
                keyExtractor={item=>item['id']}
                data={message}
                renderItem={({item})=>(<Text style={{fontSize:24}}>{item.Text}</Text>)}
            />
            <Input
                value={text}
                onChangeText={text=>setText(text)}
                onSubmitEditing={() => createMessage({channelId: route.params.id,text})}
            >

            </Input>
        </Container>
    )
}

export default Channel;