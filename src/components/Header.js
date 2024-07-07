import React from 'react';

const Header = ({ title, version }) => (
  <header>
    <h1 className="title">{title}<sub>{version}</sub></h1>
  </header>
);

export default Header;