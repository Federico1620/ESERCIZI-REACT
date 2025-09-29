import { useEffect, useRef } from "react"

function FocusableInput() {
    const inputRef = useRef("")
    useEffect(()=> {
        inputRef.current.focus()
    },[])
    return(<>
    <input ref={inputRef} type="text"></input>
    </>)
}

export default FocusableInput