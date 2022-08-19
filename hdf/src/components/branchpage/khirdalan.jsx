import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../TitleFunction";


function Khirdalan() {
  TabTitle('Xırdalan filialı');
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold branchheader">Xırdalan filialı</h1>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/sumqayit">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/yasamal">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 341 06 62</p>
          <p>- (077) 555 01 00</p>
          <p>- (077) 555 01 20</p>
          <p>- Ünvan: Xırdalan şəhəri H.Əliyev pr.</p>
          
        </div>
        <div>
          <img
            src=".././images/xirdalan.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.532921664477!2d49.76205031476327!3d40.44134036206745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403086701c4afc15%3A0xa7a72d9d6ac81d6e!2zSMmZZMmZZiBLdXJzbGFyxLEgWMSxcmRhbGFuIEZpbGlhbMSx!5e0!3m2!1sen!2s!4v1657706814091!5m2!1sen!2s"
            width="400"
            height="300"
            alt="xirdalan map"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
      Hədəf Kurslarının II filialı olaraq açılan  Xırdalan filialı 2009-cu ildən fəaliyyət göstərir. Açıldığı ilk gündən qabaqcıl nəticəsi ilə seçilən filial öz qəbul nəticələri ilə fərqlənmişdir.
2016-cı ildə maksimal nəticəni – 700 balı Nəzərəliyev Rəvan I ixtisas qrupu üzrə toplamışdır. Elə həmin il filial, uğurlarına görə “ İLİN FİLİALI”   nominasiyasına layiq görülmüşdür. 2017-ci ildə I qrup üzrə -Məmmədova Jalə 700 bal toplayaraq ölkə birincisi olmuşdur. Hazırda filal müdiri Şakir Hüseynovdur.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Khirdalan;
