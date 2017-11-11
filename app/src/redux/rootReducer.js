import {combineReducers} from 'redux';

import home from '../components/home/homeReducer';
import datagrid from '../components/datagrid/datagridReducer';

export default combineReducers({
    home,
    datagrid
})