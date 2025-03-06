
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import useWindowSize from "../Hooks/WindowSize";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const width = useWindowSize(); // ✅ Get window width directly

  useEffect(() => {
   if (width > 700) {
     setShowSidebar(true);  // Always show on larger screens
   } else {
     setShowSidebar(false); // Hide on smaller screens (initially)
   }
 }, [width]); 
    

     const Toggle = () => {
      if (width <= 700) {
        setShowSidebar((prev) => !prev);
      }
    };


  return (
    <div className=" ">
      <div className="flex justify-around space-x-20 h-full">
        <div className="py-12 px-10">
          <Link to="/">
            <h1 className="text-2xl font-sans">KartikDoda.tech</h1>
          </Link>
        </div>

        {showSidebar ? (
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
          <div className="py-14 px-10 flex space-x-15 text-xl text-green-700 font-sans">
            <AlignJustify onClick={Toggle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
