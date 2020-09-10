import React, { useState } from 'react';

const FetchCharacters = ({ fetchCharacters }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (fetchCharacters) fetchCharacters(newValue);
  };

  return (
    <input
      onChange={handleChange}
      placeholder="Search Here"
      type="search"
      value={value}
    />
  );
};

export default FetchCharacters;
