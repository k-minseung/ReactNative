import React,{useState, useRef} from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, Input } from "../components";
import { images } from "../utils/images";

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
    backgroung-color:${({theme})=>theme.background}`
;


const Login = ({navigation}) => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const passwordRef= useRef();

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
            
        >
            <Container>
                <Image url={images.logo} ImageStyle={{borderRadius : 80}}/>
                <Input 
                    label="Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    onSubmitEditing={()=>passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    onSubmitEditing={()=>{}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                {/* <Button title="Signup" onPress={() => navigation.navigate('Signup')}/> */}
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;