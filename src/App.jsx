import './App.css'
import { Route, Routes } from 'react-router-dom'
import Bookstate from './components/bookstate'
import Nav from './components/Navigation'

function App() {

  return (
    <>
    <h1>book store</h1>
    <Nav/>
    <Routes>
     <Route path='/' element={<Bookstate/>}/>
     <Route path='/catigories'/> 
    </Routes>
    </>
  )
}

export default App
