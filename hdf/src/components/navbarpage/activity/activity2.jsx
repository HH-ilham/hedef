import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/activty.css";
function Activity2() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold aplicantheader">
        “Fənlərin Dostluğu Olimpiadası” -8 qalibləri mükafatlandırlıdı!-
        İNTEQRASİYA.AZ
      </h1>
      <div className="branchbtn">
        <Link to="/Activity">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>
      <p className="container fw-bold">
        Dünya Azərbaycanlılarının Həmrəyliyi Gününə həsr olunan “Fənlərin
        Dostluğu Olimpiadası” qaliblərinin mükafatlandırılması keçirilmişdir.
      </p>
      <p className="container">
        23 dekabr 2017-cı il tarixində Bakı şəhəri Odlar Yurdu Universitetinin
        Böyük Akt zalında Azərbaycan Respublikası Prezidentinin Yanında Bilik
        Fondu, Odlar Yurdu Universiteti və Hədəf Kurslarının birgə
        təşkilatçılığı ilə 31dekabr “Dünya Azərbaycanlılarının Həmrəylik Günü”nə
        həsr olunan VIII “Fənlərin Dostluğu Olimpiadası”nın qaliblərinin
        mükafatlandırılması baş tutmuşdur. Respublikamızda fəaliyyət göstərən
        ümumtəhsil məktəblərinin Azərbaycan bölməsində təhsil alan IX-X sinif
        şagirdləri arasında keçirilən Olimpiadanın builki buraxılışında ölkənin
        müxtəlif bölgələrindən 1200-dən artıq şagird iştirak etmişdir.
        Olimpiadada ən yüksək bal toplamış ilk 10 şagird təşkilatçılar və
        sponsorlar tərəfindən qiymətli hədiyyələrlə mükafatlandırılmışlar. Bu
        ilki Olimpiadada ilk yerlərin qalibləri Sumqayıt şəhəri Texniki Təbiət
        elmləri Liseyin, Bakı şəhəri akademik Zərifə Əliyeva adına Liseyin və
        Bakı şəhəri Suraxanı rayonu 226 saylı tam orta məktəbin şagirdləri
        olmuşdur.
        <br />
      </p>
      <p className="container">
        Təqaüdçülərdən 47 nəfər Bakıda yerləşən məktəblərin məzunlarıdır. Daha
        sonra Sumqayıtda yerləşən məktəblərin məzunlarından 8, Abşeron,
        Biləsuvar, Naxçıvanda yerləşən məktəblərin hər birindən 4 nəfər olmaqla
        bilik öncüllərini siyahıda görmək olar. Ümumilikdə 5 nəfər isə işğal
        altında olan rayonlara aid məktəblərin məzunudur.
      </p>
      <p className="container">
        İdeya müəllifi f.ü.f.d., dos. Şamil Sadiq olan və 2010-cu ildə Hədəf
        Nəşrləri tərəfindən təsis edilən Olimpiadanın bu ilki buraxılışının
        dəstəkçiləri Medika Hospital, Hədəf Multimedia Mərkəzi, Altun Kitab,
        Azərbaycan Elm Assosiasiyası, Hedef Global, Kitabevim.az kitab
        mağazaları şəbəkəsidir. APA TV, edumap.az, Ustad dərgisi, senet.az
        portalı Olimpiadanın informasiya tərəfdaşlarıdır.
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

export default Activity2;
