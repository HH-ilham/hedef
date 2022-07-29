import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Testsubject1 from './testsubject1';


function Testsubjectpages  () {
    return (
      
            
            <Routes>
                
                <Route path='/testsubject1' stack element={<Testsubject1/>}/>
               
               
            </Routes>
           
        
    );
}

export default Testsubjectpages;
