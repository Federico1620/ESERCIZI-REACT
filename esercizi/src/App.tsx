import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Counter from './components/counter'
import CurrentLocation from './components/currentLocation'
import GithubUser from './components/githubUser'
import InputValue from './components/inputValue'

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <Counter></Counter>
    <InputValue></InputValue>
    <QueryClientProvider client={queryClient}>
    <GithubUser username='Federico1620'></GithubUser>
    </QueryClientProvider>
    <CurrentLocation></CurrentLocation>
    </>
  )
}

export default App
