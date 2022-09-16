import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import emailjs from '@emailjs/browser';
import "../../CSS/website/contactform.css";
import swal from "sweetalert";
import { TabTitle } from "../TitleFunction";

function ContactForm() {
 
  TabTitle('Əlaqə');
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9npt48h",
        "template_94xxa5i",
        e.target,
        "FZ1OPLal4PVApDfEA"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Qeydiyyatdan uğurla keçdiniz!",
            "Sizinlə tezliklə əlaqə yaradılacaq!",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="fw-bold text-center fs-4">
        {" "}
        Bizə buradan da çəkinmədən yaza bilərsiniz
      </p>
      <div className=" mt-5 mb-3 contactform">
        <div className="col-md-3 contact container">
          <div className="contact1">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="46" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
</svg>
            <div className="contacttext">
              Ünvan<br />
              Gənclik, 80d Həsən Əliyev Küçəsi, Bakı, Azərbaycan
              <br /> 
            </div>
          </div>
          <div className="contact1">
            
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="46" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>
            <div className="contacttext">
              Bizə zəng edin
              <br />012 4319788
            </div>
          </div>
          <div className="contact1">
            
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="46" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
            <div className="contacttext">
            Bizə whatsappdan yazın
              <br /> 077 555 01 21
            </div>
          </div>
          <div className="contact1">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="46" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
            <div className="contacttext">
              Bizə e-məktub göndərin  
              <br />hedef@hedef.edu.az
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="container  mb-3">
           
            <form className="row g-3"  onSubmit={sendEmail} >
              <div className="col-md-4">
                <label for="validationDefault01" className="form-label">
                  Adınız
                  <small>*</small>
                </label>
                <input
                  type="text"
                  name="aname"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefault02" className="form-label">
                  Soyadınız
                  <small>*</small>
                </label>
                <input
                  type="text"
                  name="blastname"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefault02" className="form-label">
                  Ata adı
                 
                </label>
                <input
                  type="text"
                  name="cfathername"
                  className="form-control"
                  id="validationDefault02"
                
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefault03" className="form-label">
                  Telefonunuz
                  <small>*</small>
                </label>
                <input
                  type="text"
                  name="dphone"
                  maxlength="10"
                  placeholder="0501234567"
                  pattern="{4}[0-9]{9}"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="validationDefaultUsername" className="form-label">
                  E-poçt ünvanınız
                  <small>*</small>
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>

              <div className="col-md-3">
                <label for="validationDefault04" className="form-label">
                  Müraciət səbəbiniz
                  <small>*</small>
                </label>
                <select
                  className="form-select"
                  name="zappeal"
                  id="validationDefault04"
                  required
                >
                  <option selected disabled value="">
                    Seçilməyib
                  </option>
                  <option value="Qeydiyyat">Qeydiyyat</option>
                  <option value="Kurslar">Kurslar</option>
                  <option value="İmtahanlar">İmtahanlar</option>
                  <option value="Təlimlər">Təlimlər</option>
                  <option value="Şikayət">Şikayət</option>
                  <option value="Təklif">Təklif</option>
                  <option value="Digər">Digər</option>
                </select>
              </div>
              <div className="form-group ">
                <label>Qeyd</label>
                <textarea
                  name="textarea"
                  id="plugin_contact_v1_input_9"
                  className="form-control col-sm-12"
                  rows="3"
                  placeholder="Əlavə qeydiniz varsa, buraya yaza bilərsiniz."
                  autocomplete="off"
                ></textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck2">
                    Məlumatların düzgünlüyünü təsdiq edirəm
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" >
                  
                  Göndər
                </button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
      <div className="container" ><iframe className="contactmap" src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.5848783110122!2d49.84501492919334!3d40.40132891999304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d60d44fb371%3A0x45fcc3bc30f52d7a!2zODBkIEjJmXPJmW4gxo9saXlldiBLw7zDp8mZc2ksIEJha8SxIDEwMzAsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2s!4v1663310226218!5m2!1saz!2s"  ></iframe></div>
      <CFooter />
    </div>
  );
}

export default ContactForm;
