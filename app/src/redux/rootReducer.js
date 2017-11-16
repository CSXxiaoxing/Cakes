import {combineReducers} from 'redux';
<<<<<<< HEAD

import home from '../components/home/homeReducer';

import service from '../components/service/serviceReducer'
=======
import home from '../components/home/homeReducer'
>>>>>>> a5b2e9379f56a1c01d8a83cdafe55e6f47b2135f
import datagrid from '../components/datagrid/datagridReducer';
import register from '../components/register/registerReducer';
import cakeDetail from '../components/cakeDetail/cakeDetailReducer';
export default combineReducers({
    home,
<<<<<<< HEAD
    service,
=======
    register,
    cakeDetail,
>>>>>>> a5b2e9379f56a1c01d8a83cdafe55e6f47b2135f
    datagrid
})