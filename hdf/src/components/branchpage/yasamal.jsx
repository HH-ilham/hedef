import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../TitleFunction";
function Yasamal() {
  
  TabTitle('Yasamal filialı');
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Yasamal</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/xirdalan">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
        <Link to="/azadliq">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 434 00 02</p>
          <p>- (077) 555 01 03</p>
          <p>- (077) 555 01 13</p>
          <p>- Ünvan: Yasamal rayonu, Talıblı küçəsi, 27 A  </p>
          <p>- (İnşaatçılar metrosu)</p>
        </div>
        <div>
          <img
            src=".././images/yasamal.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6419020155768!2d49.80257201476167!3d40.39462856490841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087ea2fba4ce5%3A0x27d1ac6a61416289!2zSMmZZMmZZiBLdXJzbGFyxLEgKFlhc2FtYWwgRmlsaWFsxLEp!5e0!3m2!1sen!2s!4v1657706869731!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
        Hədəf Kurslarının Yasamal filialı 2018-ci ildə yaranan sayca 2-ci
        filialıdır. Filialın müəllim heyəti artıq illərdir Hədəf Kurslarında
        çalışan müəllim komandasından təşkil olunmuşdur. Yeni yaranmasına
        baxmayaraq savadlı müəllimlər və əzimkar tələbələrin təşəbbüsü ilə
        Yasamal filialında uğur göstəricilərinin digər filiallardan geri
        qalmayacağı danılmazdır. Bundan başqa, imtahanların tam düzgün formada
        yoxlanılmasına və digər prosedurlara nəzarət edən İmtahan Mərkəzidə
        Yasamal filialının daxilində failəyyət göstərir. Filial müdiri Elnur
        İbrahimovdur.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
        <li>Rəsm dərsləri</li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Yasamal;
