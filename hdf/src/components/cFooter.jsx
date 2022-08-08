import React from "react";
import "../CSS/index.css";
import {Link} from "react-router-dom";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
function CFooter() {
  return (
   
   <div>
     <CDBFooter className="shadow">
      <CDBBox  flex="column" className="Footer mx-auto py-5 " style={{ width: '90%' }}>
        <CDBBox  justifyContent="between" className="flex-wrap Footer">
          <CDBBox >
          <a className="d-flex align-items-center p-0 text-dark logofooter">
          <Link to="/"> <img alt="logo" src="../../images/Hedefkurslari.png" width="160px" />
          </Link>
            </a>
            
            <CDBBox display="flex" className="mt-4 Footertext ">
            <a href="https://www.facebook.com/hedefkurslariofficial" target="_blank" >  <CDBBtn flat color="info">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn></a>
             <a href="https://twitter.com/intent/user?screen_name=hedefkurslari" target='_blank' > <CDBBtn flat color="info" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn></a>
          <a href="https://www.instagram.com/accounts/login/?next=/hedef__kurslari/" target='_blank' ><CDBBtn flat color="info" >
                <CDBIcon fab icon="instagram" />
              </CDBBtn></a> 
            </CDBBox>
          </CDBBox>
          <CDBBox>
           
            <CDBBox  flex="column" style={{ cursor: 'pointer', padding: '0' }}>
             <Link to="/HadafQrup"> <CDBFooterLink  href="#"><span className="footertext">Haqqında</span></CDBFooterLink></Link>
            <Link to="/services"><CDBFooterLink className="footertext" href="#"><span className="footertext">Xidmətlər</span></CDBFooterLink></Link>
            <Link to="/aplicantuseful"><CDBFooterLink className="footertext" href="#"><span className="footertext">Bloq</span></CDBFooterLink></Link>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
           
            <CDBBox className="Footertext" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <Link to="/news1"> <CDBFooterLink href="/"><span className="footertext">Xəbərlər</span></CDBFooterLink></Link>
             <Link to="/testsubject1"> <CDBFooterLink href="/"><span className="footertext">Sınaq mövzuları</span></CDBFooterLink></Link>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
           
            <CDBBox className="Footertext" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
           <Link to="/faq"><CDBFooterLink href="#"><span className="footertext">FAQ</span></CDBFooterLink></Link>
            <Link to="/ContactForm" ><CDBFooterLink href="#"><span className="footertext">Əlaqə</span></CDBFooterLink></Link>
              
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Hədəf Kursları 2008-2022. Bütün hüquqları qorunur.</small>
      </CDBBox>
    </CDBFooter>
   </div>
  );
}
export default CFooter;
