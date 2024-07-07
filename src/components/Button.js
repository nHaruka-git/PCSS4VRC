// src/components/Button.js
import React from 'react';
import Link from 'next/link';

const Button = ({ href, children, primary = false }) => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    margin: '0 8px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    backgroundColor: primary ? 'black' : 'white',
    color: primary ? 'white' : 'black',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  };

  return (
    <Link href={href} style={buttonStyle}>
      {children}
    </Link>
  );
};

export default Button;