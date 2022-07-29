import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
function Sumqayit() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Sumqayıt</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/qaraqarayev">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
        <Link to="/xirdalan">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (018) 65 211 41</p>
          <p>- (077) 555 01 06</p>
          <p>- (077) 555 01 16</p>
          <p>- Ünvan: 9-cu mkr, Sərvər Bədəlbəyli küç., 50/56</p>
         
        </div>
        <div>
          <img
            src=".././images/sumqayit.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5741453346623!2d49.676076014767936!3d40.573080554040665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403091dede47a3d1%3A0xceb8837013c22585!2zSMaPRMaPRiBLdXJzbGFyxLEgU3VtcWF5xLF0IGZpbGlhbMSx!5e0!3m2!1sen!2s!4v1657706767444!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
        Hədəf Kurslarının ən kiçik filiallarından olmasına baxmayaraq hər zaman
        yüksək nəticəsi ilə seçilmişdir. 2013-cü ildən fəaliyyətə başlayan
        filialın ən yüksək nəticəsi 2016-cı ildə qəbul imtahanında 696 bal
        toplayan Elgün Cəfərov olmuşdur. Filial 2018-ci ildə qəbul nəticəsi 90%
        olmuşdur. Hazırda filial direktoru Vüsal Heybətovdur.
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

export default Sumqayit;
