import Carousel from 'react-bootstrap/Carousel';
import React, { Component }  from 'react';
import "../CSS/App.css";
function Baner() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img 
          className="banner d-block w-100"
          
          src="/images/demo-banner-image.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img 
          className="banner d-block w-100"
          src="/images/baner3.jpg"
         
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img 
         className="banner d-block w-100 "
          src="/images/baner2.jpg"    
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Baner;