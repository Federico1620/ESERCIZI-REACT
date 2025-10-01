import useInput from "./useInput"

function InputValue() {
    const [username, handleChangeUsername, password, handleChangePassword] = useInput()
    return(<>
    <input type="text" onChange={handleChangeUsername} value={username} name="username"></input>
    <input type="password" onChange={handleChangePassword} value={password} name="password"></input>
    <p>{username} {password}</p>
    </>)
}

export default InputValue