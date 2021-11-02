import React from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = React.useState(true);

  const handlerCheckBox = () => {
    setIsChecked(!isChecked);
  };

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
