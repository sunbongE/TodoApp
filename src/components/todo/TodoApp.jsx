import "./TodoApp.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import LogoutComponent from "./LogoutComponent"
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
// import FooterComponent from "./FooterComponent";
import AuthProvider from "./security/AuthContext";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path="/login" element={<LoginComponent />}></Route>
                            <Route path="/logout" element={<LogoutComponent/>}></Route>
                            <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
                            <Route path="/todos" element={<ListTodosComponent/>}></Route>

                            <Route path="*" element={<ErrorComponent />}></Route>
                        </Routes>
                    {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}




