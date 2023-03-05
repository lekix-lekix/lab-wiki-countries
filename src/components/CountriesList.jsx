import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className={'col-5'} style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((country) => {
        return (
          <div className="list-group" key={country.alpha3Code}>
            <Link
              to={`/${country.alpha3Code}`}
              className={'list-group-item list-group-item-action'}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common}`}
              />
              <h4>{country.name.common}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
