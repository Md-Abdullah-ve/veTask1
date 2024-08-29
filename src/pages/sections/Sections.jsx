import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImage from '../../components/heroImage'
import "./styles.css"
import SectionsContent from '../../components/sections/SectionsContent'
const Sections = () => {
  return (
    <div className='sections'>
      {/* <Navbar/> */}
      <SectionsContent/>
      {/* <HeroImage/> */}
    </div>
  )
}

export default Sections
