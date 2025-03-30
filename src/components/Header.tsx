import { Link } from "react-router-dom";
import { House, FolderDot, Logs, Triangle, Dot } from "lucide-react";

const Header = () => {
  return (
    <div className="">
      <div className="py-10">
        <img src="https://waycrate.github.io/waycrate.svg" alt="" className="h-30" />
      </div>

      <div className="flex flex-col md:flex-row"> 
        {/* Main Navigation */}
        <div className="flex flex-col px-10 gap-2">
          <Link to="/">
            <div className="flex gap-2 underline transition duration-400 decoration-gray-500 hover:decoration-dotted hover:decoration-gray-400 cursor-pointer">
              <House className="text-yellow-400" />
              <button className="text-yellow-500 text-xl cursor-pointer"> Home </button>
            </div>
          </Link>

          <Link to="https://opalescent-crater-f04.notion.site/Projects-1c6dae29fdcd80d0b553f38d9ee15fb6?pvs=74" target="_blank">
            <div className="flex gap-2 underline transition duration-400 decoration-gray-500 hover:decoration-dotted hover:decoration-gray-400 cursor-pointer">
              <FolderDot className="text-yellow-400" />
              <button className="text-yellow-500 text-xl cursor-pointer"> Projects </button>
            </div>
          </Link>

          <Link to="https://opalescent-crater-f04.notion.site/Blogs-1c6dae29fdcd8028b428c07483a25c91?pvs=74" target="_blank">
          <div className="flex gap-2 underline transition duration-600 decoration-gray-500 hover:decoration-dotted hover:decoration-gray-400 cursor-pointer">
            <Logs className="text-yellow-400" />
            <button className="text-yellow-500 text-xl cursor-pointer"> Blogs </button>
          </div>
          </Link>
        </div>

        {/* Socials Section - Now positioned below on smaller screens */}
        <div className="flex flex-col px-10 gap-2 mt-5 md:mt-0">
          <div className="flex py-2 gap-2 underline transition duration-600 decoration-gray-500 cursor-pointer">
            <button className="text-yellow-500 text-xl cursor-pointer"> Socials </button>
            <div className="relative">
              <Triangle className="text-yellow-400 h-4 mt-2 rotate-[-150deg]" />
            </div>
          </div>

          <div className="gap-5 border-gray-700 border-dotted rounded w-max">
            <div className="flex flex-col px-10 gap-2">
              <Link to="https://github.com/dodaa08" target="_blank">
                <div className="flex gap-2 underline decoration-gray-500 hover:decoration-dotted hover:decoration-gray-500 cursor-pointer">
                  <Dot className="text-yellow-400 h-6" />
                  <button className="text-yellow-500 text-l cursor-pointer flex gap-3">Github <h1>@dodaa08</h1></button>
                </div>
              </Link>

              <Link to="https://www.x.com/kartik0x1/" target="_blank">
              <div className="flex gap-2 underline decoration-gray-500 hover:decoration-dotted hover:decoration-gray-500 cursor-pointer">
                <Dot className="text-yellow-400 h-6" />
                <button className="text-yellow-500 text-l cursor-pointer flex gap-3">Twitter <h1>@kartik0x1</h1></button>
              </div>
              </Link>

              <Link to="https://www.linkedin.com/in/kartikd4152g/" target="_blank">
              <div className="flex gap-2 underline decoration-gray-500 hover:decoration-dotted hover:decoration-gray-500 cursor-pointer">
                <Dot className="text-yellow-400 h-6" />
                <button className="text-yellow-500 text-l cursor-pointer flex gap-3">LinkedIn <h1>@kartikd4152g</h1></button>
              </div>
              </Link>

              <Link to="https://www.instagram.com/kartik__doda/">
              <div className="flex gap-2 underline decoration-gray-500 hover:decoration-dotted hover:decoration-gray-500 cursor-pointer">
                <Dot className="text-yellow-400 h-6" />
                <button className="text-yellow-500 text-l cursor-pointer flex gap-3">Instagram <h1>@kartik__doda</h1></button>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;