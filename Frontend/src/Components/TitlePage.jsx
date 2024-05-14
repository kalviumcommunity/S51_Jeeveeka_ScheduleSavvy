import React from 'react'
import TitleNav from './TitleNav'
import '../Styles/Tailwind.css'
import Banner from './Banner'
import TitleFeatures from './TitleFeatures'
import TitleAbout from './TitleAbout'
import Footer from './Footer'
import CrispChat from './Chat'

export default function TitlePage() {
  return (
    <>
      <TitleNav/>
      <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10'>
        <Banner/>
      </div>
      <TitleFeatures/>
      <TitleAbout/>
      <Footer/>
      <CrispChat/>
    </>
  )
}
