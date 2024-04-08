import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Signup'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}
