import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

import Card from './components/Card'
import {services} from './components/mockData/cardData'
import {OurServiceSection} from './components/ourServiceSection'
import Testimonial from './components/TestimonialSection'
import {Feedback} from  './components/mockData/TestimonialData'
import ClientsSection from './components/ClientsSection'
import {ClientsData} from './components/mockData/ClientsData'
import FooterSection from './components/FooterSection'
import styles from './style'



function App() {
 

  return (
    <>
   <div className='p-10 xl:px24'>
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <Navbar/>
    </div>
    <div className={`bg-white ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} bg-white`}>
    <HeroSection/>
    </div>
    </div>
    <OurServiceSection items={services}/>
    <Testimonial items={Feedback}/>
    
    <ClientsSection items={ClientsData}/>
    <FooterSection/>
    
    </div>
      
    </>
  )
}

export default App
