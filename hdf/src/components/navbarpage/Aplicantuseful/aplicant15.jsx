import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import { Link } from "react-router-dom";
import "../../../CSS/website/aplicant.css";
import Table from "react-bootstrap/Table";
function Aplicant15() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold aplicantheader">
        Sinqapur təhsil sistemi – Uğura gedən yol
      </p>
      <div className="branchbtn">
        <Link to="/Aplicantuseful">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
      </div>

      <p className="container fw-bold">
        Necə oldu ki, Sinqapur 40 il ərzində Üçüncü Dünya ölkəsindən Birinci
        Dünya ölkəsinə keçid etdi və təhsil burada necə rol oynadı ?
      </p>
      <p className="container">
        “Biz özümüzü kəskin rəqabət və daim artmaqda olan dəyişiklik dolu
        gələcəyə hazır etməliyik.
        <br />
        GohChok Tong, BaşNazir, Sinqapur, 1997
      </p>
      <p className="container">
        Sinqapur təhsil sisteminin əsas məqsədi şagirdləri həyatın hər bir
        anında lazım ola biləcək təhsillə təmin etməkdir. İkitərəfli siyasət
        (multi-kultural və çox millətli) Sinqapur təhsil sisteminin əsas
        xüsusiyyətidir. İkitərəfli siyasət nəticəsində hər bir tələbə beynəlxalq
        dil olan ingilis dilini öyrənir. Şagirdlər həmçinin öz etnik kimliyini,
        mədəniyyətini, milli və mədəni dəyərlərini bilmək üçün öz ana dilləri
        olan çin, malay və ya tamil dillərini də öyrənirlər.
      </p>
      <p className="container">
        Bu təhsil sisteminin əsas tələbi şagirdləri 8 əsas bacarıq vasitəsilə
        hərtərəfli şəxsiyyət kimi – əxlaqi, mənəvi, intellektual, fiziki və
        estetik cəhətdən yetişdirməkdir.
      </p>
      <p className="container">
        Sinqapurda hər bir şagirdin ən az 10 il təhsil almaq imkanı var. Bu, 6
        illik ibtidai təhsildən və 4 illik orta təhsildən ibarətdir. Şəgirdlər
        ibtidai və orta təhsilin sonunda imtahan verməlidirlər. Orta təhsildən
        sonra şagirdlərin öz seçimlərinə uyğun şəkildə təhsillərini davam
        etdirmək imkanları var.
      </p>
      <p className="container fw-bold">
        Sinqapur təhsil sistemində təhsilin arzu edilən nəticələri
        aşağıdakılardır :
        <br />
      </p>
      <div className="container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Şagirdlər ibtidai təhsilin sonunda </th>
              <th>Şagirdlər orta təhsilin sonunda</th>
              <th> Şagirdlər universitetdən əvvəlki pillənin sonunda </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doğrunu yanlışdan ayıra bilir</td>
              <td>Şəxsiyyət kimi düzgün xarakterə malik olurlar</td>
              <td>Dayanıqlı və cəsarətli olurlar</td>
            </tr>
            <tr>
              <td>Paylaşmağıvə digərlərini ön plana qoymağı öyrənmiş olur</td>
              <td>Başqalarına qayğıvə kömək göstərirlər</td>
              <td>Cəmiyyətə qarşı məsuliyyətlilik hissi olur</td>
            </tr>
            <tr>
              <td>Başqaları ilə dostluq əlaqələri qurmağı bacarır</td>
              <td>Komanda ilə işləyə bilir, cəmiyyətə töhfə verə bilirlər</td>
              <td>
                Başqalarını necə ruhlandırmağı və motivasiya etməyi dərk edirlər
              </td>
            </tr>
            <tr>
              <td>Onlarda digər şeylər haqqında maraq yaranır</td>
              <td>Yenilikçi olurlar</td>
              <td>Yenilikçi və yaradıcı olurlar</td>
            </tr>
            <tr>
              <td>Düşünməyi və özlərini ifadə etməyi bacarırlar</td>
              <td>
                Növbəti pillədə alacaqları təhsil üçün yaxşı bazaya sahib
                olurlar
              </td>
              <td>Müstəqil və yaradıcı düşünə bilirlər</td>
            </tr>
            <tr>
              <td>Gördükləri işlərlə fəxr edirlər</td>
              <td>Öz bacarıqlarınainanırlar</td>
              <td>Mükəmməllik uğrunda mübarizə aparırlar</td>
            </tr>
            <tr>
              <td>Sağlam vərdişlərə sahib olurlar</td>
              <td>Estetik zövqə sahib olurlar</td>
              <td>Yaşama səbəbləri olur</td>
            </tr>
            <tr>
              <td>Sinqapuru sevirlər</td>
              <td>Sinqapuru tanıyır və onainanırlar</td>
              <td>Artıq Sinqapuru necə idarə etməyin yolunu başa düşürlər</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <p className="container fw-bold">Sinqapurda özəl təhsil</p>
      <p className="container">
        Bəzi valideynlər övladlarını məktəbdən sonra özəl təhsil almasını
        istəyir ki, bu da Sinqapurda gəlirli sahəyə çevrilmişdir.
        <br />
        2008-ci ildə aparılan sorğuda məlum olmuşdur ki, hər 100 şagirddən
        yalnız 3-ü özəl təhsil almır.2010-cu ilin statistikasına əsasən
        Sinqapurda 540 tədris mərkəzi özəl təhsil təklif edir.Artan tələbata
        görə tədris mərkəzləri xidmətlərinə görə olduqca yüksək xidmət haqqı
        alırlar.Məsələn, 2005-ci ildə bu sahədən alınan gəlir $110.6 milyon
        olmuşdur.Ölkədə geniş şəkildə yayılmasına baxmayaraq, özəl təhsil
        məsələsi Sinqapurda ixlilaflı məsələlərdəndir.
        <br />
        Bəzi valideynlər övladlarını fərdi müəllim yanına göndərir, çünki onlar
        qorxur ki, övladları sinifdə digərlərindən geri qalar və ya çünki ola
        bilərki, müəllim sillabusda verilən dərsləri dərs müddətində tam şəkildə
        əhatə etməz. Müəllimlər və məktəblər zəif şagirdləri fərdi müəllim
        dəstəyi almaq üçün ruhlandırır, lakin Təhsil Nazirliyinin bu məsələdə
        mövqeyi belədir:“ Müəllimlər şagirdlərə özəl dərsi tövsiyə
        etməməlidirlər.”
        <br />
        Digər tərəfdən,bəziləri özəl təhsilin uşaqların dərs müddətində
        fikirlərini yayındırdığını (çünki şagirdlər fikirləşirki, indi dərsə
        qulaq asmasa özəl dərs aldıqda müəllim bu dərsi yenidən izah
        edəcək)deyərək bunu tənqid edir.
        <br />
        Bəzi tədris mərkəzləri şagirdlərin məktəbdəki ev tapşırıqlarını da
        edirki, bu da uşaqları sərbəst düşünmə qabiliyyətindən məhrumedir. Bir
        qism insanların fikrinə görə isə, özəl təhsil şagirdlərin boş vaxtını
        istismar edir.Təhsil haqqının olduqca yüksək olduğunu nəzərə alaraq deyə
        bilərik ki, aztəminatlı ailələr öz övladlarını fərdi müəllim yanına
        göndərə bilmir.
        <br />
        Rəsmi hökumətin isə bu məsələ ilə bağlı mövqeyi belədir : “Aydındır ki,
        valideynlər övladları üçün hər şeyin ən yaxşısını istəyir və özəl dərs
        alıb almamaq onların öz şəxsi məsələləridir. ”
      </p>

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

export default Aplicant15;
