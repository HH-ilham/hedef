import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Acami from './acami';
import Ahmadli from './ahmadli';
import Azadliq from './azadliq';
import Khirdalan from './khirdalan';
import Mehdiabad from './mehdiabad';
import Yasamal from './yasamal';
import Nizami from './nizami';
import Qaraqarayev from './qaraqarayev';
import Sumqayit from './sumqayit';

function Branchpages  () {
    return (
      
            
            <Routes>
                <Route path='/acami' element={<Acami/>}/> 
                <Route path='/ahmadli' element={<Ahmadli/>}/> 
                <Route path='/xirdalan' element={<Khirdalan/>}/> 
                <Route path='/nizami' element={<Nizami/>}/> 
                <Route path='/sumqayit' element={<Sumqayit/>}/> 
                <Route path='/qaraqarayev' element={<Qaraqarayev/>}/> 
                <Route path='/yasamal' element={<Yasamal/>}/> 
                <Route path='/azadliq' element={<Azadliq/>}/> 
                <Route path='/mehdiabad' element={<Mehdiabad/>}/> 
               
            </Routes>
           
        
    );
}

export default Branchpages;
