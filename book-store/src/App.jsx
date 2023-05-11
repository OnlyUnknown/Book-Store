import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Bookstate from './components/bookstate'

function App() {

  return (
    <Routes>
     <Route path='/' element={<Bookstate/>}/>
     <Route path='/catigories'/> 
    </Routes>
  )
}

export default App
