import Header from "../components/Header";
import Body from "../components/Body";
import SocialBar from "../components/SocialBar";
import Dp from "../components/Dp";
import Bottom from "../components/Bottombar";
import useWindowSize from "../Hooks/WindowSize";
import { useEffect, useState } from "react";


const Landing= ()=>{
    const width = useWindowSize();
    const [showDp, setshowDp] = useState(width>=600);
    

    useEffect(()=>{
        setshowDp(width>=600);
    },[width])


    return(
        <>
         <div className="bg-gray-200 sm:h-screen flex flex-col">
            <Header />
            <div className="sm:ml-40 md:mr-40 md:flex md:justify-center md:mt-30  md:space-x-40">
                {!showDp && (
                    <div className="mt-20 ml-30">
                        <Dp h={150} w={150} />
                    </div>
                )}
                <div className="flex flex-col gap-10 px-20">
                    <Body />
                    <SocialBar />
                    <div className="mt-5">
                        <Bottom />
                    </div>
                </div>
                {showDp && (
                    <div className="py-10">
                        <Dp h={200} w={200}/>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Landing;