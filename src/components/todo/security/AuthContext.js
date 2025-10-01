import { createContext, useContext, useEffect, useState } from "react";
// create a Context
export  const AuthContext = createContext();

// Share the created context with other components
export const useAuth = ()=> useContext(AuthContext);

export default function AuthProvider({children}) {


    const [number, setNumber] = useState(10);

    useEffect(() => {
    const interval = setInterval(() => {
        setNumber(number => number + 1)
    }, 1000)
    return () => clearInterval(interval); // cleanup 추가
}, [])

        return (
        <AuthContext.Provider value={{ number }}>
            {children}
        </AuthContext.Provider>
    )
}
