import React, { useState, useEffect } from "react";
import "../../CSS/website/navbar.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import ClipLoader from "react-spinners/ClipLoader";

function Activity() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <TopBar />
      <Navbar />
      <h4 className="text-center fw-bold m-3">Fəaliyyətlərimiz</h4>
      {/* 1 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity1">
              {" "}
              <img
                src=".././images/tv8.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Türkiyənin nüfuzlu TV8 İNT telekanalı Hedef Group-dan
                video-reportaj hazırladı
              </h5>
              <p className="card-text">
                Türkiyənin nüfuzlu TV8 İNT telekanalının “Şehirde Gündem”
                proqramının əməkdaşları Hedef Group-un qonağı olub. Proqramın
                müxbiri Tuba İşbilir Hedef Group-un baş direktoru f.ü.f.d., dos,
                Şəmil Sadiq və Hedef Global-ın direktoru Elvin Əliyev ilə
                Azərbaycandakı təhsil sistemi ilə bağlı müsahibə alıb. Şəmil
                Sadiq məqsədlərinin “Made in Azerbaijan” olaraq dünya brendinə
                çevrilmək olduğunu qeyd edib: “Məktəbimiz müasir […]
              </p>
              <p className="card-text">
                <small className="text-muted">9/May/2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity2">
              {" "}
              <img
                src=".././images/activity2.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Fənlərin Dostluğu Olimpiadası” -8 qalibləri mükafatlandırlıdı!-
                İNTEQRASİYA.AZ
              </h5>
              <p className="card-text">
                23 dekabr 2017-cı il tarixində Bakı şəhəri Odlar Yurdu
                Universitetinin Böyük Akt zalında Azərbaycan Respublikası
                Prezidentinin Yanında Bilik Fondu, Odlar Yurdu Universiteti və
                Hədəf Kurslarının birgə təşkilatçılığı ilə 31dekabr “Dünya
                Azərbaycanlılarının Həmrəylik Günü”nə həsr olunan VIII “Fənlərin
                Dostluğu Olimpiadası”nın qaliblərinin mükafatlandırılması baş
                tutmuşdur.[…]
              </p>
              <p className="card-text">
                <small className="text-muted">26/Dekabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity3">
              <img
                src=".././images/activity3.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata
                keçiriləcək-GÜNÜN SƏSİ
              </h5>
              <p className="card-text">
                Günün səsi qəzeti “Azərbaycan Universitetlərinin tanıtımı” adlı
                layihə haqqında yazır.. 3 iyun 2017-ci il tarixdə Hədəf Kursları
                Azadlıq filialının sərgi zalında Hədəf Globalın təşkilatçılığı
                ilə Azərbaycan Univeristetlərinin sərgisi təşkil olunacaq.
                Gununsesi.info-nun xəbərinə görə, layihəni keçirməkdə məqsəd
                Azərbaycan Respublikası ərazisində fəaliyyət göstərən dövlət və
                özəl Universitetləri və orta ixtisas məktəblərini abituriyentərə
                tanıtmaqdır. Hər tədris ilinin sonunda abituriyentlər
                Univeristet […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity4">
              {" "}
              <img
                src=".././images/activity3.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata
                keçiriləcək – A24.AZ
              </h5>
              <p className="card-text">
                A24.az saytı “Azərbaycan Universitetlərinin tanıtımı” adlı
                layihədən yazır.. 03 iyun 2017-ci il tarixdə Hədəf Kursları
                Azadlıq filialının sərgi zalında Hədəf Globalın təşkilatçılığı
                ilə Azərbaycan Univeristetlərinin sərgisi təşkil olunacaq.
                A24.Az-ın verdiyi xəbərə görə, bu haqda Hədəf kurslarının rəsmi
                səhifəsində məlumat verib. Məlumata görə layihəni keçirməkdə
                məqsəd Azərbaycan Respublikası ərazisində fəaliyyət göstərən
                dövlət və özəl Universitetləri […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity5">
              {" "}
              <img
                src=".././images/activity3.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata
                keçiriləcəkdir – SENET.AZ
              </h5>
              <p className="card-text">
                Senet.az saytı “Azərbaycan Universitetlərinin tanıtımı”
                layihəsindən yazır.. 03 iyun 2017-ci il tarixdə Hədəf Kursları
                Azadlıq filialının sərgi zalında Hədəf Globalın təşkilatçılığı
                ilə Azərbaycan Univeristetlərinin sərgisi təşkil olunacaqdır.
                Layihəni keçirməkdə məqsəd Azərbaycan Respublikası ərazisində
                fəaliyyət göstərən dövlət və özəl Universitetləri və orta
                ixtisas məktəblərini abituriyentərə tanıtmaqdır. Hər tədris
                ilinin sonunda abituriyentlər Univeristet və ixtisas seçimində
                müəyyən çətinliklər […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*6*/}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity6">
              {" "}
              <img
                src=".././images/activity3.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata
                keçiriləcək -QAZİLER.AZ
              </h5>
              <p className="card-text">
                Qaziler.az saytı “Azərbaycan Universitetlərinin tanıtımı” adlı
                layihəmizdən yazır.. 03 iyun 2017-ci il tarixdə Hədəf Kursları
                Azadlıq filialının sərgi zalında Hədəf Globalın təşkilatçılığı
                ilə Azərbaycan Univeristetlərinin sərgisi təşkil olunacaqdır.
                Layihəni keçirməkdə məqsəd Azərbaycan Respublikası ərazisində
                fəaliyyət göstərən dövlət və özəl Universitetləri və orta
                ixtisas məktəblərini abituriyentərə tanıtmaqdır. Bu barədə
                QAZİLER.AZ-a layihə rəhbərliyi xəbər verib. Hər tədris […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 13 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity13">
              <img
                src=".././images/activity3.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                “Azərbaycan Universitetlərinin tanıtımı” adlı layihə keçiriləcək
                -YENİCAG.AZ
              </h5>
              <p className="card-text">
                Yenicag.az saytı “Azərbaycan Universitetlərinin tanıtımı ”
                layihəsi haqqında yazır… 03 iyun 2017-ci il tarixdə Hədəf
                Kursları Azadlıq filialının sərgi zalında Hədəf Globalın
                təşkilatçılığı ilə Azərbaycan Univeristetlərinin sərgisi təşkil
                olunacaq. Yeniçağ.Az xəbər verir ki, layihəni keçirməkdə məqsəd
                Azərbaycan Respublikası ərazisində fəaliyyət göstərən dövlət və
                özəl universitetləri və orta ixtisas məktəblərini abituriyentərə
                tanıtmaqdır. “Hər tədris ilinin sonunda abituriyentlər […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity7">
              {" "}
              <img
                src=".././images/oxugunu.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Bakıda “Oxu günü” keçirildi – A24.AZ
              </h5>
              <p className="card-text">
                A24.az saytı “Oxu günü -3 ” tədbiri haqqında yazır. Bu gün
                Heydər Əliyev Mərkəzinin parkında “Oxu Günü” keçirilib.A24.Az
                xəbər verir ki, Heydər Əliyev Mərkəzi, Təhsil Nazirliyi,
                Azərbaycan Milli Elmlər Akademiyası və “Hədəf Nəşrləri”nin
                təşkilatçılığı ilə keçirilən tədbirin məqsədi yeniyetmə və
                gənclər arasında mütaliəyə marağın artırılması, oxu
                vərdişlərinin inkişafına nail olmaqdır. “Gəlin birgə oxuyaq!”
                şüarı altında təşkil […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 8 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity8">
              {" "}
              <img
                src=".././images/oxugunu.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Heydər Əliyev Mərkəzinin parkında “Oxu Günü” keçirilib –
                EDU.GOV.AZ
              </h5>
              <p className="card-text">
                Edu.gov.az saytı “Oxu günü -3 ” tədbiri haqqında yazır. Aprelin
                29-da Heydər Əliyev Mərkəzinin parkında “Oxu Günü” keçirilib.
                Heydər Əliyev Mərkəzi, Təhsil Nazirliyi, Azərbaycan Milli Elmlər
                Akademiyası və “Hədəf Nəşrləri”nin təşkilatçılığı ilə keçirilən
                tədbirin məqsədi yeniyetmə və gənclər arasında mütaliəyə marağın
                artırılması, oxu vərdişlərinin inkişafına nail olmaqdır. Tədbiri
                giriş sözü ilə açan Heydər Əliyev Mərkəzinin Heydər Əliyev
                irsinin tədqiqi və […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 9 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity9">
              {" "}
              <img
                src=".././images/activity4.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Heydər Əliyev Mərkəzinin parkında “Oxu günü” təşkil olunub –
                AZERTAG.AZ
              </h5>
              <p className="card-text">
                Azertag.az “Oxu günü -3” haqqında yazır. Aprelin 29-də Heydər
                Əliyev Mərkəzinin parkında “Gəlin birgə oxuyaq!” şüarı altında
                “Oxu günü” təşkil olunub. Heydər Əliyev Mərkəzi, Təhsil
                Nazirliyi, Azərbaycan Milli Elmlər Akademiyası və “Hədəf
                Nəşrləri”nin təşkilatçılığı ilə keçirilən tədbirin məqsədi
                yeniyetmə və gənclər arasında mütaliəyə marağın artırılması, oxu
                vərdişlərinin inkişafına nail olmaqdır. İstinad :
                https://goo.gl/9h7WXV Tarix : […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 10 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Link to="/Activity10">
              {" "}
              <img
                src=".././images/activity4.jpg"
                style={{ maxWidth: "100%" }}
                className="card-img"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Heydər Əliyev Mərkəzinin parkında möhtəşəm “Oxu Günü” –FOTOlar
              </h5>
              <p className="card-text">
                Aprelin 29-da Heydər Əliyev Mərkəzinin parkında “Gəlin birgə
                oxuyaq!” şüarı altında “Oxu günü” təşkil olunub. Strateq.az
                xəbər verir ki, Heydər Əliyev Mərkəzi, Təhsil Nazirliyi,
                Azərbaycan Milli Elmlər Akademiyası və “Hədəf Nəşrləri”nin
                təşkilatçılığı ilə keçirilən tədbirin məqsədi yeniyetmə və
                gənclər arasında mütaliəyə marağın artırılması, oxu
                vərdişlərinin inkişafına nail olmaqdır. “Oxu Günü”ndə tanınmış
                yazıçı və şairlər iştirak ediblər. Mütaliə […]
              </p>
              <p className="card-text">
                <small className="text-muted">21/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinners ">
          <ClipLoader color={"#00FFCC"} loading={loading} size={60} />
        </div>
      ) : (
        <div>
          {/* 11 */}
          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <Link to="/Activity11">
                  {" "}
                  <img
                    src=".././images/activity4.jpg"
                    style={{ maxWidth: "100%" }}
                    className="card-img"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">
                    Heydər Əliyev Mərkəzinin parkında “Oxu Günü” keçirilib
                    -LENT.AZ
                  </h5>
                  <p className="card-text">
                    Lent.az saytı “Oxu günü -3” layihəsi haqqında yazır. Aprelin
                    29-da Heydər Əliyev Mərkəzinin parkında “Oxu Günü”
                    keçirilib. Lent.az-ın Təhsil Nazirliyinin saytına istinadən
                    verdiyi məlumata görə, Heydər Əliyev Mərkəzi, Təhsil
                    Nazirliyi, Azərbaycan Milli Elmlər Akademiyası və “Hədəf
                    Nəşrləri”nin təşkilatçılığı ilə keçirilən tədbirin məqsədi
                    yeniyetmə və gənclər arasında mütaliəyə marağın artırılması,
                    oxu vərdişlərinin inkişafına nail olmaqdır. Tədbiri […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">21/Oktyabr/2017</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 12*/}
          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <Link to="/Activity12">
                  {" "}
                  <img
                    src=".././images/oxugunu.jpg"
                    style={{ maxWidth: "100%" }}
                    className="card-img"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">“Oxu Günü”nün təəssüratı</h5>
                  <p className="card-text">
                    525-ci qəzet ” Oxu günü-3″ tədbiri haqqında yazır..
                    Gündüzlər topladığımız işıq enerjisi yaradıcı adamlarda
                    gecələri aydınladır. İdeyalar, arzular üst-üstə adama hücum
                    edir. Nə yatmağa, nə dincəlməyə imkan verir. İlin çox az
                    günləri var ki, mən şüursuz məxluqlar kimi yata bilirəm.
                    Yerimin içində bir-iki saat fırlanandan, arzularımın
                    reallaşmasını tam xəyal edəndən sonra yatıram ancaq. Bu
                    hisslərlə […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">21/Oktyabr/2017</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <CFooter />
    </>
  );
}

export default Activity;
