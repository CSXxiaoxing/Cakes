import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cakeDatailAction from './cakeDetailAction';
import DetailComponent from '../tinyComponents/DetailComponent.js';
import './cakeDetail.scss';
import {Icon} from 'antd';
class cakeDatailComponent extends React.Component{
	componentDidMount(){
		console.log($('.footer'))
		var $tab = $('.tab');
		var $content = $('.tab-content');
		var $tabItem = $tab.find('.bang li');
    	// 隐藏除第一个以外的.content
        $content.slice(1).hide();
        // 高亮显示第一个tab
        $tabItem.first().addClass('active');
        var  $suspension = $('.details-suspension-content');
	}
    render(){
        return (
            <div className="p_box">
                <div className="p_head">
                    <DetailComponent/>
                </div>
                <div className="p_content">
                	<div className="containerPic">
                		<img src="src/img/container.jpg"/>
                	</div>
                	<div className="detailsBox">
                		<div className="cakeName">
	                		<h3>Mango Cream Cake</h3>
	                		<p>芒果奶油蛋糕</p>
                		</div>
                		<p className="price">￥198.00</p>
                		<p className="detailsExplain">不使用罐头水果和植混奶油，坚持应季凯特鲜切芒果。</p>
                		<div className="detailsType">
                			<a href="#">聚会 ></a>
                			<a href="#">情侣 ></a>
                			<a href="#">童趣 ></a>
                			<a href="#">新品 ></a>
                		</div>
                		<ul className="detailsTaste clear">
                			<li><img src="src/img/type01.png"/><span>芒果</span></li>
                			<li><img src="src/img/type02.png"/><span>百香果酱</span></li>
                		</ul>
                		<div className="select-card">
	                		<ul className="select-specifications">
	                			<li>
	                				<p className="select" onClick={this.select}>已选择:2.0磅<Icon type="right" className="right"/></p>
	                			</li>
	                		</ul>
	                		<div className="details-options-card">
	                			<ul className="card clear">
	                				<li><Icon type="pie-chart" /><span>18x18cm</span></li>
	                				<li><Icon type="share-alt" /><span>含10套餐具</span></li>
	                				<li><Icon type="user" /><span>适合7-8人共享</span></li>
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
            				<li>/不使用罐头水果和植混奶油/</li>
            				<li>/坚持应季凯特鲜切芒果/</li>
            				<li>/新西兰纯乳脂奶油/</li>
            				<li>/21cake配方芒果百香果慕斯夹心/</li>
            			</ul>
            		</div>
            		<div className="detailsPic">
            			<img src="src/img/datail_01.jpg"/>
            			<img src="src/img/datail_02.jpg"/>
            			<img src="src/img/datail_03.jpg"/>
            			<img src="src/img/datail_04.jpg"/>
            			<img src="src/img/datail_05.jpg"/>
            			<img src="src/img/datail_06.jpg"/>
            		</div>
                </div>
                <div className="p_footer">
                <div className="details-suspension-content">
                	<div className="tab">
				       
				        <div className="tab-content clear">
				        	<p className="detailsPrice">￥198.00  <Icon type="close" className="close" onClick={this.close}/></p>
				        	<img src="src/img/18.jpg"/>
				  
			        		<ul className="details-ul clear">
                				<li><Icon type="pie-chart" /><span>18x18cm</span></li>
                				<li><Icon type="share-alt" /><span>含10套餐具</span></li>
                				<li><Icon type="user" /><span>适合7-8人共享</span></li>
                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
                			</ul>
				        	
				        </div>
				        
				         <div className="tab-content clear">
				        	<p className="detailsPrice">￥268.00 <Icon type="close" className="close" onClick={this.close}/></p>
				        	<img src="src/img/23.jpg"/>
				  
			        		<ul className="details-ul clear">
                				<li><Icon type="pie-chart" /><span>23x23cm</span></li>
                				<li><Icon type="share-alt" /><span>含15套餐具</span></li>
                				<li><Icon type="user" /><span>适合11-12人共享</span></li>
                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
                			</ul>
				        	
				        </div>
				        
				        
				         <div className="tab-content clear">
				        	<p className="detailsPrice">￥398.00 <Icon type="close" className="close" onClick={this.close}/></p>
				        	<img src="src/img/29.jpg"/>
				  
			        		<ul className="details-ul clear">
                				<li><Icon type="pie-chart" /><span>29x29cm</span></li>
                				<li><Icon type="share-alt" /><span>含20套餐具</span></li>
                				<li><Icon type="user" /><span>适合15-20人共享</span></li>
                				<li><Icon type="clock-circle-o" /><span>最早明天9:30配送</span></li>
                			</ul>
				        	
				        </div>

				        <p className="detail-spec-title">商品规格</p>
				        <ul className="header bang clear" onClick={this.tab}>  
				            <li>2.0磅</li>
				            <li>3.0磅</li>
				            <li>5.0磅</li>
				        </ul>
				    </div>
                </div>
                <a href="#" >立即购买</a>
                <a href="#" className="active">加入购物车</a></div>
            </div>
        )
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
	 	select.html(`已选择:${select_title}`);
    	$(card[0]).html(content.children().eq(1).html());
    	$(card[1]).html(content.children().eq(2).html());
    	$(card[2]).html(content.children().eq(3).html());
    	$(card[3]).html(content.children().eq(4).html());
    }
    close(e){
    	var  $suspension = $('.details-suspension-content');
		$suspension.animate({top:0,height:0});
    }
    select(e){
    	var  $suspension = $('.details-suspension-content');
    	
		$suspension.animate({top:'-5.775rem',height:'5.775rem'});
    }
    
}

const mapStateToProps = function(state){
    return {
        loading: state.home.loading,
        dataset: state.home.dataset || {}
    }
}

export default connect(mapStateToProps, cakeDatailAction)(cakeDatailComponent)