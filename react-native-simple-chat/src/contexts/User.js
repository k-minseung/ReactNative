// 여러곳에서 상태를 변경해야 할 경우 Context APi를 이용해서 전역적으로 관리하기
// useContext를 만들어 인증 상태에 따라 적절한 네비게이션이 렌더링되도록 만들어보자'
import React,{ useState, createContext} from "react";


const UserContext = createContext({
    //사용자의 이메일과 uid 를 갖는 user객체
    user: {email: null , uid:null},
    //유저 객체를 수정할 수 있는 dispatch
    dispatch: () => {}
})


const UserProvider = ({children})=> {
    const [user,setUser] = useState([]);
    const dispatch = ({email,uid}) => {
        setUser({email,uid})
    }
    const value = {user,dispatch}
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext,UserProvider}