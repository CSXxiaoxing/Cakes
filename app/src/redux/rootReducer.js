import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'

import register from '../components/register/registerReducer'
// import datagrid from '../components/datagrid/datagridReducer';
import cakeDetail from '../components/cakeDetail/cakeDetailReducer'
export default combineReducers({
    home,
    register,
    cakeDetail
})