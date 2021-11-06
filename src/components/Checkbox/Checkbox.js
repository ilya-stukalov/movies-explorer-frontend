import React from 'react';

function Checkbox({isChecked, handlerCheckBox}) {




  return (
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={handlerCheckBox}
        />
        <div className="checkbox__block"></div>
      </label>
  );
}

export default Checkbox;
