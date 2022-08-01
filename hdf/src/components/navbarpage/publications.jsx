import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import CFooter from "../cFooter";
import "../../CSS/website/navbar.css";
import { TabTitle } from "../TitleFunction";
function Publications() {
  TabTitle('Hədəf nəşrləri');
  return (
    <>
      <TopBar/>
      <Navbar/>
      <div className="container ">
        <h4 className="text-center fw-bold mt-5 mb-5">Hədəfə aparan yolun sirlərini bizimlə vərəqləyin!</h4>
        <a href="https://hedefnesrleri.az/" target='_blank'> <img className="container publicationsimage" src="../../images/publications.jpg" alt=""/></a>
        <div className="publicationstext">
          “Hədəf Nəşrləri” Məhdud Məsuliyyətli Cəmiyyəti 2009-cu ildə təsis
          edilmişdir. Azərbaycan Respublikasında ən məşhur mətbəə və
          nəşriyyatlarla partnyorluq edən Hədəf Nəşrləri 2010-cu ildə “İlin ən
          yaxşı nəşriyyatı” (Yeni Yazarlar və Sənətçilər Qurumu), 2011-ci ildə
          “İlin ən fəal əməkdaşı” (AR Mədəniyyət və Turizm Nazirliyi) və
          həmçinin 2011-ci ildə keçirilən II Bakı Beynəlxalq Kitab
          Sərgi-Yarmarkasında “Ən fəal iştirakçı” diplomları ilə təltif
          edilmişdir. Nəşriyyatın fəaliyyət göstərdiyi müxtəlif illər ərzində 4
          nəşri mükafat almışdır.<br/> 2011-ci ilin ən uğurlu layihələrindən biri
          bütün fənlər üzrə 11 müxtəlif test topluları bağlamalarının – Dərsi
          Qiymətləndirmə Testlərinin (DQT) nəşr edilməsi oldu.<br/> 2011-ci il
          həmçinin məktəbəqədər şagirdlər üçün nəzərdə tutulan yüksək zövqlə
          tərtib edilmiş metodik vəsaitlərin dərc edilməsi ilə də yadda qaldı.
          Bu layihəyə 5-6 yaşlı uşaqlar üçün nəzərdə tutulmuş əyani vəsait və
          digər maraqlı metodik kitablar daxildir.
        </div>
      </div>
      <CFooter/>
    </>
  );
}
export default Publications;
