import React,{useState, useRef, useEffect, useContext} from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image, Input, Button } from "../components";
import { images } from "../utils/images";
import {validatePassword, removeWhitespace} from '../utils/common'
import { validateEmail } from "../utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { login } from "../utils/Firebase";
import { ProgressContext} from "../contexts/Progress";
import { UserContext } from "../contexts";

const Container = styled.View`
    flex : 1;
    align-items: center;
    justify-content:center;
    backgroung-color:${({theme})=>theme.background};
    padding: 0 20px;
    padding-top:${({insets:{top}})=>top}px;
    padding-bottom:${({insets:{bottom}})=>bottom}px;`
;

const ErrorText = styled.Text`
    align-items: flex-start;
    width:100%;
    height:20px;
    margin-bottom : 10px;
    line-height:20px;
    color:${({theme})=>theme.errorText};
    margin-left:30px;
`;


const Login = ({navigation}) => {

    const {spinner} = useContext(ProgressContext);
    const {dispatch} = useContext(UserContext);
    //useSafeAreaInsets();
    //화면의 안전 영역을 고려해 레이아웃을 조정할 때 사용하는 Hook
    //ios장치의 상단 노치나 하단 홈 버튼 영역과 같은 안전 구역을 감안해 레이아웃을 멎추기 위해 사용된다.
    //hook은 {top,bottom,left,right} 형태의 객체를 반환하다.
    //안전 영역의 높이나 너비를 픽셀 단위로 제공
    const insets = useSafeAreaInsets();

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[errorMessage,setErrorMessage]=useState(''); 
    const [disabled,setDisabled]=useState(true);

    const passwordRef= useRef();
    
    

    useEffect(()=>{
        //이메일을 입력하고 비밀번호를 입력하고
        //조건에 맞게 입력했을 때 false로 바꾼다.
        setDisabled(!(email && password && !errorMessage))

        //email,password,errorMessage값이 바뀔 때 마다 useEffct를 실행
    },[email,password,errorMessage])
    
    const _handleEmailChange= email => {
        //Input에 적힌 email을 받아와서 모든 공백제거
        const changeEmail = removeWhitespace(email);
        setEmail(changeEmail);
        setErrorMessage(
            validateEmail(changeEmail) ? '' : 'Please verify your email.'
        )
    }

    const _handlePasswordChange = password =>{
        setPassword(removeWhitespace(password));

    }

    //버튼 컴포넌트에 전달할 함수 
    const _handleLoginButtononPress= async() => {
        try {
            spinner.start();
            const user = await login({email,password});
            dispatch(user);
            Alert.alert('Login Success',user.email);
        } catch (error) {
            Alert.alert('Login Error',error.message);
        } finally{
            spinner.stop();
        }
    }

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
            
        >
            <Container insets= {insets}>
                <Image url={images.logo} ImageStyle={{borderRadius : 80}} rounded/>
                <Input 
                    label="Email"
                    value={email}
                    onChangeText={_handleEmailChange}
                    onSubmitEditing={()=>passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={_handleLoginButtononPress}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                {/* 로그인 버튼 */}
                <Button
                    title="Login"
                    onPress={_handleLoginButtononPress}
                    disabled={disabled} // 여기서의 disabled props 역할만 한다.
                />
                {/* 회원가입 버튼 */}
                <Button 
                    title="Signup with email"
                    onPress={() => navigation.navigate('Signup')}
                    isFilled={false}
                    // disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;