import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../../CSS/website/navbar.css";
import Navbar from "../Navbar";

import CFooter from "../cFooter";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Activity() {
  // const [state,setState]=useState(false);
  // const toggle =()=>{
  //   setState(!state);
  // }
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <>
    
      <Navbar />
      <div className="comservices">
        <div className="container services">
          <ul
            className="nav nav-pills mb-3 serviceul"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item servicescalm" role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink active"
                id="pills-teacher-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-teacher"
                type="button"
                role="tab"
                aria-controls="pills-teacher"
                aria-selected="true"
              >
                Müəllim hazırlığı
              </button>
            </li>
            <li className="nav-item servicescalm " role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink "
                id="pills-Abituriyent-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Abituriyent"
                type="button"
                role="tab"
                aria-controls="pills-Abituriyent"
                aria-selected="false"
              >
                Abituriyent hazırlığı
              </button>
            </li>
            <li className="nav-item servicescalm" role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink"
                id="pills-magistr-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-magistr"
                type="button"
                role="tab"
                aria-controls="pills-magistr"
                aria-selected="false"
              >
                Magistr hazırlığı
              </button>
            </li>
            <li className="nav-item servicescalm" role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink"
                id="pills-state-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-state"
                type="button"
                role="tab"
                aria-controls="pills-state"
                aria-selected="false"
              >
                Dövlət Orqanlarına Hazırlıq
              </button>
            </li>
            <li className="nav-item servicescalm" role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink"
                id="pills-school-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-school"
                type="button"
                role="tab"
                aria-controls="pills-school"
                aria-selected="false"
              >
                Məktəbəqədər hazırlıq
              </button>
            </li>
            <li className="nav-item servicescalm" role="presentation">
              <button
                className="btn btn-outline-secondary nav-link serviceslink"
                id="pills-yos-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-yos"
                type="button"
                role="tab"
                aria-controls="pills-yos"
                aria-selected="false"
              >
                YÖS hazırlığı
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-teacher"
              role="tabpanel"
              aria-labelledby="pills-teacher-tab"
              tabindex="0"
            >
              {/* Müəllim hazırlığı */}
              <h3 className="text-center">Müəllim hazırlığı</h3>
              <div className="teacher-text">
                Bildiyiniz kimi, Azərbaycanda ilk müəllim hazırlığı dərsləri
                məhz Hədəf Kurslarında keçirilimişdir. Hədəf Kursları hər ilin
                dekabr-yanvar aylarından etibarən “Müəllimlərin işə qəbulu
                imtahanına hazırlıq” kurslarına start verir. Azərbaycan
                Respublikası Təhsil Nazirliyinin keçirdiyi müəllimlərin işə
                qəbulu imtahanına marağın çoxaldığını nəzərə alaraq müraciət
                edənlərin bu imtahana daha yaxşı hazırlaşması üçün kurslar
                təşkil edilir.
                <br />
                Hazırlıq proqramını tədris edən pedaqoqlar sahəsinin ən
                peşəkarlarıdır. Beynəlxalq və milli məsləhətçilərin
                seminarlarını keçmiş kurikulum təlimçiləri, təhsilə yeni
                yanaşmanın sirlərini dinləliyicilərə ustalıqla öyrədirlər.
                <br />
                Dərs proqramı Təhsil nazirliyi tərəfindən nəşr edilmiş siniflər
                üzrə dərs vəsaitlərinə əsaslanır.
                <br />
                Həftəlik dərs saatları aşağıdakı cədvəldə göstərilmişdir :
                <div>
                  <img
                    className="teacherimage"
                    src=".././images/teacher1.jpg"
                    alt=""
                  />
                </div>
              </div>

              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>İxtisaslar</th>
                        <th>Həftəlik dərs saatı</th>
                        <th>Fənlər üzrə dərs saatı</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>İbtidai sinif və Filologiya</td>
                        <td>12 saat</td>
                        <td>
                          6 saat ixtisas/ 3 saat məntiq / 3 saat kurikulum
                        </td>
                      </tr>
                      <tr>
                        <td>Digər bütün ixtisaslar</td>
                        <td>11 saat</td>
                        <td>
                          5 saat ixtisas/ 3 saat məntiq / 3 saat kurikulum
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="teacher-text-li">
                    <ul>
                      <li>
                        Dərsliklər ( Məntiq və kurikulum) və elekton vəsaitlər
                        kurs tərəfindən verilir.
                      </li>
                      <li>
                        Dərslər 8-10 nəfərlik quruplarla və fərdi olaraq
                        keçirilir.
                      </li>
                      <li>Ayda 2 dəfə sınaq imtahanı nəzərdə tutulmuşdur.</li>
                      <li>
                        Aylıq sınaq imtahanında hər fənn üzrə birinci yeri tutan
                        müdavim növbəti ay üçün ödənişdən azad edilir. (Həmin
                        fənn üzrə imtahanda iştirak edən Hədəfçilərin sayı ən az
                        15 nəfər olmaq şərti ilə)
                      </li>
                      <li>
                        Ölkə üzrə maksimum nəticə yığan müdavimə il ərzində
                        ödədiyi ödəniş geri qaytarılır.
                      </li>
                      <li>
                        60 bal yığan müdavimə 4000 AZN pul mükafatı verilir.
                      </li>
                    </ul>
                    Bundan başqa hər il Hədəf Kurslarına müəllim qəbulu
                    imtahanları da keçirilir ki, bu imtahanda 1000-dən çox insan
                    iştirak edir. Kursumuzda MİQ hazırlığı keçən dinləyicilər
                    Hədəf Kurslarına müəllim qəbulu imtahanında iştirak etmək
                    üçün güzəştlər əldə edirlər. İmtahan nətəcələri məqbul olan
                    müdavimlər işə qəbul prosesində daha çox şans əldə edir. Hər
                    il müxtəlif filiallarımızda onlarla MİQ dinləyicimiz işə
                    qəbul olunur. Seçilmiş müəllimlər avqust ayında Hədəf
                    Pedaqoji seminarını keçdikdən sonra müvafiq dərslərlə təmin
                    edilirlər.
                  </div>
                </div>
              </Collapse>
              <div className="allshowpage">
                <Button
                  onClick={() => 
                    
                    setOpen(!open)

                  }
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="text-center "
                  
                >
                 {/* {state ? 'Daha az':'Daha çox'} */}
                 Daha çox
                </Button>
              </div>
            </div>
            {/* Abituriyent hazirligi */}
            <div
              className="tab-pane fade abituriyent"
              id="pills-Abituriyent"
              role="tabpanel"
              aria-labelledby="pills-Abituriyent-tab"
              tabindex="0"
            >
              <h3 className="text-center">Abituriyent hazırlığı</h3>
              Artıq 12 ildir ki, fəaliyyət göstərən Hədəf Kursları abituriyent
              istiqaməti üzrə öz uğur faizi ilə daim seçilmişdir. 8,9,10,11-ci
              sinif şagirdləri üçün nəzərdə tutulan abituriyent hazırlığı Hədəf
              Kurslarının bütün filiallarında mövcüddur. Hazırda Azərbaycan və
              rus bölməsi üzrə abituriyent hazırlığı Yasamal, Azadlıq, Qara
              Qarayev, Əhmədli, yalnız azərbaycan bölməsi üzrə hazırlıq isə
              Nizami, Əcəmi, Xırdalan və Sumqayıt filiallarında mövcuddur.
              Dərslər yeni təhsil sənədləri (Kurikulum) əsasında hazırlanmış
              proqramlar əsında keçirilir
              <h6 className="text-center fw-bold">
                HƏDƏF KURSLARINDA DƏRSLƏRİN SƏMƏRƏLİ VƏ RAHAT ŞƏKİLDƏ
                KEÇİRİLMƏSİ ÜÇÜN LAZIMİ ŞƏRAİT VARMI ?
              </h6>
              Artıq 12 ildir ki, fəaliyyət göstərən Hədəf Kursları abituriyent
              istiqaməti üzrə bir çox uğurlara imza atmış, daim öz uğur
              göstəriciləri ilə seçilmişdir. Bu gün kursumuzda şagirdlərin
              dərsləri keçməsi üçün ayrılan sinif otaqlarımız tədris üçün lazım
              olan bütün imkanlara malikdir. Filiallarda müəyyən fənnlər üçün
              nəzərdə tutulmuş elektron avadanlıqlar sinif şəraitində fəaliyyət
              göstərir.
              <Collapse in={open1}>
                <div id="example-collapse-text">
                  Şagirdlərimiz tənəffüslərdə yeməkxanadan istifadə etmək
                  imkanına malikdirlər. Bunlardan əlavə kursumuzun bütün
                  şagirdləri Hədəf Kart əldə etməklə Hədəf şirkətlər qrupuna
                  məxsus bütün şirkətlərdən yüksək endirimlər əldə edirlər.
                  Qəbul imtahanında “Bilgə” aşağıdakı şəkildə müəyyən edilir:
                  —Təməl qruplarda ümumilikdə hər sinif üzrə ən yüksək bal
                  toplamış şagird “Sinif lideri” hesab edilir. — 9-10-11-ci
                  siniflər üçün lider Azərbaycan və rus və bölməsi olaraq
                  qruplar üzrə birgə müəyyənləşdirilir. Hər qrupun ən yüksək bal
                  toplayan şagirdi “Qrup Lideri” adlandırılır.
                  <h6 className="text-center fw-bold">
                    HƏDƏF KURSLARINI SEÇMƏKLƏ NƏLƏR ƏLDƏ EDƏCƏKSİNİZ ?
                  </h6>
                  <ul>
                    <li>
                      Hər ay tədris ili ərzində ümumilikdə 6 MQT (İxtisas bloku
                      üzrə mövzu qiymətləndirmə testi), 6 BMQT (Buraxılış mövzu
                      qiymətləndirmə testi), 6 ÜQT ( 3-ü ixtisas bloku üzrə, 3-ü
                      isə buraxılış üzrə ümumi qiymətləndirmə testi) ilə
                      biliyinizi qiymətləndirəcəksiniz;
                    </li>
                    <li>
                      Tanınmış metodistlərin hazırladığı proqrama sahib
                      olacaqsınız;
                    </li>
                    <li>
                      Hədəf Oxucu Klubuna üzv olub, kitabxanamızdan pulsuz
                      yararlana bilərsiniz.
                    </li>
                    <li>
                      Şagirdlərimizin siniflər üzrə dərs yükləri aşağıdakı
                      kimidir
                      <ul>
                        <li>IX-XI siniflər – həftədə 3 dəfə olmaqla 18 saat</li>
                        <li>Buraxılış – həftədə 2 dəfə olmaqla 12 saat</li>
                        <li>
                          Əsas təhsil üzrə texnikumlara hazırlaşanlar üçün –
                          həftədə 2 dəfə olmaqla 12 saat
                        </li>
                        <li>VIII siniflər- həftədə 3 dəfə olmaqla 16 saat</li>
                        <li>VII siniflər həftədə 3 dəfə olmaqla 15 saat</li>
                        <li>VI siniflər həftədə 3 dəfə olmaqla 12 saat</li>
                        <li>V siniflər həftədə 3 dəfə olmaqla 9 saat</li>
                        <li>I-IV siniflər – həftədə 2 dəfə olmaqla 8 saat</li>
                      </ul>
                    </li>
                    <h5 className="fw-bold">
                      P.S. 1 dərs saatı 45 dəqiqə davam edir.
                    </h5>
                    <li>
                      Hədəf Kursları tərəfindən təqdim olunan ödənişsiz dərslik
                      vəsaitləri
                      <ul>
                        <li>
                          I QRUPLAR ÜÇÜN
                          <ul>
                            <li>Azərbaycan dili vəsait (yeni nəşr)</li>
                            <li>Cəbr vəsait(yeni nəşr)</li>
                            <li>Fizika vəsait (yeni nəşr)</li>
                            <li>Kimya vəsait (yeni nəşr)</li>
                            <li>
                              İngilis dili vəsait (yeni nəşr )/ Rus dili vəsait
                            </li>
                            <li>Azərbaycan dili test bank (yeni nəşr)</li>
                            <li>Cəbr test bank</li>
                            <li>Kimya test bank</li>
                            <li>İngilis dili test bank / Rus dili test bank</li>
                            <li>
                              Riyaziyyat test bank (yeni nəşr) (cəbr və həndəsə)
                            </li>
                          </ul>
                        </li>
                        <li>
                          II QRUPLAR ÜÇÜN
                          <ul>
                            <li>Azərbaycan dili vəsait (yeni nəşr)</li>
                            <li>Cəbr vəsait(yeni nəşr)</li>
                            <li>Coğrafiya vəsait (yeni nəşr)</li>
                            <li>
                              İngilis dili vəsait (yeni nəşr) / Rus dili vəsait
                            </li>
                            <li>Azərbaycan dili test bank (yeni nəşr)</li>
                            <li>Cəbr test bank</li>
                            <li>İngilis dili test bank / Rus dili test bank</li>
                            <li>
                              Azərbaycan tarixi test bank I hissə (yeni nəşr)
                            </li>
                            <li>
                              Azərbaycan tarixi test bank II hissə (yeni nəşr)
                            </li>
                            <li>
                              Riyaziyyat test bank (yeni nəşr) (cəbr və həndəsə)
                            </li>
                          </ul>
                        </li>
                        <li>
                          III QRUPLAR ÜÇÜN
                          <ul>
                            <li>Azərbaycan dili vəsait (yeni nəşr)</li>
                            <li>Cəbr vəsait(yeni nəşr)</li>
                            <li>Ədəbiyyat vəsait</li>
                            <li>
                              İngilis dili vəsait (yeni nəşr)/ Rus dili vəsait
                            </li>
                            <li>Azərbaycan dili test bank (yeni nəşr)</li>
                            <li>Cəbr test bank</li>
                            <li>Ümumi tarix test bank (yeni nəşr)</li>
                            <li>İngilis dili test bank / Rus dili test bank</li>
                            <li>
                              Azərbaycan tarixi test bank I hissə (yeni nəşr)
                            </li>
                            <li>
                              Azərbaycan tarixi test bank II hissə (yeni nəşr)
                            </li>
                            <li>
                              Riyaziyyat test bank (yeni nəşr) ( Cəbr və
                              Həndəsə)
                            </li>
                          </ul>
                        </li>
                        <li>
                          IV QRUPLAR ÜÇÜN
                          <ul>
                            <li>Azərbaycan dili vəsait (yeni nəşr)</li>
                            <li>Cəbr vəsait(yeni nəşr)</li>
                            <li>Fizika vəsait (yeni nəşr)</li>
                            <li>Kimya vəsait (yeni nəşr)</li>
                            <li>Biologiya vəsait (yeni nəşr)</li>
                            <li>
                              İngilis dili vəsait (yeni nəşr)/ Rus dili vəsait
                            </li>
                            <li>Azərbaycan dili test bank (yeni nəşr)</li>
                            <li>Cəbr test bank</li>
                            <li>Kimya test bank</li>
                            <li>Biologiya qrafik testlər</li>
                            <li>İngilis dili test bank / Rus dili test bank</li>
                            <li>
                              Riyaziyyat test bank (yeni nəşr) (cəbr və həndəsə)
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      Aylıq sınaq imtahanında ( MQT+BMQT ) ayın lideri olub
                      ödənişsiz təhsil alacaqsınız
                    </li>
                    <li>
                      Kurs müddətində və kurs sonunda şagirdlərimizə təcrübəli
                      müəllimlərimiz və ölkəmizin tanınmış psixoloqları
                      tərəfindən psixoloji vəziyyətin yaxşılaşması üçün
                      seminarlar, treninqlər keçirilir.
                    </li>
                    <li>
                      Kurs həyatında və bundan sonra siz də Hədəf ailəsinin bir
                      üzvünə çevriləcək, ictimai fəaliyyətiniz və biliyinizlə
                      cəmiyyətin diqqətini özünüzə çəkəcək, tələbə olduqdan
                      sonra Hədəf Karyera Mərkəzinin imkanlarından yararlana
                      biləcəksiniz.
                    </li>
                  </ul>
                  Bu xidmətlər sadəcə aylıq ödəniş paketinə daxildir.
                  <br />
                  Hər il aprel-may aylarında kursumuza qəbul imtahanı keçirilir
                  ki, bu imtahanlarda nəticələri yüksək olan tələbələr onlar
                  üçün nəzərdə tutulmuş müəyyən güzəştlərdən yararlana bilər.
                  <br />
                  <p className="fw-bold">
                    {" "}
                    « Hədəf kurslarına qəbul imtahanında keçirilən ballara görə
                    güzəşt faizlərimiz »:
                  </p>
                  <ul>
                    <li>651 – 700 – 100%</li>
                    <li>601 – 650 – 70%</li>
                    <li>551 – 600 – 50%</li>
                    <li>451 – 550 – 30%</li>
                    <li>351 – 450 – 25%</li>
                    <li>201 – 350 – 15%</li>
                  </ul>
                  <p className="text-center fw-bold">
                    Hədəfini doğru seç, bizimlə biliyinə bilik qat!
                  </p>
                </div>
              </Collapse>
              <div className="allshowpage">
                <Button
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                >
                  Daha çox
                </Button>
              </div>
            </div>
            {/* Magistratura hazırlığı */}
            <div
              className="tab-pane fade master"
              id="pills-magistr"
              role="tabpanel"
              aria-labelledby="pills-magistr-tab"
              tabindex="0"
            >
              <h3 className="text-center">Magistratura hazırlığı</h3>
              Artıq 10 ildir ki, kursumuzda magistraturaya hazırlıq qrupları
              fəaliyyət göstərir. “Hədəf Kursları”nın magistratura istiqaməti
              üzrə ilk məzunları 2009-2010-cu tədris ilində olmuşdur. Həmin il
              uğurumuz 88% olmuşdur.
              <br />
              Hər il avqust ayının 1-dən etibarən Magistr hazırlığımız üzrə
              qeydiyyat başlayır. Qeydiyyat Hədəf Kurslarının bütün
              filiallarında aparılır.
              <ul>
                <h5>
                  “Hədəf kursları” MAGİSTR hazırlığında 2021-2022-ci tədris ili
                  üçün qəbul elan edir.
                </h5>
                <li>Təcrübəli müəllim heyəti</li>
                <li>8-10 nəfərlik quruplar və fərdi dərslər</li>
                <li>
                  Həftədə 12 saatlıq tədris proqramı. (Həftədə 2 dəfə 90 dəqiqə
                  olmaqla məntiq, informatika, xarici dil)
                </li>
                <li>
                  “Hədəf” nəşrlərinə aid 5 müxtəlif dərs vəsaiti və test
                  bankı“Hədəf” nəşrlərinə aid 5 müxtəlif dərs vəsaiti və test
                  bankı
                </li>
                <li>Ayda 2 dəfə ödənişsiz sınaq imtahanı.</li>
                <li>
                  Həftə sonunda kursdaxili Dərs Qiymətləndirmə Testləri ilə
                  imtahan
                </li>
                <li>
                  4 dostunu gətirən bakalavr ödənişsiz təhsil almaq hüququ
                  qazanır.
                </li>
              </ul>
              <Collapse in={open2}>
                <div id="example-collapse-text">
                  <div>
                    <img
                      className="masterimage"
                      src=".././images/masterhdf.jpg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold mt-3">MÜKAFATLARIMIZ</h5>
              Aylıq sınaq imtahanında ilk 3 yeri tutan tələbələrə növbəti ay
              üçün aşağıda göstərilən güzəştlər nəzərdə tutulmuşdur:
              <li>I yer – 100%</li>
              <li>II yer – 75%</li>
              <li>III yer – 50%</li>
              *Qəbul imtahanında 90+ bal yığan tələbəyə il ərzində ödədiyi
              ödəniş geri qaytarılır.
              <ul>
                *Qəbul imtahanı mükafatı.
                <li>Respublika birincisi – 5000 AZN</li>
                <li>Respublika ikincisi – 3000 AZN</li>
                <li>Respublika üçüncüsü –1000 AZN</li>
              </ul>
              <div className="masteryear">
                <ul>
                  <h5 className="fw-bold">Nəticələrimiz:</h5>
                  <li>2009-2010-cu il – 88%</li>
                  <li>2010-2011-ci il – 92%</li>
                  <li>2011-2012-ci il – 99%</li>
                  <li>2013-2014-cü il – 97%</li>
                  <li>2014-2015-ci il – 98%</li>
                  <li>2015-2016-cı il – 93%</li>
                  <li>2016-2017-ci il – 95%</li>
                  <li>2017-2018-ci il – 97%</li>
                  <li>2018-2019-ci il –96 %</li>
                  <li>2019- 2020-ci il – 94 %</li>
                  <li>2020- 2021-ci il – 97 %</li>
                  <li>2021- 2022-ci il – 99 %</li>
                </ul>
                <img
                  className="masterimage1"
                  src=".././images/magistr1.jpg"
                  alt=""
                />
              </div>
                </div>
              </Collapse>
              <Collapse in={open2}>
                <div id="example-collapse-text">
                  
                </div>
              </Collapse>
              <div className="allshowpage">
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
              >
                Daha çox
              </Button>
              </div>
            </div>
            <div
              className="tab-pane fade master"
              id="pills-state"
              role="tabpanel"
              aria-labelledby="pills-state-tab"
              tabindex="0"
            >
              <h3 className="text-center">
                Dövlət orqanlarının və Xüsusi Dövlət orqanlarının müsabiqə və
                müsahibə mərhələsinə hazırlıq
              </h3>
              Dövlət İmtahan Mərkəzi vətəndaşların dövlət orqanlarına qəbulunu
              həyata keçirmək üçün il ərzində bir və ya bir neçə dəfə (vakant
              yerlərin təqdim edilməsindən asılıdır) müsabiqə elan edir.
              Müxtəlif dövlət orqanları öz vakant yerlərini müsabiqəyə çıxartmaq
              üçün İmtahan Mərkəzinə təqdim edir. Müsabiqə test və müsahibə
              mərhələsindən ibarətdir.Test mərhələsində 100 suala cavab vermək
              tələb olunur. Müsabiqəni keçib müsahibə mərhələsində uğur
              qazananlar isə müxtəlif dövlət orqanlarında işə təyin olunma
              imkanı əldə edirlər.
              <ul>
              <li>
                  1. Dövlət Qulluğuna hazırlıq
                  
                  <ul>
                    <li>Qanunvericilik</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                    <li>Azərbaycan dili</li>
                  </ul>
                </li>
                </ul> 
              <Collapse in={open3}>
                <div id="example-collapse-text">
                <ul>
               
                <li>
                  2. Gömrük orqanlarına hazırlıq:
                  <ul>
                    <li> Gömrüklə bağlı qanunvericilik aktları</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                  </ul>
                </li>
                <li>
                  


                  3. Prokurorluq orqanlarına hazırlıq
                  <ul>
                    <li>Qanunvericilik</li>
                    <li>Məntiq</li>
                  </ul>
                </li>
                <p>
                  {" "}
                  P.S : Prokurorluq Orqanlarına hazırlıq 3 hissədən ibarətdir :
                  1. test, 2. kazus ( yazılı imtahan), 3.şifahi müsahibə
                </p>
                <li>
                  4. Miqrasiya Orqanlarına hazırlıq
                  <ul>
                    <li>Miqrasiya ilə bağlı qanunvericilik aktları</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                    <li>Ümumi Dünyagörüşü (Tarix və Coğrafiya) </li>
                  </ul>
                </li>
                <li>
                  5. Vergi Orqanlarına hazırlıq
                  <ul>
                    <li>Vergi ilə bağlı qanunvericilik aktları</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                  </ul>
                </li>
                <li>
                  6. Notariat və Ədliyyə orqanlarına hazırlıq:
                  <ul>
                    <li>Qanunvericilik</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                  </ul>
                </li>
                <li>
                  7. Daxili İşlərə hazırlıq:
                  <ul>
                    <li>Qanunvericilik</li>
                    <li>Məntiq</li>
                    <li>İnformatika</li>
                    <li>Psixoloji test (Pedaqogika və psixologiya)</li>
                  </ul>
                </li>
                <li>
                  8. Hakimlik orqanlarına hazırlıq:
                  <ul>
                    <li>Qanunvericilik</li>
                    <li>Məntiq</li>
                  </ul>
                </li>
              </ul>
              <h5 className="text-center fw-bold"> MÜSAHİBƏ MƏRHƏLƏSİ</h5>
              <li> Ümumi dünyagörüşü</li>
              <li> Qanunvericilik</li>
              <li> Vəzifə və orqanın proqramı</li>
              <li>
                {" "}
                Etik davranışlar,bədən dili, informatika bilgiləri və dil
                bilgiləri ( tələb olunduğu halda)
              </li>
              <h5 className="text-center fw-bold">
                {" "}
                Bundan başqa Hədəf Kurslarında Dövlət Banklarına hazırlıqda
                mövcuddur.
              </h5>
              <li>
                Mərkəzi Banka hazırlıq -həm test həm müsahibə mərhələsinin
                hazırlığı
              </li>
              <li>Qanunvericilik</li>
              <li>Məntiq</li>
              <li>İnformatika</li>
              <h5 className="text-center fw-bold">
                {" "}
                Qeyd: Bütün göstərilən hazırlıq istiqamətləri üzrə qəbul faizi
                97 % -dir.
                <br />
                Əlaqə üçün : (+994)77 555 01 08\18 ( Nizami filialı )
              </h5>
                </div>
              </Collapse>
              <div className="allshowpage">
                <Button
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                  className="text-center "
                >
                  Daha çox
                </Button>
                
              </div>
             
            </div>
            {/*Məktəbəqədər hazırlıq  */}
            <div
              className="tab-pane fade master"
              id="pills-school"
              role="tabpanel"
              aria-labelledby="pills-school-tab"
              tabindex="0"
            >
              <h3 className="text-center">Məktəbəqədər hazırlıq</h3>
              Ölkəmizdə həm dövlət, həm də özəl məktəblər 1-ci sinfə şagird
              qəbul edərkən xüsusi imtahanlar keçirirlər. Məhz bu səbəbdəndir
              ki, kursumuzda Azərbaycan və rus bölmələri üzrə 4-5-6 yaşlı
              uşaqlar üçün məktəbəqədər hazırlıq dərsləri fəaliyyət göstərir.
              Dərslərin hazırlığı 9 ay davam edir. Tədris ili müddətində
              öyrənilən dərslərin daha yaxşı mənimsənilməsi üçün aylıq sınaq
              imtahanları keçirilir. Bundan başqa dünya görüşlərini artırmaq
              məqsədi ilə bayram günlərinin keçirilməsi, ekskursiyaların təşkili
              kimi uşaqların inkişafını sürətləndirəcək fəaliyyət
              istiqamətlərimizdə mövcuddur. Hazırlıq müddəti bitdikdən sonra
              kursu bitirən balaca hədəfçilərə sertifikat təqdim olunur.
              <h3 className="text-center">Dərslərdə nələr öyrədilir?</h3>
              <Collapse in={open4}>
                <div id="example-collapse-text">
                <li>
                Savad təlimi məşğələsində əlifba vasitəsilə sözlər qurula bilir
              </li>
              <li>
                Riyaziyyat və məntiq məşğələsində sadə riyazi əməllər və
                konstruktiv bacarıqlar nümayiş etdirilir, məkan və zamanla bağlı
                ilkin riyazi əməliyyatlar yerinə yetirilir
              </li>
              <li>
                Ətraf aləm məşğələsində canlı və cansız aləmdəki obyektlərlə
                düzgün davranış bacarığı formalaşdırılır, ətraf mühitdə baş
                verən hadisələr, ailə və vətən haqqında sadə məlumatlar
                öyrədilir
              </li>
              <li>
                Xarici dil dərsləri 3 günlük dərs proqramında yalnız ingilis
                dili, 5 günlük dərs proqramında isə ingilis və rus dilləri
                olaraq öyrədilir. Dərslər musiqili və əyləncəli formada
                keçirilir
              </li>
              <li>
                Uşaqların estetik inkişafı nəzərə alınaraq rəsm, rəqs, və
                yaradıcı iş məşğələləri keçirilir.
              </li>
              Burada uşaqların intellektual, psixi hazırlığını təmin etmək
              məqsədi ilə Hədəf Kurslarında məktəbəqədər hazırlıq 2 proqram
              əsasında aparılır:
              <h3 className="text-center">3 Günlük Dərs Proqramı</h3>
              <ul>Həftəlik 6 saat dərslərin keçirilməsi</ul>
              <ul>Dərs vəsaitlərinin pulsuz verilməsi</ul>
              <ul>
                Keçirilən fənlər:
                <li>Savad təlimi və nitqin inkişafı</li>
                <li>Riyaziyyat</li>
                <li>Məntiq</li>
                <li>İngilis dili</li>
                <li>Ətraf aləm</li>
                <li>Yaradıcı iş</li>
              </ul>
              <h3 className="text-center">5 Günlük Dərs Proqramı</h3>
              <ul>Həftəlik 20 saat dərslərin keçirilməsi</ul>
              <ul>Dərs vəsaitlərinin pulsuz verilməsi ( 4 kitab )</ul>
              <ul>Çay fasiləsi</ul>
              <ul>
                Keçirilən fənlər
                <li>Savad təlimi və nitqin inkişafı</li>
                <li>Riyaziyyat</li>
                <li>Məntiq</li>
                <li>Ətraf aləm</li>
                <li>İngilis dilid</li>
                <li>Rus dili</li>
                <li>Rəsm</li>
                <li>Bədii qiraət</li>
                <li>Davranış qaydaları</li>
                <li>Oyun saatı</li>
              </ul>
              <h3 className="fw-bold">Qeyd:</h3>
              <h5 className="fw-bold">
                Hazırda 3 günlük dərs proqramı Nizami, Azadlıq, Yasamal,
                Əhmədli, Xırdalan, Sumqayıt, Qara Qarayev filiallarında, həm 3,
                həm də 5 günlük dərs proqramı isə Azadlıq, Yasamal və Xırdalan
                filiallarımızda mövcüddür.
              </h5>
                </div>
              </Collapse>
              <div className="allshowpage">
              <Button
                  onClick={() => setOpen4(!open4)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open4}
                  className="text-center "
                >
                  Daha çox
                </Button>
             </div>
            </div>
            {/* Yös hazırlığı */}
            <div
              className="tab-pane fade master"
              id="pills-yos"
              role="tabpanel"
              aria-labelledby="pills-yos-tab"
              tabindex="0"
            >
              <h3 className="text-center">
                YÖS- Yabancı Öğrenci Sınavı deməkdir.
              </h3>
              Beləki Türkiyədə dövlət və ya bir sıra özəl universitetlərdə
              təhsil almaq istəyən hər kəsin YÖS nəticəsinə ehtiyacı var. YÖS
              hazırlıq kursları 9-10-11-ci sinif şagirdləri və məzunlar üçün
              nəzərdə tutulmuşdur. Məntiq-Riyaziyyat hazırlıqlarından ibarətdir.
              Kursda YÖS imtahanının əhatə etdiyi mövzular izah edilir,
              təkrarlanır və testlər işlədilir.
              <h3 className="text-center">Dərslərdə nələr öyrədilir?</h3>
              <li>
                Savad təlimi məşğələsində əlifba vasitəsilə sözlər qurula bilir
              </li>
              <li>
                Riyaziyyat və məntiq məşğələsində sadə riyazi əməllər və
                konstruktiv bacarıqlar nümayiş etdirilir, məkan və zamanla bağlı
                ilkin riyazi əməliyyatlar yerinə yetirilir
              </li>
              <li>
                Ətraf aləm məşğələsində canlı və cansız aləmdəki obyektlərlə
                düzgün davranış bacarığı formalaşdırılır, ətraf mühitdə baş
                verən hadisələr, ailə və vətən haqqında sadə məlumatlar
                öyrədilir
              </li>
              <li>
                Xarici dil dərsləri 3 günlük dərs proqramında yalnız ingilis
                dili, 5 günlük dərs proqramında isə ingilis və rus dilləri
                olaraq öyrədilir. Dərslər musiqili və əyləncəli formada
                keçirilir
              </li>
              <li>
                Uşaqların estetik inkişafı nəzərə alınaraq rəsm, rəqs, və
                yaradıcı iş məşğələləri keçirilir.
              </li>
              Burada uşaqların intellektual, psixi hazırlığını təmin etmək
              məqsədi ilə Hədəf Kurslarında məktəbəqədər hazırlıq 2 proqram
              əsasında aparılır:
              <h3 className="text-center">3 Günlük Dərs Proqramı</h3>
              <ul>Həftəlik 6 saat dərslərin keçirilməsi</ul>
              <ul>Dərs vəsaitlərinin pulsuz verilməsi</ul>
              <ul>
                Keçirilən fənlər:
                <li>Savad təlimi və nitqin inkişafı</li>
                <li>Riyaziyyat</li>
                <li>Məntiq</li>
                <li>İngilis dili</li>
                <li>Ətraf aləm</li>
                <li>Yaradıcı iş</li>
              </ul>
              <h3 className="text-center">5 Günlük Dərs Proqramı</h3>
              <ul>Həftəlik 20 saat dərslərin keçirilməsi</ul>
              <ul>Dərs vəsaitlərinin pulsuz verilməsi ( 4 kitab )</ul>
              <ul>Çay fasiləsi</ul>
              <ul>
                Keçirilən fənlər
                <li>Savad təlimi və nitqin inkişafı</li>
                <li>Riyaziyyat</li>
                <li>Məntiq</li>
                <li>Ətraf aləm</li>
                <li>İngilis dilid</li>
                <li>Rus dili</li>
                <li>Rəsm</li>
                <li>Bədii qiraət</li>
                <li>Davranış qaydaları</li>
                <li>Oyun saatı</li>
              </ul>
              <h3 className="fw-bold">Qeyd:</h3>
              <h5 className="fw-bold">
                Hazırda 3 günlük dərs proqramı Nizami, Azadlıq, Yasamal,
                Əhmədli, Xırdalan, Sumqayıt, Qara Qarayev filiallarında, həm 3,
                həm də 5 günlük dərs proqramı isə Azadlıq, Yasamal və Xırdalan
                filiallarımızda mövcüddür.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
}

export default Activity;
