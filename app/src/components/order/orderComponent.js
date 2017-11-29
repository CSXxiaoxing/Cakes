import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SpinnerComponent from '../spinner/spinner';
import * as orderAction from './orderAction';
import DetailComponent from '../tinyComponents/DetailComponent.js';
import './order.scss';
import {Icon} from 'antd';
class orderComponent extends React.Component{
	componentDidMount(){
		
		var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'token'){
                    console.log(temp[1])
                    const sql = `select * from user_list where token = '${temp[1]}'`
                    this.props.init('http://localhost:888/Datagrid.php',sql).then(res=>{
	                    var username = res[0][0].username;
	                    console.log(username)
				      	const sql = ` select * from order_list where username='${username}'`;
				        this.props.Find('http://localhost:888/Datagrid.php',sql);
                    })
                }
            }.bind(this))
       	}
	}
    render(){
    	var data = this.props.dataset;    
    	if(data != ''){
    		return (
	            <div className="p_orderbox">
	                <div className="p_orderhead">
	                    <Link to="/personal"><Icon type="left" /></Link>
	                    <p>我的订单</p>
	                </div>
	                <div className="p_ordercontent">
	                	<ul>
	                	{
	                		data.map(function(item,idx){	                			
	                			var router = String(`/cakeDatail/${item.gId}`);
	                			return(
	                				<li className="clear" key={'li' + idx}>
			                			<img src={item.gPicture}/>
			                			<p className="order_num float">订单编号: <span> {item.gNum}</span></p>
			                			<p className="nameEN float">{item.gNameEN}</p>
			                			<p className="nameCN float">{item.gNameZH}</p>
			                			<p className="type float">规格: <span> {item.gSpec}</span></p>
			                			<p className="price float">￥<span>{item.gTotal}</span></p>
			                			<p className="data float">日期: <span> {item.gTime}</span></p>
			                			<Link to={router}>商品详情<Icon type="right" /></Link>
			                		</li>  
	                			)
	                		})
	                	}	 
	                		
	                	</ul>
	                </div>
	                
	            </div>
	        )
    	}
    	else{
    		return(
    			<div className="p_orderbox">
    				<div className="p_orderhead">
	                    <Link to="/personal"><Icon type="left" /></Link>
	                    <p>我的订单</p>
	                </div>
	                <div className="p_ordercontent">
	                	<p className="tips">---你还没有订单,赶紧去来一单吧---</p>
	                </div>
    			</div>
    		)
    	}
        
        
       
    }
    
}

const mapStateToProps = function(state){
    return {
        dataset: state.p_order.dataset || '',
        data: state.p_order.data || '',
    }
}

export default connect(mapStateToProps, orderAction)(orderComponent)