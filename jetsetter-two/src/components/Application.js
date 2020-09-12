import React from 'react';
import NewItem from './NewItem';
import Items from './Items';

const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <Items title="Unpacked Items" items={[]} />
      <Items title="Packed Items" items={[]} />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
