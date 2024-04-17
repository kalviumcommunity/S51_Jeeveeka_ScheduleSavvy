import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout({childern}) {
  return (
    <div>
        <ToastContainer/>
        {childern}
    </div>
  )
}

export default Layout
