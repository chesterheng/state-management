import React, { useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const reducer = (state, action) => {
  console.log({ action });
  return state;
};

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = grudge => {
    grudge.id = id();
    grudge.forgiven = false;
    // setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = id => {
    // setGrudges(
    //   grudges.map(grudge => {
    //     if (grudge.id !== id) return grudge;
    //     return { ...grudge, forgiven: !grudge.forgiven };
    //   })
    // );
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
