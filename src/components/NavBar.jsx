import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className={'navbar navbar-dark bg-primary mb-3'}>
        <div className={'container'}>
          <a href="/" className={'navbar-brand'}>
            WikiCountries
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
