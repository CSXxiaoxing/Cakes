import {combineReducers} from 'redux';


import home from '../components/home/homeReducer';

import service from '../components/service/serviceReducer'

import datagrid from '../components/datagrid/datagridReducer';
import register from '../components/register/registerReducer';
import cakeDetail from '../components/cakeDetail/cakeDetailReducer';
export default combineReducers({
    home,

    service,

    register,
    cakeDetail,
    datagrid
})