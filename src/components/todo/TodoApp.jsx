import "./TodoApp.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import LogoutComponent from "./LogoutComponent"
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
// import FooterComponent from "./FooterComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";

export default function TodoApp() {

    function AuthenticatedRoute({ children }) { 
        const authContext = useAuth();
        if (authContext.isAuthenticated) {
            return children;
        } else {
            return <Navigate to="/login" />;
            // return <LoginComponent />;
        }
    }


    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path="/login" element={<LoginComponent />}></Route>

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }/>
    
                        <Route path="/welcome/:username" element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>
                            }/>
                            
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                            <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />

                            <Route path="*" element={<ErrorComponent />}/>
                        </Routes>
                    {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}




