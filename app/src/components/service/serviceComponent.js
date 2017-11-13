// import React from 'react';
// import {connect} from 'react-redux';

// import './service.scss'

// class serviceComponent extends React.Component{
// 	render(){
//         return (
//             <div class="box">
//                 <h1>service</h1>
//             </div>
//         )
//     }
// }

// export default serviceComponent

import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './service.scss'

class personalComponent extends React.Component{
    render(){
        return (
            <div className="box">
                <div className="header"></div>
                <div className="main">
					<div className="chat">
						<div className="msg"></div>
						<div className="msgsend">
							<div className="face"><Icon type="smile-o" /></div>
							<div className="msgin"><input type="text" id="msg" /></div>
							<div className="send"><Icon type="plus" /></div>
							<div className="voice"><Icon type="enter" /></div>
						</div>
					</div>
                </div>
               
            </div>
        )
    }
}


export default personalComponent