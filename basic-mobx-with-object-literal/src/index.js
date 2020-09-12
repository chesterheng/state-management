import React from 'react';
import { render } from 'react-dom';

import { decorate, observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import './styles.scss';

class Count {
  value = 0;
  increment = () => {
    this.value++;
  };
  decrement = () => {
    this.value--;
  };
}

decorate(Count, {
  value: observable
});

const count = (window.count = new Count());

const Counter = observer(({ count }) => {
  return (
    <main className="Counter">
      <p className="count">{count.value}</p>
      <section className="controls">
        <button onClick={count.increment}>Increment</button>
        <button onClick={count.decrement}>Decrement</button>
      </section>
    </main>
  );
});

autorun(() => console.log('The count changed!', count.value));

render(<Counter count={count} />, document.getElementById('root'));
