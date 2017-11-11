import React from 'react';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as homeAction from './homeAction';
import './home.scss';

class homeComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        return (
            <div class="box">
                <div class="head">head</div>
                <div class="content">content</div>
                <div class="footer">footer</div>
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