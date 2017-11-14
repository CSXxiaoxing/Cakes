import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SpinnerComponent from '../spinner/spinner';
import * as homeAction from './homeAction';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        return (
            <div className="box">
                <div className="head">head</div>
                <div className="content">content</div>
                <div className="footer">
                <Link to="/personal">personal</Link>
                <Link to="/home">home</Link>
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