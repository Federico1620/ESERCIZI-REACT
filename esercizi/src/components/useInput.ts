import { useState } from "react";

function useInput() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    return [username, handleChangeUsername, password, handleChangePassword]
}

export default useInput