import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        const apiCountries = response.data.sort((a, b) => {
          if (a.alpha2Code < b.alpha2Code) return -1;
          if (a.alpha2Code > b.alpha2Code) return 1;
        });
        setCountries(apiCountries);
      });
  }, []);

  if (countries.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={'App'}>
      <NavBar />
      <div className={'container'}>
        <div className={'row'}>
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails data={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
