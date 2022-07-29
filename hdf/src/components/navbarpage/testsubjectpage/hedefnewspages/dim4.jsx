import React from "react";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
function Dim4() {
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
      <p className="text-center fw-bold fs-3">
        Bölgələr üzrə ümumi orta təhsil bazasında ( 9-cu sinif ) buraxılış
        imtahanlarının I mərhələsinin keçirilmə qrafiki
      </p>
      <div className="d-flex container">
        <div className="col-md-9">
          <img
            className="mt-2"
            src="../../../images/dim.png"
            width={350}
            height={250}
            alt="sss"
          />
          <p className="container fw-bold">
          YOXDUR
          </p>
          <p className="container">
           
            <br />
            YOXDUR
            olmaq lazımdır.
          </p>
          <p className="container">
          YOXDUR
          </p>
        </div>

        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4">Digər xəbərlər</p>
          <div className="col newscard">
            <div className="col newscard">
              <div className="card">
                <Link to="/dim1">
                  {" "}
                  <img
                    src="./images/dim.png"
                    className="card-img-top newsimage"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">DİM</h5>
                  <p className="card-text">
                    Dövlət qulluğuna qəbul olmaq istəyən şəxslər üçün növbəti
                    sınaq imtahanı keçiriləcək.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <CFooter />
    </>
  );
}

export default Dim4;
