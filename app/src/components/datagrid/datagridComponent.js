import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute, browserHistory} from 'react-router';
import { Icon, Spin, Alert} from 'antd';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';

import './datagrid.scss';

var datagrid_SetList = 14;
var datagrid_SetinitID = 0;
var dataset = '';
var D_i = 0;

class datagridComponent extends React.Component{
    componentDidMount(){

        this.props.Init();
        this.props.Slide();

        datagrid_SetinitID = 0;
        // 懒加载
        $(".content").scroll(function(){
                var $this =$(this)
                var viewH =$(this).height()//overflow可见高度  
                var contentH =$(this).get(0).scrollHeight//内容高度  
                var scrollTop =$(this).scrollTop();//滚动高度  

                if(scrollTop/(contentH -viewH) >= 0.93) { //到达底部50px时,加载新内容  
                    if(D_i == 0){
                        datagrid_SetList = datagrid_SetList+6;
                        D_i = 1;
                    }
                }
                if(scrollTop/(contentH -viewH) >= 0.95){ //到达底部95%时,加载新内容 
                    $(window).triggerHandler('myshuju')
                }
        })
        // 懒加载生成DOM
        $(window).bind("myshuju", function(){
            // console.log(dataset)
            var houDom = '';
            dataset[0].map(function(obj, index){
                obj.gSpec = obj.gSpec.slice(0,2)
                var objGID = String("#/cakeDatail/"+obj.gId);
                // 初始化渲染十条
                if(index >= datagrid_SetList || index < datagrid_SetList-6){
                    return false;
                }
                // 渲染DOM
                houDom = (
                    `<a href=${objGID} key=${index + 'a'} class="datapageA">
                    <dl>
                        <dt><img src=${obj.gPicture} alt="Cake" /></dt>
                        <dd><p>${obj.gNameEN}</p></dd>
                        <dd><p>${obj.gNameZH}</p></dd>
                        <dd><p>${obj.gDesc}</p></dd>
                        <dd><p>￥<span>${obj.gPrice}</span>/<span>${
                            obj.gSpec
                        }</span></p><Icon type="shopping-cart" /></dd>
                    </dl>
                    </a>`
                )
                $('#datagridMain article').append(
                    $(houDom)
                )
            })
            D_i = 0;
        });    
    }
    componentWillReceiveProps(propsType){
        let active_li = this.props.params.name;
        let at_li = $('#xq li').removeClass('pageXQ')
        let obj = {
            '蛋糕' : 0,
            '小切块' : 1,
            '冰淇淋' : 2,
            '鲜花' : 3,
            '礼品' : 4,
            '店长推荐' : 5,
        }
        active_li == undefined ? at_li.eq(0).addClass('pageXQ') : at_li.eq(obj[active_li]).addClass('pageXQ')
        
    }
    change(e){
        if(e.target.nodeName.toLocaleLowerCase() == 'a'){
            $('#xq li').removeClass('pageXQ');
            $(e.target).parent().addClass('pageXQ');
        }
    }

    render(){
        if(this.props.dataset != undefined){
            // console.log(this.props.dataset)
            return (
                <div className="dataPage">
                    <div id="XQQ"></div>
                    <nav id="xq">
                        <ul onClick={this.change}>
                            <li className="pageXQ"><Link to="/datagrid/cc/蛋糕" >蛋糕</Link></li>
                            <li><Link to="/datagrid/cc/小切块">小切块</Link></li>
                            <li><Link to="/datagrid/cc/冰淇淋">冰淇淋</Link></li>
                            <li><Link to="/datagrid/cc/鲜花">鲜花</Link></li>
                            <li><Link to="/datagrid/cc/礼品">礼品</Link></li>
                            <li><Link to="/datagrid/cc/店长推荐">店长推荐</Link></li>
                        </ul>
                    </nav>
                    <div id="bottomLoading">
                        <Icon type="loading" />
                        <p>正在刷新...</p>
                    </div>
                    <SpinnerComponent loading={this.props.loading}></SpinnerComponent>
                    <main id="datagridMain">
                        {this.props.children}
                        <article id="dataArticle">
                            {  
                                this.props.dataset.map(function(obj, index){
                                obj.gSpec = obj.gSpec.slice(0,2)
                                var objGID = String("/cakeDatail/"+obj.gId);
                                // 初始化渲染
                                if(index >= datagrid_SetList){
                                    return false;
                                }
                                // 渲染DOM
                                return (
                                    <Link to={objGID} key={index + 'a'} className="datapageA">
                                    <dl key={index}>
                                        <dt><img src={obj.gPicture} alt="Cake" /></dt>
                                        <dd><p>{obj.gNameEN}</p></dd>
                                        <dd><p>{obj.gNameZH}</p></dd>
                                        <dd><p>{obj.gDesc}</p></dd>
                                        <dd><p>￥<span>{obj.gPrice}</span>/<span>{
                                            obj.gSpec
                                        }</span></p><Icon type="shopping-cart" /></dd>
                                    </dl>
                                    </Link>
                                )
                            })
                            }
                        </article>
                    </main>
                </div>
            )
        } else {
            return null;
        }
        
    }
}
const mapStateToProps = function(state){
    dataset  =  state.datagrid.dataset || []
    return {
        loading: state.datagrid.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, datagridAction)(datagridComponent)