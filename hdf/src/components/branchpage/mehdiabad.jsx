import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../TitleFunction";


function Mehdiabad() {
  TabTitle('Mehdiabad filialı');
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Mehdiabad</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/ahmadli">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/nizami">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 343 40 03</p>
          <p>- (012) 343 40 04</p>
          <p>- (077) 555 01 05</p>
          <p>- (077) 555 01 15</p>
          <p>- Ünvan: Abşeron rayonu, Mehdiabad qəsəbəsi, 28 May küçəsi, bina 123.</p>
         
        </div>
        <div>
          <img
            src=".././images/mehdiabad.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
        <div>
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.155951748724!2d49.85228671476524!3d40.493934358865445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308fea60dc1205%3A0xfa58d8ae9de7e69f!2zSMmZZMmZZiBLdXJzbGFyxLEtTWVoZGlhYmFkIEZpbGlhbMSx!5e0!3m2!1sen!2s!4v1657706600287!5m2!1sen!2s"
            width="400"
            height="300"
          ></iframe>
        </div>
      </div>
      <p className="container mt-4">
      Hədəf kursları Mehdiabad filialı 2021-ci ilin sentyabr ayında fəaliyyətə başlamışdır. Filialımızın yaranmasında əsas məqsəd Mehdiabad qəsəbəsi və ətraf kəndələrin şagirdlərinin uğurlu gələcəkləri üçün mükəmməl təhsil almalarına peşəkar müəllimlərimizlə öz töhvəmizi verməkdir. Filialımızda eyni zamanda məktəbəqədər dərslərin tədris və Hədəf Balabilgə uşaq baxçası fəaliyyət göstərir. Tədris üçün nəzərdə tutulmuş yeni binamız yüsək səviyyəli maddi-texniti təminatla təchiz olunub.
Şagirdlərin təhsil prosesi ilə yanaşı sosial aktivliklərinin artırılması üçün mütəmadi tədbirlər və psixoloji xidmətlər göstərilməkdədir.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
        <li>Xarici dil hazırlığı </li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Mehdiabad;
