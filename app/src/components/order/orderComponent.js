import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SpinnerComponent from '../spinner/spinner';
import * as orderAction from './orderAction';
import DetailComponent from '../tinyComponents/DetailComponent.js';
//import './order.scss';
import {Icon} from 'antd';
class orderComponent extends React.Component{
	componentDidMount(){	
	}
    render(){
        return (
            <div className="p_box">
                <div className="p_head">
                    <DetailComponent/>
                </div>
                <div className="p_content">
                	p_content
                </div>
                <div className="p_footer">
                	p_footer
               	</div>
            </div>
        )
    }
    
}

const mapStateToProps = function(state){
    return {
        dataset: state.cakeDetail.dataset || '',
    }
}

export default connect(mapStateToProps, orderAction)(orderComponent)