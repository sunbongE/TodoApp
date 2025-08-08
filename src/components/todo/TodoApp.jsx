import { useState } from "react";
import "./TodoApp.css";


export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent />
            <WelcomeComponent/>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    
    function handleUsername(e) {
        setUsername(e.target.value);
    }
    
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        if (username == 'class' && password == '1234') {
            // 인증 성공 메시지 
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    function SuccessMessageComponent() {
        if (showSuccessMessage) {
            return (
                <div className="SuccessMessage">
                    <h1>Authentication Success</h1>
                </div>
            )
        }
        return null;
    }
    
    function ErrorMessageComponent() {
        if (showErrorMessage) {
            return (
                <div className="ErrorMessage">
                    <h1>Authentication Error. Please check your credentials.</h1>
                </div>
            )
        }
        return null;
    }

    return (
        <div className="Login">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
            
            <div className="LoginForm">
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" value={username} onChange={handleUsername}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword}/>
                </div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>

        </div>
    )
}


function WelcomeComponent() {
    return (
        <div className="">


        </div>
    )
}