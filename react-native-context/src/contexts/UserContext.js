//로그인상태관리
import React,{createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children}) => {
    const[user,setUser] = useState(null);

    const login = () => setUser({ name: '길똥이' });
    const logout = () => setUser(null);

    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}