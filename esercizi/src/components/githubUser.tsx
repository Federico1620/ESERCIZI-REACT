import useGithubUser from "./useGithubUser"

type GithubUserProp = {
    username: string
}

function GithubUser({username}: GithubUserProp) {
    const [user, loading, error] = useGithubUser(username)
    return (<>
    {loading && <p>Caricamento...</p>}
    {!user && <p>Errore: {error}</p>}
    {user && <div>
        <h2>{user.name}</h2>
        <p>{user.login}</p>
        <img src={user.avatar_url} alt={user.name}></img>
    </div>}
    </>)
}

export default GithubUser