import { useEffect, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from "react-bootstrap"

function FocusableInput() {
    const inputRef = useRef("")
    useEffect(()=> {
        inputRef.current.focus()
    },[])
    return(<>
    <input ref={inputRef} type="text"></input>
    <Button variant="primary">Primary</Button>
    </>)
}

export default FocusableInput