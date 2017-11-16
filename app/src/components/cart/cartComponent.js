import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cartAction from './cartAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './cartComponent.scss';

var dataaaa = '';
var $this;
class cartComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
        console.log(this.props.dataset)
        this.props.Init().then(res=>{
            var total = 0;
            $('.t_tprice').map(function(){
                total += $(this).text()*$(this).parents('li').next().find('.t_num').text()*1;
            });
            $('.t_total i').text(total+'.00');
            $('.t_num').each(function(idx){
                var $this = $(this);
                var num = $this.text();
                if($this.text() > 1){
                    $this.prev().children('i').hide();
                    $this.prev().children('span').show();
                }
                $(this).next().click(function(event){
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
        $this = this;
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
                                                    <li className="t_gPicture"><img src={obj.gPicture} alt="" /></li>
                                                    <li>
                                                        <dl>
                                                            <dt className="t_gNameEN">{obj.gNameEN}</dt>
                                                            <dd className="t_gNameZH">{obj.gNameZH}</dd>
                                                            <dd className="t_gSpec">{obj.gSpec}</dd>
                                                            <dd>￥<span className="t_tprice">{obj.gPrice}</span></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <button className="t_delete" onClick={$this.sub}><Icon type="delete"/><span>-</span></button>
                                                        <span className="t_num">{obj.gNb}</span>
                                                        <button className="t_add" onClick={$this.add}><span>+</span></button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="t_choice">
                                                <div className="tableware">
                                                    <img src="./src/img/tableware.png" alt="" />
                                                    <span className="t_gWare">{obj.gWare}</span>
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
    add(){
        console.log($this.props);
        console.log($('.t_num'))
        const username = 13432858111;
        // const gId = $this.props.params.id;
        const gNameEN = $('.t_gNameEN').text();
        const gNameZH = $('.t_gNameZH').text();
        const gId = 1;
        const gSpec = $('.gSpec').text();
        const gPrice = $('.t_tprice').text();
        const gWare = $('.t_gWare').text();
        const gNb = 1 ;
        const gPicture = $this.props.dataset.gPicture;       
        const sql = ` select * from cake_car where (username = '${username}' and gId = gId)`;
        $this.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
            if(res[0].length !==0 ){
                const gNewNb = res[0][0].gNb*1+1;
                const update = `update cake_car set gNb = '${gNewNb}'  where (username = '${username}' and gId = '${gId}')`;
                $this.props.T_add('http://localhost:888/Datagrid.php',update);
            }
            else if(res[0].length ==0){
                const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
                $this.props.t_add('http://localhost:888/Datagrid.php',insert);
            }
        });
    }
    sub(){
        console.log($('.t_num'))
        const username = 13432858111;
        // const gId = $this.props.params.id;
        const gNameEN = $('.t_gNameEN').text();
        const gNameZH = $('.t_gNameZH').text();
        const gId = 1;
        const gSpec = $('.gSpec').text();
        const gPrice = $('.t_tprice').text();
        const gWare = $('.t_gWare').text();
        const gNb = 1 ;
        const gPicture = $this.props.dataset.gPicture;       
        const sql = ` select * from cake_car where (username = '${username}' and gId = gId)`;
        $this.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
            if(res[0].length !==0 ){
                const gNewNb = res[0][0].gNb*1-1;
                const update = `update cake_car set gNb = '${gNewNb}'  where (username = '${username}' and gId = '${gId}')`;
                $this.props.T_add('http://localhost:888/Datagrid.php',update);
            }
            else if(res[0].length ==0){
                const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
                $this.props.t_add('http://localhost:888/Datagrid.php',insert);
            }
        });
    }
    
}

const mapStateToProps = function(state){
    var dataset  = state.cart.dataset || []
    dataaaa = dataset;
    return {
        loading: state.cart.loading,
        dataset: dataset || []
    }
}

export default connect(mapStateToProps,cartAction)(cartComponent)