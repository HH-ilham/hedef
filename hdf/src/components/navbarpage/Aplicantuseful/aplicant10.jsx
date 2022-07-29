import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
function Aplicant10() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
      Öyrəndiklərinizi rejimli şəkildə təkrar edirsinizmi?
      </p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
      Hafizəmizə çatan bir məlumatı özümüz üçün lazımlı etməyib, nizamlı aralıqlarla təkrar etməsək, qısa müddətdə unudarıq. Bütünlüklə öyrənilmiş məlumatları belə 24 saat ərzində təkrarlamasaq, 70% – ə qədərini unudarıq.
      </p>
      <p className="container">
      Təkrar necə tətbiq edilir?
      <li>Oxuma prosesinin sonunda ediləcək 5 dəqiqəlik təkrar məlumatın 1 gün qorunmasını təmin edir.</li>
      <li>Öyrəndikdən 24 saat sonra ediləcək 10 dəqiqəlik təkrar oxuduqlarınızın 1 həftə yaddaşda qalmağına kömək edir.</li>
      <li>1 həftə sonra edilən 20 dəqiqəlik təkrar öyrənilənlərin 1 ay yaddaşda qalmağına kömək edir.</li>
      <li>Məlumatı öyrəndikdən sonra edilən 30 dəqiqəlik son təkrar, məlumatın uzun müddət yaddaşınızda qalmağına çox təsir edəcəkdir.</li>
       
      </p>
      <p className="container">
      Oxumamaq Şagirdin oxumamasına təsir edən amillər:
      <li>Şagirdin qəbul ola bilməyəcəyini düşünməsi.</li>
      <li>Şagirdin imtahana psixoloji olaraq hazır olmaması.</li>
      <li>Şagirdin ətraf mühitdəki hadisələrə çox fikir verməsi və diqqətinin yayınmış olması; yəni eyni zamanda birdən çox fəaliyyətlə məşğul olması.</li>
      <li>Şagirdin bəlli bir hədəfi və o hədəflə bağlı layihələrinin olmaması</li>
      <li>Şagirdin imtahan qorxusunu davamlı olaraq yaşaması.</li>
      </p>
      <p className="container">
      Düzgün hazırlaşmamaq Düzgün hazırlaşmamaq, əslində lazımi zamanda lazımi dərsə hazırlaşmamaq mənasına gəlir. Əvvəlcə, istədiyiniz fakültəyə daxil olmaq üçün hansı dərsi nə qədər oxumalı olduğunuzu müəyyənləşdirməlisiniz.
      <li>Məqsədiniz əzbərləmək deyil, öyrənmək olmalıdır.</li>
      <li>Davamlı təkrarların əzbərə yol açacağını unutmayın.</li>
      <li>Test həll etdikdən sonra, əksikliklərinizin nə olduğunu təyin edin və nə cür səhvlər etdiyinizi tapmağa çalışın.</li>
      <li>Hazırlaşarkən və test həll edərkən musiqi dinləməyin, əks təqdirdə imtahan vaxtı da yenə musiqi sədaları altında test həll etmək istəyəcək, ancaq bu mümkün olmadığı üçün çətinlik çəkəcək və diqqətinizin yayınma halı ilə qarşı – qarşıya qalacaqsınız.</li>
      <li>Heç istirahət etmədən oxumaq da səhv oxuma üsuludur. Özünüzü ələ almalısınız və proqramınızı daha yaxşı tətbiq etmək üçün enerjili hala gəlməlisiniz.
Az hazırlaşmaq</li>
      <li>Vaxt baxımından lazımi qədər hazırlaşmamaq ən vacib əksikliklərdən biridir.Unutmamalısınız ki, hər kəs üçün yetərincə oxumaq vaxtı fərqlidir. Əgər bir dərs sizin üçün çətindirsə və o dərsi qavramaq sizə sıxıntı yaradırsa, siz bu dərsi ətrafınızdakılardan daha çox çalışmalısınız. “Başqalarının çalışmaq vaxtı və proqramı sizin çalışmaq vaxtınız və proqramınızla eyni ola bilməz.</li>
      <li>Hər dərs üçün yetərli oxumaq vaxtı da fərqlidir. Bir dərsə hazırlıq vaxtı olaraq ayıracağınız vaxt, o dərslə bağlı nə qədər problemlərinizin olmasından asılıdır.</li>
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

export default Aplicant10;
