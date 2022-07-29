import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
function Aplicant13() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
      Abituriyentlər üçün imtahan öncəsi məsləhətləri təqdim edirik:
      </p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

    
      <p className="container">
      <li>İmtahana yaxşı hazırlaşın: İmtahan həyəcanı ilə başa çıxmanın əsas yolu imtahana kifayət qədər yaxşı hazırlaşmaqdır. İmtahan hazırlıqlarını son günə saxlamaq qayğılarınızı artıracaq.</li>
      <li>Optimist olun, pis fikirləri özünüzdən uzaqlaşdırın: İmtahan qorxusu səbəbindən mənfi düşüncələriniz arta bilər. Mənfi düşüncələrdən xilas olmağa çalışın, optimist olun. “Daha çox çalışmalıydım”, “Bilmədiyim suallar çox olacaq” kimi düşüncələr sizə faydalı olmaz. Bu səslərə “dur” deyin və “Bu imtahan üçün yetərincə hazırlaşdım”, “Yaxşı nəticə göstərəcək qədər biliyim var” və ya da “Yaxşı yaza bilməsəm belə, bu, dünyanın sonu deyil” kimi alternativ düşüncələrə fokuslaşın.</li>
      <li>Müvəffəqiyyətli olduğunuzu xəyal edin: Yaxşı idmançılar yarışda müvəffəqiyyətli olduqlarını xəyal edərlər. Siz də bunu imtahan həyəcanını azaltmaq üçün edə bilərsiniz. İmtahanda yaxşı nəticə əldə etdiyinizi xəyal etmək gerçək həyatda da bunu reallaşdırmanıza yardım edəcək.</li>
      <li>Həyəcanı atmanın yolları: İmtahan zamanı həddindən artıq həyəcan hiss edirsinizsə, dərindən nəfəs alın, nəfəs məşqləri edin, əzələ gərginliyini azaldan hərəkətlər edin.</li>
      <li>Xəstələnməməyə çalışın: Ard-arda verdiyiniz imtahanlar, gərgin dərs ilində  sağlamlığınıza laqeyd qala bilərsiniz. Lakin nizamlı olaraq idmanla məşğul olmaq, kifayət qədər yuxu yatmaq və yaxşı qidalanmaqla sizin üçün ən vacib məqamda xəstələnməyi önləyə bilərsiniz. İmtahan günü yaxşı qidalanın və süni enerji artıran maddələrdən istifadə etməyin. Çünki bu, həyəcanınızı artıra bilər.</li>
      <li>İmtahan verəcəyiniz yerə vaxtından əvvəl gəlin: Çalışın imtahana son anda girməyəsiniz. İmtahan vaxtından 10-15 dəqiqə əvvəl gəlib, mühitlə tanış olmaq həyəcanınızı da azaldacaq. Gecikmək isə həyəcanınızı daha çox artıracaq.  Ətrafınızda da həyəcanlı insanlar varsa, onlarla çox söhbət etməməyə çalışın.</li>
      <li>İmtahan zamanı diqqətinizi maksumum toplayın: İmtahan əsnasında diqqətinizin tamamilə test kitabçasınında olmasına diqqət edin. Əgər həyəcanınız buna imkan vermirsə, dayanın və diqqətinizi toplayın. Zehninizi rahatladın. İmtahan müddətindən doğru yararlanın. Yanınızda saat götürün və vaxtaşırı zamana nəzarət edin. İmtahana başlamazdan öncə imtahan kitabçasını bütövlükdə gözdən keçirin və təlimatları iki dəfə oxuyun. Ən asan sualdan başlayın, çətinlik çəkdiyiniz sualları sona saxlayın.</li>
      <li>Bir az həyəcan sizi uğura apara bilər: İmtahan zamanı əvvəl bir az həyəcanınızın  olması son dərəcə normaldır və hətta yaxşıdır. Əgər heç həyəcan hiss etmirsinizsə, əlinizdən gələnin ən yaxşısını edə bilməniz üçün bir motivasiya olmayacaq”.</li>
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

export default Aplicant13;
