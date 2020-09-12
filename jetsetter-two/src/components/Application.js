import React from 'react';
import { inject, observer } from 'mobx-react';
import NewItem from './NewItem';
import Items from './Items';

const PackedItems = inject('itemList')(
  observer(({ itemList }) => {
      return <Items title="Packed Items" items={itemList.packedItems} />
  }),
);

const UnpackedItems = inject('itemList')(
  observer(({ itemList }) => {
      return <Items title="Unpacked Items" items={itemList.unpackedItems} />
  }),
);

const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <UnpackedItems />
      <PackedItems />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
