import React from "react";
import "../../../../CSS/website/newspage.css";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
function News1() {
  return (
    <>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold fs-3">
        Vətən müharibəsinin müəllim şəhidi Ömərov Qoşqarın xatirəsi
        əbədiləşdirildi
      </p>
      <div className="d-flex container">
        <div className="col-md-9">
          <img
            className="mt-2"
            src="../../../images/veten2.jpg"
            width={750}
            height={450}
            alt="sss"
          />
          <img
            className="mt-2"
            src="../../../images/veten3.jpg"
            width={750}
            height={450}
            alt="sss"
          />
          <img
            className="mt-2"
            src="../../../images/veten4.jpg"
            width={750}
            height={450}
            alt="sss"
          />
          <img
            className="mt-2"
            src="../../../images/veten5.jpg"
            width={750}
            height={450}
            alt="sss"
          />
        
        </div>
       
        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4 border-bottom">Digər xəbərlər</p>
          <div className="col newscard">
            <div className="card ">
              <Link to="/news2">
                <img
                  src="./images/6-7-8.jpg"
                  className="newsimage card-img-top"
                  alt="vetenmuharibesi"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Hədəf xəbər</h5>
                <p className="card-text">
                  Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 – Rus
                  bölməsi
                </p>
              </div>
            </div>
          </div>

          <div className="col newscard">
            <div className="card">
              <Link to="/news3">
                <img
                  src="./images/6-7-8.jpg"
                  className="newsimage card-img-top"
                  alt="vetenmuharibesi"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Hədəf xəbər</h5>
                <p className="card-text">
                  Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 –
                  Azərbaycan bölməsi
                </p>
              </div>
            </div>
          </div>

          <div className="col newscard">
                      <div className="card">
                      <Link to="/news4">
                          <img
                            src="./images/6-7-8.jpg"
                            className="newsimage card-img-top"
                            alt="vetenmuharibesi"
                          />
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">Hədəf xəbər</h5>
                          <p className="card-text">
                            Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 –
                            Azərbaycan bölməsi.
                          </p>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
        <p className="container">9 fevral 2022-ci il tarixdə Hədəf kursları Nizami filialında 44 günlük Vətən müharibəsinin müəllim şəhidi Qoşqar Ömərovun xatirəsi onun barelyef-güşəsinin və adına sinif otağının açılışı ilə əbədiləşdirildi.</p>
        <p className="container">Tədbirdə şəhidimizn atası Ömərov Səxavət, Hədəf Şirkətlər Qrupunun qurucu direktoru, f.ü.f.d. Şəmil Sadiq, Milli Məclisin 6-cı çağırış millət vəkili Vüqar İsgəndərli, Hədəf Kurslarının idarə heyəti, filial müdirləri, Qoşqar müəllimin kolleqaları, döyüş yoldaşları, şagirdləri və digər qonaqlar iştirak etdilər. Tədbiri Hədəf kursları Nizami filailının müdiri Orucov Kamil açıq elan edərək şəhidlərimizin xatirəsinin 1 dəqiqəlik sükutla yad edilməsini təklif etdi. Kamil müəllim çıxışında qonaqlara Qoşqar müəllimin həyat və fəaliyyəti barəsində ətraflı məlumat verərək şəhidimizin qısa, amma şərəfli ömür yoluna nəzər saldı. Natiq həmçinin qeyd etdi ki, şəhidimizin adının əbədiləşdirilməsi məqsədilə “Qoşqar” məntiq-riyaziyyat bilik yarışına da bu gündən etibarən start verilir.</p>
        <p className="container">Daha sonra çıxış edən digər tədbir iştirakçıları da Qoşqar müəllim haqqında fikirlərini və xatirələrini bölüşərək, onun bir insan, eyni zamanda pedaqoq kimi yüksək keyfiyyətlərindən danışdılar, müəllimlə bağlı yaddaşlarını yenilədilər. Şəhidimizn atası Səxavət müəllim öz çıxışı zamanı qürurlu olduğunu və bir ata kimi oğlunun xatirəsinin əbədiləşdirilməsinin onu sevindirdiyini bildirdi.</p>
        <p className="container">Sonda Qoşqar müəllimin barelyef-guşəsinin üzərindəki örtü şəhid atası tərəfindən qaldırıldı, onun stendi və adına verilmiş sinif otağına baxış keçirildi. Qonaqlar şəhidimiz adına  ayrılmış “Xatirələr” dəftərinə öz ürək sözlərini yazdılar.</p>
      <CFooter />
    </>
  );
}

export default News1;
