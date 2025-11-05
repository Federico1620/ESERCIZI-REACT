import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./store/counterSlice"

function ReduxCounter() {
    const counter = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    return(<>
    <p>{counter}</p>
    <button onClick={()=> dispatch(increment())}>Aumenta</button>
    <button onClick={()=> dispatch(decrement())}>Diminuisci</button>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    </>)
}

export default ReduxCounter