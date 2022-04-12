import React, { useContext } from 'react';
import Sun from '../../Assets/Image/sun.png';
import Moon from '../../Assets/Image/moon.png';

const Toggle = () => {
  const theme = useContext()

  const handleClick = ()
  return (
    <div className='t'>
      <img src={Sun} alt="" />
      <img src={Moon} alt="" />
      <div className="t-button" onClick={handleClick}></div>
    </div>
  );
};

export default Toggle;