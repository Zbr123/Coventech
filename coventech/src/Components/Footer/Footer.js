import React from 'react';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-500 py-16 pb-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between pb-8">
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-md font-normal leading-9">
          <div className="flex mb-4 ">
            <a href="https://www.linkedin.com/" className="mr-4">LinkedIn</a>
            <span className="mx-2">|</span>
            <a href="https://www.example.com/" className="mx-2">X</a>
            <span className="mx-2">|</span>
            <a href="https://dribbble.com/" className="mx-2">Dribbble</a>
            <span className="mx-2">|</span>
            <a href="https://www.instagram.com/" className="mx-2">Instagram</a>
          </div>
          <div>
            <p>Working Worldwide</p>
          </div>
          <div>
            <p>Based in Karachi</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left text-md font-normal leading-8">
          <div className="mb-2">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Co-ventech</span>
        </a>
          </div>
          <div className="mb-2">
            <p>+92 302 2323163 - info@coventech.com</p>
          </div>
          <div>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
        </div>
        
      </div>
      <div className='text-center'>
            <p>© 2023 CoVenTech – Venture your technology dreams. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
