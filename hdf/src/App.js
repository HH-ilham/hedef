import React from "react";
import Navbarpages from "./components/navbarpage/navbarpages";
import Branchpages from "./components/branchpage/branchpages";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aplicantpages from "./components/navbarpage/Aplicantuseful/aplicantpages";
import Activitypages from "./components/navbarpage/activity/activitypages";
import Testsubjectpages from "./components/navbarpage/testsubjectpage/testsubjectpages";
import Newspages from "./components/navbarpage/testsubjectpage/hedefnewspages/newspages";


function App() {
  return (
    <div className="">
      
      
     
      <Navbarpages/>
      <Branchpages/>
      <Testsubjectpages/>
      <Aplicantpages/>
      <Activitypages/>
      <Newspages/>
    </div>
  );
}


export default App;