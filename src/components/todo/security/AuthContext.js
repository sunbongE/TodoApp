import { createContext, useContext, useEffect, useState } from "react";
// create a Context
export  const AuthContext = createContext();

// Share the created context with other components
export const useAuth = ()=> useContext(AuthContext);

export default function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password) {
        if (username === 'class' && password === '1234') {
            // 인증 성공 메시지 
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }

    //AuthContext.Provider로 감싸진 컴포넌트들은 value로 전달된 데이터를 useContext(AuthContext)를 통해 사용할 수 있다.
    // AuthContext는 export  const AuthContext = createContext(); 으로 생성한 변수명과 동일하게 유지하고, Provider는 고정 이름!
        return (
        <AuthContext.Provider value={{ isAuthenticated , setIsAuthenticated , login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
