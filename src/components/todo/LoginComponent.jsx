
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        if (username === 'class' && password === '1234') {
            // 인증 성공 메시지 
            authContext.setIsAuthenticated(true);
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            authContext.setIsAuthenticated(false);
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }


    // 👇 포커스용 ref 생성
    const usernameRef = useRef(null);
    useEffect(() => {
        // 👇 컴포넌트가 마운트된 후 포커스 주기
        usernameRef.current.focus();
    }, []); // 빈 배열을 전달하여 마운트 시에만 실행되도록 함

    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="SuccessMessage"> <h1>Authentication Success</h1> </div>}
            {showErrorMessage && <div className="ErrorMessage"> <h1>Authentication Error. Please check your credentials.</h1> </div>}
            
            <div className="LoginForm">
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" value={username} onChange={handleUsername} ref={usernameRef}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} onKeyDown={(e)=>{if(e.key==="Enter"){handleSubmit()}}}/>
                </div>
                <button type="button" name="login" onClick={handleSubmit} >Login</button>
            </div>

        </div>
    )
}

export default LoginComponent;