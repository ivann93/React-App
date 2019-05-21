//Tuka se upotrebuva combineReducers, a so toa gi kombinirame site reducers vo eden
//Vo slucajov imame samo eden simepleReducer, isto i ako imame poveke, site ke gi importirame vo voj file
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
export default combineReducers({
 simpleReducer
});