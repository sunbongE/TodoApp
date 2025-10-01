import { createContext, useState } from "react";
// create a Context
export  const AuthContext = createContext();

// Share the created context with other components

export default function AuthProvider({children}) {
    // put some state in the context
    const [number, setNumber] = useState(10);

    return (
        <AuthContext.Provider value={{ number }}>
            {children}
        </AuthContext.Provider>
    )
}
