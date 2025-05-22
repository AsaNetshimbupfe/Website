import React from 'react';
import styles from './style.js';
import {
  Navbar, Hero, AboutUs, Service, Expertise, FutureUse,
  Testimonials, Clients, CTA, Footer
} from './components';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className='bg-white w-full overflow-x-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className={`bg-white mt-2`}>
                    <Hero />
                  </div>
                  <Service />
                  <div className="mt-20">
                    <AboutUs />
                    <Expertise />
                    <FutureUse />
                    <Testimonials />
                    <Clients />
                    <CTA />
                  </div>
                </>
              }
            />

            <Route path="/contactUS" element={<ContactUs />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-[#284750] rounded-t-4xl ${styles.paddingX} ${styles.flexCenter} mt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
