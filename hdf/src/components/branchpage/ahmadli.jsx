import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
import { TabTitle } from "../TitleFunction";
function Ahmadli() {
TabTitle('Əhmədli filialı');
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 400);
  // }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <p className="text-center fw-bold branchheader">Əhmədli</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/acami">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
            Geri
          </button>
        </Link>
        <Link to="/mehdiabad">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 374 67 62</p>
          <p>- (077) 555 01 09</p>
          <p>- (077) 555 01 19</p>
          <p>- Ünvan: M.Hadi 51 M </p>
          <p>- (Ukrayna dairəsi, Viktoriya Şadlıq evinin yanı, Hakim Plaza)</p>
        </div>
        <div>
          <img
            src=".././images/ehmedli.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>  
        {/* {loading ? (
          <div className="spinners ">
          <ClipLoader color={'#00FFCC'} loading={loading} size={60}/>
          </div>
        ) : (  )} */}
          <div>
            <iframe
              className="branchmap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8596.396143815291!2d49.94530576288099!3d40.380375606336834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063f2688810b1%3A0x51f34634bd11a787!2zSMmZZMmZZiBLdXJzbGFyxLEgxo9obcmZZGxp!5e0!3m2!1sen!2s!4v1657706212495!5m2!1sen!2s"
              width="400"
              height="300"
            ></iframe>
          </div>
       
      </div>
      <p className="container mt-4">
        Hədəf Kurslarının ən gənc filiallarından olan Əhmədli filialı 2016-cı
        ildən etibarən fəaliyyətə başlamışdır. Filial azərbaycan və rus bölməsi
        üzrə fəaliyyət göstərir. 2019-cu tədris ilində filialın abituriyent
        istiqaməti üzrə qəbul faizi 94 % olmuşdur. Bundan əlavə hazırda Əhmədli
        filialında “Hədəf Yaradıcılıq Mərkəzi” -də fəlaliyyət göstərir ki,
        burada rəqs, musiqi, mental arifmetika, gimnastika, logoped, şahmat,
        dərzi, makeUp, qabiliyyət imtahanına hazırlıq dərsləri keçirilir.
        Hazırda filial direktoru Səftər Xəlilbəylidir.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
        <li>Hədəf Yaradıcılıq Mərkəzi</li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Ahmadli;
