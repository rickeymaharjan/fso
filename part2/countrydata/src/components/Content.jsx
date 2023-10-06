import React, { useState } from 'react';
import Country from './Country';

const Content = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  if (countries.length === 0) {
    return <div>No results found.</div>;
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          {country.name.common}
          <button onClick={() => handleShowCountry(country)}>Show</button>
        </div>
      ))}
      {selectedCountry && <Country country={selectedCountry} />}
    </div>
  );
};

export default Content;
