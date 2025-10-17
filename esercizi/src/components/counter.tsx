import { useState } from "react"

type CounterProp = {
    valoreIniziale: number
}

function Counter({valoreIniziale}:CounterProp) {
    let [counter, setCounter] = useState(valoreIniziale)
    function incrementa() {
        setCounter(prev => prev + 1)
    }
    function decrementa() {
        setCounter(prev => prev - 1)
    }
    function reset() {
        setCounter(valoreIniziale)
    }
    return(<>
    <p>{counter}</p>
    <button onClick={incrementa}>Incrementa</button>
    <button onClick={decrementa}>Decrementa</button>
    <button onClick={reset}>Reset</button>
    </>)
}

export default Counter