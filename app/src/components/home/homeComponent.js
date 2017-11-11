import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as homeAction from './homeAction';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        return (
            <div className="box">
                <div className="head">
                    <ul>
                        <li><Link to="/personal"><Icon type="environment" /></Link></li>
                        <li><Link><Icon type="star" /></Link></li>
                        <li><Link><Icon type="message" /></Link></li>
                    </ul>
                </div>
                <div className="content"></div>
                <div className="footer">
                    <ul>
                        <li><Link to="/personal"><Icon type="home"  /></Link></li>
                        <li><Link><Icon type="appstore-o" /></Link></li>
                        <li><Link><Icon type="home" /></Link></li>
                        <li><Link><Icon type="user"  /></Link></li>
                    </ul>
                </div>
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

export default connect(mapStateToProps, homeAction)(homeComponent)