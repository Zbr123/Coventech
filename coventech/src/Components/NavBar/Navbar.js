import React from "react";
import logo from "../../assets/logo.png"
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import "./Navbar.css";

const Navbar = () =>{
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return(
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="Overview" smooth={true} duration={800} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Co-ventech</span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <Link to="Contact" smooth={true} duration={800}><button type="button" className="text-white bg-secondary hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-md px-8 py-2 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary transition-all duration-500">Get Quotes</button></Link>
          <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="border-white px-4 py-1 rounded-md bg-primary">
          <Link to="Overview" smooth={true} duration={800} spy={true} activeClass="active" className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer">
            Overview
          </Link>
          </li>
          <li className="border-white px-4 py-1 rounded-md">
            {/* <a className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer">Projects</a> */}
          <Link to="Projects" smooth={true} duration={800} spy={true} activeClass="active" className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer">
            Portfolio
          </Link>
          </li>
          <li className="border-white px-4 py-1 rounded-md">
          <Link to="Services" smooth={true} duration={800} spy={true} activeClass="active" className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer">
            Services
          </Link>
          </li>
          <li className="border-white px-4 py-1 rounded-md">
          <Link to="About" smooth={true} duration={800} spy={true} activeClass="active" className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer">
            About Us
          </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    )
}
export default Navbar;