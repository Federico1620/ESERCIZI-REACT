import { useState } from "react";

function Counter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)
    const aumenta = () => setCounter((c)=> c + 1)
    const diminuisci = () => setCounter((c) => c - 1)
    const reset = () => setCounter(initialValue)
    return(<>
    <button onClick={aumenta}>Aumenta</button>
    <button onClick={diminuisci}>Diminuisci</button>
    <button onClick={reset}>reset</button>
    <p style={{
        backgroundColor: "red",
        border: "2px solid black"
    }}>{counter}</p>
    </>)
}

export default Counter