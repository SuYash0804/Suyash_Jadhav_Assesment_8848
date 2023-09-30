
import { Toaster } from 'react-hot-toast'
import './App.css'
import Router from './router/Router'
import ContextWrapper from './Helper/ContextWrapper'

function App() {

  return (
    <>
      <ContextWrapper>
        <Router />
        <Toaster />
      </ContextWrapper>
    </>
  )
}

export default App
