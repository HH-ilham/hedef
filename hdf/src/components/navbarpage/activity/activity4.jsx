import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
function Activity4() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold aplicantheader">
        “Azərbaycan Universitetlərinin tanıtımı” adlı layihə həyata keçiriləcək
        – A24.AZ
      </h1>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>
      <p className="container fw-bold">
        A24.az saytı “Azərbaycan Universitetlərinin tanıtımı” adlı layihədən
        yazır..
      </p>
      <p className="container fw-bold">
        03 iyun 2017-ci il tarixdə Hədəf Kursları Azadlıq filialının sərgi
        zalında Hədəf Globalın təşkilatçılığı ilə Azərbaycan Univeristetlərinin
        sərgisi təşkil olunacaq.
      </p>
      <p className="container">
        <strong>A24.Az</strong>-ın verdiyi xəbərə görə, bu haqda Hədəf
        kurslarının rəsmi səhifəsində məlumat verib. Məlumata görə layihəni
        keçirməkdə məqsəd Azərbaycan Respublikası ərazisində fəaliyyət göstərən
        dövlət və özəl Universitetləri və orta ixtisas məktəblərini
        abituriyentərə tanıtmaqdır.
      </p>
      <p className="container">
        Səhifədə verilən məlumata görə, hər tədris ilinin sonunda abituriyentlər
        Univeristet və ixtisas seçimində müəyyən çətinliklər çəkir. Buna səbəb
        abituriyentlərin AR ərazisində fəaliyyət göstərən ali məktəblər, xüsusən
        də həmin ali məktəbdlərdə yeni yaradılan ixtisaslar haqqında yetərli
        məlumata sahib olmamamlarıdır. Layihəni həyata keçirməkdə əsas
        məqsədimiz abituriyentlərlə Universitet və Orta ixtisas məktəbləri
        nümayəndələrinin görüşünü təşkil etməkdir. Həmin görüş zamanı ali və
        orta ixtisas məktəblərinin təmsilçiləri öz qurumları haqqında
        abituriyentlərə ətraflı məlumat verəcək, abituriyentlər onları
        maraqlandıran sualların cavabını ala biləcək. İştirakçı təhsil
        müəssisələri və ziyarətçilər sərgidən ödənişsiz şəkildə yararlana
        biləcəklər.
      </p>
      <p className="container">
        Bir neçə beynəlxalq təhsil sərgisini nəzərə almasaq, bütün Azərbaycan
        Universitetlərinin iştirakı ilə təşkil olunan tanıtım sərgisi hələki
        ölkəmizdə keçirilməyib. “Azərbaycan Universitetləri tanıtımı” layihəsini
        bu istiqamətdə ilk hesab edə bilərik. Xaricdə yaşayan azərbaycanlıların
        və əcnəbi tələbələrin də ölkəmizdə təhsil ala bilmələri üçün gələcək
        illərdə “Azərbaycan Universitetləri tanıtımı” layihəsini xarici
        ölkələrdə də təşkil etmək planlaşdırılır. Layihədə iştirak etmək istəyən
        təhsil müəssisələri 25 may 2017-ci il tarixinə qədər öz iştiraklarını
        təsdiq etməlidirlər.
      </p>
      <p className="container">
        İstinad : https://goo.gl/BL58ZF <br />
        Tarix : 18.05.2017
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

export default Activity4;
