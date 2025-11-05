import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store/store.js'
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

console.log("Stato iniziale", store.getState())

store.subscribe(()=> {
    console.log("stato aggiornato", store.getState())
})

// store.dispatch(todosSlice.actions.add({id:1, title: "Fare la spesa"}))
// store.dispatch(todosSlice.actions.add({id:2, title: "Fare i biglietti del Napoli"}))
// store.dispatch(counterSlice.actions.increment())
// store.dispatch(counterSlice.actions.increment())
// store.dispatch(counterSlice.actions.increment())
// store.dispatch(counterSlice.actions.increment())
// store.dispatch(todosSlice.actions.remove({id:1}))
// store.dispatch(todosSlice.actions.edit({id:2, title: "fare i biglietti del Napoli", completed: true}))
// store.dispatch(counterSlice.actions.decrement())
// store.dispatch(counterSlice.actions.reset())
// store.dispatch(fetchUser("Federico1620"))