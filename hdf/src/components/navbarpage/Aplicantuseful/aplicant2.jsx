import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
function Aplicant2() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
      Cari ilin buraxılış imtahanlarında üzrlü səbəbdən iştirak edə bilməyənlərin nəzərinə
      </p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
      Dövlət İmtahan Mərkəzi (DİM) 2019-cu ildə keçirilmiş buraxılış imtahanlarında üzrlü səbəbdən iştirak edə bilməyən şagirdlər üçün sentyabrın 8-də əlavə imtahan keçirəcək.
      </p>
      <p className="container">
      DİM-dən Senet.az-a bildirilib ki, buraxılış imtahanları Bakı və Gəncə şəhərlərində təşkil olunacaq.<br/>

İmtahanlarda IX sinif buraxılış imtahanının I mərhələsi üzrə 668, II mərhələsi üzrə 443, XI sinif üzrə 120 şagirdin iştirakı gözlənilir. Bundan əlavə, Azərbaycan dilindən fərqli bölmə üzrə təhsil alan 58 şagird Azərbaycan dili imtahanı verəcək.
        <br />
      </p>
      <p className="container">
      İmtahanların idarə olunması üçün 12 imtahan rəhbəri, 97 nəzarətçi-müəllim ayrılıb. İmtahanlar bütün binalarda eyni vaxtda – saat 11:00-da başlanacaq. İmtahanın başlanmasına 15 dəqiqə qalmış (saat 10:45) buraxılış rejimi başa çatır. Bundan sonra gələn iştirakçılar imtahan binasına buraxılmır. İmtahan binasına buraxılış vərəqəsində qeyd olunan vaxtda gəlmək lazımdır.
        <br />
      </p>
      <p className="container">
      Bəzi imtahan binalarına giriş zamanı imtahan iştirakçılarının şəxsiyyətini dəqiqləşdirmək məqsədilə “Face Recognition” (üzün tanınması) texnologiyasına əsaslanan proqram-texniki vasitələrdən istifadə olunacaq. Bu texnologiyanın tətbiq edilməsində əsas məqsəd abituriyentlərin imtahan binasına buraxılış rejimini daha sürətli həyata keçirmək və qeydiyyatdan keçmiş abituriyentlərin əvəzinə başqa bir şəxsin imtahan binasına daxil olmasının qarşısını almaqdır.
        <br />
      </p>
      <p className="container">
      Bu imtahanlarda iştirak edəcək şagirdlər “İmtahana buraxılış vərəqəsi”ni internet vasitəsilə sentyabrın 2-dən etibarən çap edib götürə bilirlər. Bununla yanaşı, onlara “Yaddaş kitabçası”ndan çıxarış da təqdim olunur. Burada şagirdlərə imtahan prosesi ilə bağlı vacib tövsiyələr, onların əməl etməli olduqları qaydalar və digər zəruri məlumatlar çatdırılır.
        <br />
      </p>
      <p className="container">
      Şagirdlər imtahana aşağıda qeyd olunan sənədləri gətirməlidirlər:<br/>

– İmtahana buraxılış vərəqəsi<br/>

– Şəxsiyyəti təsdiq edən sənədin əsli<br/>

– Azərbaycan Respublikasının vətəndaşları (16 yaşı tamam olmayan şagirdlər də daxil olmaqla) şəxsiyyət vəsiqəsini;<br/>

– Əcnəbilər şəxsi pasportları və icazə vəsiqələri, vətəndaşlığı olmayan şəxslər şəxsiyyət vəsiqələrini və icazə vəsiqələrini, qaçqın statusu almış xarici vətəndaşlar və onların ailə üzvləri isə qaçqın vəsiqələrini;<br/>

– Şəxsiyyət vəsiqəsində şəkli olmayan şagirdlər digər sənədlərlə yanaşı, təhsil müəssisəsi tərəfindən verilmiş və fotoşəkilləri yapışdırılmış arayışı (arayışa şagirdin 3×4 sm ölçülü şəkli yapışdırılır və şəkil möhürlə təsdiqlənir).<br/>

Bu sənədlərdən biri olmayan və ya sənədləri arasında uyğunsuzluq olan şəxslər imtahan binasına buraxılmayacaq.<br/>
        <br />
      </p>
     
      <a href="#">
          <button type="button" className="aplicantbtn btn btn-success">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
          </button>
        </a>
      <CFooter />
    </div>
  );
}

export default Aplicant2;
