import React, { useState } from "react";
import "./Header.scss";
import "./modal.scss";
import Logo from "../../assets/images/site-logo.svg";
import heroRight from "../../assets/images/hero__arrow.svg";
import CloseModal from "../../assets/images/close.svg";

const Header = () => {
  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(!modal);
  };

  const modalClose = () => {
    setModal(modal);
  };


  
  return (
    <div className="bg">
      <div className="m">
        <div className="modal-box">
          <div className="modal">
            <div className="modal-close-btn">
              <button onClick={modalClose} type="button">
                <img className="modal-close" src={CloseModal} alt="" />
              </button>
            </div>
            <div className="modal-wrapper">
              <div className="modal-top">
                <p className="modal-item">Kursga yozilish</p>
              </div>
              <h3 className="modal-title">Foundation</h3>
              <h4 className="modal-text">DASTURLASH KURSI</h4>
              <div className="modal-input-group">
                <div className="modal-ib">
                  <input
                    type="text"
                    className="modal-int"
                    placeholder="Ism Familya"
                  />
                  <input
                    type="text"
                    className="modal-int"
                    placeholder="Ism Familya"
                  />
                </div>
                <a href="#" className="modal-link">
                  kursga yozilaman
                </a>
              </div>
              <div className="modal-bottom">
                <label htmlFor="modal-id">
                  <input
                    type="checkbox"
                    className="modal-check"
                    id="modal-id"
                  />
                  Shaxsiy ma'lumotlarimni qayta ishlashga roziman
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                onClick={modalOpen}
                className={`hero__btn ${modal ? "open" : ""}`}
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
