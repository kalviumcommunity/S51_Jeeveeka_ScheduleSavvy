import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Signup'
import TitlePage from './Components/TitlePage'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TitlePage/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}
