import React,{ useState } from "react";
import InputMask from 'react-input-mask';
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import emailjs from '@emailjs/browser';
import "../../CSS/website/vacancy.css";
import swal from "sweetalert";
import { TabTitle } from "../TitleFunction";
function Vacancy(props) {
  TabTitle('Vakansiya');
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9npt48h",
        "template_0iqm5nd",
        e.target,
        "FZ1OPLal4PVApDfEA"
      )
      .then(
        (result) => {
          swal(
            "Qeydiyyatdan uğurla keçdiniz!",
            "Sizinlə tezliklə əlaqə yaradılacaq!",
            "success"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          swal("Good job!", "You clicked the button!", "failure");
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <TopBar />
      <Navbar />
      
      <div className="container mt-5 mb-3">
        <form className="row g-3" onSubmit={sendEmail} >
          <div className="row">
            <div className="fw-bolder border-bottom">
              <h3>Şəxsi Məlumatlar</h3>
            </div>
            <div className="mt-3 personinformation">
              <div className="form-group col-md-4 ">
                <label>
                  Ad, Soyad, Ata adı
                  <small>*</small>
                </label>
                <input
                  type="text"
                  name="name"
                  id="plugin_contact_v1_input_5"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>
              <div className="col-md-4 ms-1">
                <div className="form-group">
                  <label for="form_email">
                    Doğum tarixi
                    <small>*</small>
                  </label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    min="1967-01-01"
                    max="2030-12-31"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-group col-md-4 ms-1">
                Ailə vəziyyətiniz
                <select
                  className="form-select"
                  name="family"
                  id="validationDefault04"
                >
                  <option selected disabled value="">
                    Seçilməyib
                  </option>
                  <option value="Evli">Evli</option>
                  <option value="İmtahanlar">Subay</option>
                </select>
              </div>
            </div>     

            <div className="col-sm-6">
            <div className="form-group">
            Yaşayış ünvanınız
              <small>*</small>
              <input
                type="text"
                name="location"
                id="plugin_contact_v1_input_6"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>



            <div className="col-sm-6">
              <div className="form-group">
                <label>Telefon nömrəniz</label>
                <InputMask 
                  type="text"
                  name="phone"

                  mask='(999)-999-99-99' 
                  value={props.value} 
                  onChange={props.onChange}
                 placeholder="(012) 123 45 67"
                  className="form-control"
                  id="validationDefault03"
                  autocomplete="off"
                />
              </div>
              
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="form_email">
                  E-poçt ünvanınız
                  <small>*</small>
                </label>
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
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Mobil
                  <small>*</small>
                </label>
                <InputMask 
                  type="text"
                  name="mobile"

                  mask='(999)999-99-99' 
                  value={props.value} 
                  onChange={props.onChange}
                 placeholder="050-123-45-67"
                  className="form-control"
                  id="validationDefault03"
                  autocomplete="off"
                
                />
              </div>
            </div>
          </div>
          <div className="fw-bolder border-bottom">
            <h3>İstiqamət</h3>
          </div>
          <div className="form-group col-md-3 ms-1">
            Kompüter bilikləri
            <small>*</small>
            <select
              className="form-select"
              name="computerknowladge"
              id="validationDefault04"
            >
              <option selected disabled value="">
                Seçilməyib
              </option>
              <option value="Əla">Əla</option>
              <option value="Yaxşı">Yaxşı</option>
              <option value="Kafi">Kafi</option>
            </select>
          </div>
          <div className="form-group col-md-2 ">
            Xarici dil bilikləri
            <small>*</small>
            <select
              className="form-select"
              name="englishknowladge"
              id="validationDefault04"
            >
              <option selected disabled value="">
                Seçilməyib
              </option>
              <option value="Əla">Əla</option>
              <option value="Yaxşı">Yaxşı</option>
              <option value="Kafi">Kafi</option>
            </select>
          </div>
          <div className="form-group col-md-3 ">
            Tədris edəcəyiniz bölmə
            <small>*</small>
            <select
              className="form-select"
              name="teach"
              id="validationDefault04"
            >
              <option selected disabled value="">
                Seçilməyib
              </option>
              <option value="Azərbaycan">Azərbaycan</option>
              <option value="Rus">Rus</option>
            </select>
          </div>
          <div className="form-group col-md-3 ">
            İşləmək istədiyiniz filial
            <small>*</small>
            <select
              className="form-select"
              name="branch"
              id="validationDefault04"
            >
              <option selected disabled value="">
                Seçilməyib
              </option>
              <option className="mb-1" value="Nizami filialı">
                Nizami filialı
              </option>
              <option className="mb-1" value="Azadlıq filialı">
                Azadlıq filialı
              </option>
              <option className="mb-1" value="Neftçilər filialı">
                Neftçilər filialı
              </option>
              <option className="mb-1" value="Həzi Aslanov filialı">
                Həzi Aslanov filialı
              </option>
              <option className="mb-1" value="Xırdalan filialı">
                Xırdalan filialı
              </option>
              <option className="mb-1" value="Sumqayıt filialı">
                Sumqayıt filialı
              </option>
              <option className="mb-1" value="Əcəmi filialı">
                Əcəmi filialı
              </option>
              <option className="mb-1" value="Mehdiabad filialı">
                Mehdiabad filialı
              </option>
              <option className="mb-1" value="Yasamal filialı">
                Yasamal filialı
              </option>
            </select>
          </div>
          <div className="fw-bolder border-bottom">
            <h3>Ali Məktəb</h3>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              Universitet (bakalavr)
              <small>*</small>
              <input
                type="text"
                name="university"
                id="plugin_contact_v1_input_6"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
            İxtisasınız
              <small>*</small>
              <input
                type="text"
                name="ixtisas"
                id="plugin_contact_v1_input_6"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>



          <div className="col-sm-2">
            <div className="form-group">
              Ortalama qiymətiniz
              <small>*</small>
              <input
                type="number"
                name="mediumprice"
                id="plugin_contact_v1_input_6"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label for="form_email">
                Qəbul ili
                <small>*</small>
              </label>
              <input
                type="year"
                maxlength="4"
                placeholder="yyyy"
                min="1967-01-01"
                max="2030-12-31"
                name="acceptyear"
                className="form-control"
              />
            </div>
          </div>
          <div className="fw-bolder border-bottom"></div>
          <div className="col-sm-5">
            <div className="form-group">
              Universitet (magistr)
              
              <input
                type="text"
                name="universitymagistr"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              İxtisasınız
             
              <input
                type="text"
                name="ixtisasmagistr"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label for="form_email">
                Qəbul ili
                
              </label>
              <input
                type="year"
                placeholder="yyyy"
                maxlength="4"
                name="acceptyearmagistr"
                className="form-control"
              />
            </div>
          </div>
          <div className="fw-bolder border-bottom">
            <h3>İş Təcrübəsi</h3>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              Müəssisənin adı
              <small>*</small>
              <input
                type="text"
                name="establishment"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              Vəzifəniz
              <small>*</small>
              <input type="text" name="duty" className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              İş stajı
              <input
                type="text"
                name="workexperience"
                className="form-control"
              />
            </div>
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
            <button className="btn btn-primary" type="submit">
              Göndər
            </button>
          </div>
        </form>
      </div>
      <CFooter />
    </div>
  );
}

export default Vacancy;
