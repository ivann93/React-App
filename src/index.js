import React from 'react';
import ReactDOM from 'react-dom';

//Redux ustvari e samo setapiranje, no za da ima aplikacijata pristap do nego treba da upotrebime PROVIDER.
//Ako sakame store.js da bide dostapen za site komponenti PROVIDER-ot go povikuvame vo index.js
import { Provider } from 'react-redux';
import configureStore from './store';

import { createStore } from 'redux';

import './index.css';
import App from './App';
import App3 from './App3';
import Modal from './Modal';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Header from './components/header';
import reducer from './store/reducer';


const store = createStore(reducer);

ReactDOM.render(
	<div className="container-fluid">
		<div className="header">
		  <h1 className="text-center">Resource Management</h1>
		</div>
		<Provider store={configureStore()}>	  
			<div>
				<App />
			</div>
		</Provider>
		<div className="footer">
            <p>&copy; Footer</p>
        </div>
	</div>, 

	document.getElementById('root')
);


serviceWorker.unregister();
