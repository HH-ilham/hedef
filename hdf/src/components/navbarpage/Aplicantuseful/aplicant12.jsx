import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
function Aplicant12() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
      Sürətli və effektli oxumaq
      </p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
      Öyrənməyə təsir edən ən vacib amillərdən biri də “sürətli və effektli oxumaq”dır. Sürətli oxumağın yavaş oxumağa nisbətən daha yaxşı qavranıldığı qəbul edilir. Çünki yavaş oxuyarkən diqqət daha tez yayınır.
      </p>
      <p className="container">
       <li>Yavaş oxuma sürəti dəqiqədə 100-200 söz</li>
       <li> Normal oxuma sürəti dəqiqədə 200-250 söz</li>
       <li>Sürətli oxuma sürəti dəqiqədə 400-500 söz arasındadır.</li>
       Sürətlə və effektlə oxumaq üçün: Bir kitabın və ya bir yazının hansı mövzuları əhatə etdiyini bilmək üçün: v Mündəricat səhifəsini gözdən keçirin.
       <li>Yazının ön söz və nəticə qismləri mütləq oxunmalıdır.</li>
       <li>Seçilən qism və ya mövzu,diqqətlə və bilinən bir sürətlə bölmə bölmə oxunmalıdır.</li>
       <li>Bölmənin və ya yazının ilk və son bölmələrinə diqqət yetirilməlidir, çox zaman əsas ideyanı bu bölmədən çıxarma ehtimalı vardır.</li>
       <li>Vacib hesab edilən qismlərin altını xətləyin, ya da yanına işarə qoyun.</li>
       <li>Mətnin içindəki qrafik, şəkil, qayda və başqa materiallar diqqətlə incələnməlidir.</li>
       <li>Oxumaq insanı müdrikləşdirir. v Danışmaq ustalaşdırır.</li>
       <li>Yazmaq daha konkret məlumatla təmin edir.</li>
       <li>Şeir mənəvi zənginlikdir.</li>
       <li>Riyaziyyat dəqiqlik,incəlikdir.</li>
       <li>Təbiət elmləri dərinlikdir.</li>   
       <li>Məntiq söz söyləmə sənəti və mübahisə bacarığı qazandırır.SSODT üsulu (seyr et, soruş, oxu, danış, test et)</li> 
Seyr et bölmə içində nələrin olduğuna dair fikirlərin olması üçün giriş və nəticə qismləri ilə əsas başlıq, şəkil, rəsm və qrafiklərə (3-4 dəq) göz gəzdirilməlidir.<br/>
Soruş göz gəzdirmə mərhələsində mövzu ilə əlaqəli suallar qurun. “Nələri öyrənməyi gözləyirsiniz?”, “Nə, necə və harada?” suallarını qurun və bir kağıza yazıb göz qabağına qoyun. Oxu beyninizdə əmələ gələn ümumi fikrə və qurduğunuz suallara görə mətni oxumağa başlayın. Sualların cavabı olan hissəni işarələyin. Tərif, bənzərlik və fərqlilik bildirən hissələrin altından qara xətt çəkin.Vacib olan bölmələrə də fərqli işarələr qoyun, əsas ideyanı müəyyənləşdirib, qeydlər aparın. Danış Kitaba baxmadan qeydlərinizdən istifadə edərək yüksək səslə danışın.
      </p>
      <p className="container">
      – Qurduğunuz suallara cavab verin.<br/>
– Vacib hissələri açıqlayın.<br/>
– Mövzunu danışaraq təkrarlayın.<br/>
Test et kitaba ya da qeydlərinizə baxmadan özünüzü test edəcək suallar soruşun. Bu edilənlərdən sonra ana fikrin, açar sözlərlə yaranan sual və cavabların tam bir şəkildə yerləşmiş olması lazımdır. Bu da mövzunun öyrənildiyini göstərir.
      </p>
     
      <p className="container fw-bold">Müəllif: Şəmil Sadiq</p>
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

export default Aplicant12;
