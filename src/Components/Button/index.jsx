import React from 'react';
import classnames from 'classnames';
import './style.css';

const Button = ({ children, type = 'blue', onClick }) =>
  <button
    className={classnames('Button', {
      'Button-red': type === 'red',
      'Button-blue': type === 'blue',
      'Button-black': type === 'black',
    })}
    onClick={onClick}
  >
    {children}
  </button>;

export default Button;
