
import { useParams, Link } from "react-router-dom";

import axios from "axios";


function WelcomeComponent() {
    const {username} = useParams();
    console.log(username)

    function callHelloWorldRestApi() {
        // console.log("called")
        // axios.get('http://localhost:8080/hello-world')
        axios.get(`http://localhost:8080/hello-world`)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))

    }

    function successfulResponse(response) { 
        console.log(response)
    }

    function errorResponse(error) { 
        console.log(error)
    }


    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button onClick={callHelloWorldRestApi} className="btn btn-success">Call Hello World</button>
            </div>
        </div>
    )
}

export default WelcomeComponent;