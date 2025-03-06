
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../Hooks/WindowSize";
import Sidebar from "../components/Sidebar";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
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
    
    <div className=" ">
        <Sidebar isOpen={isSidebarOpen} />
      <div className="flex justify-around space-x-20 h-full">
        <div className="py-12 px-10">
          <Link to="/">
            <h1 className="text-2xl font-sans">kartikdoda.tech</h1>
          </Link>
        </div>

        {Showmnu ? (
          <div className="py-14 px-10 flex space-x-15 text-xl text-green-700 font-sans">
            <Link to="/">
              <button className="cursor-pointer">Home</button>
            </Link>
            <Link target="_blank" to="https://github.com/dodaa08">
              <button className="cursor-pointer">Projects</button>
            </Link>
            <Link
              target="_blank"
              to="https://panoptic08.hashnode.dev/?source=top_nav_blog_home"
            >
              <button className="cursor-pointer">Blogs</button>
            </Link>
          </div>
        ) : (
       
          <div className="flex space-x-20 text-xl  font-sans">
                 <button className=" border-2 border-gray-200 text-black text-2xl  rounded-md z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                      ☰ 
                 </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
