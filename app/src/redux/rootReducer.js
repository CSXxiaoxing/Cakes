import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import cart from '../components/cart/cartReducer'
import datagrid from '../components/datagrid/datagridReducer';
import register from '../components/register/registerReducer';
import cakeDetail from '../components/cakeDetail/cakeDetailReducer';
export default combineReducers({
    home,
    register,
    cakeDetail,
    datagrid,
    cart
})