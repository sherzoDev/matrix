import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/site-logo.svg";
import heroRight from "../../assets/images/hero__arrow.svg";
import heroBtn from "../../assets/images/menu.svg";
import heroCloseBtn from "../../assets/images/close-btn.svg";

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const onclickBtn = () => {
    setBurgerState(!burgerState);
  };


  
  return (
    <div className="bg">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="header__logo">
              <img src={Logo} alt="logo" />
            </a>
            <ul className={`nav__list ${burgerState ? "on" : ""}`}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  kurs haqida
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  IT-mutaxassis kim?
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  tariflar
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  FAQ
                </a>
              </li>
            </ul>
            <button onClick={onclickBtn} className="menu-btn" type="button">
              {burgerState ? (
                <img
                  src={heroCloseBtn}
                  alt="............"
                  width="24"
                  height="24"
                />
              ) : (
                <img src={heroBtn} alt="............" width="24" height="24" />
              )}
            </button>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h1 className="hero__title">Atigi 4 oyda SIZ</h1>
            <p className="hero__desc">
              <span className="hero__desc-bold">Foundation</span> kursiga
              qatnashib kuratorlar va murabbiylar bilan bir jamoada <br />{" "}
              NOLdan Dasturlash asoslarini o’rganasiz va IT mutaxassislik
              darajasiga ko’tarila boshlang
            </p>
            <div className="hero__badge">
              <p className="hero__badge-desc">
                Uydan chiqmasdan turib
                <span className="hero__badge-bold"> ONLINE</span> o’rganing
              </p>
            </div>
            <div className="hero__btns">
              <a href="#" className="hero__btn">
                kursga yozilish
              </a>
              <div className="hero__btns-group">
                <a className="hero__btns-about" href="#">
                  batafsil
                </a>
                <img src={heroRight} alt="..........................." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
