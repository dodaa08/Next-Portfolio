import React, { useState } from 'react';
import { Moon, SunDim } from 'lucide-react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import menu from "../imgs/icons8-menu-50.png"
import Image from 'next/image';

const Header = ({ darkmode, toggleDarkMode }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const top = projectsSection.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const [menuOpen, setmenuOpen] = useState(false);

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
        <div className={`hidden md:flex flex-wrap justify-center gap-4 md:gap-8 `}>
      

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

        <button className='md:hidden text-white' onClick={()=>setmenuOpen((e)=>!e)}>   
            <Image src={menu}  className='h-10 w-auto bg-gray-900 py-2 px-2 rounded-l'/>
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
