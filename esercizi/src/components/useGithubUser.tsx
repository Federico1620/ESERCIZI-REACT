import { useEffect, useState } from "react";

function useGithubUser (username) {
    const [user, setUser] = useState(username)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=> {
        async function fetchUser() {
            try {
                const data = await fetch(`https://api.github.com/users/${username}`)
                if (!data.ok) {
                throw new Error (error)
            }
            const response = await data.json()
            setUser(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [username])
    return [user, loading, error]
}

export default useGithubUser