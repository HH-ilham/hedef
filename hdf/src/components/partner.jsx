import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import "../CSS/index.css";

function Partner() {
  return (
    <div className="CommonPartner">
      <p className="hdfcompain">Hədəf Şirkətlər Qrupu</p>
      <div className="PartnerCard">
        <div className="PartnerCardImage">
          <CardGroup className="PartnerImageCard">
          <a href="#"> <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/hedef-liseyi-png-200x120.png"
              />
            </Card></a>
            <a href="#">
            <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/hedef-nesrleri-png-200x120.png"
              />
            </Card>
            </a>
            <a href="http://hedefnesrleri.az/" target={'_blank'}>
            <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/hedefnesr.png"
              />
            </Card>
            </a>
            <a href="#">
            <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/h-multimedia.png"
              />
            </Card>
            </a>
            <a href="https://kitabevim.az/" target={"_blank"}>
            <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/kitabevim.png"
              />
            </Card></a>
            <a href="https://hedefnesrleri.az/" target={"_blank"}>
            <Card>
              <Card.Img
                className="PartnerImage"
                variant="top"
                src="./partner/nesriyyat.png"
              />
            </Card>
            </a>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default Partner;
