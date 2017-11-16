import {combineReducers} from 'redux';
<<<<<<< HEAD


import home from '../components/home/homeReducer';

import service from '../components/service/serviceReducer'

import datagrid from '../components/datagrid/datagridReducer';
=======
import home from '../components/home/homeReducer'

//ljj
>>>>>>> 347b5a831d98675833d6463606ce520d5ac37574
import register from '../components/register/registerReducer';
import login from '../components/login/loginReducer'
import personal from '../components/personal/personalReducer';

import datagrid from '../components/datagrid/datagridReducer';
import cakeDetail from '../components/cakeDetail/cakeDetailReducer';
export default combineReducers({
    home,
<<<<<<< HEAD

    service,

=======
    datagrid,
>>>>>>> 347b5a831d98675833d6463606ce520d5ac37574
    register,
    login,
    personal,
    cakeDetail,
})