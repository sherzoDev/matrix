import React from "react";
import "./CourseInfo.scss";
import heroRight from "../../assets/images/about-arrow.svg";

function CourseInfo() {
  return (
    <section className="course-info">
      <div className="container">
        <div className="course-info-wrapper">
          <h2 className="whodevelopers-title">Bu kurs kim uchun?</h2>
          <span>*barchasi bugundan boshlanadi!</span>
          <div className="datail-summ-box">
            <div className="details-left">
              <details className="details">
                  <summary className="details-title">Yoshlar uchun</summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  Ko'p daromad olishni istaganlar uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  Rivojlanishni istaganlar uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  Boshlang'ich dasturchilar uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
            </div>
            <div className="details-right">
              <details className="details">
                <summary className="details-title">Texnologlar uchun</summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  Kelajak haqida o'ylaydigan har bir kishi uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  IT Dasturchi boʻlishga qaror qilganlar uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
              <details className="details">
                <summary className="details-title">
                  IT yo’nalishi bilan tanishmoqchi bo’lganlar uchun
                </summary>
                <summary className="details-text">
                  Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                  maktabimizdan Albatta tugatganligingiz haqida Sertifikat
                  olasiz.
                </summary>
              </details>
            </div>
          </div>
          <div className="whodevelopers-btn">
            <a href="/">kursga qatnashmoqchiman</a>
            <img src={heroRight} alt=". . . . " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseInfo;
