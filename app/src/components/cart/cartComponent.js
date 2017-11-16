import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cartAction from './cartAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './cartComponent.scss';
class cartComponent extends React.Component{
    componentDidMount(){
        this.props.Init().then(res=>{
            var total = 0
            $('.t_tprice').map(function(){
                total += $(this).text()*$(this).parents('li').next().find('.t_num').text()*1;
            });
            $('.t_total i').text(total+'.00');
            $('.t_num').each(function(idx){
                var $this = $(this);
                var num = $this.text();
                $(this).next().click(function(event) {
                    console.log(this)
                    num++;
                    $this.text(num);
                    var price = $this.parent().prev().find(' dl dd span').text();
                    total += price*1;
                    $('.t_total i').text(total+'.00');
                    if(num >= 2){
                        $this.prev().children('i').hide();
                        $this.prev().children('span').show();  
                    }
                });
                $(this).prev().click(function(event) { 
                    var price = $this.parent().prev().find(' dl dd span').text();
                    if(num>1){
                       total -= price*1; 
                    }
                    $('.t_total i').text(total+'.00');
                    num--;
                    if(num<=1){
                        $this.prev().children('i').show();
                        $this.prev().children('span').hide();
                        num = 1;
                    }
                    $this.text(num); 
                });
            });
        });      
    }
    render(){
        console.log(this.props.dataset)
        if(this.props.dataset.length){
            return (
                <div className="t_cart">
                    <div className="t_header">
                        <Link to="/"><Icon type="left"/></Link>
                        <h2><span>购物车</span></h2>
                    </div>
                    <div className="t_content">
                        <div className="t_message">
                            <p>21cake注册未下单用户，首次购买送2磅(正价298元)及以上规格磅数蛋糕，随单赠送：小切块2片。</p>
                            <img src="./src/img/limit.png" alt="" />
                        </div>
                        {
                            this.props.dataset[0].map(function(obj,index){
                                return(
                                        <div className="t_goodslist" key={index + 'kk'}>
                                            <div className="t_gh">
                                                <ul>
                                                    <li><img src={obj.gPicture} alt="" /></li>
                                                    <li>
                                                        <dl>
                                                            <dt>{obj.gNameEN}</dt>
                                                            <dd>{obj.gNameZH}</dd>
                                                            <dd>{obj.gSpec}</dd>
                                                            <dd>￥<span className="t_tprice">{obj.gPrice}</span></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <button className="t_delete"><Icon type="delete"/><span>-</span></button>
                                                        <span className="t_num">{obj.gNb}</span>
                                                        <button className="t_add"><span>+</span></button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="t_choice">
                                                <div className="tableware">
                                                    <img src="./src/img/tableware.png" alt="" />
                                                    <span>{obj.gWare}</span>
                                                </div>
                                                <div className="festival">
                                                    <ul>
                                                        <li><div><span>生日牌</span></div></li>
                                                        <li>生日快乐</li>
                                                        <li><Link><Icon type="right"/></Link></li>
                                                    </ul>
                                                </div> 
                                            </div>   
                                        </div>
                                    )
                            })
                        }
                        <div className="t_recommend">
                            <div className="t_linehead">
                                <h3>· 推荐商品 ·</h3>
                            </div>
                            <div className="re_box">
                                <div className="re_list">
                                    <ul>
                                        <li>
                                            <img src="./src/img/cake1.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                        <li>
                                            <img src="./src/img/cake2.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                        <li>
                                            <img src="./src/img/cake3.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <img src="./src/img/cake3.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                        <li>
                                            <img src="./src/img/cake2.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                        <li>
                                            <img src="./src/img/cake1.jpg" alt="" />
                                            <div className="goodsname"><span>深艾尔</span></div>
                                            <div className="t_price"><span>￥268.00/1.0磅</span><Link><Icon type="shopping-cart"/></Link><span></span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="t_footer">
                        <div className="t_tot">
                        <span className="t_total">￥<i>1258.00</i></span>
                            <span>商品</span>
                        </div>
                        <div className="t_btn" onClick={this.close}>下单</div>
                    </div>
                </div>
            )
        }else{
            return(<div></div>)
        }
    }
    close(){
        console.log(666)
    }
    T_add(){
        console.log(777)
    }
}

const mapStateToProps = function(state){
    var dataset  = state.cart.dataset || []
    return {
        loading: state.cart.loading,
        dataset: dataset || []
    }
}

export default connect(mapStateToProps,cartAction)(cartComponent)