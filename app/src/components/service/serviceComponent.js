
import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import * as serviceAction from './serviceAction';
import './service.scss';

class serviceComponent extends React.Component{

	componentDidMount(){

		$(".send").click( function () {
			var myDate = new Date();
			var now = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
			console.log(now);
			var msg = $('#msg').val();
			console.log(msg);
			$('<div class="msgme"><p>' + now +'</p>'+'<div class="msgshow">'+msg+'</div></div>').appendTo('.msglist');
			$('#msg').val('');
			$('#msg').focus();
		});
		
		


	}

    render(){
        return (
            <div className="box">
                <div className="header">
                	<div className="left"><Link to="/"><Icon type="left" /></Link></div>
                	<div className="center">通讯</div>
                	<div className="right"><Icon type="aliwangwang-o" /></div>
                </div>
                <div className="main">
					<div className="chat">
						<div className="msglist"></div>
						<div className="msgsend">
							<div className="face"><Icon type="smile-o" /></div>
							<div className="msgin"><input type="text" id="msg"/></div>
							<div className="add"><Icon type="plus" /></div>
							<div className="send"><Icon type="enter" /></div>
						</div>
					</div>
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

export default connect(mapStateToProps, serviceAction)(serviceComponent)