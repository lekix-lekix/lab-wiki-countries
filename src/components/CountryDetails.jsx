import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ data }) => {
  const [oneCountry, setOneCountry] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const findBorderName = (countryAlpha3) => {
    const foundCountry = data.find(
      (element) => element.alpha3Code === countryAlpha3
    );
    return foundCountry.name.common;
  };

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setOneCountry(response.data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="col-7">
      <img
        id="country-details"
        src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
        alt={`${oneCountry.name.common}-flag`}
      ></img>
      <h1>{oneCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{oneCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {oneCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {oneCountry.borders.map((element) => {
                  return (
                    <li key={element}>
                      <Link to={`/${element}`}>{findBorderName(element)}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
