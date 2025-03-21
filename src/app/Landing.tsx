import { useState, useEffect } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import SocialBar from "../components/SocialBar";
import Dp from "../components/Dp";
import Bottom from "../components/Bottombar";

import useWindowSize from "../Hooks/WindowSize";

const Landing = () => {
  const width = useWindowSize();
  const [showDp, setShowDp] = useState(width >= 600);


  useEffect(() => {
    setShowDp(width >= 600);
  }, [width]);

  return (
    <>
      <div className="bg-gray-200 sm:h-screen md:h-screen sm:w-screen md:w-full flex flex-col">
        <Header />
        <div className="sm:ml-40 md:mr-40 md:flex md:justify-center md:mt-28  md:space-x-48">
          {/* {!showDp && (
            <div className="mt-20 ml-30">
              <Dp h={150} w={150} />
            </div>
          )} */}
          <div className="flex flex-col gap-10 px-20">
            <Body />
            <SocialBar />
            <div className="mt-5">
              <Bottom />
            </div>
          </div>
          {/* {showDp && (
            <div className="py-12">
              <Dp h={200} w={200} />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Landing;
