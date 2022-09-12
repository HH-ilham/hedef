import React, { useState } from "react";
import { Button, Card, CardGroup, Modal } from "react-bootstrap";
import "../CSS/App.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
function Navtab() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showmen, setShowmen] = useState(false);
  const handleClosemen = () => setShowmen(false);
  const handleShowmen = () => setShowmen(true);

  const [showsub, setShowsub] = useState(false);
  const handleClosesub = () => setShowsub(false);
  const handleShowsub = () => setShowsub(true);

  const [showbrain, setShowbrain] = useState(false);
  const handleClosebrain = () => setShowbrain(false);
  const handleShowbrain = () => setShowbrain(true);

  const [showsport, setShowsport] = useState(false);
  const handleClosesport = () => setShowsport(false);
  const handleShowsport = () => setShowsport(true);
  return (
    <div className="MuiTabs-flexContainer  container Navtabs">
      <nav>
        <div class="nav nav-tabs NavMenu" id="nav-tab" role="tablist">
          <button
            className="NavtabsBtn nav-link active"
            id="nav-Branch-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Branch"
            type="button"
            role="tab"
            aria-controls="nav-Branch"
            aria-selected="true"
          >
            Filial
          </button>
          <button
            className="NavtabsBtn nav-link"
            id="nav-Department-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Department"
            type="button"
            role="tab"
            aria-controls="nav-Department"
            aria-selected="false"
          >
            Şöbə
          </button>
          <button
            className="NavtabsBtn nav-link"
            id="nav-testsubject-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-testsubject"
            type="button"
            role="tab"
            aria-controls="nav-testsubject"
            aria-selected="false"
          >
            Sınaq mövzusu
          </button>
          <button
            className="NavtabsBtn nav-link"
            id="nav-lessonplan-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-lessonplan"
            type="button"
            role="tab"
            aria-controls="nav-lessonplan"
            aria-selected="false"
          >
            Dərs proqramı
          </button>
          <button
            className="NavtabsBtn nav-link"
            id="nav-examdate-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-examdate"
            type="button"
            role="tab"
            aria-controls="nav-examdate"
            aria-selected="false"
          >
            İmtahan vaxtı
          </button>
        </div>
      </nav>

      {/* Department */}
      <div className="tab-content container" id="nav-tabContent">
        <div
          className="container tab-pane fade"
          id="nav-Department"
          role="tabpanel"
          aria-labelledby="nav-Department-tab"
        >
          <div id="department" className="carousel slide container">
            <div className=" carousel-inner">
              <div className="container departcard carousel-item active">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/hedefmerkezi.jpg"
                    />
                    <Card.Body>
                      {/* <Card.Title>Hədəf Dil Mərkəzi</Card.Title> */}
                      <Card.Text className="Text">
                        Hədəf Dil Mərkəzi Hədəf Kurslarının tərkibində fəaliyyət
                        göstərir. Mərkəzdə 4 dil tədris olunur.
                        İngilis,rus,alman və fransız...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Button
                          variant="info"
                          className="CardInfoBtn w-50 "
                          onClick={handleShow}
                        >
                          Daha çox
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Hədəf Dil Mərkəzi</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Hədəf Dil Mərkəzi Hədəf Kurslarının tərkibində
                            fəaliyyət göstərir. Mərkəzdə 4 dil tədris olunur.
                            İngilis,rus,alman və fransız. Burada təhsil alan
                            tələbələr minimum 6 ayda öyrəndikləri dili mənimsəyə
                            bilər.
                            <li>İELTS</li>
                            <li>TOEFL</li>
                            <li>Danışıq klubları</li>
                          </Modal.Body>
                        </Modal>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/hedefyaradiciliq.jpg"
                    />
                    <Card.Body>
                      {/* <Card.Title>Hədəf Yaradıcılıq Mərkəzi</Card.Title> */}
                      <Card.Text className="Text">
                        Hədəf Yaradıcılıq Mərkəzi əsası 2017-ci ildə qoyulmuş
                        Hədəf Şirkətlər qrupuna daxil olan müstəqil mərkəzdir...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Button
                          variant="info"
                          className="CardInfoBtn w-50 "
                          onClick={handleShowmen}
                        >
                          Daha çox
                        </Button>
                        <Modal show={showmen} onHide={handleClosemen}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                              {" "}
                              Hədəf Yaradıcılıq Mərkəzi
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Hədəf Yaradıcılıq Mərkəzi əsası 2017-ci ildə
                            qoyulmuş Hədəf Şirkətlər qrupuna daxil olan müstəqil
                            mərkəzdir.Mərkəz bir neçə sahədə həvəskar və
                            qabiliyyət imtahanlarına hazırlaşmaq istəyən
                            tələbələr üçün xidmət göstərir.HYM Əhmədli
                            filialımızın tərkibində fəaliyyət göstərir.
                            <li>Uşaq teatr studiyası</li>
                            <li>Rəqs kursları</li>
                            <li>Rəsm kursları</li>
                            <li>Dərzilik kursları</li>
                            <li>Dəb dizaynerliyi</li>
                            <li>Gitara kursları</li>
                          </Modal.Body>
                        </Modal>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/hedefimtahan.jpg"
                    />
                    <Card.Body>
                      <Card.Text className="Text">
                        Hədəf İmtahan Mərkəzi 2017-ci ildə yaradılmışdır. Mərkəz
                        Hədəf Kurslarında və digər təhsil ocaqlarında Hədəf
                        sınaq...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Button
                          variant="info"
                          className="CardInfoBtn w-50 "
                          onClick={handleShowsub}
                        >
                          Daha çox
                        </Button>
                        <Modal show={showsub} onHide={handleClosesub}>
                          <Modal.Header closeButton>
                            <Modal.Title>Hədəf İmtahan Mərkəzi</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Hədəf İmtahan Mərkəzi 2017-ci ildə yaradılmışdır.
                            Mərkəz Hədəf Kurslarında və digər təhsil ocaqlarında
                            Hədəf sınaq imtahanının təşkili, yoxlanması və digər
                            təşkilatı işləri ilə məşğuldur. Burada yoxlanan
                            imtahan nəticələri 1 gün içərisində tələbəyə
                            verilir. Hədəf İmtahan mərkəzi Hədəf Kurslarının 20
                            Yanvar filialında yerləşir.
                            <li>İmtahan suallarının hazırlanması</li>
                            <li>İmtahan prosesinə nəzarət</li>
                            <li>Nəticələrin yoxlanması</li>
                          </Modal.Body>
                        </Modal>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="container departcard carousel-item">
                <CardGroup className="dep">
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/beyinmuhendisliyi.jpg"
                    />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                      <Card.Text className="Text">
                        Beyin Mühəndislik Akademiyası 2017-ci ildə fəaliyyətə
                        başlamışdır.Akademiyamızda sizə təklif edilən bir çox
                        təlim növlərimiz var...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Button
                          variant="info"
                          className="CardInfoBtn w-50 "
                          onClick={handleShowbrain}
                        >
                          Daha çox
                        </Button>
                        <Modal show={showbrain} onHide={handleClosebrain}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                              Beyin Mühəndislik Akademiyası
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Beyin Mühəndislik Akademiyası 2017-ci ildə
                            fəaliyyətə başlamışdır.Akademiyamızda sizə təklif
                            edilən bir çox təlim növlərimiz var: Sürətli Oxu,
                            Nitq Mədəniyyəti, Davranış Qaydaları, Düzgün Yazı
                            Bacarığı , Yaddaş Texnikaları və s.
                            <li>Efektiv Sürətli Oxu</li>
                            <li>NLP</li>
                            <li>Yaddaş texnikası</li>
                            <li>Bədən dili</li>
                            <li>Təlimçi yetişdirmə</li>
                            <li>Davranış qaydaları</li>
                            <li>Uğur hekayələri</li>
                          </Modal.Body>
                        </Modal>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages sportimage"
                      variant="top"
                      src="./images/hedefidmanklubu.png"
                    />
                    <Card.Body>
                      {/* <Card.Title>Card title</Card.Title> */}
                      <Card.Text className="Text">
                        Hədəf İdman Klubu 2016-cı ildə Hədəf Şirkətlər qrupu
                        nəzdində yaradılmışdır. Hədəf İdman klubunda müxtəlif
                        idman ...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Button
                          variant="info"
                          className="CardInfoBtn w-50 "
                          onClick={handleShowsport}
                        >
                          Daha çox
                        </Button>
                        <Modal show={showsport} onHide={handleClosesport}>
                          <Modal.Header closeButton>
                            <Modal.Title>Hədəf İdman Klubu</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Hədəf İdman Klubu 2016-cı ildə Hədəf Şirkətlər qrupu
                            nəzdində yaradılmışdır. Hədəf İdman klubunda
                            müxtəlif idman növləri üzrə təlimlər keçirilir.
                            Fəaliyyət sahələrimizə cüdo, idman akrobatikası, jiu
                            jitsu, cross fit, trenajor, sauna və s. daxildir.
                            Peşəkar məşqçilərimizdən yararlanaraq siz də Hədəf
                            İdman Klubunu sağlamlığınızın başlıca nüansı kimi
                            görə bilərsiniz.
                            <li>Trenajor</li>
                            <li>Cüdo</li>
                            <li>Cross fit</li>
                            <li>Sauna</li>
                            <li>İdman akrobatikası</li>
                            <li>Jiu jitsu</li>
                          </Modal.Body>
                        </Modal>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
            </div>
            <button
              className="nexticon carousel-control-prev"
              type="button"
              data-bs-target="#department"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon iconnext"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="nexticon carousel-control-next"
              type="button"
              data-bs-target="#department"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Branch */}
        <div
          className="tab-pane fade container show active"
          id="nav-Branch"
          role="tabpanel"
          aria-labelledby="nav-Branch-tab"
        >
          <div id="twopage" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="container departcard carousel-item active">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/ecemi.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Əcəmi filialı</Card.Title>
                      <Card.Text className="Text">
                        Əcəmi filialı Hədəf Kurslarının gənc filiallarından
                        biridir....
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/acami">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/ehmedli.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Əhmədli filialı</Card.Title>
                      <Card.Text className="Text">
                        Hədəf Kurslarının ən gənc filiallarından olan Əhmədli
                        filialı 2016-cı ildən...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/ahmadli">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/mehdiabad.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Yeni Mehdiabad filialı</Card.Title>
                      <Card.Text className="Text">
                        Hədəf kursları Mehdiabad filialı 2021-ci ilin sentyabr
                        ayında...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/mehdiabad">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div class="container departcard carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/nizami.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Nizami filialı</Card.Title>
                      <Card.Text>
                        Nizami filialı Hədəf Kurslarının ilk filialıdır. 2008-ci
                        ildən...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <small className="text-muted">
                          <Link to="/nizami">
                            {" "}
                            <button
                              type="button"
                              class="CardInfoBtn btn btn-info w-50 "
                            >
                              Daha çox
                            </button>
                          </Link>
                        </small>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/qaraqarayev.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Qara Qarayev filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının Qara Qarayev filialı kursumuzun ən
                        təcrübəli...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/qaraqarayev">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/sumqayit.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Sumqayıt filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının ən kiçik filiallarından olmasına
                        baxmayaraq hər...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/sumqayit">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>

              <div class="container departcard carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/xirdalan.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Xırdalan filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının II filialı olaraq açılan Xırdalan
                        filialı 2009-cu ildən fəaliyyət...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/xirdalan">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/yasamal.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Yasamal filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının Yasamal filialı 2018-ci ildə yaranan
                        sayca 2-ci filialıdır...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/yasamal">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/azadliq.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azadlıq filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının ən böyük filiallarından biri də
                        Azadlıq filialıdır. 2019-cu ildə...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/azadliq">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
            </div>
            <button
              class="nexticon carousel-control-prev"
              type="button"
              data-bs-target="#twopage"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon iconnext"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="nexticon carousel-control-next"
              type="button"
              data-bs-target="#twopage"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon iconnext"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* testsubject */}
        <div
          className="tab-pane fade"
          id="nav-testsubject"
          role="tabpanel"
          aria-labelledby="nav-testsubject-tab"
        >
          <div id="threepage" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="container departcard carousel-item active">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
        
                      variant="top"
                      src="./images/sayt2.png"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                      Buraxılış fənləri üzrə imtahan mövzuları MQT 1
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">Sentyabr 25,2022</div>

                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject1">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                 
                      variant="top"
                      src="./images/sayt2.png"
                    />
                    <Card.Body>
                      <Card.Title>Rus bölməsi</Card.Title>
                      <Card.Text>
                      Экзаменационные темы по выпускным предметам ТТО 1
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">Sentyabr 25,2022</div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject2">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card className="CardImage">
                    <Card.Img
                   
                      variant="top"
                      src="./images/sayt2.png"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">Avqust 1,2022</div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject3">
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      
                      variant="top"
                      src="./images/sayt2.png"
                    />
                    <Card.Body>
                      <Card.Title>Rus bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 5 mövzuları – Rus bölməsi
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">İyul 30,2022</div>

                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject4">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>

              {/* <div class="container departcard carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə imtahan mövzuları MQT 5 –
                        Azərbaycan bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject5">
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject6">
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Rus bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 5 mövzuları – Rus bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>

                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject7">
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə imtahan mövzuları MQT 5 –
                        Azərbaycan bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject8">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>

              <div class="container departcard carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject9">
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Rus bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 5 mövzuları – Rus bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>

                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject10">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə imtahan mövzuları MQT 5 –
                        Azərbaycan bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject11">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                        
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject12">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>

              <div class="container departcard carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Rus bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 5 mövzuları – Rus bölməsi
                        
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject13">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə imtahan mövzuları MQT 5 –
                        Azərbaycan bölməsi
                        
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject14">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                       
                      </Card.Text>
                    </Card.Body>
                    <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject16">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/6-7-8.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Azərbaycan bölməsi</Card.Title>
                      <Card.Text>
                        Buraxılış fənləri üzrə MQT 4 mövzuları – Azərbaycan
                        bölməsi
                      </Card.Text>
                    </Card.Body>
                        <div className="text-center text-muted">
                          Fevral 4,2022
                        </div>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/testsubject15">
                          {" "}
                          <button
                            type="button"
                            class="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>*/}
            </div>

            <button
              class="nexticon carousel-control-prev"
              type="button"
              data-bs-target="#threepage"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon iconnext"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="nexticon carousel-control-next"
              type="button"
              data-bs-target="#threepage"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon iconnext"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-lessonplan"
          role="tabpanel"
          aria-labelledby="nav-lessonplan-tab"
        >
          <div className="AzSection">
            <div>9-cu sinif Azərbaycan bölməsi</div>
            <div>10-cu sinif Azərbaycan bölməsi</div>
            <div>11-ci sinif Azərbaycan bölməsi</div>
          </div>
          {/* 9 cu sinif Azərbaycan bölməsi */}
          <div className="comButtongr">
            <div className="CommonSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="./images/pdf/azerbaycan.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      Azərbaycan dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2019/09/%C6%8Fd%C9%99biyyat-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      Ədəbiyyat
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2019/09/Riyaziyyat-9-cu-sinif-I-II-III-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="info">
                      Riyaziyyat
                    </Button>
                  </a>
                  <Button className="btncolor" variant="info">
                    <a
                      href="http://hedef.edu.az/hedefupdv/2021/09/Fizika-9-cu-sinif-I-qrup.pdf"
                      target="_blank"
                    >
                      {" "}
                      Fizika
                    </a>
                  </Button>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="info">
                      Biologiya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      Coğrafiyya
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-9-cu-sinif-II-qrup.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      Tarix
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      İngilis dili
                    </Button>
                  </a>
                  <a
                    href="http://hedef.edu.az/hedefupdv/2021/09/Rus-dili-9-cu-sinif-az-bolmesi.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="info">
                      Rus dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="info">
                      Kimya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
            {/* 10 sinif Azərbaycan bölməsi */}
            <div className="CommonSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Azerbaycan-dili-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="danger">
                      Azərbaycan dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C6%8Fd%C9%99biyyat-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="danger">
                      Ədəbiyyat
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-10-cu-sinif-I-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="danger">
                      Riyaziyyat
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-10-cu-sinif-IV-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="danger">
                      Fizika
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="danger">
                      Biologiya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="danger">
                      Coğrafiyya
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-10-cu-sinif-II-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="danger">
                      Tarix
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="danger">
                      İngilis dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Rus-dili-10-cu-sinif-az-bolmesi.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="danger">
                      Rus dili
                    </Button>
                  </a>
                  <a
                    href="http://hedef.edu.az/hedefupdv/2021/09/Kimya-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="danger">
                      Kimya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
            {/* 11 sinif Azərbaycan bölməsi */}
            <div className="CommonSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Azerbaycan-dili-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="success">
                      Azərbaycan dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C6%8Fd%C9%99biyyat-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="success">
                      Ədəbiyyat
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-11-cu-sinif-I-II-qrup.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="success">
                      Riyaziyyat
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-11-ci-sinif-I-IV-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="success">
                      Fizika
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="success">
                      Biologiya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="success">
                      Coğrafiyya
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-11-ci-sinif-II-qrup.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="success">
                      Tarix
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-11-ci-sinif-.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="success">
                      İngilis dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Rus-dili-11-ci-sinif-az-bolmesi.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor" variant="success">
                      Rus dili
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-11-ci-sinif-.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor" variant="success">
                      Kimya
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="AzSection">
            <div>9-cu sinif Rus bölməsi</div>
            <div>10-cu sinif Rus bölməsi</div>
            <div>11-ci sinif Rus bölməsi</div>
          </div>

          {/* 9 cu sinif Rus bölməsi */}
          <div className="comButtongr">
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Русский-язык
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0-9-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Литература
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-9-cu-sinif-I-II-III-qrup-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Математика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-9-cu-sinif-I-qrup-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="info">
                      Физика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-9-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Биология
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-9-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="info">
                      География
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-9-cu-sinif-II-qrup-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      История
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-9-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Aнглийский-язык
                    </Button>
                  </a>

                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-9-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="info">
                      Химия
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
            {/* 10 sinif Rus bölməsi */}
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="danger">
                      Русский-язык
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0-10-cu-sinif.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      Литература
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-10-cu-sinif-IV-qrup-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      Математика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-10-cu-sinif-I-qrup-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      Физика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-10-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="danger">
                      Биология
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-10-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      География
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-10-cu-sinif-II-qrup-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      История
                    </Button>
                  </a>

                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-10-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="danger">
                      Aнглийский-язык
                    </Button>
                  </a>

                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-10-cu-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="danger">
                      Химия
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
            {/* 11 sinif rus bölməsi */}
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      Русский-язык
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0-11-ci-sinif.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      Литература
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-11-cu-sinif-III-IV-qrup-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      Математика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-11-ci-sinif-I-IV-qrup-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="success">
                      Физика
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-11-ci-sinif-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      Биология
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-11-ci-sinif-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="success">
                      География
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-11-ci-sinif-III-qrup.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      История
                    </Button>
                  </a>
                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-11-ci-sinif-1-1.pdf"
                    target="_blank"
                  >
                    {" "}
                    <Button className="btncolor_rus" variant="success">
                      Aнглийский-язык
                    </Button>
                  </a>

                  <a
                    href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-11-ci-sinif-1-1.pdf"
                    target="_blank"
                  >
                    <Button className="btncolor_rus" variant="success">
                      Химия
                    </Button>
                  </a>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="AzSection">
            {/*Müəllimlərin İşə Qəbulu üzrə illik dərs proqramları(MİQ) */}
            <div></div>
            <div>Müəllimlərin İşə Qəbulu üzrə illik dərs proqramları(MİQ)</div>
            <div></div>
          </div>
          <div className="MIQsection">
            <div className="Buttongr">
              <ButtonGroup vertical>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/az-dili.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Azərbaycan dili
                  </Button>
                </a>

                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/co%C4%9Frafiya.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Coğrafiyya
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/biologiya.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Biologiya
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/%C9%99d%C9%99biyyat.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    Ədəbiyyat (Azərbaycan bölməsi)
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/%C9%99d%C9%99biyyat-rus-b%C3%B6lm%C9%99si.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Ədəbiyyat (Rus bölməsi)
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/fizika.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Fizika
                  </Button>
                </a>
              </ButtonGroup>
            </div>
            <div className="Buttongr">
              <ButtonGroup vertical>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/ibtidai-sinif-az-dili.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    İbtidai Qrup Azərbaycan dili
                  </Button>
                </a>
                <a href="#" target="_blank">
                  <Button className="btncolor_teacher" variant="secondary">
                    Tarix
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/ibtidai-sinif-az-dili.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    İbtidai Qrup Riyaziyyat
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/informatika.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    İnformatika
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/kimya-1.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    Kimya
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2020/02/ingilis-dili-miq.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    İngilis dili
                  </Button>
                </a>
              </ButtonGroup>
            </div>
            <div className="Buttongr">
              <ButtonGroup vertical>
                <a
                  href="https://hedef.edu.az/hedefupdv/2020/02/kurikulum-proqram.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    Kurikulum
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/riyaziyyat.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Riyaziyyat
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/m%C9%99ntiq.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    Məntiq
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/rus-dili-rus-b%C3%B6lm%C9%99si-1.pdf"
                  target="_blank"
                >
                  {" "}
                  <Button className="btncolor_teacher" variant="secondary">
                    Rus dili(Rus bölməsi)
                  </Button>
                </a>
                <a
                  href="https://hedef.edu.az/hedefupdv/2019/05/rus-dili-az-b%C3%B6lm%C9%99si-%C3%BC%C3%A7%C3%BCn.pdf"
                  target="_blank"
                >
                  <Button className="btncolor_teacher" variant="secondary">
                    Rus dili (Azərbaycan bölməsi)
                  </Button>
                </a>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-examdate"
          role="tabpanel"
          aria-labelledby="nav-examdate-tab"
        >
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                className="examimages"
                src="./images/tarix1.jfif"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                className="examimages"
                src="./images/tarix2.jfif"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                className="examimages"
                src="./images/tarix3.jfif"
              />
            </Card>
          </CardGroup>
        </div>
        {/* <div  ClassName="carousel-item">
      <img src="..."  ClassName="d-block w-100" alt="..."/>
    </div>
    <div  ClassName="carousel-item">
      <img src="..."  ClassName="d-block w-100" alt="..."/>
    </div> */}
      </div>
    </div>
  );
}

export default Navtab;
