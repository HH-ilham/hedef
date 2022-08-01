import React from "react";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
import { TabTitle } from "../../../TitleFunction";
function Dim3() {
  TabTitle('Abituriyentlərin ixtisas qruplarını seçim imkanları genişləndirildi');
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
        Abituriyentlərin ixtisas qruplarını seçim imkanları genişləndirildi
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
            Azərbaycan Respublikasının Nazirlər Kabineti 2017-ci il 8 fevral
            tarixli 39 nömrəli qərarı ilə təsdiq edilmiş “Azərbaycan
            Respublikasının ali təhsil müəssisələrinə tələbə qəbulu
            Qaydaları”nda Dövlət İmtahan Mərkəzinin təklifinə əsasən müəyyən
            dəyişikliklər etmişdir.
          </p>
          <p className="container">
            Qəbul qaydalarında edilmiş əsas dəyişiklik ondan ibarətdir ki, qəbul
            imtahanları hər tədris ilində iki dəfə – yaz və yay sessiyaları
            şəklində keçiriləcək və abituriyent hər sessiyada I,II,III və IV
            ixtisas qruplarından biri üzrə imtahanda iştirak edə biləcəklər.
            Yeni təsdiq olunmuş qaydalarla abituriyentlərin seçim imkanları daha
            da genişləndirilmişdir. Belə ki, abituriyentə icazə veriləcək ki,
            məsələn yaz imtahan sessiyasında II ixtisas qrupu, yay imtahan
            sessiyasında isə III ixtisas qrupu üzrə imtahanda iştirak etsin.
            Həmçinin abituriyent əvvəllər olduğu kimi eyni ixtisas qrupu üzrə də
            hər iki qəbul imtahanında iştirak edə bilər. Abituriyent seçim
            etməkdə sərbəst olacaq. Qüvvədə olan qayda isə belə idi ki,
            abituriyent bir tədris ili ərzində I,II,III və IV ixtisas
            qruplarının yalnız biri üzrə qəbul imtahanında iştirak edə bilərdi.
            <br />
            I,II,III və IV ixtisas qrupları üzrə qəbul imtahanında iştirakından
            asılı olmayaraq, abituriyent V ixtisas qrupu üzrə də imtahanda
            iştirak edə bilər qaydası da qüvvədə qalır.
          </p>
          <p className="container">
            Qeyd edək ki, müxtəlif ixtisas qrupları üzrə qəbul imtahanında
            iştirak edən abituriyentlər hər iki ixtisas qrupu üzrə müsabiqə
            şərtini ödədikləri halda öz ixtisas seçimi ərizələrində hər iki
            ixtisas qrupuna daxil olan ixtisasları seçə biləcəklər. Hər hansı
            bir ixtisas qrupu üzrə müsabiqə şərtini ödəyən abituriyentlər isə
            yalnız həmin ixtisas qrupuna daxil olan ixtisasları seçə bilərlər.
          </p>
          <div className="text-center text-muted">Fevral 19, 2018</div>
        </div>

        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4  othernewstext">Digər xəbərlər</p>
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
                  <div className="text-center text-muted">Sentyabr 9, 2019</div>
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
                <div className="text-center text-muted">Fevral 26, 2018</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      <CFooter />
    </>
  );
}

export default Dim3;
