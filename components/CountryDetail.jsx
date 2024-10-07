import { useState, useEffect } from 'react';
import countriesData from '../countriesData'; 
import '../css/CountryDetail.css';

export default function CountryDetail() {
  const countryName = new URLSearchParams(window.location.search).get('name'); 

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    
    const country = countriesData.find(
      (country) => country.name.common.toLowerCase() === countryName.toLowerCase(),
    );

    if (country) {
      setCountryData({
        name: country.name.common, // Fixed `country`
        nativeName: Object.values(country.name.nativeName)[0]?.common, 
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital?.join(', '), // Optional chaining
        flag: country.flags.svg,
        tld: country.tld,
        languages: Object.values(country.languages).join(', '),
        currencies: Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(', '),
      });
    } else {
      console.error('Country not found');
    }
  }, [countryName]);

  return countryData === null ? (
    'loading...'
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b> {countryData.nativeName}
              </p>
              <p>
                <b>Population: </b> {countryData.population.toLocaleString('en-IN')}
              </p>
              <p>
                <b>Region: </b> {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b> {countryData.subregion}
              </p>
              <p>
                <b>Capital: </b> {countryData.capital}
              </p>
              <p>
                <b>Top Level Domain: </b> {countryData.tld}
              </p>
              <p>
                <b>Currencies: </b> {countryData.currencies}
              </p>
              <p>
                <b>Languages: </b> {countryData.languages}
              </p>
            </div>
            {/* <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
