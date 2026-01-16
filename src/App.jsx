import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos.jsx'
import {store} from './app/store';
import {Provider} from 'react-redux'
import AddForm from './components/AddForm'

function App() {
  return (
    <>
      <Provider store={store}>
        <AddForm/>
        <Todos/>
      </Provider>
    </>
  )
}

export default App
