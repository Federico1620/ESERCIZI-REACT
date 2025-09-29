import { useState } from "react"

function TodoList() {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState("")
    function handleClick(e) {
        e.preventDefault()
        setItems(prev => [...prev, inputValue]);
        setInputValue("")
    }
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    return(<>
    <ul>
        {items.map((item, index)=> (
            <li
            key={index}
            >{item}</li>
        ))}
    </ul>
    <input onChange={handleChange} type="text" value={inputValue}></input>
    <button onClick={handleClick}>Invia</button>
    </>)
}

export default TodoList