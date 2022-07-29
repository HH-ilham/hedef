import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";  
const Aplicantuseful = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <h4 className="text-center fw-bold m-3">ABİTURİYENTƏ FAYDALI XƏBƏRLƏR</h4>
      {/* 1 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
         
         <div className="col-md-3">
         <Link to="/Aplicant1"> <img
            src=".././images/hadafgroup.jpg"
            style={{ maxWidth: "100%" }}
            className="card-img"
            alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
            <h5 className="card-title">
                Prezident təqaüdünə layiq görülən tələbələr respublikanın 27
                şəhər və rayonunu təmsil edirlər
              </h5>
              <p className="card-text">
                Prezident İlham Əliyevin 9 sentyabr tarixli Sərəncamına əsasən
                2019/2020-ci tədris ilində Azərbaycan Respublikasının ali
                məktəblərinə daxil olmuş tələbələrə Prezident təqaüdü veriləcək.
                Dövlət İmtahan Mərkəzindən bildirilib ki, bu il Prezident
                təqaüdünə layiq görülən tələbələr respublikanın 27 şəhər və
                rayonunu təmsil edirlər. Təqaüdçülərin demək olar ki, yarısı
                regionlarda fəaliyyət göstərən məktəblərdən (o cümlədən 8 nəfər
                kənd […]
              </p>
              <p className="card-text">
                <small className="text-muted">10/Sentyabr/2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant2">   <img
              src=".././images/dim.png"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Cari ilin buraxılış imtahanlarında üzrlü səbəbdən iştirak edə
                bilməyənlərin nəzərinə
              </h5>
              <p className="card-text">
                Dövlət İmtahan Mərkəzi (DİM) 2019-cu ildə keçirilmiş buraxılış
                imtahanlarında üzrlü səbəbdən iştirak edə bilməyən şagirdlər
                üçün sentyabrın 8-də əlavə imtahan keçirəcək. DİM-dən Senet.az-a
                bildirilib ki, buraxılış imtahanları Bakı və Gəncə şəhərlərində
                təşkil olunacaq. İmtahanlarda IX sinif buraxılış imtahanının I
                mərhələsi üzrə 668, II mərhələsi üzrə 443, XI sinif üzrə 120
                şagirdin iştirakı gözlənilir. Bundan əlavə, […]
              </p>
              <p className="card-text">
                <small className="text-muted">06/Sentyabr/2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant3"> <img
              src=".././images/semil1.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">
                Şagirdə qiymət yazılmasa… – Şəmil Sadiq
              </h5>
              <p className="card-text">
                Qiymət… Bu gün dünya təhsil sistemində danışılan ən önəmli
                amillərdən biri də şagirdin biliyinə verilən qiymətdir. Yəni
                qiymətləndirmə sistemi. Düzü, araşdırsaq da, elə bir qaynaq tapa
                bilmədik ki, ilk dəfə şagird biliyinə qiyməti hansı ölkədə,
                harda veriblər. Verilən tapşırığı yerinə yetirməyəndə cəzalar
                çox olub, amma yaxşı yerinə yetirənə nəsə bir qiymət
                verilməsinin tarixini […]
              </p>
              <p className="card-text">
                <small className="text-muted">30/Yanvar/2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant4"> <img
              src=".././images/alm2.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Almaniya təhsil sistemi</h5>
              <p className="card-text">
                3-6 yaş arası məcburi olmayan, amma çox məşhur məktəbəqədər
                təhsil müəssisələri (Kindergarten) mövcuddur. Məcburi olmamasına
                qarşı uşağın inkişafı və dil öyrənməsi baxımından tövsiyə edilən
                bir sistemdir. Bununla belə daha kiçik uşaqların da gedə
                biləcəyi körpələr evləri və qrupları da vardır. […]
              </p>
              <p className="card-text">
                <small className="text-muted">16/Yanvar/2018</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant5"> <img
              src=".././images/yapon.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Yaponiya təhsil sistemi</h5>
              <p className="card-text">
                Təhsil sistemi çalışqanlıq, fərdin özünü sorğulaması və nizamlı
                iş vərdişlərinin əldə edilməsi üzərinə qurulmuşdur. Şagirdlərin
                məktəb həyatının böyük bir hissəsi, doğrudan ya da dolayısı ilə
                mənəvi davranış və xarakter inkişafının öyrənilməsidir.
                Məktəbdəki dərsliklər Yapon cəmiyyətinin və mədəniyyətinin əsas
                dəyərlərini öyrətməyə həsr olunur. Eyni zamanda Yapon
                şagirdlərinin akademik nailiyyətləri beynəlxalq standartlardan
                yüksəkdir. […]
              </p>
              <p className="card-text">
                <small className="text-muted">16/Yanvar/2018</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*6*/}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
           <Link to="/Aplicant6"><img
              src=".././images/stress.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Öyrənmə prosesində stress və ona qarşı tədbirlər</h5>
              <p className="card-text">
              Stress nədir? Necə yaranır? Stressin təməlində qorxu dayanır. Qorxu isə bütün canlılarda özünü qoruma instikti ilə əlaqədardır. İnsan özünə qarşı yönəlmiş təhlükə hiss edəndə beynin amiqdala adlı “qorxu mərkəzi” aktivləşir, sürətli qərar verməsi üçün onun geniş düşünmə qabiliyyəti itir və orqanizm don-vur-qaç rejiminə keçir. Bu cür şəraitdə insan təhlükənin miqyasından asılı olaraq ya yerində donmalı, […]
              </p>
              <p className="card-text">
                <small className="text-muted">14/Oktyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant7"> <img
              src=".././images/abituryent.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Abituriyent necə uğur qazanar?</h5>
              <p className="card-text">
              Uğur əldə etmək üçün sistemli və planlı olmaq lazımdır. Sistemli və planlı hazırlaşmağın ən yaxşı yolu, bir hazırlıq proqramına sahib olmaqdır. Tərtib etdiyiniz çalışma proqramının sizi qələbəyə aparması üçün əvvəlcə uğursuzluğa səbəb olan amilləri aradan qaldırmalısınız. Bu mənfi amillər bunlardır. • İlkin hazırlıq etməmək. • Mövzunu tam qavramamaq. • Dərsə qulaq asmamaq. • Qeyd aparmamaq. […]
              </p>
              <p className="card-text">
                <small className="text-muted">20/Sentyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 8 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant8"><img
              src=".././images/faydalihazirlas.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Faydalı hazırlaşmaq!</h5>
              <p className="card-text">
              Hazırlıq vaxtı-bir dəfə hazırlaşmaq üçün ayrılan vaxt ən az 45 dəqiqə ən çox isə 90 dəqiqə olmalıdır. Qısa aralar verərək edilən 1-2 saatlıq hazırlıq heç ara vermədən edilən 5 saatlıq hazırlıqdan daha faydalıdır. Əsas istifadə edilən vaxt deyil, o vaxtı necə dəyərləndirdiyindir. Hər gecə yatmamışdan əvvəl və hər səhər qalxdıqdan sonra 15-20 dəqiqə təkrar etməlisiniz. […]
              </p>
              <p className="card-text">
                <small className="text-muted">20/Sentyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 9 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant9">  <img
              src=".././images/images1.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">İmtahanda həyəcanlanırsınız?</h5>
              <p className="card-text">
              İmtahan təcrübəsi qazanmaq İmtahana hazırlaşarkən şagirdin mövzuları öyrənməsi, mövzu ilə bağlı problemləri həll edə bilməsi, onun imtahana hazır olduğunu göstərmir. İmtahanda necə davranılacağı, hansı bölmələrdən başlayıb, hansı bölməyə nə qədər vaxt ayrılacağı müəyyənləşdirilməli, təcrübə qazanılmış şəkildə imtahana girilməlidir. • Sınaq imtahanları həqiqi imtahan kimi qəbul edilməlidir. • İmtahan həyəcanı və səhv etmə faizi sınaq imtahanları […]
              </p>
              <p className="card-text">
                <small className="text-muted">20/Sentyabr/2017</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 10 */}
      <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-3">
          <Link to="/Aplicant10"> <img
              src=".././images/images2.jpg"
              style={{ maxWidth: "100%" }}
              className="card-img"
              alt="..."
            /></Link>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Öyrəndiklərinizi rejimli şəkildə təkrar edirsinizmi?</h5>
              <p className="card-text">
              Hafizəmizə çatan bir məlumatı özümüz üçün lazımlı etməyib, nizamlı aralıqlarla təkrar etməsək, qısa müddətdə unudarıq. Bütünlüklə öyrənilmiş məlumatları belə 24 saat ərzində təkrarlamasaq, 70% – ə qədərini unudarıq. Təkrar necə tətbiq edilir? • Oxuma prosesinin sonunda ediləcək 5 dəqiqəlik təkrar məlumatın 1 gün qorunmasını təmin edir. • Öyrəndikdən 24 saat sonra ediləcək 10 dəqiqəlik təkrar […]
              </p>
              <p className="card-text">
                <small className="text-muted">20/Sentyabr/2017</small>
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
          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant11"> <img
                  src=".././images/images3.png"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Hazırlıq proqramı necə olmalıdır?</h5>
                  <p className="card-text">
                  Həftəlik dərs oxuma proqramını hazırlayarkən, gündəlik fəaliyyətinizi həftənin hər günü üçün ayrı-ayrı nəzərdən keçirməlisiniz. İstifadə edilə bilən proqram hazırlamaq üçün fəaliyyətinizi real olaraq proqramınızda əks etdirməlisiniz. Keçmişdə uğur əldə etmək üçün təklif olunan düşüncə “Oxumaq, oxumaq və yenə də oxumaq” şəklində idi. Halbuki günümüzdə çox oxumaq əvəzinə, “Təsirli və planlı şəkildə hazırlaşmaq” şüarı daha məqsədə uyğundur. […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant12">   <img
                  src=".././images/images4.jpg"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                  alt="..."
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Sürətli və effektli oxumaq</h5>
                  <p className="card-text">
                  Öyrənməyə təsir edən ən vacib amillərdən biri də “sürətli və effektli oxumaq”dır. Sürətli oxumağın yavaş oxumağa nisbətən daha yaxşı qavranıldığı qəbul edilir. Çünki yavaş oxuyarkən diqqət daha tez yayınır.  Yavaş oxuma sürəti dəqiqədə 100-200 söz  Normal oxuma sürəti dəqiqədə 200-250 söz  Sürətli oxuma sürəti dəqiqədə 400-500 söz arasındadır. Sürətlə və effektlə oxumaq üçün: Bir kitabın […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant13"> <img
                  src=".././images/images5.jpg"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                  alt="..."
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Bir az həyəcan sizi uğura apara bilər..</h5>
                  <p className="card-text">
                  Abituriyentlər üçün imtahan öncəsi məsləhətləri təqdim edirik: 1. İmtahana yaxşı hazırlaşın: İmtahan həyəcanı ilə başa çıxmanın əsas yolu imtahana kifayət qədər yaxşı hazırlaşmaqdır. İmtahan hazırlıqlarını son günə saxlamaq qayğılarınızı artıracaq. 2. Optimist olun, pis fikirləri özünüzdən uzaqlaşdırın: İmtahan qorxusu səbəbindən mənfi düşüncələriniz arta bilər. Mənfi düşüncələrdən xilas olmağa çalışın, optimist olun. “Daha çox çalışmalıydım”, “Bilmədiyim suallar çox […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant14">  <img
                  src=".././images/images6.jpg"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                  alt="..."
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">XVII-XVIII əsr Azərbaycan ədəbiyyatının epik şeir nümunələrində süjet qaynaqları </h5>
                  <p className="card-text">
                  Çoxəsrlik tarixə malik ədəbiyyatımız dünya ədəbiyyatının içərisində özünə məxsus zənginliyi ilə seçilir. Ədəbiyyatımız daha çox özündə şərq ədəbiyyatının təsirlərini yaşadır. Burada diqqəti daha çox cəlb edən süjet ortaqlığıdır . Ortaq süjetlər üzərində qurulan fərqli əsərlər özünəməxsusluğu ilə diqqəti cəlb edir. XVII-XVIII əsr sənətkarları əsərlərinin süjetlərinə görə nə qədər Füzulinin təsiri altında olsalar da, Hind ədəbiyyatından […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant15"><img
                  src=".././images/images7.jpg"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                  alt="..."
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Sinqapur təhsil sistemi – Uğura gedən yol</h5>
                  <p className="card-text">
                  Necə oldu ki, Sinqapur 40 il ərzində  Üçüncü Dünya ölkəsindən Birinci Dünya ölkəsinə keçid etdi  və təhsil burada necə rol oynadı ? “Biz özümüzü kəskin rəqabət və daim artmaqda olan dəyişiklik  dolu gələcəyə hazır etməliyik. GohChok Tong,  BaşNazir, Sinqapur, 1997 Sinqapur təhsil sisteminin əsas məqsədi şagirdləri həyatın hər bir anında lazım ola biləcək təhsillə təmin […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 container" style={{ maxWidth: "100%" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
              <Link to="/Aplicant16"><img
                  src=".././images/images8.jpg"
                  style={{ maxWidth: "100%" }}
                  className="card-img"
                  alt="..."
                /></Link>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Finlandiya təhsilinin özəllikləri</h5>
                  <p className="card-text">
                  Pulsuz məktəblər, qısa dərs saatları, əylənərək öyrətmək, sərbəstlik və öz üzərində işləmək bacarığını aşılamaq Finlandiya təhsil sisteminin əsasını təşkil edir. Finlandiyada şagirdlər məktəbə 7 yaşından başlayırlar. Yaşlarından asılı olmadan, şagirdlər məktəbə valideynsiz gəlirlər. Məktəblərdə şagirdləri sərbəst yetişdirməyə önəm verirlər. Şagirdlər, öz ehtiyacları doğrultusunda şəxsi təhsil proqramlarını formalaşdırmaq haqlarına sahibdirlər.  7 – 16 yaş aralığında  […]
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    20/Sentyabr/2017
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CFooter />
    </div>
  );
};

export default Aplicantuseful;
