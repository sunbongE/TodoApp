import { useState } from "react"

export default function Counter() {

    const [count,setCount] = useState(0);
    function increamentCounterFunction() {
        setCount(count => count + 1);
    }

    return (
        <div className="Counter"> 
            <span className="count">{count}</span>
            <button className="counterButton" onClick={()=>increamentCounterFunction()}>increment</button>
        </div>

    )
}