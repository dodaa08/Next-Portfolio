  // components/Header.js
  import React from 'react';
  import { Moon, SunDim } from 'lucide-react';
  import Link from 'next/link';

  const Header = ({ darkmode, toggleDarkMode }) => {
    return (
      <header className="flex-grow">
        <div className="flex flex-wrap items-center py-4 px-4 md:px-10 justify-between font-mono">
          {/* Logo and Dark Mode Toggle */}
          <div className="flex items-center">
            <Link href="/">
              <button>
                <h1 className="text-base sm:text-lg md:text-2xl">kartikdoda.tech</h1>
              </button>
            </Link>
            <button onClick={toggleDarkMode}>
              {darkmode ? (
                <SunDim className="hover:scale-125 ml-3 md:ml-5 transition duration-200 cursor-pointer" />
              ) : (
                <Moon className="hover:scale-125 ml-3 md:ml-5 transition duration-200 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
             
            <Link href="/cat">
            <button className='border-2  py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200 '>
                Projects
            </button>
            </Link>
       
       
            <Link href="/blogs">
            <button className='border-2  py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200 '>
                Blogs
            </button>
            </Link>

             
            <Link href="/contact">
            <button className='border-2  py-2 px-5 rounded-xl border-gray-800 hover:border-gray-600 transition duration-200 '>
                Contact
            </button>
            </Link>
          </div>
        </div>
      </header>
    );
  };

  export default Header;
