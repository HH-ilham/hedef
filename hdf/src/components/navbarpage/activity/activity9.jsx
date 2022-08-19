import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
function Activity9() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold aplicantheader">
        Heydər Əliyev Mərkəzinin parkında “Oxu günü” təşkil olunub – AZERTAG.AZ
      </h1>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
        Azertag.az “Oxu günü -3” haqqında yazır.
      </p>
      <p className="container">
        Aprelin 29-də Heydər Əliyev Mərkəzinin parkında “Gəlin birgə oxuyaq!”
        şüarı altında “Oxu günü” təşkil olunub. Heydər Əliyev Mərkəzi, Təhsil
        Nazirliyi, Azərbaycan Milli Elmlər Akademiyası və “Hədəf Nəşrləri”nin
        təşkilatçılığı ilə keçirilən tədbirin məqsədi yeniyetmə və gənclər
        arasında mütaliəyə marağın artırılması, oxu vərdişlərinin inkişafına
        nail olmaqdır.
        <br />
      </p>
      <p className="container">
        İstinad : https://goo.gl/9h7WXV <br />
        Tarix : 29.04.2017 [15:53]
      </p>
      <br />
      <br />
      <br />
      <br />
     

      <CFooter />
    </div>
  );
}

export default Activity9;
