import {combineReducers} from 'redux';

import datagrid from '../components/datagrid/DatagridReducer'
import dataform from '../components/dataform/DataFormReducer'
import datalogin from '../components/login/loginReducer'

export default combineReducers({
    datagrid,
    dataform,
    datalogin,
})