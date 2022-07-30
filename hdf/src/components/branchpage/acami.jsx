import React,{useState,useEffect} from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/branchpage.css";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
function Acami() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },400)
  },[])
  return (
    <div>
            
       
      <TopBar />
      <Navbar />
           
      <p className="text-center fw-bold branchheader">Əcəmi</p>
      <div className="branchbtn">
      <Link to="/">
          <button type="button" className="branchbutton btn btn-warning w-20 ">
           Çıx
          </button>
        </Link>
        <Link to="/azadliq">
          <button type="button" className="branchbutton btn btn-danger w-20 ">
           Geri
          </button>
        </Link>
        <Link to="/ahmadli">
          <button type="button" className="branchbutton btn btn-success w-20 ">
            İrəli
          </button>
        </Link>
      </div>
      <div className="combranch">
        <div className="branchcontact">
          <p className="mt-3 text-center fw-bold fs-5">Əlaqə</p>
          <p>- (012) 431 97 87</p>
          <p>- (077) 555 01 04</p>
          <p>- (077) 555 01 14</p>
          <p>- Ünvan: Nəsimi ray., Seyid Cəfər Pişəvəri 36 </p>
          <p>- (3 -cü Mkr dairəsinin yanı-Köhnə Avtovağzal ilə üz üzə)</p>
        </div>
       
               
        <div>
        
          <img
            src=".././images/ecemi.jpg"
            width="400"
            height="300"
            className="branchimage"
            alt="image"
          />
        </div>
         { 
                loading ? (
                  <div className="spinners ">
                  <ClipLoader color={'#00FFCC'} loading={loading} size={60}/>
                  </div>
                ) :
        <div>
          
             
          <iframe
            className="branchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1662683652285!2d49.81150471539555!3d40.4051672793664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzE4LjYiTiA0OcKwNDgnNDkuMyJF!5e0!3m2!1saz!2s!4v1545374249690"
            width="400"
            height="300"
          ></iframe>
        </div>}
      </div>
      <p className="container mt-4">
        Əcəmi filialı Hədəf Kurslarının gənc filiallarından biridir. Öz
        fəaliyyətinə 2017-ci ildən başlamışdır. Buna baxmayaraq öz fəaliyyət
        dövründən başlayaraq təcrübəli müəllim heyəti ilə seçilmişdir. Artıq
        illərdir ki, Hədəf Kurslarında çalışan müəllim heyəti qısa müddət
        ərzində tələbələrin sevimlisi olmuşdur. 2019-cu ilin qəbul göstəricisi
        94 % olmuşdur. Filialın müdiri Zaur Mustafayevdir.
      </p>
      <p className="text-center fs-5 fw-bold">Hazırlıq istiqamətləri</p>
      <ul className="container text-center list-unstyled">
        <li>Abituriyent hazırlığı</li>
        <li>Magistr hazırlığ</li>
        <li>Müəllim hazırlığı</li>
        <li>Məktəbəqədər hazırlıq</li>
        <li>Fərdi hazırlıq </li>
      </ul>
      <CFooter />
    </div>
  );
}

export default Acami;
