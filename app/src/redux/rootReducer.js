import {combineReducers} from 'redux';

import home from '../components/home/homeReducer';

import service from '../components/service/serviceReducer'

export default combineReducers({
    home,
    service
})