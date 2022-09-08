import Card from "react-bootstrap/Card";

import React from "react";
import "../CSS/index.css";

function Partnermobile() {
  return (
    <div className="CommonPartnermobile">
      <p className="hdfcompain">Hədəf Şirkətlər Qrupu</p>
      <div
        id="carouselExampleControlspartnermobile"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="#">
                  {" "}
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/hedef-liseyi-png-200x120.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="#">
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/hedef-nesrleri-png-200x120.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="http://hedefnesrleri.az/" target={"_blank"}>
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/hedefnesr.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
        
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="#">
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/h-multimedia.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
       
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="https://kitabevim.az/" target={"_blank"}>
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/kitabevim.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
           
            <div className="PartnerCardmobile">
              <div className="PartnerCardImagemobile">
                <a href="https://hedefnesrleri.az/" target={"_blank"}>
                  <Card>
                    <Card.Img
                      className="PartnerImagemobile"
                      variant="top"
                      src="./partner/nesriyyat.png"
                    />
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlspartnermobile"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlspartnermobile"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Partnermobile;
