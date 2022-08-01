import React, { useState } from "react";
import { Tab, Tabs, TabContent } from "react-bootstrap";
import "../CSS/index.css";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
function News() {
  const [key, setKey] = useState("home");

  return (
    <div>
      <p className="NewsHeader">Yeni Xəbərlər</p>
      <div className="CommonNews container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* Hədəf */}
          
          <Tab eventKey="home" title={<div className="NewsTab">Hədəf</div>}>
            <TabContent />
            <div id="News" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-2 g-4 comnewscard">
                    <div className="col newscard">
                      <div className="card">
                      <Link to="/news1">
                          <img
                            src="./images/vetenmuharibesi.jpg"
                            className="newsimage card-img-top"
                            alt="vetenmuharibesi"
                          /></Link>
                        
                        <div className="card-body">
                          <h5 className="card-title">Hədəf xəbər</h5>
                          <p className="card-text">
                            Vətən müharibəsinin müəllim şəhidi Ömərov Qoşqarın
                            xatirəsi əbədiləşdirildi
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 10, 2022</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card ">
                      <Link to="/news2">
                          <img
                            src="./images/6-7-8.jpg"
                            className="newsimage card-img-top"
                            alt="vetenmuharibesi"
                          />
                      </Link>
                        <div className="card-body">
                          <h5 className="card-title">Hədəf xəbər</h5>
                          <p className="card-text">
                            Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 –
                            Rus bölməsi
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 4, 2022</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                      <Link to="/news3">
                          <img
                            src="./images/6-7-8.jpg"
                            className="newsimage card-img-top"
                            alt="vetenmuharibesi"
                          />
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">Hədəf xəbər</h5>
                          <p className="card-text">
                            Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 –
                            Azərbaycan bölməsi
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 4, 2022</Card.Footer>
                      </div>
                    </div>
                   
                  </div>
                </div>

                {/* <div className="carousel-item">
        <div className="row row-cols-1 row-cols-md-2 g-4 container">
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
    </div> */}
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#News" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#News" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
            </div>
          </Tab>
          {/* DİM */}
          <Tab eventKey="profile" title={<div className="NewsTab">DİM</div>}>
            <TabContent />
            <div id="News2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-2 g-4 comnewscard">
                    <div className="col newscard">
                      <div className="card">
                       
                      <Link to="/dim1"> <img
                            src="./images/dim.png"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                       </Link>
                        <div className="card-body">
                          <h5 className="card-title">DİM</h5>
                          <p className="card-text">
                            Dövlət qulluğuna qəbul olmaq istəyən şəxslər üçün
                            növbəti sınaq imtahanı keçiriləcək.
                          </p>
                         
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                       
                          <Link to="/dim2"><img
                            src="./images/dim.png"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
                        
                        <div className="card-body">
                          <h5 className="card-title">DİM</h5>
                          <p className="card-text">
                            Bölgələr üzrə ümumi orta təhsil bazasında ( 9-cu
                            sinif ) buraxılış imtahanlarının I mərhələsinin
                            keçirilmə qrafiki.
                          </p>
                         
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                       
                          <Link to="/dim3"><img
                            src="./images/dim.png"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                          </Link>
                       
                        <div className="card-body">
                          <h5 className="card-title">DİM</h5>
                          <p className="card-text">
                            Abituriyentlərin ixtisas qruplarını seçim imkanları
                            genişləndirildi.
                          </p>
                          
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                
                      </div>
                    </div>
                   
                  </div>
                </div>

                {/* <div className="carousel-item">
        <div className="row row-cols-1 row-cols-md-2 g-4 container">
            <div className="col newscard">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col newscard">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
    </div>*/}
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#News2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#News2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>  */}
            </div>
          </Tab>
          {/* Sosial həyatımız */}
          <Tab
            eventKey="profiles"
            title={<div className="NewsTab">Sosial həyatımız</div>}
          >
            <TabContent />
            <div id="News3" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-2 g-4 comnewscard">
                    <div className="col newscard">
                      <div className="card">
                     <Link to="/sociallife1">
                     <img
                            src="./images/sosialheyat.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                     </Link>
                         
                       
                        <div className="card-body">
                          <h5 className="card-title">Sosial Həyatımız</h5>
                          <p className="card-text">
                          Hədəf Kurslarında Magistratura üzrə Açıq Qapı günü keçirildi.
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                       
                        <Link to="/sociallife2">
                        <img
                            src="./images/sosialheyat2.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
                     
                        <div className="card-body">
                          <h5 className="card-title">Sosial Həyatımız</h5>
                          <p className="card-text">
                          Neftçilər filialının yeni binasının açılış mərasimi keçirildi
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
                    <div className="col newscard">
                      <div className="card">
                       
                       <Link to="/sociallife3">
                       <img
                            src="./images/sosialheyat3.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          />
                       </Link>
                 
                        <div className="card-body">
                          <h5 className="card-title">Sosial Həyatımız </h5>
                          <p className="card-text">
                          Təcrübəçilər mükafatlandırıldı.
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Fevral 19, 2018</Card.Footer>
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* <div className="carousel-item">
        <div className="row row-cols-1 row-cols-md-2 g-4 container">
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
    </div> */}
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#News3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#News3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
            </div>
          </Tab>
          {/* Layihələr */}
          <Tab
            eventKey="contact"
            title={<div className="NewsTab">Layihələr</div>}
          >
            <TabContent />
            <div id="News4" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-2 g-4 comnewscard">
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
                        <Link to="/projects2">
                          <img
                            src="./images/layiheler2.jpg"
                            className="card-img-top newsimage"
                            alt="..."
                          /></Link>
          
                        <div className="card-body">
                          <h5 className="card-title">Layihələrimiz</h5>
                          <p className="card-text">
                          11-ci “Fənlərin Dostluğu Olimpiadası” İmtahan Mərkəzləri.
                          </p>
                        </div>
                        <Card.Footer className="text-muted">Dekabr 3, 2021</Card.Footer>
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

                {/* <div className="carousel-item">
        <div className="row row-cols-1 row-cols-md-2 g-4 container">
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="#"><img src="./images/6-7-8.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div> 
    </div>*/}
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#News4" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#News4" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default News;
