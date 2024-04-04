import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
  )
}
