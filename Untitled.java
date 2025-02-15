import Header from "../components/Header";
import Body from "../components/Body";
import SocialBar from "../components/SocialBar";
import {Link} from "react-router-dom"
import Dp from "../components/Dp";

const Landing= ()=>{
    return(
        <>
        <div className="bg-gary-900  xl:flex xl:justify-center">
            <div className="h-screen w-[1100px] ">  
                 <div>
                    <Header />
                 </div>

                 <div className="sm:flex sm:justify-between py-30 tarnsform -translate-x-[-40px]">
                    <Body />
                    <Dp />
                 </div>

                 <div className="px-10 tarnsform -translate-y-[200px]">
                    <SocialBar />
                 </div>

                 <div className="tarnsform -translate-y-[110px] px-10">
                 <p className="text-xl font-sans flex">I keep my <h1 className=" px-2 text-decoration-line: underline"> twitter</h1> updated with all my active projects. Besides coding I like tinkering </p>
                 <p className="text-xl font-sans flex">around with tech, playing sports and travelling.</p>
                 <p className="text-xl font-sans flex">You can also reach me at  <Link><h1 className="cursor-pointer text-blue-400 px-2 ext-decoration-line: underline">dodakartik26@gmail.com</h1></Link></p>
                 </div>
            </div>
        </div>
        </>
    )
}

export default Landing;