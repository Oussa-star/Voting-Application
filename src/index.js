import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import Reducer from './components/reducers/Reducer';
import Results from './Result';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


const store = createStore(Reducer , applyMiddleware())

function render () {
ReactDOM.render(
	<div className='container'>
    <App store={store} />
    <hr/>
    <Results store={store} />
    </div>
  ,document.getElementById('root')
);
}
store.subscribe(render);
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
