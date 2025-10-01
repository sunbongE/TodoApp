import { createContext, useContext, useEffect, useState } from "react";
// create a Context
export  const AuthContext = createContext();

// Share the created context with other components
export const useAuth = ()=> useContext(AuthContext);

export default function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [number, setNumber] = useState(10);

    useEffect(() => {
    const interval = setInterval(() => {
        setNumber(number => number + 1)
    }, 10000)
    return () => clearInterval(interval); // cleanup 추가
}, [])

    //AuthContext.Provider로 감싸진 컴포넌트들은 value로 전달된 데이터를 useContext(AuthContext)를 통해 사용할 수 있다.
    // AuthContext는 export  const AuthContext = createContext(); 으로 생성한 변수명과 동일하게 유지하고, Provider는 고정 이름!
        return (
        <AuthContext.Provider value={{ number, isAuthenticated , setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
