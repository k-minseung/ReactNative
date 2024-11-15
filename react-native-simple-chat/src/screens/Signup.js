import React,{useState,useEffect,useRef,useContext} from "react";
import { ProgressContext, UserContext } from "../contexts";
import styled from "styled-components";
import { Image, Input, Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { images } from "../utils/images";
import { Alert } from "react-native";
import { signup } from "../utils/Firebase";
import { logout } from "../utils/Firebase";

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
    backgroung-color:${({theme})=>theme.background};
    padding:0 20px;`
;
const ErrorText = styled.Text`
    align-items : flex-start;
    width: 100%;
    height : 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color: ${({theme})=> theme.errorText};
`


const Signup = () => {

    const {spinner} = useContext(ProgressContext);
    const {dispatch} = useContext(UserContext);

    const[name,setName]=useState(''); // 이름 관리 state
    const[email,setEamil]=useState(''); // 이메일 관리 state
    const[password,setPassword]=useState(''); // 비밀번호 관리 state
    const[passwordConfirm,setPasswordConfirm]=useState(''); // 비밀번호 일치여부 관리 state
    const[errorMessage,setErrorMessage]=useState(''); // 에러 관리 state
    const[disabled,setDisabled]=useState(true); // 버튼활성화여부 관리 state
    const[photoUrl,setPhotoUrl]=useState(images.photo)


    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const didMountRef = useRef();

    useEffect(()=>{
        if(didMountRef.current){
            let _errorMessage = '';
            if(!name){
                _errorMessage='Please enter error Message'
            }else if (!validateEmail(email)){
                _errorMessage='Please verify your email'
            }else if (password.length < 6){
                _errorMessage="The Password must contain 6 charcters at least"
            }else if (password !== passwordConfirm){
                _errorMessage="Passwords need to match"
            }else{
                _errorMessage='';
            }
            setErrorMessage(_errorMessage);
        }else{
            didMountRef.current=true
        }
    },[name,email,password,passwordConfirm])

    useEffect(()=>{
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        )
    },[name,email,password,passwordConfirm,errorMessage])

    //회원가입 기능
    const _handleSignupButtononPress = async () => {
        try {
            spinner.start();
            const user = await signup({email,password,name, photoUrl})
            console.log(user)
            dispatch(user)
            Alert.alert('Signup Success',user.email)
        } catch (error) {
            Alert.alert('Signup Error',error.message)
        } finally{
            spinner.stop();
        }
    }

    
    return(
        <KeyboardAwareScrollView
            extraHeight={20}
        >
                <Container>
                    <Image
                        url={photoUrl}
                        rounded
                        showButton
                        onChangeImage={url=>setPhotoUrl(url)}
                    />
                    <Input 
                        label="Name"
                        value={name}
                        onChangeText={text=>setName(text)} // 텍스트가 변할때마다 state에 반영
                        onSubmitEditing={()=>{ // 완료 버튼 누를시 state에 반영 , 이메일칸으로 포커스 이동
                            setName(name.trim())
                            emailRef.current.focus();
                        }}
                        onBlur={()=>setName(name.trim())} // 포커스가 빠져도 이름을 state에 반영
                        placeholder="Name"
                        returnKeyType="next"
                    />
                    <Input
                        ref={emailRef}
                        label="Email"
                        value={email}
                        onChangeText={text=>setEamil(removeWhitespace(text))}
                        onSubmitEditing={()=>passwordRef.current.focus()}
                        placeholder="Email"
                        returnKeyType="next"
                    />
                    <Input
                        ref={passwordRef}
                        label="Password"
                        value={password}
                        onChangeText={text=>setPassword(removeWhitespace(text))}
                        onSubmitEditing={()=>passwordConfirmRef.current.focus()}
                        placeholder="Password"
                        returnKeyType="done"
                    />
                    <Input
                        ref={passwordConfirmRef}
                        label="Password Confirm"
                        value={passwordConfirm}
                        onChangeText={text=>setPasswordConfirm(removeWhitespace(text))}
                        onSubmitEditing={_handleSignupButtononPress}
                        placeholder="PasswordConfirm"
                        returnKeyType="done"
                        isPassword
                    />
                    <ErrorText>{errorMessage}</ErrorText>
                    <Button
                        title="Signup"
                        onPress={_handleSignupButtononPress}
                        disabled={disabled}
                    /> 

                </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup;