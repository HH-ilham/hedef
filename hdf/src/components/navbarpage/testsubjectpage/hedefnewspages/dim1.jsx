import React from "react";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
import { TabTitle } from "../../../TitleFunction";

function Dim1() {
  TabTitle('Dövlət qulluğuna qəbul olmaq istəyən şəxslər üçün növbəti sınaq imtahanı keçiriləcək');
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="branchbtn container">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link></div>
      <h1 className="text-center fw-bold fs-3">
        Dövlət qulluğuna qəbul olmaq istəyən şəxslər üçün növbəti sınaq imtahanı
        keçiriləcək
      </h1>
      <div className="d-flex container  ">
        <div className="col-md-9 ">
          <img
            className="mt-2"
            src="../../../images/dim.png"
            width={350}
            height={250}
            alt="sss"
          />
          <p className="container fw-bold">
            DİM-də dövlət qulluğuna qəbul olmaq istəyən şəxslərin müsabiqənin
            test imtahanı mərhələsinə daha da səmərəli hazırlaşmalarına kömək
            məqsədilə elektron sınaq imtahanı keçiriləcək.
          </p>
          <p className="container">
            Sınaq imtahanı AA, AB, AC, BA, BB qrupları üzrə 13 sentyabr
            tarixində keçiriləcək. İmtahan saat 10:00-da başlayacaq.
            <br />
            Namizədlər imtahanı Mərkəzin Nəsimi rayonu, Abdulvahab Salamzadə
            küçəsi, 28 ünvanında yerləşən binasında xüsusi ayrılmış zallarda
            kompüter vasitəsilə elektron formada verəcəklər. Qeyd olunan
            imtahanda iştirak etmək üçün onlayn qeydiyyat 13 sentyabr saat
            09:00-da başa çatacaq. Qeydiyyatdan keçmək üçün
            http://eservices.dim.gov.az
            /dqq/Exam/TestExamRegCom keçidinə daxil
            olmaq lazımdır.
          </p>
          <p className="container">
            Qeyd edək ki, sınaq imtahanında iştirak etmək istəyənlər DİM-in
            saytında “Şəxsi kabinet”lərini yaratmalıdırlar. Kabinet yaradılan
            zaman onun pul hesabı da açılır. “Şəxsi kabinet”də olan hesaba
            vəsait daxil etmək üçün müxtəlif ödəniş üsullarından (ətraflı
            məlumat payment.dim.gov.az saytında verilmişdir) yararlanmaq olar.
            “Şəxsi kabinet” yaradıldıqdan və hesaba lazımi vəsait qoyulduqdan
            sonra sınaq imtahanında iştirak etmək üçün DİM-in saytında onlayn
            qeydiyyatdan keçmək lazımdır.
          </p>
          <div className="text-center text-muted">Sentyabr 9, 2019</div>
        </div>
              
        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4 othernewstext">Digər xəbərlər</p>
          <div className="col newscard">
            <div className="card">
              <Link to="/dim2">
                <img
                  src="./images/dim.png"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">DİM</h5>
                <p className="card-text">
                  Bölgələr üzrə ümumi orta təhsil bazasında ( 9-cu sinif )
                  buraxılış imtahanlarının I mərhələsinin keçirilmə qrafiki.
                </p>
                <div className="text-center text-muted">Fevral 26, 2018</div>
              </div>
            </div>
          </div>
          <div className="col newscard">
            <div className="card">
              <Link to="/dim3">
                <img
                  src="./images/dim.png"
                  className="card-img-top newsimage"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">DİM</h5>
                <p className="card-text">
                  Abituriyentlərin ixtisas qruplarını seçim imkanları
                  genişləndirildi.
                </p>
                <div className="text-center text-muted">Fevral 19, 2018</div>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <CFooter />
    </>
  );
}

export default Dim1;
