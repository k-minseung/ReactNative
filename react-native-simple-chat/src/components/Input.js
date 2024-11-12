import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//모든요소를 감싸는 컴포넌트
const Container = styled.View`
    flex-direction : column;
    width: 100%;
    margin: 10px 0;
    padding:10px;
    
`;
//TextINput안에 쓰이는 글씨
const Label = styled.Text`
    font-size: 14px;
    font-width: 600px;
    margin-bottom: 6px;
    color: ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`;
//TextInput 컴포넌트
const StyledTextInput = styled.TextInput.attrs(({theme})=>({
    placeholderTextColor : theme.inputPlaceholder,
}))`
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
    padding: 20px 10px;
    font-size: 16px;
    border: 1px solid ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
    border-radius: 4px;
`
//forwordRef()
//React에서 특정 컴포넌트가 받은 ref를 자식 컴포넌트의 특정 DOM요소나
//ReactNative 컴포넌트로 전잘할 수 있도록 하는 기능
//forwardRef((props,ref)=>{});
const Input = forwardRef(
(
    {
        label,
        value,
        onChangeText,       
        onSubmitEditing,
        onBlur,
        placeholder,
        isPassword,
        returnKeyType,
        maxLength,
    },
        ref
) => {
    const [isFocused,setIsFocused] = useState(false)
        return(
            <Container>
                <Label isFocused={isFocused}>{label}</Label>
                <StyledTextInput
                    ref={ref}
                    isFocused={isFocused}
                    value={value}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={()=>setIsFocused(true)}
                    onBlur={()=>{
                        setIsFocused(false)
                        onBlur();
                    }}
                    placeholder={placeholder}
                    secureTextEntry={isPassword}
                    returnKeyType={returnKeyType}
                    maxLength={maxLength}
                    autoCapitlize="none"
                    autoCorrect={false}
                    textContentType="none"
                    underlineColorAndroid="transparent"
                />
            </Container>
        )
    }
)

Input.defaultProps={
    onBlur:()=>{},
}


Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number,
}

export default Input;