// // // import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

import testimonialImage01 from '../assets/images/testimonialImage01.jpg';
import testimonialImage02 from '../assets/images/testimonialImage02.jpg';
import testimonialImage03 from '../assets/images/testimonialImage03.svg';


import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

import airbnb from '../assets/images/Airbnb_Logo_Bélo.svg'
import uber from '../assets/images/Uber_logo_2018.svg'
import Stripe from '../assets/images/Stripe_Logo,_revised_2016.svg'
import OpenAI from '../assets/images/OpenAI_logo_2025_(wordmark).svg'

import { MdOutlineWebStories } from "react-icons/md"; 
import { MdOutlineBusinessCenter } from "react-icons/md"; 
import { GiArtificialIntelligence } from "react-icons/gi"; 
import { GiTruck } from "react-icons/gi"; 
import { MdSatelliteAlt } from "react-icons/md";

console.log(instagram); // should log a path like "/assets/images/instagram.svg"

 export const navLinks = [
   {
     id: "home",
     title: "Home",
     path:"/"
   },
   {
     id: "service",
     title: "Our Service",
     path:"/"
   },
   {
     id: "expertise",
     title: "Our Expertise",
     path:"/"
   },
   {
     id: "testimonials",
     title: "Testimonials",
     path:"/"
   },
   {
     id: "clients",
     title: "Clients",
     path:"/"
   },
    {
     id: "aboutUs",
     title: "Contact Us",
     path:"/ContactUs"
     
   },
   
 ];

export const footerLinks = [
 {
     title: "NAVIGATION",
     links: [
       {
         name: "Home",
         link: "https://www.hoobank.com/content/",
       },
       {
         name: "Portfolios",
         link: "https://www.hoobank.com/how-it-works/",
       },
       {
         name: "Service",
         link: "https://www.hoobank.com/create/",
       },
       {
         name: "Expertise",
         link: "https://www.hoobank.com/explore/",
       },
       {
         name: "About Us",
         link: "https://www.hoobank.com/terms-and-services/",
       },
        {
         name: "Testimonials",
         link: "https://www.hoobank.com/terms-and-services/",
       },
     ],
   },
   {
     title: "SERVICE",
     links: [
       {
         name: "Smart Security",
         link: "https://www.hoobank.com/help-center/",
       },
       {
         name: "Financial Sysytems",
         link: "https://www.hoobank.com/partners/",
       },
       {
         name: "Telecommunications",
         link: "https://www.hoobank.com/suggestions/",
       },
       {
         name: "Intelligent Transport",
         link: "https://www.hoobank.com/blog/",
       },
       {
         name: "Software Engineering",
         link: "https://www.hoobank.com/newsletters/",
       },
       {
         name: "Mobile and Web Development",
         link: "https://www.hoobank.com/newsletters/",
       },
     ],
   },
   {
     title: "SOCIALS",
     links: [
       {
         name: "Facebook",
         link: "https://www.hoobank.com/our-partner/",
       },
       {
         name: "LinkedIn",
         link: "https://www.hoobank.com/become-a-partner/",
       },
        {
         name: "Twitter",
         link: "https://www.hoobank.com/become-a-partner/",
       },
        {
         name: "Instagram",
         link: "https://www.hoobank.com/become-a-partner/",
       },
     ],
     
   },
   {
     title: "COMPANY",
     links: [
       {
         name: "Terms & Conditions",
         link: "https://www.hoobank.com/our-partner/",
       },
       {
         name: "Privacy Policy",
         link: "https://www.hoobank.com/become-a-partner/",
       },
        {
         name: "Cookies",
         link: "https://www.hoobank.com/become-a-partner/",
       },
        {
         name: "Careers",
         link: "https://www.hoobank.com/become-a-partner/",
       },
       {
         name: "Internship",
         link: "https://www.hoobank.com/become-a-partner/",
       },
     ],
     
   },
 ];

 export const socialMedia = [
   {
     id: 1,
     icon: instagram,
     link: "https://www.instagram.com/",
   },
   {
     id: 2,
     icon: facebook,
     link: "https://www.facebook.com/",
   },
   {
     id: 3,
     icon: twitter,
     link: "https://www.twitter.com/",
   },
   {
     id: 4,
     icon: linkedin,
     link: "https://www.linkedin.com/",
   },
 ];





export const clients = [
    {id:1,
        logo: airbnb,

    },
    {id:2,
        logo:uber,

    },
    {id:3,
        logo: Stripe,

    },
    {id:4,
        logo: OpenAI,

    },
];

export const feedback = [
  {
    id: "1",
    name: "Thanyani Mariba",
    role: "Group COO, South Africa",
    company:"Waxed Payments",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonialImage01,  // Imported image
  },
  {
    id: "2",
    name: "David Kim",
    role: "CEO",
    company:"FinScope Solutions",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonialImage02,  // Imported image
  },
  {
    id: "3",
    name: "Wisani Salani",
    role: "Group CEO, RSA",
    company: "VelozFleet",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonialImage03,  // Imported image
  },
];

 


export const service = [
    {
    id: 1,
    icon:"BsFingerprint",
    className: "bg-[#DDCEFD]",
    title: "Smart Security System",
    description:"Advance setup that uses internet-connected devices and automation technology to monitor and protect homes or businesses vehicles and infrastructure.",
    src:""
}, 
{
    id: 2,
    icon:"GiPiggyBank",
    title: "Financial System",
    description:"Advanced, technology-driven approach to banking that leverages artificial intelligence (AI), machine learning (ML) vehicles and infrastructure.",
    src:""
}, 
{
    id: 3,
    icon:"MdSatelliteAlt",
    title: "Telecommunication",
    description:"Devices and systems that use connectivity, data processing, and automation to operate more efficiently and intelligently, vehicles and infrastructure.",
    src:""
}, 
{
    id: 4,
    icon:"GiTruck",
    title: "Transportation",
    description:"Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
    src:""
}, 
{
    id: 5,
    icon:"MdOutlineBusinessCenter",
    title: "Business Analyst",
    description:"Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
    src:""
},
{
    id: 6,
    icon:"GiArtificialIntelligence",
    title: "Machine Learning",
    description:"Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
    src:""
},
{
    id: 7,
    icon:"MdOutlineWebStories",
    title: "Development",
    description:"Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
    src:""
},
{
    id: 7,
    icon:"GiTruck",
    title: "Logistics",
    description:"Our tools, systems, and innovations that improve the movement of people and goods. It spans everything from vehicles and infrastructure.",
    src:""
},

]
