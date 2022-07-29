import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
function Activity7() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
        Bakıda “Oxu günü” keçirildi – A24.AZ
      </p>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>
      <p className="container fw-bold">
        A24.az saytı “Oxu günü -3 ” tədbiri haqqında yazır.
      </p>
      <p className="container">
        Bu gün Heydər Əliyev Mərkəzinin parkında “Oxu Günü” keçirilib.A24.Az
        xəbər verir ki, Heydər Əliyev Mərkəzi, Təhsil Nazirliyi, Azərbaycan
        Milli Elmlər Akademiyası və “Hədəf Nəşrləri”nin təşkilatçılığı ilə
        keçirilən tədbirin məqsədi yeniyetmə və gənclər arasında mütaliəyə
        marağın artırılması, oxu vərdişlərinin inkişafına nail olmaqdır.
        <br />
      </p>
      <p className="container">
        “Gəlin birgə oxuyaq!” şüarı altında təşkil olunan “Oxu Günü”ndə tanınmış
        yazıçı və şairlər, həmçinin paytaxtın müxtəlif ümumtəhsil məktəb və
        liseyinin şagirdləri təqdimatlarla çıxış edib.
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </p>
     
     
     
      <CFooter />
    </div>
  );
}

export default Activity7;
