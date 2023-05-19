import './App.css'
import { Route, Routes } from 'react-router-dom'
import Bookstate from './components/bookstate'
import Nav from './components/Navigation'
import Catigories from './components/Catigories'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
     <Route path='/' element={<Bookstate/>}/>
     <Route path='/catigories' element={<Catigories/>}/> 
    </Routes>
    </>
  )
}

export default App
