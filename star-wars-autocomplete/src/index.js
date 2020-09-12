import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './fetch-character-epic';

import reducer from './reducer';

import FetchCharacters from './FetchCharacters';
import Characters from './Characters';

import './styles.scss';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer, 
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
