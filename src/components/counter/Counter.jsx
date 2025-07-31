import { useState } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCountParentFunction(by) {
        setCount(count => count + by);
    }

    function decrementCountParentFunction(by) {
        setCount(count => count - by);
    }
    function resetButton() {
        setCount(0);
    }

    return (

        <>
            <span className="totalCount"> {count}</span>
            <CounterButton by={1} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
            <CounterButton by={2} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
            <CounterButton by={3} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
            <CounterButton by={5} incrementMethod={incrementCountParentFunction} decrementMethod={decrementCountParentFunction}></CounterButton>
            <button className="resetButton" onClick={() => resetButton()}>Reset</button>
        </>

    )
}