import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({
    children, type, onClick, buttonStyle, buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize)
      ? buttonSize
      : SIZES[0];
  return (
      <Link to="/resumes/Bnorthern23_007.pdf" target="_blank" download="BradleyNorthern_Resume.pdf" className='btn-mobile'>
          <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              onClick={onClick}
              type={type}
          >
              {children}
          </button>
      </Link>
  );
};