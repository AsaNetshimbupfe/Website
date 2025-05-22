import React from 'react'
import styles from './style.js'
import {Navbar,Footer} from './components'
import {ContactUs} from '../pages/'


const App = () => {
  return (
    <div className='bg-white w-full overflow-x-hidden'>
      {/* Navbar Wrap */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* Hero section */}
      <div className={`bg-white ${styles.flexStart} mt-2`}>
        <div className={`${styles.boxWidth}`}>
          <ContactUs/>
        </div>
      </div>
       
      <div className={`bg-[#284750] rounded-t-4xl ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
      </div>
      
    </div>
  )
}

export default App