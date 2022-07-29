import React from 'react';
import { Routes,Route } from 'react-router-dom';
import News1 from './news1';
import News2 from './news2';
import News3 from './news3';
import News4 from './news4';
import Dim1 from './dim1';
import Dim2 from './dim2';
import Dim3 from './dim3';
import Dim4 from './dim4';
import Sociallife1 from './sociallife1';
import Sociallife2 from './sociallife2';
import Sociallife3 from './sociallife3';


function Newspages  () {
    return (
      
            
            <Routes>
                
                
               <Route path='/news1' stack element={<News1/>}/>
                <Route path='/news2' element={<News2/>}/>
                <Route path='/news3' element={<News3/>}/>
                <Route path='/news4' element={<News4/>}/>
                <Route path='/dim1' element={<Dim1/>}/>
                <Route path='/dim2' element={<Dim2/>}/>
                <Route path='/dim3' element={<Dim3/>}/>
                <Route path='/dim4' element={<Dim4/>}/>
               <Route path='/sociallife1' element={<Sociallife1/>}/>
               <Route path='/sociallife2' element={<Sociallife2/>}/>
               <Route path='/sociallife3' element={<Sociallife3/>}/>
            </Routes>
           
        
    );
}

export default Newspages;
