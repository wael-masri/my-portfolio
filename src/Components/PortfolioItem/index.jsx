import React, { useState } from "react";
import Close from "../../assets/close.svg";
const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="portfolio__item" onClick={toggleModal}>
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" >
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal ? (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img src={Close} alt="" className="modal__close" onClick={toggleModal} />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item icon">{icon}</span>
                    <div>
                      <span className="item title">{title}</span>
                      <span className="item details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioItem;
