import React from "react";
import "./Tarif.scss";

const Tarif = () => {
  return (
    <div className="tarif">
      <div className="container">
        <div className="tarif-wrap">
          <div className="tarif-text-box">
            <h2 className="tarif-title">Kursga qanday yozilaman?</h2>
            <span className="tarif-text">
              *bugun g'ayrioddiy narsa qilish uchun yana bir imkoniyat
            </span>
          </div>
          <h3 className="tarif-step">Oddiy 3 qadam</h3>
          <ul className="tarif-list">
            <li className="tarif-item">
              <span className="tarif-num">1</span>
              <p className="tarif-num-text">
                Kurs bo’yicha kerakli tarifni tanlang
              </p>
            </li>
            <li className="tarif-item">
              <span className="tarif-num">2</span>
              <p className="tarif-num-text">Formani to’ldiring</p>
            </li>
            <li className="tarif-item">
              <span className="tarif-num">3</span>
              <p className="tarif-num-text">
                Ertagayoq IT-mutaxassislikka birinchi qadam tashlang
              </p>
            </li>
          </ul>
        </div>
        <div className="tarif-second-wrap">
          <div className="second-text-box">
            <h4 className="second-title">Qulay ta'lim formatini tanlang</h4>
            <p className="second-title-text">
              Maxsus taklif 24 soat amal qiladi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
