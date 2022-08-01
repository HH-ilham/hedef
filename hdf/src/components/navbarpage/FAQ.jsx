import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/navbar.css";
import Accordion from "react-bootstrap/Accordion";
import { TabTitle } from "../TitleFunction";

function FAQ() {
  TabTitle('FAQ');
  return (
    <div>
      <TopBar/>
      <Navbar />
      <h5 className="text-center fs-3 mt-2 mb-3 ">Tez-Tez Verilən Suallar</h5>
      <div className="container comfaq">
       
        <div className="faq1">
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Hədəf Kurslarının neçə filialı var?
            </Accordion.Header>
            <Accordion.Body>
              Hədəf Kursları hazırda 8 filialda fəaliyyət göstərir. Nizami,
              Azadlıq, Xırdalan, Qara Qarayev, Əhmədli, Əcəmi, Yasamal və
              Sumqayıt filialı. Filiallarımızın ünvan və telefonları saytın
              “Filiallar” bölməsində qeyd edilib.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Şagirdlərə vəsaitlər pulsuz verilirmi?
            </Accordion.Header>
            <Accordion.Body>
              Hədəf şagirdləri Hədəf nəşrlərinə aid olan dərslikləri ödənişsiz
              əldə edir. 10-cu siniflər üçün yalnız kitablar, 11-ci siniflər
              üçün isə kitablar və test bankları ödənişsizdir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Dərslər neçə növbədə keçilir?</Accordion.Header>
            <Accordion.Body>
              Kursda dərslər iki növbədə keçilir. Məzunlar üçün səhər və günorta
              növbəsində, 9, 10 və 11-ci siniflər üçün isə orta məktəbdəki dərs
              cədvəllərinə uyğun olaraq günorta növbəsində dərs təyin olunur.
              Səhər növbəsində dərslər 9:30-da, günorta növbəsində isə 15:00-da
              başlanılır.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Kursda vakansiya varmı? </Accordion.Header>
            <Accordion.Body>
              Hədəf Kurslarına müəllim qəbulu ildə 1 dəfə – may ayında elan
              edilir. Bu zamana qədər toplanan cv-lərə baxılır və burada
              göstərilən nömrələrə imtahan müddətinə az qalmış sms göndərilib
              imtahana dəvət edilir. İyun ayının əvvəli isə imtahan keçirilir.
              Yalnız ekstra hallarda tədris ilinin ortasında bəzi ixtisaslar
              üzrə vakansiya elan olunur. Bu isə Hədəf Kurslarının facebook və
              instagram səhifəsində yerləşdirilir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              İmtahan mövzularını necə əldə etmək olar?
            </Accordion.Header>
            <Accordion.Body>
              İmtahan mövzuları hər ay təyin olunmuş imtahan tarixindən 10 gün
              əvvəl saytımızın “Hədəf xəbər” bölməsində verilir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
            
              İmtahan cavabları nə zaman elan olunur?
            </Accordion.Header>
            <Accordion.Body>
              Keçirilən imtahanının cavabları-MİQ, summativ, magistr imtahanları
              ən gec 2 gün ərzində, fənn blokları və buraxılış imtahan
              nəticələri isə 10 gündən gec olmayaraq İmtahan mərkəzi tərəfindən
              elan olunur. Siz cavabları əldə etmək üçün aldığınız kuponla birgə
              filiallarımızdan hər hansı birinə müraciət edə bilərsiniz.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        <div className="faq2">
          <Accordion>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Hədəf Kurslarında təhsil haqqı nə qədərdir?
              </Accordion.Header>
              <Accordion.Body>
                Bildiyiniz kimi Hədəf Kursları 8 filialda fəaliyyət göstərir.
                Ödənişlə bağlı uyğun filiala müraciət edərək ətraflı məlumat
                əldə etmək mümküdür. Filiallarda yerdəyişmə olduğu halda belə
                qiymət dəyişilmir.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Dərslərə gec qatılan şagirdlər nə etməlidir?
              </Accordion.Header>
              <Accordion.Body>
                Bildiyiniz kimi dərslərimiz sentyabr ayında başlanılır. Lakin
                noyabr ayına qədər qeydiyyatımız davam edir. Əgər şagird
                dərslərə gec başlayırsa o qətiyyən narahatlıq hissi duymasın. Bu
                zaman şagird oxuduğu filialın müdir müavininə yaxınlaşaraq, ona
                geri olduğu mövzuları mənimsəməsi üçün əlavə dərslər təyin
                edilməsini xahiş edir. Bir neçə əlavə dərsdən sonra şagirdin bu
                problemi tamamilə aradan qaldırılır.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Hədəf Kurslarının iş saatları necədir?
              </Accordion.Header>
              <Accordion.Body>
                Hədəf Kurslarının filialları şənbə günü də daxil olmaqla, həftə
                içi hər gün 9:00-dan 19:00-a qədər fəaliyyət göstərir. Müraciət
                edə bilərsiniz.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                Dil kursları üçün hara müraciət edə bilərik?{" "}
              </Accordion.Header>
              <Accordion.Body>
                Hədəf Kurslarının bütün filiallarına müraciət edə
                bilərsiniz.Müraciət edə bilərsiniz.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                Rus bölməsi üzrə hazırlıq hansı filiallarınızda keçilir?
              </Accordion.Header>
              <Accordion.Body>
                Hədəf Kurslarında Rus bölməsi 4 filialda keçirilir: Azadlıq,
                Yasamal, Qara Qarayev , Əhmədli .
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                Sınaq imtahanının nəticəsini necə əldə etmək olar?
              </Accordion.Header>
              <Accordion.Body>
                Sınaq imtahanının nəticəsini imtahandan 10 gündən gec olmayaraq
                online şəkildə imtahanim.com saytından və yaxud bilet aldığınız
                filildan əldə edə bilərsiniz.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
         </div>
      </div>
      <CFooter />
    </div>
  );
}

export default FAQ;
