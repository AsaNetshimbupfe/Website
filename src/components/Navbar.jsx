import { AiOutlineShopping } from "react-icons/ai";
import NikeLogo from "../assets/veloz_tech_logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Our Services", "Our Expertise", "Contact Us"];

function Nav() {

//When the menu is displayed on mobile
  const [isMobileMenuShown,setIsMobileMenuShown] = useState(false);
  return (

   
   

    <nav className="w-full flex py-6 justify-between items-center navbar">
       {/*Theme Color:
       Primary: #fc8318
                #13333b

       */}
      {/* Logo */}
      <a href="">
        <NikeLogo className="h-30 w-30" />
      </a>
      {/*Burger Button*/}
      <button onClick={()=> setIsMobileMenuShown(!isMobileMenuShown)} className=" rounded-lg hover:bg-amber-400 p-2 focus:ring-2 focus:ring-gray-200 lg:hidden ">
        <RxHamburgerMenu size={25} />
      </button>
      {/**Menu-List */}
      <div className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}>  
        <ul className="flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none  lg:space-x-6">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-amber-500 lg:hover:bg-transparent rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-amber-500 text-white lg:bg-transparent lg:text-amber-500" : "hover:bg-gray-100"}
                ${(i==3 || i==4)&&"lg:text-black"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
