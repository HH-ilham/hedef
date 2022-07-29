import React from 'react';
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import Body from "../body";
import CFooter from "../cFooter";
const Homepage = () => {
    return (
        <div>
          <TopBar />
          <Navbar />
          <Body/>
          <CFooter/>
        </div>
    );
}

export default Homepage;
