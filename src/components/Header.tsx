

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';


const Header = ()=>{
   const [sideBar, setSideBar] = useState(false);  
   // Effect to handle screen resize
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            setSideBar(true); // Keep sidebar open on larger screens
         } else {
            setSideBar(false); // Hide sidebar on smaller screens
         }
      };

      handleResize(); // Check size on initial render
      
   }, []);
 
return(
    <>
    <div className=" ">
         <div className="flex  justify-around space-x-72 h-full">     
            
            <div className="py-12 px-10"> 
               <Link to="/">
            <h1 className="text-2xl font-sans">KartikDoda.tech</h1>
               </Link>
            </div>

            {
               sideBar ? (
                  <>
                       <div className={`py-14 px-10 flex space-x-15 text-xl text-green-700 font-sans `}> 
               
               
               <Link  to='/'>
               <button className="cursor-pointer">Home</button>
               </Link>
               <Link target='_blank' to="https://github.com/dodaa08">
               <button className="cursor-pointer">Projects</button>
               </Link>
               <Link  target='_blank' to="https://panoptic08.hashnode.dev/?source=top_nav_blog_home">
               <button className="cursor-pointer">Blogs</button>
               </Link>
               
               
               </div>
                  </>
               ) : (
                  <>
                  <div className={`py-14 px-10 flex space-x-15 text-xl text-green-700 font-sans `}> 

                  <AlignJustify />     
               
               </div>
                  </>
               )
          
            }
               
         </div>
        </div>
    </>
)
}


export default Header;