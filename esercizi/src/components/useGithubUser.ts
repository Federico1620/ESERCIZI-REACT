import { useQuery } from "react-query"

function useGithubUser (username) {
    const {
        data, isLoading, error, refetch
    } = useQuery({
        queryKey: ["User", username],
        queryFn: async () => {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            return data
        }
    })
    return{
        user: data,
        loading: isLoading,
        error,
        refetch
    }
}

export default useGithubUser