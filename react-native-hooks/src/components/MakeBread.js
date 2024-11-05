import React from "react";
import { useState } from "react";
import {View , Text , Button} from 'react-native'

const MakeBread = () => {
    const [coffeeStatus, setCoffeeStatus] = useState('커피 대기 중...');
    const [breadStatus,setBreadStatus] = useState('빵 대기 중...');
    const [breakFastStatus,setBreakFastStatus] = useState('아침 식사가 준비되지 않았습니다.');
    
    const makeCoffee = async() => {
        setCoffeeStatus('커피 만들기 시작');
        await new Promise(resolve => setTimeout(resolve,2000)); //2초기다림
        setCoffeeStatus('커피 완성');
    }

    const makeBread = async() => {
        setBreadStatus('빵 굽기 시작');
        await new Promise(resolve => setTimeout(resolve,3000)); //3초기다림
        setBreadStatus('빵 완성');
    }

    const makeBreakfast = async() => {
        setBreakFastStatus('아침식사 준비 중...');
        await makeCoffee(); // 커피만들기
        await makeBread();  // 빵 만들기
        setBreakFastStatus('아침식사 완성');
    }

    return (
        <View style={{flex : 1 , alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:24, marginBottom:10}}>{coffeeStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breadStatus}</Text>
            <Text style={{fontSize:24, marginBottom:10}}>{breakFastStatus}</Text>
            <Button title= "아침 식사 준비하기" onPress={makeBreakfast}/>
        </View>
    )
}
export default MakeBread;