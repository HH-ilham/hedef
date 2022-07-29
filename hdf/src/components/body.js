import React  from 'react';
import Navtab from './navtabs';
import Baner from './Baner';
import Partner from './partner';
import News from './News';
import Navtabsmobile from './navtabsmobile';
import Partnermobile from './partnermobile';

function Body() {
  return (
    <div>
      <Baner/>
      <Navtab/> 
      <Navtabsmobile/>
      <Partner/>
      <Partnermobile/>
      <News/> 
      
     
    </div>
  );
  }
export default Body;