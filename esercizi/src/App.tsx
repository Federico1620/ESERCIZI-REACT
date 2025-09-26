import './App.css'
import Colors from './components/colors'

function App() {
  const myColors = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Azzurro" },
    { id: 3, name: "Blu" }
  ];
  return (
    <>
    <Colors items={myColors}></Colors>
    </>
  )
}

export default App
