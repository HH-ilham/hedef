import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "../../../Navbar";
import TopBar from "../../../TopBar";
import CFooter from "../../../cFooter";
import { Link } from "react-router-dom";
import { TabTitle } from "../../../TitleFunction";
import Card from 'react-bootstrap/Card';
const Projects2 = () => {
  TabTitle("11-ci “Fənlərin Dostluğu Olimpiadası” İmtahan Mərkəzləri");

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="branchbtn container">
        <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
            Çıx
          </button>
        </Link>
      </div>
      <p className="text-center fw-bold fs-3">
        11-ci “Fənlərin Dostluğu Olimpiadası” İmtahan Mərkəzləri
      </p>
      <div className="d-flex container">
        <div className="col-md-9">
          <p className="container fw-bold text-center">
            Dünya Azərbaycanlılarının Həmrəyliyi Günü münasibəti ilə
          </p>
          <p className="container fw-bold text-center">
            keçirilən 11-ci “Fənlərin Dostluğu Olimpiadası”
          </p>
          <p className="container fw-bold text-center">İmtahan Mərkəzləri</p>
          <div className="text-center text-muted">May 31, 2018</div>
          <br />
                    <Table striped bordered hover>
            <thead>
              <tr>
                <th>N</th>
                <th>Şagirdlərin təhsil aldığı rayon</th>
                <th>Olimpiadanın keçiriləcəyi yer</th>
                <th>Ünvan</th>
                <th>Əlaqə telefonu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Zaqatala, Kürdəmir, Masallı, Siyəzən, Şəmkir, İsmayıllı, Lənkəran, Sabirabad, Şabran, Neftçala, Cəlilabad, Xaçmaz, Qəbələ,  Şəki və s.</td>
                <td>Azərbaycan Texniki Universiteti .</td>
                <td>Bakı ş.  Hüseyn Cavid Pr. 25.</td>
                <td>077 555 01 08</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sumqayıt şəhəri, Ceyranbatan qəsəbəsi</td>
                <td>Hədəf Kursları Sumqayıt filialı.</td>
                <td>Sumqayıt ş. 9-cu MKR. Sərvər Bədəlbəyli küç.</td>
                <td>077 555 01 06</td>
              </tr>
              <tr>
                <td>3</td>
                <td >Xırdalan şəhəri</td>
                <td>Hədəf Kursları Xırdalan filialı.</td>
                <td>Xırdalan şəhəri, H.Əliyev pr.</td>
                <td>077 555 01 00</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Abşeron rayonu</td>
                <td>Hədəf Kursları Mehdiabad filialı.</td>
                <td>Mehdiabad qəsəbəsi, 28 may küçəsi, bina 123</td>
                <td>0775550105</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Qaradağ, Səbail, Nəsimi.</td>
                <td>Azərbaycan Texniki Universiteti .</td>
                <td>Bakı ş.  Hüseyn Cavid Pr. 25. </td>
                <td>077 555 01 08</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Binəqədi</td>
                <td>Hədəf Kursları Azadlıq filialı</td>
                <td>Azadlıq Metrosu çıxışı</td>
                <td>077 555 01 02</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Nizami, Suraxanı, Sabunçu, Xəzər, Nərimanov</td>
                <td>Hədəf Kursları Qarayev filialı.</td>
                <td>Nizami rayonu, Tofiq Abbasov 38.</td>
                <td>077 555 01 07</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Xətai</td>
                <td>Hədəf Kursları Əhmədli filialı</td>
                <td>Xətai rayonu, Ukrayna dairəsi.</td>
                <td>077 555 01 09</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Yasamal</td>
                <td>Hədəf Kursları Yasamal filialı.</td>
                <td>Talıblı küç. 27 A</td>
                <td> 077 555 01 03</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="col-md-3 othernews">
          <p className="fw-bold fs-4 othernewstext">Digər xəbərlər</p>
          <div className="col newscard">
                      <div className="card">
              
                         <Link to="/projects1"> <img
                            src="./images/layiheler1.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
                        <div className="card-body">
                          <h5 className="card-title">Layihələrimiz</h5>
                          <p className="card-text">
                          11-ci “Fənlərin Dostluğu Olimpiadası” keçirilmişdir
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Dekabr 6, 2021</Card.Footer>
                      </div>
                    </div>
                   
                    <div className="col newscard">
                      <div className="card">
                      <Link to="/projects3">
                          <img
                            src="./images/6-7-8.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
                
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content.
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Projects2;
