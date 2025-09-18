import type { BaseSyntheticEvent } from "react"

function Login() {
    function hendleLogin(event:BaseSyntheticEvent) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get("email")
        const password = formData.get("password")
        console.log({email, password})
    }
    return(
        <form onSubmit={hendleLogin}>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password"></input>
            </div>
            <button type="submit">Login!</button>
        </form>
    )
}

export default Login