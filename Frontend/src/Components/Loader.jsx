import React from 'react'
import "../Styles/Loader.css"

export default function Loader() {
  return (
    <div id='loader_container'>
      <div className='loading'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </div>
  )
}
