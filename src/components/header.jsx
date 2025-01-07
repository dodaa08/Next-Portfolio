import React, { useState } from 'react';
import { Moon, SunDim } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './menu'


const Header = ({ darkmode, toggleDarkMode }) => {
   
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header className="flex-grow">
      <div className="flex flex-wrap items-center  py-4 px-4 md:px-10 justify-around font-mono">
        {/* Logo and Dark Mode Toggle */}
        <div className="flex items-center">
          <Link href="/">
            <button>
              <h1 className="text-base sm:text-lg md:text-2xl">kartikdoda.tech</h1>
            </button>
          </Link>
          <button
  onClick={toggleDarkMode}
  aria-label={darkmode ? "Switch to light mode" : "Switch to dark mode"} // Improve accessibility
  className="transition duration-200" // Apply transition to the whole button
>
  {darkmode ? (
    <SunDim
      className="hover:scale-125 ml-3 md:ml-5 transition-all cursor-pointer opacity-100"
      style={{ transition: 'opacity 0.3s ease' }}
    />
  ) : (
    <Moon
      className="hover:scale-125 ml-3 md:ml-5 transition-all cursor-pointer opacity-100"
      style={{ transition: 'opacity 0.3s ease' }}
    />
  )}
</button>

        </div>

        {/* Navigation Links */}
        <div className={`hidden md:flex flex-wrap justify-center gap-4 md:gap-8 p-4`}>
      

          <Link href="/projects">
          <button
            
            className="border-2 py-3 px-4 rounded-xl border-gray-700 transition duration-200"
            >
            Projects
          </button>
              </Link>
            

          <Link href="/blogs">
            <button className="border-2 py-3 px-4 rounded-xl border-gray-700  transition duration-200">
              Blogs
            </button>
          </Link>

          <Link href="/contact">
            <button className="border-2 py-3 px-4 rounded-xl border-gray-700 transition duration-200">
              Contact
            </button>
          </Link>

          
        </div>

       
        <button
  className="md:hidden text-white p-4" // Added padding for better touch support
  onClick={() => setmenuOpen((prev) => !prev)}
>
  <div className={`${darkmode ? 'bg-black' : 'bg-white'} h-1 mb-1 w-7 rounded`}></div>
  <div className={`${darkmode ? 'bg-black' : 'bg-white'} h-1 mb-1 w-7 rounded`}></div>
  <div className={`${darkmode ? 'bg-black' : 'bg-white'} h-1 mb-1 w-7 rounded`}></div>
</button>



        {
          menuOpen && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-5">
             


            <Link href="/projects">
            <button
              
              className="border-2 py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200"
              >
              Projects
            </button>
                </Link>
              
  
            <Link href="/blogs">
              <button className="border-2 py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200">
                Blogs
              </button>
            </Link>
  
            <Link href="/contact">
              <button className="border-2 py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200">
                Contact
              </button>
            </Link>
  
              
            
          </div>
  
          )
        }
      </div>
    </header>
  );
};

export default Header;
