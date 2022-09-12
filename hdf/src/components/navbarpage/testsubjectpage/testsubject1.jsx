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
  TabTitle(" Buraxılış fənləri üzrə imtahan mövzuları MQT 1");
  return (
    <div>
      <TopBar />
      <Navbar />
      <h1 className="text-center fw-bold branchheader">
      Buraxılış fənləri üzrə imtahan mövzuları MQT 1
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
                    Buraxılış mövzuları 1 - 25.09.2022
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center fw-bold">IX sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Mətn üzərində iş. 
                      <br />
                      <strong>İngilis dili</strong>
                      <br />
                      The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers 
                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 
                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər. Həndəsənin əsas anlayışları. 
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center fw-bold">X sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Mətn üzərində iş. <br />
                      <strong>İngilis dili</strong>
                      <br />
                      The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers 

                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 

                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər. Nisbət. Tənasüb. Faiz. Həndəsənin əsas anlayışları. 

                    </td>
                  </tr>
                  <tr>
                    <td className="text-center fw-bold">XI sinif </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Azərbaycan dili</strong> <br />
                      Fonetika. Leksika. Üslubiyyat. Mətn üzərində iş. 

               
                     <br />
                      <strong>İngilis dili</strong>
                      <br />
                      The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers. The Article
                      <br />
                      <strong>Rus dili</strong>
                      <br />
                      Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 
                      <br />
                      <strong>Riyaziyyat</strong>
                      <br />
                      Natural ədədlər. Adi və onluq kəsrlər. Nisbət. Tənasüb. Faiz. Həqiqi ədədlər. Tam cəbri ifadələr.
Çoxhədlinin vuruqlara ayrılması. Həndəsənin əsas anlayışları. Üçbucaqlar.
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
            25.09.2022
            </th>
          </thead>
          <tbody>
            <tr>
              <td className="text-center fw-bold">IX sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Mətn üzərində iş. 
                <br />
                <strong>İngilis dili</strong>
                <br />
                The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers 
                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər. Həndəsənin əsas anlayışları. 
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold">X sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Mətn üzərində iş. 
<br />
                <strong>İngilis dili</strong>
                <br />
                The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers 

                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər. Nisbət. Tənasüb. Faiz. Həndəsənin əsas anlayışları. 
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold">XI sinif </td>
            </tr>
            <tr>
              <td>
                <strong>Azərbaycan dili</strong> <br />
                Fonetika. Leksika. Üslubiyyat. Mətn üzərində iş. 

               <br />
                <strong>İngilis dili</strong>
                <br />
                The Noun. Morphological Composition of Nouns. Morphological and Semantic Characteristics of Nouns.
Cases of Nouns. Quantifiers. The Article
                <br />
                <strong>Rus dili</strong>
                <br />
                Фонетика/ Звуки речи и буквы. Гласные и согласные. Алфавит. Правописание безударных гласных
о и е. Двойная роль букв я, е, ё, ю. Буквы ъ и ь и их функции. Лексикология. Синонимы. Антонимы.
Прямое и переносное значение слова. 
                <br />
                <strong>Riyaziyyat</strong>
                <br />
                Natural ədədlər. Adi və onluq kəsrlər. Nisbət. Tənasüb. Faiz. Həqiqi ədədlər. Tam cəbri ifadələr.
Çoxhədlinin vuruqlara ayrılması. Həndəsənin əsas anlayışları. Üçbucaqlar. 
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
