import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../TitleFunction";

function Azadliq() {
  TabTitle('Azadlıq filialı');
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Azadlıq</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/yasamal">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/acami">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 511 58 53</p>
          <p>- (077) 555 01 02</p>
          <p>- (077) 555 01 12</p>
          <p>- Ünvan: S.S. Axundov küç. Azadlıq metrosu yaxınlığı</p>
          
        </div>
        <div>
          <img
            src=".././images/azadliq.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.25130727964!2d49.83916071476268!3d40.42543386303518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087e6e4d62569%3A0x275b17dab1cd14b5!2zSMmZZMmZZiBrdXJzbGFyxLEgQXphZGzEsXEgZmlsaWFsxLE!5e0!3m2!1sen!2s!4v1657706932532!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
      Hədəf Kurslarının ən böyük filiallarından biri də Azadlıq filialıdır. 2019-cu ildə filialın qəbul göstəricisi 92 % olmuşdur. II ixtisas qrupu üzrə Respublika Birincisi Hacızadə Toğrul olub. Hazırda filialın direktoru Məhəmməd Xankişiyevdir. Filial azərbaycan və rus bölməsi üzrə fəaliyyət göstərir. 2011-ci ildən fəaliyyətə başlayan Azadlıq filialı Hədəf Kurslarının sayca 4-cü filialı sayılır. Bu gün artıq illərdir ki, öz təcrübəsi ilə seçilən Xankişiyev Məhəmməd filial direktoru vəzifəsində çalışır.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
        <li>Məktəblilər üçün ingilis dili kursları</li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Azadliq;
