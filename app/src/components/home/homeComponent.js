import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'


import SpinnerComponent from '../spinner/spinner';
import datagridComponent from '../datagrid/datagridComponent';
import * as homeAction from './homeAction';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        return (
            <div className="boxx">
                <div>head</div>
                <div>content</div>

                <div>
                    <datagridComponent />
                    {this.props.children}
                </div>
                <div>footer</div>
                <Link to="/grid">grid</Link><br/>
                <Link to="/aaa">grid</Link>
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