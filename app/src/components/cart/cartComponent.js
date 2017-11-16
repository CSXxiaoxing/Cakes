import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';


import SpinnerComponent from '../spinner/spinner';
import * as cartAction from './cartAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './cartComponent.scss';
class cartComponent extends React.Component{
    componentDidMount(){
        
    }

    render(){
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
                    <div className="t_goodslist">
                        <div className="t_gh">
                            <ul>
                                <li><img src="./src/img/cake1.jpg" alt="" /></li>
                                <li>
                                    <dl>
                                        <dt>Baileys Love Triange</dt>
                                        <dd>百利甜情人</dd>
                                        <dd>1.0磅</dd>
                                        <dd>￥198.00</dd>
                                    </dl>
                                </li>
                                <li>
                                    <button className="delete"><Icon type="delete"/></button>
                                    <span>1</span>
                                    <button className="t_add"><span>+</span></button>
                                </li>
                            </ul>
                        </div>
                        <div className="t_choice">
                            <div className="tableware">
                                <img src="./src/img/tableware.png" alt="" />
                                <span>含5套餐具</span>
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
                        <span className="t_total">￥1258.00</span>
                        <span>商品</span>
                    </div>
                    <div className="t_btn">下单</div>
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

export default connect(mapStateToProps,cartAction)(cartComponent)