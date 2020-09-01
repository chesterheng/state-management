# State Management

## Table of Contents
- [State Management](#state-management)
  - [Table of Contents](#table-of-contents)
  - [**01. Introduction**](#01-introduction)
    - [Types of State](#types-of-state)
  - [**02. Class-Based State**](#02-class-based-state)
    - [setState & Class](#setstate--class)
    - [setState & Asynchronicity](#setstate--asynchronicity)
    - [setState & Function](#setstate--function)
    - [setState & Callback](#setstate--callback)
    - [setState & Helper Function](#setstate--helper-function)
    - [document.title Exercise](#documenttitle-exercise)
    - [document.title Solution](#documenttitle-solution)
    - [setState Patterns](#setstate-patterns)
  - [**03. Hooks State**](#03-hooks-state)
  - [**04. Reducers**](#04-reducers)
  - [**05. Context**](#05-context)
  - [**06. Data Fetching**](#06-data-fetching)
  - [**07. Thunks**](#07-thunks)

## **01. Introduction**

The main job of React is to take your application state and turn it into DOM nodes.

[pure-react-state-management](https://github.com/FrontendMasters/pure-react-state-management)

### Types of State

There are many kinds of state.
- Model data: The nouns in your application.
  - For example: products, orders
- View/UI state: Are those nouns sorted in ascending or descending order?
  - For example: list of sorted products
- Session state: Is the user even logged in?
- Communication: Are we in the process of fetching the nouns from the server?
  - For example: loading, loaded or error
- Location: Where are we in the application? Which nouns are we looking at?
  - For example: routing, shopping cart, view products

Or, it might make sense to think about state relative to time.

- Model state: This is likely the data in your application. This could be the items in a given list.
- Ephemeral state: Stuff like the value of an input field that will be wiped away when you hit “enter.” This could be the order in which a given list is sorted.

**[⬆ back to top](#table-of-contents)**

## **02. Class-Based State**

### setState & Class

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  reset() {
    this.setState({ count: 0 })
  }

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
```

**[⬆ back to top](#table-of-contents)**

### setState & Asynchronicity

```javascript
// this.setState() is asynchronous.
// React is trying to avoid unnecessary re-renders.
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
console.log(this.state.count);  // 0
```

```javascript
// What will the count be after the user’s clicks the “Increment” button? 1
// Effectively, you’re queuing up state changes.
// React will batch them up, figure out the result and then efficiently make that change.
export default class Counter extends Component {
  constructor() { ... }
  increment() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }
  render() { ... }
}

Object.assign(
  {},
  yourFirstCallToSetState,
  yourSecondCallToSetState,
  yourThirdCallToSetState,
);

const newState = {
  ...yourFirstCallToSetState,
  ...yourSecondCallToSetState,
  ...yourThirdCallToSetState,
};
```

**[⬆ back to top](#table-of-contents)**

### setState & Function

- There is actually a bit more to this.setState().
- Did you know that you can also pass a function in as an argument?

```javascript
// 3
// can merge object, cannot merge function
// When you pass functions to this.setState(), it plays through each of them.
import React, { Component } from 'react';
export default class Counter extends Component {
  constructor() { ... }

  increment() {
    this.setState(state => { return { count: state.count + 1 } });
    this.setState(state => { return { count: state.count + 1 } });
    this.setState(({ count }) => { return { count: state.count + 1 } });
  }

  render() { ... }
}

import React, { Component } from 'react';
export default class Counter extends Component {
  constructor() { ... }
  increment() {
    this.setState(state => {
      if (state.count >= 5) return;
      return { count: state.count + 1 };
    })
  }

  render() { ... }
}
```

**[⬆ back to top](#table-of-contents)**

### setState & Callback
**[⬆ back to top](#table-of-contents)**

### setState & Helper Function
**[⬆ back to top](#table-of-contents)**

### document.title Exercise
**[⬆ back to top](#table-of-contents)**

### document.title Solution
**[⬆ back to top](#table-of-contents)**

### setState Patterns
**[⬆ back to top](#table-of-contents)**

## **03. Hooks State**
**[⬆ back to top](#table-of-contents)**

## **04. Reducers**
**[⬆ back to top](#table-of-contents)**

## **05. Context**
**[⬆ back to top](#table-of-contents)**

## **06. Data Fetching**
**[⬆ back to top](#table-of-contents)**

## **07. Thunks**
**[⬆ back to top](#table-of-contents)**