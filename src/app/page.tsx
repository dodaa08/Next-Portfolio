// src/app/page.tsx

import React from "react";
import Landing from "../components/Landing";
import Page from "./projects/page"
import Contact from "./contact/page"

const Home: React.FC = () => {
  return (
    <>
      <Landing />
      <div >
        <Page />
      </div>
      <Contact />
    </>
  );
};

export default Home;
