import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import Sun from '../../Assets/Image/sun.png';
import Moon from '../../Assets/Image/moon.png';
import './Toggle.css';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="t">
      <img className="t-icon" src={Sun} alt="" />
      <img className="t-icon" src={Moon} alt="" />
      <div className="t-button" onClick={handleClick}></div>
    </div>
  );
};

export default Toggle;
