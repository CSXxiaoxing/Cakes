import React from 'react';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';
import { Link } from 'react-router'


import './datagrid.scss';

class datagridComponent extends React.Component{
    componentDidMount(){
        // this.props.Init();
    }

    render(){
        return (
            <div className="box">
                <nav>
                <Link to="/">蛋糕</Link>
                <Link to="/">冰淇淋</Link>
                <Link to="/">鲜花</Link>
                <Link to="/">店长推荐</Link>
                <Link to="/">礼品</Link>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.home.loading,
        dataset: state.home.dataset || {}
    }
}

export default connect(mapStateToProps, datagridAction)(datagridComponent)