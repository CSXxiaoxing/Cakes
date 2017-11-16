import {combineReducers} from 'redux';

import datagrid from '../components/datagrid/DatagridReducer'
import dataform from '../components/dataform/DataFormReducer'

export default combineReducers({
    datagrid,
    dataform,
})