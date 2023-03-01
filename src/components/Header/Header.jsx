import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/site-logo.svg";
import heroRight from "../../assets/images/hero__arrow.svg";
import CloseModal from "../../assets/images/close.svg";





const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
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
              onClick={toggleModal}
                type="button"
                className={`hero__btn`}
              >
                kursga yozilish
              </button>
              {showModal && (
                <div className="modal-box">
         <div className="modal">
         <div className="modal-top">
           <button className="modal-top-btn" onClick={() => setShowModal(false)}>
             <img src={CloseModal} alt="Downloading . . ." />
           </button>
         </div>
         <h3 className="modal-mid">Kursga yozilish</h3>
         <h3 className="modal-title">Foundation</h3>
         <p className="modal-desc">DASTURLASH KURSI</p>
         <form className="modal-form">
           <input
             type="text"
             placeholder="Ism Familiya"
             className="modal-int"
           />
           <input
             type="text"
             placeholder="Telefon raqam"
             className="modal-int"
           />
           <button className="modal-btn">kursga yozilaman</button>
         </form>
         <label htmlFor="mo-id" className="modal-b">
           <input id="mo-id" type="checkbox" />
           <p className="modal-bottom">
             Shaxsiy ma'lumotlarimni qayta ishlashga roziman
           </p>
         </label>
       </div>
                </div>
      )}
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
