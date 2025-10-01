import useCounter from "./useCounter"

function Counter() {
    const [counter, incrementa, decrementa, reset] = useCounter()
    return(<>
    <p>{counter}</p>
    <button onClick={incrementa}>incrementa</button>
    <button onClick={decrementa}>decrementa</button>
    <button onClick={reset}>reset</button>
    </>)
}

export default Counter