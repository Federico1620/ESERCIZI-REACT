import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log(username, password)
    }
    const buttonColor = password.length > 8 ? "green" : "red"
    return(<>
    <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value) }></input>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) }></input>
    <button style={{
        backgroundColor: buttonColor
    }} type="submit">Login</button>
    </form>
    <p>{username} - {password}</p>
    </>)
}

export default Login