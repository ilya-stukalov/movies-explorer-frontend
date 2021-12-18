import React from 'react';
import success from '../../images/success.png';
import failed from '../../images/failed.png';

function InfoTooltip({ isOpen, onClose, isSuccess, name, errorMessage }) {

  function handleClose() {
    onClose();
  }

  return (
    <div className={`tooltip tooltip_type_${name} ${isOpen ? 'tooltip_opened' : ''}`} id={`tooltip__${name}`}>
      <div className="tooltip__container tooltip__container_info">
        <button
          className="tooltip__close-icon"
          type="button"
          onClick={handleClose}
        ></button>
        {isSuccess && (<>
          <img
            className="tooltip__icon"
            src={success}
            alt="иконка: успешно"
          />
          <p className="tooltip__text">Успешно!</p>
        </>)}
        {!isSuccess && (
          <>
            <img
              className="tooltip__icon"
              src={failed}
              alt="иконка: что-то пошло не так"
            />
            <p className="tooltip__text">{errorMessage}</p>
          </>)}

      </div>
    </div>
  )
}

export default InfoTooltip;
