import React from "react";
import "../../CSS/website/gallery.css";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import { TabTitle } from "../TitleFunction";
const Structure = () => {
  TabTitle("Struktur");
  return (
    <>
      <TopBar />
      <Navbar />
      <h4 className="text-center fw-bold">Həmtəsisçilər</h4>
      <div className="container mt-3 headerimage">
        <div className="ms-2">
          <img
            className="imagemobiles"
            src=".././images/img/vuqar.png"
            alt=""
          />
          <p>
            Vüqar Tarquliyev
            <br />
            <i>Hədəf Kursların həmtəsisçisi</i>
          </p>
        </div>
        <div className="ms-2">
          <img
            className="imagemobiles"
            src=".././images/img/semil.jpg"
            alt=""
          />
          <p>
            F.ü.f.d Şəmil Sadıqov <br />
            <i>Hədəf Kursların həmtəsisçisi və baş direktoru</i>
          </p>
        </div>
      </div>
      <h4 className="text-center fw-bold">Baş direktor müavinləri</h4>
      <div className="container mt-3 headerimage">
        <div className="ms-2">
          <img className="imagemobiles" src=".././images/img/emin.jpg" alt="" />
          <p>
            Emin Sadıqov <br />
            <i>Baş direktorun 1-ci müavini</i>
          </p>
        </div>
        <div className="ms-2">
          <img
            className="imagemobiles"
            src=".././images/img/elvin.jpg"
            alt=""
          />
          <p>
            Elvin Əliyev <br />
            <i>Baş direktorun müavini</i>
          </p>
        </div>
        <div className="ms-2">
          <img
            className="imagemobiles"
            src=".././images/img/semil.jpg"
            alt=""
          />
          <p>
            F.ü.f.d Şəmil Sadıqov <br />
            <i>Hədəf Kursların həmtəsisçisi və baş direktoru.</i>
          </p>
        </div>
      </div>
      <h4 className="text-center fw-bold">İcraçı direktor</h4>
      <div className="container mt-3 headerimage">
        <div className="ms-2">
          <img
            className="imagemobiles"
            src=".././images/img/sefter.jpg"
            alt=""
          />
          <p>
            Səftər Xəlilbəyli <br />
            <i>Hədəf Kurslarının İcraçı direktoru</i>
          </p>
        </div>
      </div>
      <h4 className="text-center fw-bold">Filial müdirləri</h4>
      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/mehman.jfif"
            alt=""
          />
          <p>
            Mehman Muxtarov <br />
            <i>Yasamal filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/veli.jpg"
            alt=""
          />
          <p>
            Vəlizadə Vəli <br />
            <i>Azadlıq filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/sakir.jpg"
            alt=""
          />
          <p>
            Şakir Hüseyn <br />
            <i>Xırdalan filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/emil.jpg"
            alt=""
          />
          <p>
            Ağayev Emil
            <br />
            <i>Əcəmi filialının müdiri</i>
          </p>
        </div>
      </div>
      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/mehman.jfif"
            alt=""
          />
          <p>
            Mehman Muxtarov <br />
            <i>Yasamal filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/nuru.jpg"
            alt=""
          />
          <p>
            Abdullayev Nuru <br />
            <i>Mehdiabad filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/kamil.jpg"
            alt=""
          />
          <p>
            Kamil Orucov <br />
            <i>Nizami filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/elnur.jpg"
            alt=""
          />
          <p>
            Elnur İbrahimov <br />
            <i>Qara Qarayev filialının müdiri</i>
          </p>
        </div>
      </div>
      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobile">
          <img
            className="imagemobiless"
            src=".././images/img/vusal.jpg"
            alt=""
          />
          <p>
            Vüsal Heybətov <br />
            <i>Sumqayıt filialının müdiri</i>
          </p>
        </div>
      </div>

      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/mehman.jfif"
            alt=""
          />
          <p>
            Mehman Muxtarov <br />
            <i>Yasamal filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/veli.jpg"
            alt=""
          />
          <p>
            Vəlizadə Vəli <br />
            <i>Azadlıq filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/sakir.jpg"
            alt=""
          />
          <p>
            Şakir Hüseyn <br />
            <i>Xırdalan filialının müdiri</i>
          </p>
        </div>
      </div>
      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/nuru.jpg"
            alt=""
          />
          <p>
            Abdullayev Nuru <br />
            <i>Mehdiabad filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/kamil.jpg"
            alt=""
          />
          <p>
            Kamil Orucov <br />
            <i>Nizami filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/elnur.jpg"
            alt=""
          />
          <p>
            Elnur İbrahimov <br />
            <i>Qara Qarayev filialının müdiri</i>
          </p>
        </div>
      </div>

      <div className="container mt-3 headerimage">
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/emil.jpg"
            alt=""
          />
          <p>
            Ağayev Emil
            <br />
            <i>Əcəmi filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/mehman.jfif"
            alt=""
          />
          <p>
            Mehman Muxtarov <br />
            <i>Yasamal filialının müdiri</i>
          </p>
        </div>
        <div className="ms-2 imagemobiletab">
          <img
            className="imagemobiless"
            src=".././images/img/vusal.jpg"
            alt=""
          />
          <p>
            Vüsal Heybətov <br />
            <i>Sumqayıt filialının müdiri</i>
          </p>
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Structure;
