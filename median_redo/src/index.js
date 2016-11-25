import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App';
import './index.css';

const defaultState = {
  article: "",
  selection: "",
  id: null,
  startIndex: null,
  selections: []
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case "GET_ARTICLE":
      return {
        ...state,
        article: action.payload.data.article.text
      };
    case "SELECT_TEXT":
      return {
        ...state,
        selection: action.text,
        id: action.id,
        startIndex: action.startIndex
      };
    case "SAVE_SELECTION":
      return {...state, selection: "", id: null, startIndex: null}
    case "SHOW_SELECTIONS":
      return {...state, selections: action.payload.data.highlights}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware))


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
