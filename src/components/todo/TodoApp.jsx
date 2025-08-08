import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, useNavigate, useParams} from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginComponent />}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
                    <Route path="/todos" element={<ListTodosComponent/>}></Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    
    const navigate = useNavigate();

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        if (username === 'class' && password === '1234') {
            // 인증 성공 메시지 
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }


    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="SuccessMessage"> <h1>Authentication Success</h1> </div>}
            {showErrorMessage && <div className="ErrorMessage"> <h1>Authentication Error. Please check your credentials.</h1> </div>}
            
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
    const {username} = useParams();
    console.log(username)
    return (
        <>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Welcome Component
            </div>
        </>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>404</h1>
            Error Component
        </div>
    )
}

function ListTodosComponent() {
    const todos = [
        {id : 1, description:'Learn AWS'},
        {id : 2, description:'Learn Full Stack Dev'},
        {id : 3, description:'Learn DevOps'}
    ]

    return (
        <div className="ListTodosComponent">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{ todo.description }</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </div>
        </div>
    )
}