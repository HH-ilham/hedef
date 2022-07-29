import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
function Aplicant8() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">Faydalı hazırlaşmaq!</p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
        Hazırlıq vaxtı-bir dəfə hazırlaşmaq üçün ayrılan vaxt ən az 45 dəqiqə ən
        çox isə 90 dəqiqə olmalıdır. Qısa aralar verərək edilən 1-2 saatlıq
        hazırlıq heç ara vermədən edilən 5 saatlıq hazırlıqdan daha faydalıdır.
        Əsas istifadə edilən vaxt deyil, o vaxtı necə dəyərləndirdiyindir. Hər
        gecə yatmamışdan əvvəl və hər səhər qalxdıqdan sonra 15-20 dəqiqə təkrar
        etməlisiniz. Bu, öyrəndiklərinizin möhkəmlənməsi üçün vacibdir.
      </p>
      <p className="container">
        <strong>Diqqət! </strong>Sizin üçün ən faydalı olan saatlarınızı çətin
        qavradığınız dərslərə ayırmalısınız. Qalan saatlarınızı isə çətinlik
        çəkdiyiniz digər mövzulara ayırmağınız çox gərəklidir. Əvvəlcə çətin
        olana nail olun və özünüzü mükafatlandırın.
      </p>
      <p className="container">
        <strong>Oxumağa iş kimi baxmayın! </strong>Oxumağın sizi hədəfinizə
        aparacağını, oxuduqca öyrənənəcəyinizi, öyrəndikcə isə sevincli
        anlarınızı düşünün.
      </p>
      <p className="container">
        Məqsədinizi müəyyənləşdirin! <br />
        Hansı sənəti seçəcəyinə qərar verməmiş bir şagirdin, necə hazırlaşmalı
        olduğu mövzusunda heç bir cəhdi baş tutmaz.Müvəffəqiyyət əldə etmək üçün
        məqsədinizi açıq və dəqiq olaraq müəyyənləşdirməlisiniz. “Müəllim olmaq
        istəyirəm!” ya da “Mühəndis olmaq istəyirəm!” əvəzinə “Ədəbiyyat
        müəllimi olmaq istəyirəm!” ya da “Kompyuter mühəndisi olmaq istəyirəm!”
        deməlisiniz. Məqsədlər davranışların başlanğıcıdır. Siz də işə
        məqsədinizi müəyyənləşdirməklə başlayın.
      </p>
      <p className="container">
        Hansı universitetdə oxumaq istəyirsiniz?
        <br />
        Sənətiniz nə olacaq?
        <br />
        Məqsədinizə çatmaq üçün keçməli olduğunuz maneələrin olduğunu
        bilirsinizmi?
        <br />
        Öz vəziyyətinizi bir daha, bu sualların işığında dəyərləndirin, “Bu
        hazırlıq məni hədəfimə çatdıracaqmı?” deyə soruşun. Gücünüzü aşacaq
        hədəflər, sizi uğursuzluğa apara bilər. İnancınızı itirməyinizə,
        dərslərdən uzaqlaşmağınıza səbəb ola bilər. Real hədəf isə sizi uğura
        aparar. Özünü zəif görmə, amma çox da güclü hesab etmə!
        <br />
        Vaxtınızı dərsləri hazırlamaq üçün deyil, daha effektli hazırlayaraq,
        həqiqətən başa düşmək üçün istifadə edin!
        <br />
      </p>
      <p className="container fw-bold">Müəllif: Şəmil Sadiq</p>
      <a href="#">
        <button type="button" className="aplicantbtn btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </button>
      </a>
      <CFooter />
    </div>
  );
}

export default Aplicant8;
