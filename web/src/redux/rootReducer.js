import {combineReducers} from 'redux';

import datagrid from '../components/datagrid/DatagridReducer'
import dataform from '../components/dataform/DataFormReducer'
import login from '../components/login/loginReducer'
import Home from '../components/Home/HomeReducer'

export default combineReducers({
    datagrid,
    dataform,
    login,
    Home,
})