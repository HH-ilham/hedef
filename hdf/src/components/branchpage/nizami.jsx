import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
function Nizami() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Nizami</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/mehdiabad">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/qaraqarayev">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 596 66 61</p>
          <p>- (012) 596 66 62</p>
          <p>- (077) 555 01 08</p>
          <p>- (077) 555 01 18</p>
          <p>- Ünvan:Z.Əhmədbəyov küç.2 </p>
          <p>- (Nizami metro yaxınlığı)</p>
        </div>
        <div>
          <img
            src=".././images/nizami.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3217548856187!2d49.82957381476113!3d40.37956096582423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da2b6e4f27d%3A0x46bac2f72a61d0d!2zSMmZZMmZZiBLdXJzbGFyxLEgTml6YW1pIGZpbGlhbMSx!5e0!3m2!1sen!2s!4v1657706651629!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
      Nizami filialı Hədəf Kurslarının ilk filialıdır. 2008-ci ildən fəaliyyətə başayan filial 2018-ci ildə 10 illiyini qeyd etmiş və həmin ildə Hədəf STEM Liseyi, bununla yanaşı bir neçə filial öz fəaliyyətinə başlamışdır. 2018-ci ildə  Əliyeva Rəna Məmmədağa qızı IV qrup üzrə maksimal nəticə-700 bal toplayaraq ölkə birincisi olmuşdur.
Filial fəaliyyətə başladığı ilk illərdən yüksək nəticəsinə görə seçilmişdir. FilialAzərbaycan və rus bölməsi üzrə fəaliyyət göstərir. 2019-cu ilin uğur faizi 94% olmuşdur. Nizami filialının müdiri Kamil Orucovdur.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Dövlət orqanlarına hazırlıq</li>
        <li>Fərdi hazırlıq </li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Nizami;
