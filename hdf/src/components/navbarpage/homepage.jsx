import React from 'react';
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import Body from "../body";
import CFooter from "../cFooter";
import { TabTitle } from "../TitleFunction";

const Homepage = () => {
  TabTitle('Ana səhifə');
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
