import { useState } from "react";

function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)
    const incrementa = () => setCounter((c)=> c + 1)
    const decrementa = () => setCounter((c)=> c - 1)
    const reset = () => setCounter(initialValue)
    return [counter, incrementa, decrementa, reset]
}

export default useCounter