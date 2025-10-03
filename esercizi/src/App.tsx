import './App.css'
import Clock from './components/clock'
import Counter from './components/counter'
import FocusableInput from './components/focusableInput'
import Login from './components/login'
import UncontrolledLogin from './components/uncontrolledLogin'
import Welcome from './components/welcome'
import './index.scss'

function App() {
  return (
    <>
    <Welcome name='Federico'></Welcome>
    <Counter></Counter>
    <Login></Login>
    <Clock></Clock>
    <UncontrolledLogin></UncontrolledLogin>
    <FocusableInput></FocusableInput>
    </>
  )
}

export default App