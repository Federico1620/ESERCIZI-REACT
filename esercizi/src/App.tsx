import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome'
import Counter from './components/counter'
import ShowGithubUser from './components/showGithubUser'
import GithubUserList from './components/githubUserList'

function App() {
  return (
    <>
    <nav style={{
      display:"flex",
      gap: "40px"
      }}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/users">Github Users</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Welcome name ="Jimmy" age={23}></Welcome>}></Route>
    <Route path='/counter' element={<Counter valoreIniziale={0}></Counter>}></Route>
    <Route path='/users' element={<GithubUserList></GithubUserList>}>
      <Route index element={<p>Aggiungi un utente e selezionalo</p>}></Route>
      <Route path=":username" element={<ShowGithubUser />}></Route>
    </Route>
    <Route path='*' element={<p>NotFound</p>}></Route>
    </Routes>
    </>
  )
}

export default App
