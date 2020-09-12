import React from 'react';

const Item = ({ item }) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {}}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={() => {}}>
        Remove
      </button>
    </article>
  );
};

export default Item;
