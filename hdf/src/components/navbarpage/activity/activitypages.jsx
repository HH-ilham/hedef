import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Activity1 from './activity1';
import Activity2 from './activity2';
import Activity3 from './activity3';
import Activity4 from './activity4';
import Activity5 from './activity5';
import Activity6 from './activity6';
import Activity7 from './activity7';
import Activity8 from './activity8';
import Activity9 from './activity9';
import Activity10 from './activity10';
import Activity11 from './activity11';
import Activity12 from './activity12';
import Activity13 from './activity13';

function Activitypages() {
    return (
      
            
            <Routes>
                <Route path='/Activity1' title={'tttt'} element={<Activity1/>}/> 
                 <Route path='/Activity2' element={<Activity2/>}/>
                 <Route path='/Activity3' element={<Activity3/>}/> 
                 <Route path='/Activity4' element={<Activity4/>}/> 
                 <Route path='/Activity5' element={<Activity5/>}/> 
                 <Route path='/Activity6' element={<Activity6/>}/> 
                 <Route path='/Activity7' element={<Activity7/>}/> 
                 <Route path='/Activity8' element={<Activity8/>}/> 
                 <Route path='/Activity9' element={<Activity9/>}/> 
                 <Route path='/Activity10' element={<Activity10/>}/> 
                 <Route path='/Activity11' element={<Activity11/>}/> 
                 <Route path='/Activity12' element={<Activity12/>}/> 
                 <Route path='/Activity13' element={<Activity13/>}/> 
                
            
               
            </Routes>
           
        
    );
}

export default Activitypages;
