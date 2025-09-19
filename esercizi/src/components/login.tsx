import { useState, type BaseSyntheticEvent } from "react"

function Login(props: { onLogin: (data: { username: string; password: string; remember: boolean }) => void } ) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    function handlerChange(e:BaseSyntheticEvent) {
        const { name, value, checked, type } = e.target;

  if (name === "username") {
    setUsername(value);
  } else if (name === "password") {
    setPassword(value);
  } else if (name === "remember" && type === "checkbox") {
    setRemember(checked);
  }
    }
    function onLogin() {
        props.onLogin({username, password, remember}) 
    }
    function reset() {
        setUsername("")
        setPassword("")
        setRemember(false)
    }
    return(<>
    <label>Username</label>
    <input type="text" id="username" name="username" value={username} onChange={handlerChange}></input>
    <label>Password</label>
    <input type="password" id="password" name="password" value={password} onChange={handlerChange}></input>
    <label>Remember</label>
    <input type="checkbox" id="remember" name="remember" checked={remember} onChange={handlerChange}></input>
    <button onClick={onLogin} disabled={!username || !password}>Login</button>
    <button onClick={reset}>Reset</button>
    </>)
}

export default Login