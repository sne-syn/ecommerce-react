import React from 'react';
import './custom-button.styles.scss'

const Button = ({ children, ...otherProps }) => {
  return (
    <button className='button' {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
