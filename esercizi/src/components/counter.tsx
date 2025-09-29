import { useEffect, useRef, useState } from "react"

type CounterProp = {
    valoreIniziale: number
}

function Counter({valoreIniziale = 0}:CounterProp) {
    const counterRef = useRef(valoreIniziale)
    const mostraValore = useRef(null)
    const [valoreCorrente, setValoreCorrente] = useState(valoreIniziale)
    const direzione = useRef(null)
    useEffect(()=> {
        mostraValore.current.textContent = valoreIniziale
    },[])
    function aumenta() {
        counterRef.current += 1
        mostraValore.current.textContent = counterRef.current
        setValoreCorrente(counterRef.current)
        if (valoreCorrente < counterRef.current){
            console.log(valoreCorrente)
            direzione.current = "up"
            console.log(direzione.current)
        }
    }
    function decrementa() {
        counterRef.current -= 1
        mostraValore.current.textContent = counterRef.current
        setValoreCorrente(counterRef.current)
        if (valoreCorrente > counterRef.current){
            console.log(valoreCorrente)
            direzione.current = "down"
            console.log(direzione.current)
        }
    }
    function reset() {
        counterRef.current = 0
        mostraValore.current.textContent = counterRef.current
    }
    return(<>
    <p ref={mostraValore}></p>
    <button onClick={aumenta}>+</button>
    <button onClick={decrementa}>-</button>
    <button onClick={reset}>Reset</button>
    </>)
}

export default Counter