import { useEffect, useState } from "react";

type GithubUserProp = {
    username: string
}

function GithubUser({username}: GithubUserProp) {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    useEffect(()=> {
        async function fetchApi() {
            try {
                // setLoading(true)
                // setError(null)
                const data = await fetch(`https://api.github.com/users/${username}`)
                if (!data.ok) {
                    throw new Error("Utente non trovato!")
                }
                const response = await data.json()
                setUser(response)
            } catch (error) {
                console.error(error)
                // setError(error.message)
             } //finally {
            //     setLoading(false)
            // }
        }
        fetchApi()
    },[username])
    // if (loading) return <p>Caricamento...</p>
    // if(error) return <p>Errore: {error}</p>
    if(!user) return null
    
    return(<>
    <h2>{user.name}</h2>
    <p>{user.login}</p>
    <img src={user.avatar_url} alt={user.login}></img>
    </>)
}

export default GithubUser
