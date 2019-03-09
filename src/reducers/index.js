import { combineReducers } from 'redux';
import planets from './planet_reducer';

const rootReducers = combineReducers ({
    planets    
});

export default rootReducers;