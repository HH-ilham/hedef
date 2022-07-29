import React  from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../CSS/App.css";

import {Link} from "react-router-dom";


 function navbar() {
  
    return (
    
      
          <div className="header">
            <Navbar className="bgcolor" expand="lg">
              <div className="container">
                <div className="logo logo-first">
                <Link to="/">   <Navbar.Brand >
                   <img
                      width={"171px"}
                      height={"53px"}
                      src={"/images/hedefkurslarilogo.png"}
                      alt={"Logo"}
                    />
                  </Navbar.Brand></Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar2">
                <Nav.Link  className="Navlink navhover">
                <Link to="/" className="navbarlink1">Ana səhifə</Link>  
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <span id="basic-nav-dropdown" className="Navlink">
                        Hədəfi tanı 
                      </span>
                    }
                  >
                    <NavDropdown.Item >
                    <Link className="navbarlink" to="/services">Xidmətlər</Link>
                    
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                     <Link className="navbarlink" to="/structure">Struktur</Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />                   
                    <NavDropdown.Item href="#action/3.4">
                    <Link className="navbarlink" to="/publications">Hədəf Nəşrləri</Link>                     
                    </NavDropdown.Item>                                                                     
                    
                    
                   
                  </NavDropdown>
                  <Nav.Link  className="Navlink navhover">
                  <Link to="/HadafQrup" className="navbarlink1 ">Hədəf Qrup</Link>  
                  </Nav.Link>
                  <Nav.Link className="Navlink navhover">
                  <Link to="/faq" className="navbarlink1 ">FAQ</Link> 
                    
                  </Nav.Link>
                </Navbar.Collapse>
                <div className="logo logo-second">
                <Link to="/">  <Navbar.Brand >
                    <img
                      width={"171px"}
                      height={"53px"}
                      src={"/images/hedefkurslarilogo.png"}
                      alt={"Logo"}
                    />
                  </Navbar.Brand></Link>
                </div>
                <Navbar.Collapse className="navbar3">
                  <NavDropdown
                    title={
                      <span id="basic-nav-dropdown" className="Navlink">
                        Bloq
                      </span>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                    <Link className="navbarlink" to="/aplicantuseful"> Abituriyentə faydalı</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Hədəfim magistr
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  className="Navlink navhover">
                  <Link to="/activity" className="navbarlink1">Fəaliyyətlərimiz</Link> 
                   
                  </Nav.Link>
                  <Nav.Link href="#link" className="Navlink navhover">
                  <Link to="/Vacancy" className="navbarlink1">Vakansiya</Link> 
                  </Nav.Link>
                  <Nav.Link href="#link" className="Navlink navhover">
                  <Link to="/ContactForm" className="navbarlink1"> Əlaqə</Link> 
                  </Nav.Link>
                </Navbar.Collapse>
              </div>
            </Navbar>
            <div className="bottomline container"></div>
           
          </div>
     
  
    );
  }

export default navbar;