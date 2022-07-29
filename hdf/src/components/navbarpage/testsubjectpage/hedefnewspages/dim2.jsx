import React from "react";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
function Dim2() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="branchbtn container">
        <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
            Çıx
          </button>
        </Link>
      </div>
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
            04.03.2018 <br />
            Bakı, Şirvan, Naxçıvan Muxtar Respublikası
          </p>
          <p className="container">
            11.03.2018
            <br />
            Sumqayıt, Abşeron, Gəncə, Göygöl, Samux, Naftalan, Goranboy,
            Daşkəsən, Şəki, Oğuz, Qəbələ, Lənkəran, Astara, Biləsuvar, Ağsu,
            Zərdab, Şamaxı, Kürdəmir, Ağdam, Yevlax, Bərdə, Tərtər, İmişli,
            Saatlı, Sabirabad, Xaçmaz, Şabran
          </p>{" "}
          <p className="container">
            18.03.2018
            <br />
            Şəmkir, Gədəbəy, Ağstafa, Qazax, Tovuz, Mingəçevir,Balakən,
            Zaqatala,Qax, Yardımlı, Cəlilabad, Masallı, Lerik,Göyçay, Ağdaş,
            Ucar, İsmayıllı, Qobustan, Ağcabədi, Xocavənd, Füzuli, Beyləqan,
            Salyan, Neftçala, Hacıqabul, Qusar, Quba, Siyəzən, Xızı
          </p>
          <p className="container">
            Qeyd 1: Məcburi köçkün rayonlarından olan şagirdlər buraxılış
            imtahanını orta ümumtəhsil müəssisəsinin yerləşdiyi şəhərdə
            (rayonda) yuxarıdakı qrafikə uyğun verəcəklər.
          </p>
          <p className="container">
            Qeyd 2: Heydər Əliyev adına Hərbi Lisey və C.Naxçıvanski adına Hərbi
            liseyin şagirdləri üçün imtahan martın 4‑də, Peşə liseyləri (11-ci
            sinif), Bakı şəhərində yerləşən xüsusi məktəblərin – internat
            məktəbləri, tədrisi ingilis dilində olan məktəblər, Çilov adasında
            yerləşən məktəb, cəzaçəkmə müəssisələrində olan məktəblərin
            şagirdləri üçün martın 18-də keçiriləcəkdir.
          </p>
          <p className="container">
            4 mart 2018-ci il tarixində keçiriləcək imtahanda iştirak edən
            şagirdlər “İmtahana buraxılış vərəqəsi”ni
            (https://eservices.dim.gov.az/sagirdbv/?frm=egov) çap edə bilərlər.
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

export default Dim2;
