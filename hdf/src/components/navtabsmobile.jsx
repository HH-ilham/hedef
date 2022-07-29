import React, { useState } from "react";
import { Button, Card, CardGroup, Modal } from "react-bootstrap";
import "../CSS/App.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
function Navtabsmobile() {
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
    <div className="MuiTabs-flexContainer  container Navtabsmobile">
      <nav>
        <div
          className="nav nav-tabs NavMenu NavMenus"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="NavtabsBtnmobile nav-link active"
            id="nav-Branch1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Branch1"
            type="button"
            role="tab"
            aria-controls="nav-Branch1"
            aria-selected="true"
          >
            Filial
          </button>
          <button
            className="NavtabsBtnmobile nav-link"
            id="nav-Department1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Department1"
            type="button"
            role="tab"
            aria-controls="nav-Department1"
            aria-selected="false"
          >
            Şöbə
          </button>
          <button
            className="NavtabsBtnmobile nav-link"
            id="nav-testsubject-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-testsubject1"
            type="button"
            role="tab"
            aria-controls="nav-testsubject1"
            aria-selected="false"
          >
            Sınaq
          </button>
          <button
            className="NavtabsBtnmobile nav-link"
            id="nav-lessonplan-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-lessonplan1"
            type="button"
            role="tab"
            aria-controls="nav-lessonplan1"
            aria-selected="false"
          >
            Dərs
          </button>
          <button
            className="NavtabsBtnmobile nav-link"
            id="nav-examdate1-tab1"
            data-bs-toggle="tab"
            data-bs-target="#nav-examdate1"
            type="button"
            role="tab"
            aria-controls="nav-examdate1"
            aria-selected="false"
          >
            İmtahan
          </button>
        </div>
      </nav>

      {/* Department */}
      <div className="tab-content container" id="nav-tabContent">
        <div
          className="container tab-pane fade"
          id="nav-Department1"
          role="tabpanel"
          aria-labelledby="nav-Department-tab"
        >
          <div
            id="carouselExampleControlsdepartment"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
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
                      göstərir. Mərkəzdə 4 dil tədris olunur. İngilis,rus,alman
                      və fransız...
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
              </div>
              <div className="carousel-item">
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
                          <Modal.Title> Hədəf Yaradıcılıq Mərkəzi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Hədəf Yaradıcılıq Mərkəzi əsası 2017-ci ildə qoyulmuş
                          Hədəf Şirkətlər qrupuna daxil olan müstəqil
                          mərkəzdir.Mərkəz bir neçə sahədə həvəskar və
                          qabiliyyət imtahanlarına hazırlaşmaq istəyən tələbələr
                          üçün xidmət göstərir.HYM Əhmədli filialımızın
                          tərkibində fəaliyyət göstərir.
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
              </div>
              <div className="carousel-item">
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
                          imtahan nəticələri 1 gün içərisində tələbəyə verilir.
                          Hədəf İmtahan mərkəzi Hədəf Kurslarının 20 Yanvar
                          filialında yerləşir.
                          <li>İmtahan suallarının hazırlanması</li>
                          <li>İmtahan prosesinə nəzarət</li>
                          <li>Nəticələrin yoxlanması</li>
                        </Modal.Body>
                      </Modal>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
              <div className="carousel-item">
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
                          Beyin Mühəndislik Akademiyası 2017-ci ildə fəaliyyətə
                          başlamışdır.Akademiyamızda sizə təklif edilən bir çox
                          təlim növlərimiz var: Sürətli Oxu, Nitq Mədəniyyəti,
                          Davranış Qaydaları, Düzgün Yazı Bacarığı , Yaddaş
                          Texnikaları və s.
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
              </div>
              <div className="carousel-item">
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
                          nəzdində yaradılmışdır. Hədəf İdman klubunda müxtəlif
                          idman növləri üzrə təlimlər keçirilir. Fəaliyyət
                          sahələrimizə cüdo, idman akrobatikası, jiu jitsu,
                          cross fit, trenajor, sauna və s. daxildir. Peşəkar
                          məşqçilərimizdən yararlanaraq siz də Hədəf İdman
                          Klubunu sağlamlığınızın başlıca nüansı kimi görə
                          bilərsiniz.
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
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsdepartment"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsdepartment"
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
          id="nav-Branch1"
          role="tabpanel"
          aria-labelledby="nav-Branch-tab"
        >
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
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
                        biridir...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/acami">
                          {" "}
                          <button
                            type="button"
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
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
                          <button
                            type="button"
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
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
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
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
                              className="CardInfoBtn btn btn-info w-50 "
                            >
                              Daha çox
                            </button>
                          </Link>
                        </small>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
                  <Card className="CardImage">
                    <Card.Img
                      className="depimages"
                      variant="top"
                      src="./images/qaraqarayev.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Qara Qarayev filialı</Card.Title>
                      <Card.Text>
                        Hədəf Kurslarının Qara Qarayev kursumuzun ən təcrübəli
                        ...
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Link to="/qaraqarayev">
                          {" "}
                          <button
                            type="button"
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
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
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
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
                          <button
                            type="button"
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
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
                            className="CardInfoBtn btn btn-info w-50 "
                          >
                            Daha çox
                          </button>
                        </Link>
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </div>
              <div className="carousel-item">
                <CardGroup>
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
                            className="CardInfoBtn btn btn-info w-50 "
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
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
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

        {/* testsubject */}
        <div
          className="tab-pane fade"
          id="nav-testsubject1"
          role="tabpanel"
          aria-labelledby="nav-testsubject1-tab"
        >
          <div
            id="carouselExampletestControlstest"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Card className="CardImage">
                  <Card.Img
                    className="depimages"
                    variant="top"
                    src="./images/bg2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Rus bölməsi</Card.Title>
                    <Card.Text>
                      Buraxılış fənləri üzrə MQT 5 mövzuları – 2021/2022 – Rus
                      bölməsi
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <button
                        type="button"
                        className="CardInfoBtn btn btn-info w-50 "
                      >
                        Daha çox
                      </button>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
              <div className="carousel-item">
                <Card className="CardImage">
                  <Card.Img
                    className="depimages"
                    variant="top"
                    src="./images/bg2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Azərbaycan bölməsi</Card.Title>
                    <Card.Text>
                      Buraxılış fənləri üzrə imtahan mövzuları MQT 5 – 2021/2022
                      – Azərbaycan bölməsi
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <button
                        type="button"
                        className="CardInfoBtn btn btn-info w-50 "
                      >
                        Daha çox
                      </button>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
              <div className="carousel-item">
                <Card className="CardImage">
                  <Card.Img
                    className="depimages"
                    variant="top"
                    src="./images/bg2.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Azərbaycan bölməsi</Card.Title>
                    <Card.Text>
                      Buraxılış fənləri üzrə MQT 4 mövzuları – 2021/2022 –
                      Azərbaycan bölməsi
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <button
                        type="button"
                        className="CardInfoBtn btn btn-info w-50 "
                      >
                        Daha çox
                      </button>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlstest"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlstest"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon nexticon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-lessonplan1"
          role="tabpanel"
          aria-labelledby="nav-lessonplan-tab"
        >
          <div className="AzSection">
            <div>9-cu sinif Azərbaycan bölməsi</div>
          </div>
          {/* 9 cu sinif Azərbaycan bölməsi */}
          <div className="comButtongr">
            <div className="CommonSection">
              <div className="Buttongr">
              <ButtonGroup vertical>
                  <a href="http://hedef.edu.az/hedefupdv/2021/09/Azerbaycan-dili-9-cu-sinif.pdf" target='_blank'>
                    <Button className="btncolor" variant="info">
                      Azərbaycan dili
                    </Button>
                  </a>
                  <a href="https://hedef.edu.az/hedefupdv/2019/09/%C6%8Fd%C9%99biyyat-9-cu-sinif.pdf" target='_blank'><Button className="btncolor" variant="info">
                    Ədəbiyyat
                  </Button></a>
                 <a href="https://hedef.edu.az/hedefupdv/2019/09/Riyaziyyat-9-cu-sinif-I-II-III-qrup.pdf" target='_blank'> <Button className="btncolor" variant="info">
                    Riyaziyyat
                  </Button></a>
                  <Button className="btncolor" variant="info">
                    <a href="http://hedef.edu.az/hedefupdv/2021/09/Fizika-9-cu-sinif-I-qrup.pdf" target='_blank'> Fizika</a>
                  </Button>
                 <a href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-9-cu-sinif.pdf" target="_blank"> <Button className="btncolor" variant="info">
                    Biologiya
                  </Button></a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-9-cu-sinif.pdf" target="_blank"><Button className="btncolor" variant="info">
                    Coğrafiyya
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-9-cu-sinif-II-qrup.pdf" target="_blank"><Button className="btncolor" variant="info">
                    Tarix
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-9-cu-sinif.pdf" target="_blank"><Button className="btncolor" variant="info">
                    İngilis dili
                  </Button></a>
                 <a href="http://hedef.edu.az/hedefupdv/2021/09/Rus-dili-9-cu-sinif-az-bolmesi.pdf" target="_blank"> <Button className="btncolor" variant="info">
                    Rus dili
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-9-cu-sinif.pdf" target="_blank"><Button className="btncolor" variant="info">
                    Kimya
                  </Button></a>
                </ButtonGroup>
              </div>
            </div>
            <div className="AzSection">
            <div>10-cu sinif Azərbaycan bölməsi</div>
          
          </div>
            {/* 10 sinif Azərbaycan bölməsi */}
            <div className="CommonSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                 <a href="https://hedef.edu.az/hedefupdv/2021/09/Azerbaycan-dili-11-ci-sinif.pdf"  target="_blank"> <Button className="btncolor" variant="danger">
                    Azərbaycan dili
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/%C6%8Fd%C9%99biyyat-11-ci-sinif.pdf" target="_blank"><Button className="btncolor" variant="danger">
                    Ədəbiyyat
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Riyaziyyat-11-cu-sinif-I-II-qrup.pdf" target="_blank"><Button className="btncolor" variant="danger">
                    Riyaziyyat
                  </Button></a>
                 <a href="https://hedef.edu.az/hedefupdv/2021/09/Fizika-11-ci-sinif-I-IV-qrup.pdf" target="_blank"> <Button className="btncolor" variant="danger">
                    Fizika
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Biologiya-11-ci-sinif.pdf" target="_blank"> <Button className="btncolor" variant="danger">
                    Biologiya
                  </Button></a>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Cografiya-11-ci-sinif.pdf" target="_blank"><Button className="btncolor" variant="danger">
                    Coğrafiyya
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-11-ci-sinif-II-qrup.pdf" target="_blank"><Button className="btncolor" variant="danger">
                    Tarix
                  </Button></a>
                 <a href="https://hedef.edu.az/hedefupdv/2021/09/%C4%B0ngilis-dili-11-ci-sinif-.pdf" target="_blank"> <Button className="btncolor" variant="danger">
                    İngilis dili
                  </Button></a>
                  <a href="https://hedef.edu.az/hedefupdv/2021/09/Tarix-11-ci-sinif-II-qrup.pdf" target="_blank"><Button className="btncolor" variant="danger">
                    Rus dili
                  </Button></a>
                 <a href="https://hedef.edu.az/hedefupdv/2021/09/Kimya-11-ci-sinif-.pdf" target="_blank"> <Button className="btncolor" variant="danger">
                    Kimya
                  </Button></a>
                </ButtonGroup>
              </div>
            </div>
            <div className="AzSection">
            <div>11-ci sinif Azərbaycan bölməsi</div>
          </div>
            {/* 11 sinif Azərbaycan bölməsi */}
            <div className="CommonSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="success">
                    Azərbaycan dili
                  </Button>
                  <Button className="btncolor" variant="success">
                    Ədəbiyyat
                  </Button>
                  <Button className="btncolor" variant="success">
                    Riyaziyyat
                  </Button>
                  <Button className="btncolor" variant="success">
                    Fizika
                  </Button>
                  <Button className="btncolor" variant="success">
                    Biologiya
                  </Button>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="success">
                    Coğrafiyya
                  </Button>
                  <Button className="btncolor" variant="success">
                    Tarix
                  </Button>
                  <Button className="btncolor" variant="success">
                    İngilis dili
                  </Button>
                  <Button className="btncolor" variant="success">
                    Rus dili
                  </Button>
                  <Button className="btncolor" variant="success">
                    Kimya
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="AzSection">
            <div>9-cu sinif Rus bölməsi</div>
            
          </div>

          {/* 9 cu sinif Rus bölməsi */}
          <div className="comButtongr">
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="info">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="info">
                    Литература
                  </Button>
                  <Button className="btncolor" variant="info">
                    Математика
                  </Button>
                  <Button className="btncolor" variant="info">
                    Физика
                  </Button>
                  <Button className="btncolor" variant="info">
                    Биология
                  </Button>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="info">
                    География
                  </Button>
                  <Button className="btncolor" variant="info">
                    История
                  </Button>
                  <Button className="btncolor" variant="info">
                    Aнглийский-язык
                  </Button>
                  <Button className="btncolor" variant="info">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="info">
                    Химия
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="AzSection">
            <div>10-cu sinif Rus bölməsi</div>
           
            
          </div>
            {/* 10 sinif Rus bölməsi */}
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="danger">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Литература
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Математика
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Физика
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Биология
                  </Button>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="danger">
                    География
                  </Button>
                  <Button className="btncolor" variant="danger">
                    История
                  </Button>

                  <Button className="btncolor" variant="danger">
                    Aнглийский-язык
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="danger">
                    Химия
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="AzSection">
            <div>11-ci sinif Rus bölməsi</div>
            
          </div>
            {/* 11 sinif rus bölməsi */}
            <div className="CommonRusSection">
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="success">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="success">
                    Литература
                  </Button>
                  <Button className="btncolor" variant="success">
                    Математика
                  </Button>
                  <Button className="btncolor" variant="success">
                    Физика
                  </Button>
                  <Button className="btncolor" variant="success">
                    Биология
                  </Button>
                </ButtonGroup>
              </div>
              <div className="Buttongr">
                <ButtonGroup vertical>
                  <Button className="btncolor" variant="success">
                    География
                  </Button>
                  <Button className="btncolor" variant="success">
                    История
                  </Button>
                  <Button className="btncolor" variant="success">
                    Aнглийский-язык
                  </Button>
                  <Button className="btncolor" variant="success">
                    Русский-язык
                  </Button>
                  <Button className="btncolor" variant="success">
                    Химия
                  </Button>
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
                <Button className="btncolor" variant="secondary">
                  Azərbaycan dili
                </Button>
                <Button className="btncolor" variant="secondary">
                  Biologiyya
                </Button>
                <Button className="btncolor" variant="secondary">
                  Coğrafiyya
                </Button>
                <Button className="btncolor" variant="secondary">
                  Ədəbiyyat (Azərbaycan bölməsi)
                </Button>
                <Button className="btncolor" variant="secondary">
                  Ədəbiyyat (Rus bölməsi)
                </Button>
                <Button className="btncolor" variant="secondary">
                  Fizika
                </Button>
              </ButtonGroup>
            </div>
            <div className="Buttongr">
              <ButtonGroup vertical>
                <Button className="btncolor" variant="secondary">
                  İbtidai Qrup Azərbaycan dili
                </Button>
                <Button className="btncolor" variant="secondary">
                  Tarix
                </Button>
                <Button className="btncolor" variant="secondary">
                  İbtidai Qrup Riyaziyyat
                </Button>
                <Button className="btncolor" variant="secondary">
                  İnformatika
                </Button>
                <Button className="btncolor" variant="secondary">
                  Kimya
                </Button>
                <Button className="btncolor" variant="secondary">
                  İngilis dili
                </Button>
              </ButtonGroup>
            </div>
            <div className="Buttongr">
              <ButtonGroup vertical>
                <Button className="btncolor" variant="secondary">
                  Kurikulum
                </Button>
                <Button className="btncolor" variant="secondary">
                  Riyaziyyat
                </Button>
                <Button className="btncolor" variant="secondary">
                  Məntiq
                </Button>
                <Button className="btncolor" variant="secondary">
                  Rus dili(Rus bölməsi)
                </Button>
                <Button className="btncolor" variant="secondary">
                  Rus dili (Azərbaycan bölməsi)
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-examdate1"
          role="tabpanel"
          aria-labelledby="nav-examdate-tab1"
        >
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                className="examimages"
                src="./images/buraxilisimtahani.jpg"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                className="examimages"
                src="./images/buraxilisimtahani.jpg"
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

export default Navtabsmobile;
