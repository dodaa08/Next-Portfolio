import Header from "../components/Header";
import Body from "../components/Body";
import SocialBar from "../components/SocialBar";
import Dp from "../components/Dp";
import Bottom from "../components/Bottombar";

const Landing= ()=>{
    return(
        <>
        <div className="bg-gary-900  xl:flex xl:justify-center">
                <div >
                <Header />

                <div className="flex justify-around space-x-40 px-20 py-20">
                    <div className="md:flex md:flex-col space-y-10 taransform -translate-x-[-100px]"> 
                        <Body />
                        <SocialBar />
                        <div className="transform -translate-y-[-130px] translate-x-[-50px]">
                        <Bottom />
                        </div>
                    </div>
                    <div className="py-10">
                        <Dp />
                    </div>
                </div>


                </div>
                
        </div>
        </>
    )
}

export default Landing;