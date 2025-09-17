import './App.css'
import Clock from './components/clock'
import Counter from './components/counter'


function App() {
  return (<>
  <Counter valoreIniziale={0} plus={1}></Counter>
  <Clock></Clock>
    </>)
}

export default App
