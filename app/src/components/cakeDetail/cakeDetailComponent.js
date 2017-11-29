import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cakeDatailAction from './cakeDetailAction';
import DetailComponent from '../tinyComponents/DetailComponent';
import CoverComponent from '../tinyComponents/CoverComponent'
import './cakeDetail.scss';
import {Icon} from 'antd';
class cakeDatailComponent extends React.Component{
	componentDidMount(){
		var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'token'){
                	$('#car_icon').show();
                	
                    const sql = `select * from user_list where token = '${temp[1]}'`
                    this.props.init('http://localhost:888/Datagrid.php',sql).then(res=>{
                    	//获取购物车所有数量相加
//                  	const car_sql = `select * from order_list where username = '${res[0][0].username}'`;
//                  	this.props.car_num('http://localhost:888/Datagrid.php',car_sql).then(respone=>{
////                  		console.log(666,respone);
//                  	})
                    });
                   
                    
                }
            }.bind(this))
       	}else{
       		setTimeout(function(){
       			$('.p_footer .active').css('background','#ddd');
       			$('#car_icon').hide();
       		},500)
        }
		this.find();	
	}
    cart(){
        
    }
    render(){
    
	    if(this.props.dataset != ''){	
	    	console.log(this.props.car_number)
    		const data = this.props.dataset;
    		const gIntro = data.gIntro.split('&');
    		const gDetalispic = data.gDetalispic.split('&');

    		const gMaterials = data.gMaterials.split(',');
	        return (
	            <div className="p_box">
                    <div id="ZZao">
                        <p>加入成功</p>
                    </div>
                    <div id="car_icon">
                    	<Icon type="shopping-cart" />
                    	<div className="car_num">1</div>
                    </div>
                    <CoverComponent/>
	                <div className="p_head">
	                    <DetailComponent/>
	                </div>
	                <div className="p_content">
	                	<div className="containerPic">
	                		<img src={data.gPicture}/>
	                	</div>
	                	<div className="detailsBox">
	                		<div className="cakeName">
		                		<h3>{data.gNameEN}</h3>
		                		<p>{data.gNameZH}</p>
	                		</div>
	                		<p className="price">￥{parseInt(data.gPrice)}</p>
	                		<p className="detailsExplain">{data.gDesc}</p>
	                		<div className="detailsType">
	                			<a href="#">聚会 ></a>
	                			<a href="#">情侣 ></a>
	                			<a href="#">童趣 ></a>
	                			<a href="#">新品 ></a>
	                		</div>
	                		<ul className="detailsTaste clear">
	                			<li><img src="src/img/type01.png"/><span>{gMaterials[0]}</span></li>
	                			<li><img src="src/img/type02.png"/><span>{gMaterials[1]}</span></li>
	                		</ul>
	                		<div className="select-card">
		                		<ul className="select-specifications">
		                			<li>
		                				<p className="select" onClick={this.select.bind(this)}>已选择:<span className="gSpec">1.0磅</span><Icon type="right" className="right"/></p>
		                			</li>
		                		</ul>
		                		<div className="details-options-card">
		                			<ul className="card clear">
		                				<li><Icon type="pie-chart" /><span>13x13cm</span></li>
		                				<li><Icon type="share-alt" /><span className="gWare">含5套餐具</span></li>
		                				<li><Icon type="user" /><span>适合3-4人共享</span></li>
		                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
		                			</ul>
		                			<p className="sweet">
		                				<img src="src/img/sweet.png"/>
		                				<span>参考甜度:</span>
		                				<img src="src/img/sweet.png"/>
		                				<img src="src/img/sweet.png"/>
		                				<img src="src/img/sweet.png"/>
		                			</p>
		                		</div>
		                		
	                		</div>
	                	</div>
	                	<div className="describe">
	            			<ul>
	            				{
	            					gIntro.map(function(item,idx){
	            						return(
	            							 <li key={'li' + idx}>/{item}/</li>
	            						)
	            					})
	            				}
	            			</ul>
	            		</div>
	            		<div className="detailsPic">
	            			{
	            					gDetalispic.map(function(item,idx){
	            						return(
	            							<img src = {item} key={'img' + idx}/>
	            						)
	            					})
	            				}
	            		</div>
	                </div>
	                <div className="p_footer">
	                <div className="details-suspension-content">
	                	<div className="tab">
					       <div className="tab-content clear">
					        	<p className="detailsPrice">￥{parseInt(data.gPrice)}  <Icon type="close" className="close" onClick={this.close}/></p>
					        	<img src="src/img/13.jpg"/>
					  
				        		<ul className="details-ul clear">
	                				<li><Icon type="pie-chart" /><span>13x13cm</span></li>
	                				<li><Icon type="share-alt" /><span>含5套餐具</span></li>
	                				<li><Icon type="user" /><span>适合 3-4人共享</span></li>
	                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
	                			</ul>
					        	
					        </div>
					        <div className="tab-content clear">
					        	<p className="detailsPrice">￥{parseInt(data.gPrice*2)} <Icon type="close" className="close" onClick={this.close}/></p>
					        	<img src="src/img/18.jpg"/>
					  
				        		<ul className="details-ul clear">
	                				<li><Icon type="pie-chart" /><span>18x18cm</span></li>
	                				<li><Icon type="share-alt" /><span>含10套餐具</span></li>
	                				<li><Icon type="user" /><span>适合7-8人共享</span></li>
	                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
	                			</ul>
					        	
					        </div>
					        
					         <div className="tab-content clear">
					        	<p className="detailsPrice">￥{parseInt(data.gPrice*3)} <Icon type="close" className="close" onClick={this.close}/></p>
					        	<img src="src/img/23.jpg"/>
					  
				        		<ul className="details-ul clear">
	                				<li><Icon type="pie-chart" /><span>23x23cm</span></li>
	                				<li><Icon type="share-alt" /><span>含15套餐具</span></li>
	                				<li><Icon type="user" /><span>适合11-12人共享</span></li>
	                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
	                			</ul>
					        	
					        </div>
					        
					        
					         <div className="tab-content clear">
					        	<p className="detailsPrice">￥{parseInt(data.gPrice*5)} <Icon type="close" className="close" onClick={this.close}/></p>
					        	<img src="src/img/29.jpg"/>
					  
				        		<ul className="details-ul clear">
	                				<li><Icon type="pie-chart" /><span>29x29cm</span></li>
	                				<li><Icon type="share-alt" /><span>含20套餐具</span></li>
	                				<li><Icon type="user" /><span>适合15-20人共享</span></li>
	                				<li><Icon type=" clock-circle-o" /><span>最早明天9:30配送</span></li>
	                			</ul>
					        	
					        </div>
	
					        <p className="detail-spec-title">商品规格</p>
					        <ul className="header bang clear" onClick={this.tab}>  
					        	<li>1.0磅</li>
					            <li>2.0磅</li>
					            <li>3.0磅</li>
					            <li>5.0磅</li>
					        </ul>
					    </div>
	                </div>
	                <a onClick={this.select.bind(this)} className="buy_now">立即购买</a>
	                <a onClick={this.add.bind(this)} className="active">加入购物车</a></div>
	            </div>
	        )
	     } else {
     	return(<div id="NotData"><p>数据请求失败</p><img src="" alt="加载失败..." /></div>);
     }
    }
    tab(e){
    	var $tab = $('.tab');
    	var $content = $('.tab-content');
    	var idx = $(e.target).index();
    	var $tabItem = $tab.find('.bang li');
    	
    	$(e.target).addClass('active').siblings('li').removeClass();
    	$content.eq(idx).show().siblings('.tab-content').hide();    	
    	var price = $('.price');
    	var card = $('.card').children();
    	var select = $('.select');
    	var content = $content.eq(idx).children();
    	//价格
    	var content_price = content.first().text();
	 	price.html(content_price);
	 	//选择磅数
	 	var select_title = $(e.target).text();
	 	$('.gSpec').html(select_title);
    	$(card[0]).html(content.children().eq(1).html());
    	$(card[1]).html(content.children().eq(2).html());
    	$(card[2]).html(content.children().eq(3).html());
    	$(card[3]).html(content.children().eq(4).html());
    }
    close(e){
    	var  $suspension = $('.details-suspension-content');
    	$('#car_icon').show();
		$suspension.animate({top:0,height:0});
    }
    select(e){
    	
    	var  $suspension = $('.details-suspension-content');
    	var $content = $('.tab-content');
    	var $tab = $('.tab');
    	var $tabItem = $tab.find('.bang li');
    	if(e.target.className == 'buy_now'){
    		//第二次点击立即购买加入购物车并跳转到购物车页
    		if($suspension.height() >0){
    			//加入购物车并跳转路由
    			var usernameC = this.props.cake_cookies[0].username
		    	const username = usernameC;
		    	const gId = this.props.params.id;
		    	const gNameEN = $('.cakeName h3').text();
		    	const gNameZH = $('.cakeName p').text();
		    	const gSpec = $('.gSpec').text();
		    	const gPrice = $('.price').text().slice(1);
		    	const gWare = $('.gWare').text();
		    	const gNb = 1 ;
		    	const gPicture = this.props.dataset.gPicture;   	
		    	const sql = ` select * from cake_car where (username = '${username}' and gId = '${gId}')`;
		        this.props.p_car('http://localhost:888/Datagrid.php',sql).then(res =>{
		        	if(res[0].length !==0 ){
		        		const gNewNb = res[0][0].gNb*1+1;
		        		const update = `update cake_car set gNb = '${gNewNb}'  where (username = '${username}' and gId = '${gId}')`;
		        		this.props.p_updatecar('http://localhost:888/Datagrid.php',update);
		        	}
		        	else if(res[0].length ==0){
		        		console.log(88);
		    			const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
		        		this.props.p_addcar('http://localhost:888/Datagrid.php',insert);
		        	}
		        	window.location.href="http://localhost:3003/#/cart";
		        });
    		}else{
    			const gPrice = $('.price').text().slice(1);
	    		const only_price = this.props.dataset.gPrice;
	    		//磅数等于总价除以单价
	    		const bangshu = parseInt(gPrice/only_price);
	    		//li数量
	    		const len = $tabItem.length;
	    		
	    		for(let i=0;i<len;i++){
	    			if($tabItem.eq(i).text().slice(0,-3)*1 == bangshu){
	    				console.log(i,bangshu);
	    				// 隐藏除第选中外的.content
				        $content.eq(i).show().siblings('.tab-content').hide(); 
				        // 高亮显示选中的tab
				        $tabItem.eq(i).addClass('active').siblings('.bang li').removeClass('active');
	    			}
	    		}
	    		$('#car_icon').hide();
	    		$suspension.animate({top:`-10.6666rem`,height:`10.6666rem`});
    		}
    	}else{
    		const gPrice = $('.price').text().slice(1);
    		const only_price = this.props.dataset.gPrice;
    		//磅数等于总价除以单价
    		const bangshu = parseInt(gPrice/only_price);
    		//li数量
    		const len = $tabItem.length;
    		
    		for(let i=0;i<len;i++){
    			if($tabItem.eq(i).text().slice(0,-3)*1 == bangshu){
    				console.log(i,bangshu);
    				// 隐藏除第选中外的.content
			        $content.eq(i).show().siblings('.tab-content').hide(); 
			        // 高亮显示选中的tab
			        $tabItem.eq(i).addClass('active').siblings('.bang li').removeClass('active');
    			}
    		}
    		$('#car_icon').hide();
    		$suspension.animate({top:`-10.6666rem`,height:`10.6666rem`});
    	}
    	
    }
    find(e){
    	var id = this.props.params.id;
        const sql = ` select * from goods_list  where gId = '${id}'`;
        this.props.Find('http://localhost:888/Datagrid.php',sql);
    }
    add(e){
        var cookies = document.cookie;
        if(cookies.length>0){
        	cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'token'){
                    $('#ZZao').fadeToggle();
			        setTimeout(function(){
			            $('#ZZao').fadeToggle()
			        },1000)
			        
			    	var usernameC = this.props.cake_cookies[0].username
			    	const username = usernameC;
			    	const gId = this.props.params.id;
			    	const gNameEN = $('.cakeName h3').text();
			    	const gNameZH = $('.cakeName p').text();
			    	const gSpec = $('.gSpec').text();
			    	const gPrice = $('.price').text().slice(1);
			    	const gWare = $('.gWare').text();
			    	const gNb = 1 ;
			    	const gPicture = this.props.dataset.gPicture;   	
			    	const sql = ` select * from cake_car where (username = '${username}' and gId = '${gId}')`;
			        this.props.p_car('http://localhost:888/Datagrid.php',sql).then(res =>{
			        	if(res[0].length !==0 ){
			        		const gNewNb = res[0][0].gNb*1+1;
			        		const update = `update cake_car set gNb = '${gNewNb}'  where (username = '${username}' and gId = '${gId}')`;
			        		this.props.p_updatecar('http://localhost:888/Datagrid.php',update);
			        	}
			        	else if(res[0].length ==0){
			    			const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
			        		this.props.p_addcar('http://localhost:888/Datagrid.php',insert);
			        	}
			        });
                }
            }.bind(this))

       	} else {
			alert('您尚未登录,请先登录');
			window.location.href="http://localhost:3003/#/login";
        }
       
    }
    
}

const mapStateToProps = function(state){
    return {
        dataset: state.cakeDetail.dataset || '',
        carDataset: state.cakeDetail.p_car || 'null',
        carAddDataset: state.cakeDetail.p_addcar || '',
        cake_cookies: state.cakeDetail.cake_cookies || '',
        car_number: state.cakeDetail.car_number || ''
    }
}

export default connect(mapStateToProps, cakeDatailAction)(cakeDatailComponent)