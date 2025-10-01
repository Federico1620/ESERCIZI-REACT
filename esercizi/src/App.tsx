import './App.css'
import Counter from './components/counter'
import CurrentLocation from './components/currentLocation'
import GithubUser from './components/githubUser'
import InputValue from './components/inputValue'

function App() {
  return (
    <>
    <Counter></Counter>
    <InputValue></InputValue>
    <GithubUser username='Federico1620'></GithubUser>
    <CurrentLocation></CurrentLocation>
    </>
  )
}

export default App
