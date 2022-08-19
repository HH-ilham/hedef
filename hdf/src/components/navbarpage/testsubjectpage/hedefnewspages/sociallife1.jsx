import React, { useState } from "react";
import Img1 from "./images1/qapi1.jpg";
import Img2 from "./images1/qapi2.jpg";
import Img3 from "./images1/qapi3.jpg";
import Img4 from "./images1/qapi4.jpg";
import Img5 from "./images1/qapi5.jpg";
import Img6 from "./images1/qapi6.jpg";
import Img7 from "./images1/qapi7.jpg";
import Img8 from "./images1/qapi8.jpg";
import Img9 from "./images1/qapi9.jpg";
import Img10 from "./images1/qapi10.jpg";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
import "../../../../CSS/website/socialgallery.css";
import CloseButton from "react-bootstrap/CloseButton";
import { TabTitle } from "../../../TitleFunction";


function Sociallife1() {
  TabTitle('Hədəf Kurslarında Magistratura üzrə Açıq Qapı günü keçirildi');
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
        {
          id: 6,
          imgSrc: Img6,
        }
      ];
      let data11 = [
       
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
      <h1 className="text-center fw-bold fs-3">
        Hədəf Kurslarında Magistratura üzrə Açıq Qapı günü keçirildi
      </h1>
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
            Hədəf Kurslarının Neftçilər – Qara Qarayev filialında Magistratura
            hazırlığı ilə bağlı Açıq Qapı günü keçirilib.
          </p>
          <p className="container">
            Tədbiri giriş sözü ilə Neftçilər-Qara Qarayev filialının müdiri
            Famil İsayev açıb. O, Hədəf Kurslarının Magistratura hazırlığı üzrə
            gördüyü işlər barasində geniş məlumat verib. Famil İsayev təkcə
            2018-ci ildə magistratura üzrə 92 faiz uğur qazandıqlarını bildirib.
            <br />
            Daha sonra Hədəf Kurslarının Sosial və Layihələr üzrə direktoru
            Elvin Əliyev çıxış edərək Hədəf Kurslarının əsas məqsədlərinin
            Azərbaycanda təhsilin inkişafına töhfə vermək olduğunu bildirib.
          </p>
          <p className="container">
            Hədəf Kurslarının magistratura üzrə koordinatoru Murad Ağayarov
            Hədəf Kurslarında Magistratura qəbulu ilə bağlı kampaniyaları
            barəsində məlumat verib. “Hədəf Kursları olaraq magistratura üzrə
            yeni kampaniyaları sizin nəzərinizə çatdırmaq istəyirəm. Belə ki,
            kursumuzda 20 maydan etibarən ödənişsiz dərslərə start veririk. Bu
            dərslər vasitəsilə siz həm müəllimlərimizi tanıya biləcək, həm də
            sizə maraqlı suallarınıza cavab tapa biləcəksiniz. Bununla yanaşı
            Respublika birincisinə 5 min azn, 5 min azn-lik də təhsil vauçeri,
            ikinci yerin sahibinə 3 min azn, 3 min azn-lik təhsil vauçeri,
            üçüncü yerin sahibinə min azn pul mükafatı və min azn-lik təhsil
            vauçeri veriləcək. Bununla yanaşı universitetə qəbul balınıza uyğun
            olaraq endirimlər də əldə edə biləcəksiniz”.
          </p>
          <div className="text-center text-muted">May 14, 2019</div>
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

      <div className="gallery1 container">
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
                       
                        <Link to="/sociallife2">
                        <img
                            src="./images/sosialheyat2.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
                     
                        <div className="card-body">
                          <h5 className="card-title">Sosial Həyatımız</h5>
                          <p className="card-text">
                          Neftçilər filialının yeni binasının açılış mərasimi keçirildi
                          </p>
                          <div className="text-center text-muted">Noyabr 3, 2018</div>
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
                          <div className="text-center text-muted">May 31, 2018</div>
                        </div>
                      </div>
                    </div>
                    
  
        </div>
      </div>
      <div className="gallery11 container">
        {data11.map((item, index) => {
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
      <CFooter />
    </>
  );
}

export default Sociallife1;
