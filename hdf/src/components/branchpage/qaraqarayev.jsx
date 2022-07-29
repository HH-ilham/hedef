import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
function Qaraqarayev() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Qara Qarayev</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/nizami">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/sumqayit">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 571 71 00</p>
          <p>- (077) 555 01 07</p>
          <p>- (077) 555 01 17</p>
          <p>- Ünvan: Nizami rayonu  Tofiq Abbasov 38</p>
           </div>
        <div>
          <img
            src=".././images/qaraqarayev.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.541548776815!2d49.933059614762435!3d40.41900586342618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063e9a23a8c3f%3A0xf89d974f3dd12de8!2sH%C9%99d%C9%99f%20Kurslar%C4%B1%20Qara%20Qarayev%20filiali!5e0!3m2!1sen!2s!4v1657706712460!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
      Hədəf Kurslarının Neftçilər filialı kursumuzun ən təcrübəli filiallarından sayılır. Hazırda Nefftçilər filialı ünvanını dəyişərək yeni ünvanında Qara Qarayevdə öz fəaliyyətini davam etdirir. Filial azərbaycan və rus bölmələri üzrə fəaliyyət göstərir. 2016-cı ildə Məmmədov Şahbaba  rus bölməsi II qrup üzrə maksimal nəticə-700 balı toplayaraq ölkə birincisi olmuşdur. Filial 2019-cu ildə abituriyent qəbulu üzrə 99 % nəticə göstərmişdir. Hazırda filial direkoru Famil İsayevdir.
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

export default Qaraqarayev;
