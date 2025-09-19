import { useState, type BaseSyntheticEvent } from "react"
import Welcome from "./welcome"

function InteractiveWelcome() {
    const [name, setName] = useState("")
    function handlerChange(e:BaseSyntheticEvent) {
        setName(e.target.value)
    }
    return(<>
    <input
    type="text"
    value={name}
    onChange= {handlerChange}>
    </input>
    <Welcome name={name}></Welcome>
    </>)
}

export default InteractiveWelcome