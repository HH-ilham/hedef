import React from "react";
import Navbar from "../../Navbar";
import TopBar from "../../TopBar";
import CFooter from "../../cFooter";
import "../../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import { TabTitle } from "../../TitleFunction";
import Table from "react-bootstrap/Table";
import PrintComponents from "react-print-components";
const Testsubject1 = () => {
  TabTitle("Buraxılış fənləri üzrə MQT 5 mövzuları  Azərbaycan bölməsi");
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold branchheader">
        Buraxılış fənləri üzrə MQT 5 mövzuları Azərbaycan bölməsi
      </h1>
      <div className="branchbtn">
        <div className="printbtncom">
          <PrintComponents
            trigger={
              <button className="printbtn btn btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-printer-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
              </button>
            }
          >
            <div className="container">
              <Table striped="columns">
                <thead>
                  <th className="text-center fs-4">
                    Buraxılış mövzuları 1 - 01/05/2022
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center fw-bold">IX sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Səs və hərf. Sait səslər. Saitlərin deyilişi və
                      yazılışı. Ahəng qanunu. Samit səslər. Samitlərin deyilişi
                      və yazılışı. Sözlərin sonunda cingiltili samitlərin
                      yazılışı və tələffüzü. Sonu q və k ilə bitən sözlərin
                      yazılışı və tələffüzü. . Qoşa samitlə bitən təkhecalı
                      sözlər. Vurğu. Sözün sətirdən-sətrə keçirilməsi. Fonetik
                      təhlil.
                      <br />
                      <strong>İngilis dili</strong>
                      <br />
                      Noun. To be. There is / are. It is. Vocabulary (V sinif
                      unit 1– 8 daxil olmaqla). Listening and Reading
                      Comprehension
                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                      Лексикология. Лексическое значение слова. Прямое и
                      переносное значение слова. Синонимы. Антонимы.
                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center fw-bold">X sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Səs və hərf. Sait səslər. Saitlərin deyilişi və
                      yazılışı. Ahəng qanunu. Samit səslər. Samitlərin deyilişi
                      və yazılışı. Sözlərin sonunda cingiltili samitlərin
                      yazılışı və tələffüzü. Sonu q və k ilə bitən sözlərin
                      yazılışı və tələffüzü. . Qoşa samitlə bitən təkhecalı
                      sözlər. Vurğu. Sözün sətirdən-sətrə keçirilməsi. Fonetik
                      təhlil. <br />
                      <strong>İngilis dili</strong>
                      <br />
                      Noun. To be. There is / are. It is. Vocabulary (V sinif
                      unit 1– 8 daxil olmaqla). Listening and Reading
                      Comprehension
                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                      Лексикология. Лексическое значение слова. Прямое и
                      переносное значение слова. Синонимы. Антонимы.
                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center fw-bold">XI sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Danışıq səsləri. Ahəng qanunu. Bəzi saitlərin
                      uzun tələffüz edilməsi. Qoşasaitli və qoşasamitli sözlərin
                      yazılışı və tələffüzü. Əlifba. Sonu eynicinsli qoşa
                      samitlə bitən söz köklərinin yazılışı. Sözlərin sonunda
                      cingiltili samitlərin yazılışı və tələffüzü. Sonu q və k
                      ilə bitən sözlərin yazılışı və tələffüzü. Heca. Vurğu.
                      Sözün sətirdən sətrə keçirilməsi. Fonetik təhlil.
                      <br />
                      Leksika. Sözün leksik və qrammatik mənası. Sözün həqiqi və
                      məcazi mənası. Təkmənalı və çoxmənalı sözlər. Omonimlər.
                      Omonim və çoxmənalı sözlərin fərqi və oxşarlığı.
                      Sinonimlər. Antonimlər. Ümumişlək və ümumişlək olmayan
                      sözlər. Dialekt sözlər, terminlər (ixtisas sözlər),
                      arxaizmlər, neologizmlər ümumişlək olmayan söz qrupları
                      kimi. Sözlərin mənşəyi. Frazeoloji birləşmələr, onların
                      omonimliyi, sinonimliyi, antonimliyi. Lüğətlər. Leksik
                      təhlil. .<br />
                      <strong>İngilis dili</strong>
                      <br />
                      Noun. To be. There is / are. It is. Vocabulary (V sinif
                      unit 1– 8 daxil olmaqla). Listening and Reading
                      Comprehension
                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                      Лексикология. Лексическое значение слова. Прямое и
                      переносное значение слова. Синонимы. Антонимы.
                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </PrintComponents>
        </div>
        <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
            Çıx
          </button>
        </Link>
        <Link to="/testsubject4">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
        <Link to="/testsubject2">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>

      <div className="container">
        <Table striped="columns">
          <thead>
            <th className="text-center fs-4">
              Buraxılış mövzuları 1 - 01/05/2022
            </th>
          </thead>
          <tbody>
            <tr>
              <td className="text-center fw-bold">IX sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Səs və hərf. Sait səslər. Saitlərin deyilişi və
                yazılışı. Ahəng qanunu. Samit səslər. Samitlərin deyilişi və
                yazılışı. Sözlərin sonunda cingiltili samitlərin yazılışı və
                tələffüzü. Sonu q və k ilə bitən sözlərin yazılışı və tələffüzü.
                . Qoşa samitlə bitən təkhecalı sözlər. Vurğu. Sözün
                sətirdən-sətrə keçirilməsi. Fonetik təhlil.
                <br />
                <strong>İngilis dili</strong>
                <br />
                Noun. To be. There is / are. It is. Vocabulary (V sinif unit 1–
                8 daxil olmaqla). Listening and Reading Comprehension
                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                Лексикология. Лексическое значение слова. Прямое и переносное
                значение слова. Синонимы. Антонимы.
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər.
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold">X sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Səs və hərf. Sait səslər. Saitlərin deyilişi və
                yazılışı. Ahəng qanunu. Samit səslər. Samitlərin deyilişi və
                yazılışı. Sözlərin sonunda cingiltili samitlərin yazılışı və
                tələffüzü. Sonu q və k ilə bitən sözlərin yazılışı və tələffüzü.
                . Qoşa samitlə bitən təkhecalı sözlər. Vurğu. Sözün
                sətirdən-sətrə keçirilməsi. Fonetik təhlil. <br />
                <strong>İngilis dili</strong>
                <br />
                Noun. To be. There is / are. It is. Vocabulary (V sinif unit 1–
                8 daxil olmaqla). Listening and Reading Comprehension
                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                Лексикология. Лексическое значение слова. Прямое и переносное
                значение слова. Синонимы. Антонимы.
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər.
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold">XI sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Danışıq səsləri. Ahəng qanunu. Bəzi saitlərin uzun
                tələffüz edilməsi. Qoşasaitli və qoşasamitli sözlərin yazılışı
                və tələffüzü. Əlifba. Sonu eynicinsli qoşa samitlə bitən söz
                köklərinin yazılışı. Sözlərin sonunda cingiltili samitlərin
                yazılışı və tələffüzü. Sonu q və k ilə bitən sözlərin yazılışı
                və tələffüzü. Heca. Vurğu. Sözün sətirdən sətrə keçirilməsi.
                Fonetik təhlil.
                <br />
                Leksika. Sözün leksik və qrammatik mənası. Sözün həqiqi və
                məcazi mənası. Təkmənalı və çoxmənalı sözlər. Omonimlər. Omonim
                və çoxmənalı sözlərin fərqi və oxşarlığı. Sinonimlər.
                Antonimlər. Ümumişlək və ümumişlək olmayan sözlər. Dialekt
                sözlər, terminlər (ixtisas sözlər), arxaizmlər, neologizmlər
                ümumişlək olmayan söz qrupları kimi. Sözlərin mənşəyi.
                Frazeoloji birləşmələr, onların omonimliyi, sinonimliyi,
                antonimliyi. Lüğətlər. Leksik təhlil. .<br />
                <strong>İngilis dili</strong>
                <br />
                Noun. To be. There is / are. It is. Vocabulary (V sinif unit 1–
                8 daxil olmaqla). Listening and Reading Comprehension
                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика. Буквы ь и ъ. Двойная роль букв е, ё, ю, я.
                Лексикология. Лексическое значение слова. Прямое и переносное
                значение слова. Синонимы. Антонимы.
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <CFooter />
    </div>
  );
};

export default Testsubject1;
