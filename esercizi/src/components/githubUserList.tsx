import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShowGithubUser from "./showGithubUser";

function GithubUserList() {
    const [users, setUsers] = useState(null)
    useEffect(()=> {
        async function dataFetch() {
            try {
                const data = await fetch("https://api.github.com/users")
                const response = await data.json()
                setUsers(response)
            } catch (error) {
                console.error(error)
            }
        }
        dataFetch()
    },[])
    return(<>
    {users && <ul>
        {users.map((u)=> (
            <li
            key={u.id}
            >
            <Link to={`${u.login}`}>{u.login}</Link>
            </li>
        ))}
        </ul>}
        <Outlet></Outlet>
    </>)
}

export default GithubUserList