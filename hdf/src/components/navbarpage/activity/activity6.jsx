import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
function Activity6() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold aplicantheader">
        “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata keçiriləcək
        -QAZİLER.AZ
      </h1>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>
      <p className="container fw-bold">
        Qaziler.az saytı “Azərbaycan Universitetlərinin tanıtımı” adlı
        layihəmizdən yazır..
      </p>
      <p className="container fw-bold">
        03 iyun 2017-ci il tarixdə Hədəf Kursları Azadlıq filialının sərgi
        zalında Hədəf Globalın təşkilatçılığı ilə Azərbaycan Univeristetlərinin
        sərgisi təşkil olunacaqdır.
      </p>
      <p className="container">
        Təqaüdçülərdən 47 nəfər Bakıda yerləşən məktəblərin məzunlarıdır. Daha
        sonra Sumqayıtda yerləşən məktəblərin məzunlarından 8, Abşeron,
        Biləsuvar, Naxçıvanda yerləşən məktəblərin hər birindən 4 nəfər olmaqla
        bilik öncüllərini siyahıda görmək olar. Ümumilikdə 5 nəfər isə işğal
        altında olan rayonlara aid məktəblərin məzunudur.Layihəni keçirməkdə
        məqsəd Azərbaycan Respublikası ərazisində fəaliyyət göstərən dövlət və
        özəl Universitetləri və orta ixtisas məktəblərini abituriyentərə
        tanıtmaqdır.
      </p>
      <p className="container">
        Bu barədə QAZİLER.AZ-a layihə rəhbərliyi xəbər verib.
      </p>
      <p className="container">
        Hər tədris ilinin sonunda abituriyentlər Univeristet və ixtisas
        seçimində müəyyən çətinliklər çəkirlər. Buna səbəb abituriyentlərin AR
        ərazisində fəaliyyət göstərən ali məktəblər, xüsusən də həmin ali
        məktəbdlərdə yeni yaradılan ixtisaslar haqqında yetərli məlumata sahib
        olmamamlarıdır. Layihəni həyata keçirməkdə əsas məqsədimiz
        abituriyentlərlə Universitet və Orta ixtisas məktəbləri nümayəndələrinin
        görüşünü təşkil etməkdir. Həmin görüş zamanı ali və orta ixtisas
        məktəblərinin təmsilçiləri öz qurumları haqqında abituriyentlərə ətraflı
        məlumat verəcək, abituriyentlər onları maraqlandıran sualların cavabını
        ala biləcəklər. <br />
        İştirakçı təhsil müəssisələri və ziyarətçilər sərgidən ödənişsiz şəkildə
        yararlana biləcəklər.
      </p>
      <p className="container">
        Bir neçə beynəlxalq təhsil sərgisini nəzərə almasaq, bütün Azərbaycan
        Universitetlərinin iştirakı ilə təşkil olunan tanıtım sərgisi hələki
        ölkəmizdə keçirilməyib. “Azərbaycan Universitetləri tanıtımı” layihəsini
        bu istiqamətdə ilk hesab edə bilərik. Xaricdə yaşayan azərbaycanlıların
        və əcnəbi tələbələrin də ölkəmizdə təhsil ala bilmələri üçün gələcək
        illərdə “Azərbaycan Universitetləri tanıtımı” layihəsini xarici
        ölkələrdə də təşkil etmək planlaşdırılır.
        <br />
      </p>
      <p className="container">
        Layihədə iştirak etmək istəyən təhsil müəssisələri 25 may 2017-ci il
        tarixinə qədər öz iştiraklarını təsdiq etməlidirlər.
      </p>
      <p className="container">
        İstinad : https://goo.gl/H7uBTq
        <br />
        Tarix : 18 May 2017
      </p>{" "}
      <a href="#">
        <button type="button" className="activitybtn btn btn-success">
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

export default Activity6;
