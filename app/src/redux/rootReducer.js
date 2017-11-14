import {combineReducers} from 'redux';

import home from '../components/home/homeReducer';
<<<<<<< HEAD

import service from '../components/service/serviceReducer'

export default combineReducers({
    home,
    service
=======
import datagrid from '../components/datagrid/datagridReducer';

export default combineReducers({
    home,
    datagrid
>>>>>>> d1e6795c769551ad68638c70de98ba7ad1ca6e03
})