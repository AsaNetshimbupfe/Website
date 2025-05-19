import React from 'react';
import Logo from "../assets/veloz_tech_logo.svg";
import { FooterLinkData } from './mockData/FooterLinkData';
import { socialMedia } from './mockData/SocialMediaData'; // ✅ Corrected import

const FooterSection = () => {
  return (
    <section className='flex flex-col px-6 py-10 bg-white'>
      <div className='flex flex-col md:flex-row mb-8 w-full justify-between'>
        {/* Logo & Description */}
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={Logo} alt="VelozTech Logo" className='w-[266px] h-[72px] object-contain' />
          <p className='mt-4 max-w-[310px] text-gray-600'>
            A way to make the technology world, securely, speedily and delivered.
          </p>
        </div>

        {/* Footer Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {FooterLinkData.map((footerLink) => (
            <div
              key={footerLink.key}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'
            >
              <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-black mb-2'>
                {footerLink.title}
              </h4>
              <ul className='list-none'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={`${footerLink.key}-link-${index}`}
                    className='text-gray-500 text-sm mb-2 hover:text-orange-500 cursor-pointer'
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-black">
          Copyright Ⓒ 2025 VelozTech. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link, "_blank")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
