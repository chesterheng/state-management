import React, { useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';

const Grudge = ({ grudge }) => {
  const { toggleForgiveness } = useContext(GrudgeContext);

  console.log('Rendering Grudge', grudge);
  
  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input 
            type="checkbox" 
            checked={grudge.forgiven} 
            onChange={() => toggleForgiveness(grudge.id)}
          />{' '}
          Forgiven
        </label>
      </div>
    </article>
  );
};

export default Grudge;
