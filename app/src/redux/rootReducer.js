import {combineReducers} from 'redux';

import home from '../components/home/homeReducer'
import register from '../components/register/registerReducer'
export default combineReducers({
    home,
    register
})