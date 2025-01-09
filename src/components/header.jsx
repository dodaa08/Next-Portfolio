import React, { useState } from "react";
import { Moon, SunDim } from "lucide-react";
import Link from "next/link";

const Header = ({ darkmode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavigationLinks = React.memo(() => (
    <>
      <Link href="/projects">
        <button className="border-2 py-3 px-4 rounded-xl border-gray-700 transition duration-200">
          Projects
        </button>
      </Link>
      <Link href="/blogs">
        <button className="border-2 py-3 px-4 rounded-xl border-gray-700 transition duration-200">
          Blogs
        </button>
      </Link>
      <Link href="/contact">
        <button className="border-2 py-3 px-4 rounded-xl border-gray-700 transition duration-200">
          Contact
        </button>
      </Link>
    </>
  ));

  return (
    <header className="flex-grow">
      <div className="flex flex-wrap items-center py-4 px-4 md:px-10 justify-around font-mono">
        {/* Logo and Dark Mode Toggle */}
        <div className="flex items-center">
          <Link href="/">
            <button>
              <h1 className="text-base sm:text-lg md:text-2xl">kartikdoda.tech</h1>
            </button>
          </Link>
          <button
            onClick={toggleDarkMode}
            aria-label={darkmode ? "Switch to light mode" : "Switch to dark mode"}
            className="transition duration-200"
          >
            {darkmode ? (
              <SunDim className="hover:scale-125 ml-3 md:ml-5 transition-all cursor-pointer" />
            ) : (
              <Moon className="hover:scale-125 ml-3 md:ml-5 transition-all cursor-pointer" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 py-9">
          <NavigationLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-4"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div
            className={`${
              darkmode ? "bg-black" : "bg-white"
            } h-1 mb-1 w-7 rounded`}
          ></div>
          <div
            className={`${
              darkmode ? "bg-black" : "bg-white"
            } h-1 mb-1 w-7 rounded`}
          ></div>
          <div
            className={`${
              darkmode ? "bg-black" : "bg-white"
            } h-1 mb-1 w-7 rounded`}
          ></div>
        </button>

       {/* Mobile Menu */}
{menuOpen && (
  <div className="flex flex-wrap justify-center gap-6 py-8">
    <NavigationLinks className="text-lg py-4 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-200" />
  </div>
)}

      </div>
    </header>
  );
};

export default Header;