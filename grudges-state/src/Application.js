import React from 'react';
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudge />
      <section>
        <button>Undo</button>
        <button>Redo</button>
      </section>
      <Grudges />
    </div>
  );
};

export default Application;
