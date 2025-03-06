import { Link } from "react-router-dom";
import { FC } from "react";
import { useEffect, useState } from "react";
import useWindowSize from "../Hooks/WindowSize";
interface Sidebar{
    isOpen : boolean
}

const Sidebar : FC<Sidebar> = ({ isOpen }) => {
  const [Showmnu, Setshowmnu] = useState(true);
  const width = useWindowSize(); // ✅ Get window width directly 
  useEffect(() => {
    if (width <= 700) {
       Setshowmnu(false);
    }
    else{
      Setshowmnu(true);
    }
 }, [width]);
  return (
    <div
        className={`fixed top-0 right-0 w-screen h-full bg-gray-200 border-2 border-gray-200 flex justify-center py-40 z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
    >
    
      <div className="flex flex-col text-2xl gap-10">
        <Link to="/">
          <button className="cursor-pointer">Home</button>
        </Link>
        <Link target="_blank" to="https://github.com/dodaa08">
          <button className="cursor-pointer">Projects</button>
        </Link>
        <Link target="_blank" to="https://panoptic08.hashnode.dev/?source=top_nav_blog_home">
          <button className="cursor-pointer">Blogs</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
