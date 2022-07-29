    import React from 'react';
    import { Routes,Route } from 'react-router-dom';
    import Homepage from './homepage';
    import HadafGroup from './hadafGroup';
    import Activity from './activity';
    import Services from './services'
    // import Errorpage from './errorpage';
    import Structure from './structure';
    import Publications from './publications';
    import FAQ from './FAQ';
    import ContactForm from './contactForm';
    import Aplicantuseful from './aplicantuseful';
    import Vacancy from './vacancy';
   
    function Navbarpages  () {
        return (
          
                
                <Routes>
                    
                    <Route path='/' stack element={<Homepage/>}/>
                    <Route path='/HadafQrup' element={<HadafGroup/>}/> 
                    <Route path='/Activity' element={<Activity/>}/> 
                    <Route path='/services' element={<Services/>}/> 
                    <Route path='/structure' element={<Structure/>}/> 
                    <Route path='/publications' element={<Publications/>}/> 
                    <Route path='/faq' element={<FAQ/>}/> 
                    <Route path='/ContactForm' element={<ContactForm/>}/> 
                    <Route path='/Vacancy' element={<Vacancy/>}/> 
                    <Route path='/aplicantuseful' element={<Aplicantuseful/>}/> 
                    {/* <Route path="*" element={<Errorpage replace to="/404"/>}/> */}
                   
                </Routes>
               
            
        );
    }
    
    export default Navbarpages;
    