import React, { useState } from "react";
import Img1 from "./images1/tecrube1.jpg";
import Img2 from "./images1/tecrube2.jpg";
import Img3 from "./images1/tecrube3.jpg";
import Img4 from "./images1/tecrube4.jpg";
import "../../../../CSS/website/socialgallery.css";
import CloseButton from "react-bootstrap/CloseButton";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";

const Sociallife3 = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },

    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="branchbtn container">
        <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
            Çıx
          </button>
        </Link>
      </div>
      <p className="text-center fw-bold fs-3">Təcrübəçilər mükafatlandırıldı</p>
      <div className="d-flex container">
        <div className="col-md-9">
          
          <p className="container fw-bold">
            Pedaqoji təlimlərimizə qatılaraq uğurla başa vuran təcrübəçi
            müdavimlər 30 may, 2018-ci il tarixində təlimçi – filologiya üzrə
            fəlsəfə doktoru, dosent Şəmil Sadiq tərəfindən “Mən bir müəlliməm”
            sertifikatı ilə mükafatlandırıldı.
          </p>
          <p className="container">
            Mərasimdə Hədəf Kurslarının həmtəsissçisi Vüqar Tarquliyev və Şəmil
            Sadiq, həmçinin müəllim kollektivi iştirak ediblər.
          </p>
          <p className="container">
            “Gəlin, dünyanı sevə və insanlığa hörmət bəsləyə bilən,
            savadsızlığa, ədalətsizliyə etiraz edə, vətənini, dövlətini və
            dövlətçiliyi hər şeydən üstün tuta bilən şəxsiyyət yetişdirək! Çünki
            biz bir müəllimik!”
          </p>
          <br />
          <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} />
            <div className="closebtn">
              <CloseButton
                variant="white"
                aria-label="Hide"
                onClick={() => setModel(false)}
              />
            </div>
          </div>

          <div className="galleryy container">
            {data.map((item, index) => {
              return (
                <div
                  className="pics"
                  key={index}
                  onClick={() => getImg(item.imgSrc)}
                >
                  <img
                    src={item.imgSrc}
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4">Digər xəbərlər</p>
          <div className="col newscard">
            <div className="card">
              <Link to="/sociallife1">
                <img
                  src="./images/sosialheyat.jpg"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">Sosial Həyatımız</h5>
                <p className="card-text">
                  Hədəf Kurslarında Magistratura üzrə Açıq Qapı günü keçirildi.
                </p>
              </div>
            </div>
          </div>
          <div className="col newscard">
            <div className="card">
              <Link to="/sociallife2">
                <img
                  src="./images/sosialheyat2.jpg"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">Sosial Həyatımız</h5>
                <p className="card-text">
                  Neftçilər filialının yeni binasının açılış mərasimi keçirildi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Sociallife3;
