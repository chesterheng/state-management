import React, { useState, memo } from 'react';

const NewGrudge = memo(({ onSubmit }) => {
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  console.log('Rendering New Grudge');

  const handleChange = event => {
    event.preventDefault();
    onSubmit({ person, reason });
  };

  return (
    <form className="NewGrudge" onSubmit={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
});

export default NewGrudge;
