import React,{useState,useEffect,useRef,useContext} from "react";
import styled from "styled-components";
import { Input,Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";    
import { Alert } from "react-native";
import { ProgressContext } from "../contexts";
import { createChannel } from "../utils/Firebase";


const Container = styled.View`
    flex:1;
    background-color : ${({theme}) => theme.Background};
    justify-content: center;
    align-items:center;
    padding : 0 20px;
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width:100%;
    heigth: 20px;
    margin-bottom:10px;
    line-height:20px;
    color:${({theme})=>theme.errorText};
`;



const ChannelCreation = ({navigation}) => {
    const {spinner} = useContext(ProgressContext);

    const [title,setTitle] = useState('');              // 제목 관리 state
    const [description,setDescription] = useState('');  // 내용 관리 state
    const [errorMessage,setErrorMessage] = useState('');// 에러 관리 state
    const [disabled,setDisabled]=useState(true);        // 버튼 활성화 상태 관리 state
    const descriptionRef = useRef();                    // 포커스 관리 state

    //title,description,errorMessage 가 변경될 때마다 실행이 된다.  
    useEffect(()=>{
        setDisabled(!(title&&description&&!errorMessage));
    },[title,description,errorMessage])
    
    //Input에 입력된 title을 state에 반영
    //title에 내용이 입력이 안될시 에러문구를 state에 반영
    const _handleTitleChange = title => {
        setTitle(title)
        setErrorMessage(title.trim() ? '' : 'Please Enter The Title')
    }

    //create버튼 클릭시 db에 추가하기
    const _handleCreateButtononPress = async() =>{
        try {
            //로딩스피너시작(시각적으로 작업중임을 보여줌)
            spinner.start()
            
            //createChannel 함수를 호출하여 새 채널을 생성
            //title과 description을 전달하여 생성된 채널의 ID를 반환받는다.
            const id = await createChannel({title,description})

            //생성된 채널의 세부화면으로 이동
            //뒤로가기 버튼을 눌렀을 때 이전화면으로 돌아가지 않도록 처리
            navigation.replace('Channel',{id,title})
        } catch (error) {
            Alert.alert("creation Error",error.message)
        } finally{
            spinner.stop();
        }
    }


    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
        >
            <Container>
                <Input 
                    label="Title"
                    value={title}
                    onChangeText={_handleTitleChange}
                    onSubmitEditing={()=>{
                        setTitle(title.trim())
                        descriptionRef.current.focus()
                    }}
                    onBlur={()=> setTitle(title.trim())} // 포커스가 나갔을때도 내용 유지
                    placeholder="Please Enter The Title"
                    returnKeyType="next"
                    maxLength={20}
                />
                <Input 
                    ref={descriptionRef}
                    label="Description"
                    value={description}
                    onChangeText={(text)=>setDescription(text)}
                    onSubmitEditing={()=>{
                        setDescription(description.trim())
                        _handleCreateButtononPress();
                    }}
                    onBlur={()=> setDescription(description.trim())} // 포커스가 나갔을때도 내용 유지
                    placeholder="Please Enter The Description"
                    returnKeyType="done"
                    maxLength={40}
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button 
                    title="Create"
                    onPress={_handleCreateButtononPress}
                    disabled={disabled}
                />

            </Container>
        </KeyboardAwareScrollView>
    )
}
export default ChannelCreation;