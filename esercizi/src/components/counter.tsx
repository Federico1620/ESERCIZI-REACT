import { useEffect, useState } from "react"
import CounterDisplay from "./counterDisplay"

type CounterProp = {
    valoreIniziale: number
    plus: number
}

function Counter({valoreIniziale, plus}:CounterProp) {
    const [counter, setCounter] = useState(valoreIniziale)
    function setter() {
        //passo un valore immediato perche voglio semplicemente aggiornare il valore di counter
        setCounter(counter + plus)
    }
    function deSetter() {
        setCounter(counter - plus)
    }
    function reset() {
        setCounter(valoreIniziale)
    }
    useEffect(()=> {
        console.log(`Il valore del counter è: ${counter}`)
    })
    return(<>
    <CounterDisplay counter={counter}></CounterDisplay>
    <button onClick={setter}>Incrementa</button>
    <button onClick={deSetter}>Decrementa</button>
    <button onClick={reset}>Reset</button>
    </>)
}

export default Counter

