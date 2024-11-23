// components/Header.js
import React from 'react';
import { Moon, SunDim } from 'lucide-react';
import Link from 'next/link';

const Header = ({ darkmode, toggleDarkMode }) => {
  return (
    <header className="flex-grow">
      <div className="flex items-center py-4 px-4 md:px-10 justify-evenly font-mono">
        <div className="flex items-center">
          <Link href="/">
          <button>
          <h1 className="text-l md:text-2xl">kartikdoda.tech</h1>
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

        <div className="flex md:space-x-8">
          <Link href="/cat">
            <button>
              <h1 className="text-lg md:text-xl hover:scale-110 transition duration-200">Categories</h1>
            </button>
          </Link>
          <button>
            <h1 className="text-lg md:text-xl hover:scale-110 transition duration-200">tags</h1>
          </button>
          <button>
            <h1 className="text-lg md:text-xl hover:scale-110 transition duration-200">Blogs</h1>
          </button>
          <button>
            <h1 className="text-lg md:text-xl hover:scale-110 transition duration-200">Send message</h1>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
