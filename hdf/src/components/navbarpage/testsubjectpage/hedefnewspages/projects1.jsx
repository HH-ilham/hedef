import React, { useState } from "react";
import Img1 from "./images1/project1.jpg";
import Img2 from "./images1/project2.jpg";
import Img3 from "./images1/project3.jpg";
import Img4 from "./images1/project4.jpg";
import Img5 from "./images1/project5.jpg";
import "../../../../CSS/website/socialgallery.css";
import CloseButton from "react-bootstrap/CloseButton";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
import { TabTitle } from "../../../TitleFunction";
import Card from "react-bootstrap/Card";
const Projects1 = () => {
  TabTitle("11-ci “Fənlərin Dostluğu Olimpiadası” keçirilmişdir");
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
    {
      id: 5,
      imgSrc: Img5,
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
        11-ci “Fənlərin Dostluğu Olimpiadası” keçirilmişdir
      </p>
      <div className="d-flex container">
        <div className="col-md-9">
          <p className="container fw-bold">
            05 dekabr 2021-ci il tarixində 31 dekabr Dünya Azərbaycanlılarının
            Həmrəylik Gününə həsr edilmiş “Fənlərin Dostluğu Olimpiadası”
            keçirilmişdir.
          </p>
          <p className="container">
            2010-cu ildə Hədəf Nəşrləri tərəfindən təsis edilən və bu il XI
            buraxılışı düzənlənən “Fənlərin Dostluğu Olimpiadası” layihəsinin
            məqsədi fənlərarası əlaqəni möhkəmləndirmək, fənlərin bir-biri ilə
            bağlılığını şagirdlərə aşılamaq və bu inteqrasiyanın köməyindən
            istifadə edərək xüsusi istedada malik olan şagirdləri
            müəyyənləşdirib gələcək fəaliyyətlərində stimul yaratmaqdır.
          </p>
          <p className="container">
            İdeya müəllifi f.ü.f.d., dosent, Şəmil Sadiq olan Olimpiadanın
            builki buraxılışında Bakı, Sumqayıt və Xırdalan şəhərləri ilə yanaşı
            Respublikamızın 15 şəhər və rayonlarını təmsil edən təqribən 2000
            (iki min) şagird öz biliyini sınamışdır. Karantin qaydalarına uyğun
            təşkil olunan Olimpiada Bakı, Sumqayıt, Xırdalan şəhərlərində 9
            imtahan binasında keçirilmişdir.
          </p>
          <p className="container">
            Ümumtəhsil məktəblərinin Azərbaycan bölməsində təhsil alan 9 və
            10-cu sinif şagirdləri arasında təşkil olunan Olimpiadada
            iştirakçılar 2 saat müddətində 50 sualı cavablandırmışdır.
          </p>
          <p className="container">
            1 həftə sonra Olimpiadanın nəticələri layihənin rəsmi elektron
            ünvanı olan www.inteqrasiya.az saytında təqdim olunacaqdır. Dekabr
            ayının sonuncu 10 günlüyündə FDO-11 qaliblərinin mükafatlandırılması
            mərasimi keçiriləcəkdir.
          </p>
          <p className="container">
            Xatırladaq ki, 31 dekabr Dünya Azərbaycanlılarının Həmrəylik Gününə
            həsr edilmiş “Fənlərin Dostluğu Olimpiadası” XI buraxılışı
            Azərbaycan Texniki Universiteti, Hədəf STEAM Liseyi və Hədəf
            Kurslarının birgə təşkilatçılığı ilə keçirilir.
          </p>
          <div className="text-center text-muted">May 31, 2018</div>
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
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4 othernewstext">Digər xəbərlər</p>
          <div className="col newscard">
            <div className="card">
              <Link to="/projects2">
                <img
                  src="./images/layiheler2.jpg"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">Layihələrimiz</h5>
                <p className="card-text">
                  11-ci “Fənlərin Dostluğu Olimpiadası” İmtahan Mərkəzləri.
                </p>
              </div>

              <Card.Footer className="text-muted">Dekabr 3, 2021</Card.Footer>
            </div>
          </div>
          <div className="col newscard">
            <div className="card">
              <Link to="/projects3">
                <img
                  src="./images/6-7-8.jpg"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
            </div>
          </div>
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Projects1;
