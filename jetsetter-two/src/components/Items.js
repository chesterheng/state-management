import React from 'react';
import Item from './Item';
import Filter from './Filter';

const Items = ({ title, items }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={''} onChange={() => {}} />
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Items;
