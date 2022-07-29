import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
import ReactPlayer from 'react-player'
function Activity1() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
        Türkiyənin nüfuzlu TV8 İNT telekanalı Hedef Group-dan video-reportaj
        hazırladı
      </p>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>
      <p className="container fw-bold">
        Türkiyənin nüfuzlu TV8 İNT telekanalının “Şehirde Gündem” proqramının
        əməkdaşları Hedef Group-un qonağı olub.
      </p>
      <p className="container">
        Proqramın müxbiri Tuba İşbilir Hedef Group-un baş direktoru f.ü.f.d.,
        dos, Şəmil Sadiq və Hedef Global-ın direktoru Elvin Əliyev ilə
        Azərbaycandakı təhsil sistemi ilə bağlı müsahibə alıb.
        <br />
      </p>
      <p className="container">
        Şəmil Sadiq məqsədlərinin “Made in Azerbaijan” olaraq dünya brendinə
        çevrilmək olduğunu qeyd edib: “Məktəbimiz müasir tenxologiyalar,
        elektronika sahəsində müxtəlif laboratoriyaları ilə fəaliyyət göstərir.
        Bununla yanaşı tariximizi, milli keçmişimizi unutdurmamaq üçün bizim
        balabilgələrimizin dünyagörüşlərini milli duyğularla yoğurmaq üçün bu
        cür bir konseptlə başladıq”. <br />
      </p>
      <p className="container">
        Elvin Əliyev də Hədəf Kurslarının fəaliyyət istiqamətləri barəsində
        fikirlərini TV8 İNT-in tamaşaçıları ilə bölüşüb: “Kursumuz doqquz
        filialla fəaliyyət göstərir. Bu filiallarımızda Azərbaycanın ağıllı
        uşaqlarını biz universitetlərə hazırlayırıq”.
        <br />
      </p>
      <p className="container">
        Bununla yanaşı Hedef Groupa-a daxil olan şirkətlər barəsində – Hədəf
        STEM Liseyi, Hədəf Kursları, Hədəf Multimedia Mərkəzi, Hədəf Nəşrləri
        barəsində TV8 tamaşaçılarına ətraflı məlumat verilib.
        <br />
      </p>
      <div className='player-wrapper container'>
        <ReactPlayer
          className='react-player youtubevideo'
          url='https://www.youtube.com/watch?v=Yll8LbWq5Zw'
        
       
        />
      </div>
      <a href="#">
        <button type="button" className="activitybtn btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </button>
      </a>
      <CFooter />
    </div>
  );
}

export default Activity1;
