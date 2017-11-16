import {combineReducers} from 'redux';

import home from '../components/home/homeReducer';

import service from '../components/service/serviceReducer'
import datagrid from '../components/datagrid/datagridReducer';

export default combineReducers({
    home,
    service,
    datagrid
})