import {combineReducers} from 'redux';


import home from '../components/home/homeReducer'

//ljj
import register from '../components/register/registerReducer';
import login from '../components/login/loginReducer'
import personal from '../components/personal/personalReducer';

import datagrid from '../components/datagrid/datagridReducer';

export default combineReducers({
    home,
    datagrid,
    register,
    login,
    personal
})