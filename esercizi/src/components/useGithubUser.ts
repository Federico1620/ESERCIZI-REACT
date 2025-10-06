import { useQuery } from "react-query"

function useGithubUser (username) {
    const {
        data, isLoading, error, refetch
    } = useQuery({
        queryKey: ["User", username],
        queryFn: async () => {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error("Utente non trovato o errore nella richiesta");
            }
            const data = await response.json()
            return data
        },
        enabled: !!username,
        retry: false
    })
    return{
        user: data,
        loading: isLoading,
        error,
        refetch
    }
}

export default useGithubUser