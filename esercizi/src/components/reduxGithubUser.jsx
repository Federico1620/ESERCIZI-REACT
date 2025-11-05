import { useDispatch, useSelector } from "react-redux"
import { fetchUser, removeUser } from "../store/userSlice"
import { useState } from "react"

function ReduxGithubUser() {
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const {list: users, loading, error} = useSelector((state) => state.users)
    return(<>
    {loading && <p>Caricamento...</p>}
    {error && <p>{error}</p>}
    <label>Username</label>
    <input onChange={(e)=> setUsername(e.target.value)} value={username} type="text" placeholder="Inserisci Username"></input>
    <button onClick={() => dispatch(fetchUser(username))}>Cerca</button>
    <ul>
    {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.id}</p>
          <button onClick={() => dispatch(removeUser({ id: user.id }))}>Rimuovi</button>
        </li>
      ))}
      </ul>
    </>)
}

export default ReduxGithubUser