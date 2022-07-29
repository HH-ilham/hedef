import React, { useState } from "react";
import Img1 from "./images1/neft1.jpg";
import Img2 from "./images1/neft2.jpg";
import Img3 from "./images1/neft3.jpg";
import Img4 from "./images1/neft4.jpg";
import Img5 from "./images1/neft5.jpg";
import Img6 from "./images1/neft6.jpg";
import Img7 from "./images1/neft7.jpg";
import Img8 from "./images1/neft8.jpg";
import Img9 from "./images1/neft9.jpg";
import Img10 from "./images1/neft10.jpg";
import Img11 from "./images1/neft11.jpg";
import Img12 from "./images1/neft12.jpg";
import Img13 from "./images1/neft13.jpg";
import Img14 from "./images1/neft14.jpg";
import Img15 from "./images1/neft15.jpg";
import Img16 from "./images1/neft16.jpg";
import Img17 from "./images1/neft17.jpg";
import Img18 from "./images1/neft18.jpg";
import Img19 from "./images1/neft19.jpg";
import Img20 from "./images1/neft20.jpg";
import Img21 from "./images1/neft21.jpg";
import Img22 from "./images1/neft22.jpg";
import Img23 from "./images1/neft23.jpg";
import "../../../../CSS/website/socialgallery.css";
import CloseButton from "react-bootstrap/CloseButton";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import {Link} from 'react-router-dom';

const Sociallife2 = () => {
  let data1 = [
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
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    
  ];
  let data = [
   
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 13,
      imgSrc: Img13,
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
      <p className="text-center fw-bold fs-3">
      Neftçilər filialının yeni binasının açılış mərasimi keçirildi
      </p>
      <div className="d-flex container">
        <div className="col-md-9">
          <img
            className="mt-2"
            src="../../../images/sociallife1.jpg"
            width={350}
            height={250}
            alt="sss"
          />
          <p className="container fw-bold">
          Hədəf Kurslarının Neftçilər filialının yeni binasının açılış mərasimi keçirilib.
          </p>
          <p className="container">
          Mərasimdə Hədəf Kurslarının həmtəsissçisi Vüqar Tarquliyev və Şəmil Sadiq, həmçinin müəllim kollektivi iştirak ediblər.
            <br />
            Tədbir Azərbaycan Respublikasının Dövlət Himninin səsləndirilməsi ilə açıq elan edilib.  Daha sonra söz Vüqar Tarquliyevə verilib. O, Neftçilər filialına uğurlar arzu edib.
          </p>
          <p className="container">
          Şəmil Sadiq də çıxış edərək öz növbəsində Neftçilər filialının fəaliyyət göstərdiyi illər ərzində qazandığı uğurlardan bəhs edib.<br/>
          Sonda filial müdiri Famil İsayev çıxış edərək tədbir iştirakçılarına öz təşəkkürlərini bildirib. O, Neftçilər filialının adının bundan sonra Neftçilər-Qara Qarayev filialı olaraq dəyişdirildiyini deyib.<br/>
          Tədbirin rəsmi hissəsi başa çatdıqdan sonra, iştirakçılar şagirdlərin ifasında musiqili səhnəciklərlə tanış olublar.<br/>
          Qeyd edək ki, Neftçilər filialının yeni binası Nizami rayonu Tofiq Abbasov 38 (Qara Qarayev metrosunun yaxınlığı) yerləşir. Ətraflı məlumat üçün(012)571-71-00/(055)465- 95- 41
          </p>
          <div className="gallery2 container">
        {data1.map((item, index) => {
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
                       
                       <Link to="/sociallife3">
                       <img
                            src="./images/sosialheyat3.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                       </Link>
                 
                        <div className="card-body">
                          <h5 className="card-title">Sosial Həyatımız </h5>
                          <p className="card-text">
                          Təcrübəçilər mükafatlandırıldı.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                        <a href="#">
                          <img
                            src="./images/6-7-8.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </p>
                        </div>
                      </div>
                    </div>
        </div>
      </div>

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

      <div className="gallery container">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%", height: "250px" }}
              />
            </div>
          );
        })}
      </div>
      <CFooter />
    </>
  );
};

export default Sociallife2;
