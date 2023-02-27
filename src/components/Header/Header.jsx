import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/site-logo.svg";
import heroRight from "../../assets/images/hero__arrow.svg";

const Header = () => {
  return (
    <div className="bg">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="header__logo">
              <img src={Logo} alt="logo" />
            </a>
            <ul className="nav__list">
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
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h1 className="hero__title">Atigi 4 oyda SIZ</h1>
            <p className="hero__desc">
              <span className="hero__desc-bold">Foundation </span> kursiga
              qatnashib Mentor O'qituvchi ko'magida NOLdan dasturlash asoslarini
              o'rganing va IT mutaxassislik darajasiga ko'tariling
            </p>
            <div className="hero__badge">
              <p className="hero__badge-desc">
                Uydan chiqmasdan turib
                <span className="hero__badge-bold"> ONLINE</span> o’rganing
              </p>
            </div>
            <div className="hero__btns">
              <button
                type="button"
                className={`hero__btn}`}
              >
                kursga yozilish
              </button>
              <div className="hero__btns-group heroRightImg">
                <a className="hero__btns-about" href="#tarif">
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
