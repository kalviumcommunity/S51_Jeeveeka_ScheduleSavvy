import React from 'react'
import Navbar from './Navbar'
import Loader from './Loader'

export default function Home() {
  window.addEventListener('load', function() {
    document.getElementById('main_content').style.display = 'none';
    setTimeout(function() {
        document.getElementById('loader_container').style.display = 'none';
        document.getElementById('main_content').style.display = 'block';
    }, 3000);
});

  return (
    <>
      <Loader id="loader_container"/>
      <div id='main_content'>
        <Navbar/>
      </div>
    </>
  )
}

