import { useParams } from "react-router-dom";
import GithubUser from "./githubUser";

function ShowGithubUser() {
    const {username} = useParams()
    return(<>
    <div>
        <h2>Profilo di {username}</h2>
        <GithubUser username={username}></GithubUser>
    </div>
    </>)
}

export default ShowGithubUser