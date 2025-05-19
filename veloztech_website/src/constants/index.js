// // // import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

import testimonialImage01 from '../assets/testimonialImage01.jpg';
import testimonialImage02 from '../assets/testimonialImage02.jpg';
import testimonialImage03 from '../assets/testimonialImage03.svg';


import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

import airbnb from '../assets/Airbnb_Logo_Bélo.svg'
import uber from '../assets/Uber_logo_2018.svg'
import Stripe from '../assets/Stripe_Logo,_revised_2016.svg'
import OpenAI from '../assets/OpenAI_logo_2025_(wordmark).svg'

import { MdOutlineWebStories } from "react-icons/md"; 
import { MdOutlineBusinessCenter } from "react-icons/md"; 
import { GiArtificialIntelligence } from "react-icons/gi"; 
import { GiTruck } from "react-icons/gi"; 
import { MdSatelliteAlt } from "react-icons/md";

console.log(instagram); // should log a path like "/assets/images/instagram.svg"


// // import airbnb from "./images/airbnb.png";
// // import binance from "./images/binance.png";
// // import coinbase from "./images/coinbase.png";
// // import dropbox from "./images/dropbox.png";
// // import send from "./images/send.png";
// // import shield from "./images/shield.png";
// // import star from "./images/star.png";

 export const navLinks = [
   {
     id: "home",
     title: "Home",
   },
   {
     id: "service",
     title: "Our Service",
   },
   {
     id: "expertise",
     title: "Our Expertise",
   },
   {
     id: "testimonials",
     title: "Testimonials",
   },
   {
     id: "clients",
     title: "Clients",
   },
    {
     id: "aboutUs",
     title: "About Us",
   },
 ];

// export const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];


// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];

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
// export const clients = [
//   {
//     id: "client-1",
//     logo: airbnb,
//   },
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
   //},
//];




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
    description:"Advance setup that uses internet-connected devices and automation technology to monitor and protect homes or businesses.",
    src:""
}, 
{
    id: 2,
    icon:"GiPiggyBank",
    title: "Financial System",
    description:"Advanced, technology-driven approach to banking that leverages artificial intelligence (AI), machine learning (ML).",
    src:""
}, 
{
    id: 3,
    icon:"MdSatelliteAlt",
    title: "Telecommunication",
    description:"Devices and systems that use connectivity, data processing, and automation to operate more efficiently and intelligently, intervention.",
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

]
