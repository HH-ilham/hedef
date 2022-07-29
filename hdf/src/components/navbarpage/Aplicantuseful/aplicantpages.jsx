import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Aplicant1 from './aplicant1';
import Aplicant2 from './aplicant2';
import Aplicant3 from './aplicant3';
import Aplicant4 from './aplicant4';
import Aplicant5 from './aplicant5';
import Aplicant6 from './aplicant6';
import Aplicant7 from './aplicant7';
import Aplicant8 from './aplicant8';
import Aplicant9 from './aplicant9';
import Aplicant10 from './aplicant10';
import Aplicant11 from './aplicant11';
import Aplicant12 from './aplicant12';
import Aplicant13 from './aplicant13';
import Aplicant14 from './aplicant14';
import Aplicant15 from './aplicant15';
import Aplicant16 from './aplicant16';

function Aplicantpages  () {
    return (
      
            
            <Routes>
                <Route path='/Aplicant1' element={<Aplicant1/>}/> 
                <Route path='/Aplicant2' element={<Aplicant2/>}/> 
                <Route path='/Aplicant3' element={<Aplicant3/>}/> 
                <Route path='/Aplicant4' element={<Aplicant4/>}/> 
                <Route path='/Aplicant5' element={<Aplicant5/>}/> 
                <Route path='/Aplicant6' element={<Aplicant6/>}/> 
                <Route path='/Aplicant7' element={<Aplicant7/>}/> 
                <Route path='/Aplicant8' element={<Aplicant8/>}/> 
                <Route path='/Aplicant9' element={<Aplicant9/>}/> 
                <Route path='/Aplicant10' element={<Aplicant10/>}/> 
                <Route path='/Aplicant11' element={<Aplicant11/>}/> 
                <Route path='/Aplicant12' element={<Aplicant12/>}/> 
                <Route path='/Aplicant13' element={<Aplicant13/>}/> 
                <Route path='/Aplicant14' element={<Aplicant14/>}/> 
                <Route path='/Aplicant15' element={<Aplicant15/>}/> 
                <Route path='/Aplicant16' element={<Aplicant16/>}/> 
            
               
            </Routes>
           
        
    );
}

export default Aplicantpages;
