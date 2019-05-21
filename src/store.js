//Sekoja aplikacija ima potreba samo od eden store
//initialState moze da bide prazen objekt ili so pocetna vrednost

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}