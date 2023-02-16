import React from "react";
import "./CourseInfo.scss";
import heroRight from "../../assets/images/hero__arrow.svg";

const CourseInfo = () => {
  return (
    <>
      <section className="course-info">
        <div className="container">
          <div className="course-info-wrapper">
            <h2 className="whodevelopers-title">Bu kurs kim uchun?</h2>
            <span>*barchasi bugundan boshlanadi!</span>
            <div className="whodevelopers-btn">
              <a href="/">kursga qatnashmoqchiman</a>
              <img src={heroRight} alt=". . . . " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseInfo;
