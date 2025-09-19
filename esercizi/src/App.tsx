import './App.css'
import InteractiveWelcome from './components/interactiveWelcome'
import Login from './components/login'

function App() {
  return (
    <>
    <InteractiveWelcome></InteractiveWelcome>
    <Login onLogin={(data) => console.log("Dati login:", data)}></Login>
    </>
  )
}

export default App
