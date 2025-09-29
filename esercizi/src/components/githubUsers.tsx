import { useEffect, useState } from "react"
import GithubUser from "./githubUser"

function GithubUsers() {
    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    useEffect(()=> {
        async function fetchUsers() {
            try {
                const data = await fetch("https://api.github.com/users")
                const response = await data.json()
                setUsers(response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUsers()
    },[])
    return(<>
    <ul>
        {users && users.map((u)=> (
            <li key={u.id}>
            <button onClick={() => setSelectedUser(u.login)}>
                {u.login}</button>
            </li>
        ))}
    </ul>
    {selectedUser && <GithubUser username={selectedUser}></GithubUser>}
    </>)
}

export default GithubUsers