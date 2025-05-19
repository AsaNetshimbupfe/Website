import React from 'react'
import  HeroImage from "../assets/hero_img.jpg"

import styles from "../style";

const HeroSection = () => {
return (

<section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-0 gap-8">

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-0`}>
       

        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-extrabold ss:text-[72px] text-[52px] xl:text-[92px] text-black ss:leading-[100.8px] leading-[75px] tracking-wide">
  Lorem ipsum dolor <br className="sm:block hidden" />{" "}
  <span className="text-gradient text-[#fc8318]">consectetur</span>{" "}
</h1>
        </div>

        <h1 className="font-poppins font-extrabold ss:text-[68px] text-[52px] xl:text-[92px] text-black ss:leading-[100.8px] leading-[75px] w-full">
        adipiscing elit.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-xl font-light`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
        <img src={HeroImage} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      
    </section>





















//     //parent div
//     <div className="flex flex-col lg:flex-row-reverse space-y-4"> 
//     {/*Hero image*/}
//         <div className="flex-1 lg:-mt-32 lg:ml-28">
//             <div className="animate-pulse flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] to-[#4DD4C6]">
//             <img src={HeroImage}/>
//             </div>
//         </div>
//         <div className=" flex-1 space-y-6">
//             <div className="text-5xl font-black md:text-8xl flex-1 bg-white">Future Computing of the Technoloy starts right here</div>
//             <div className='font-medium md:text-xl'>
//                 {
//                 "We specialize in developing data-based and driven smart technology systems in the Banking, Telecoms, Security and Transport industries."}
//                 </div>
//                 <button className=" rounded-xl h-14 w-44 bg-amber-500 text-white hover:bg-amber-400 active:bg-amber-300 transition active:scale-95"><a href='#'>Learn More</a></button>
//         </div>
        
        
        
//             </div>
)
}

export default HeroSection