import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cartAction from './cartAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './cartComponent.scss';
import GoBack from "../tinyComponents/goback"
var  newData = [];
var $this;
var dataset;
var username;
var mydate = new Date();
var str = "" + mydate.getFullYear() + "/";
str += (mydate.getMonth()+1) + "/";
str += mydate.getDate() + "";
var Num=""; 
for(var i=0;i<10;i++) 
{ 
Num+=Math.floor(Math.random()*10); 
} 
const mapStateToProps = function(state){
    dataset  = state.cart.dataset || []
    return {
        loading: state.cart.loading,
        dataset: dataset || []
    }
}
class cartComponent extends React.Component{
    componentDidMount(){
        if(newData.length>0){
            $('.empty').hide();
        }else{
            console.log(66)
            $('.empty').show();
        }
        var $pop = this;
        var cookies = document.cookie.split('; ');
        cookies.forEach(item =>{
            var temp = item.split('=');
            if(temp[0]='username'){
                username = temp[1];
            }
        });
        const sql = `select * from cake_car where username='${username}'`;
        this.props.Init(sql);

        this.props.Init(sql).then(res=>{
            var arr = dataset[0]
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
                        $('#ZZao').show(800);
                        $('.f_message').hide();
                        $('.tv_btn').show();
                        $('.btn_sure').click(function(event) {
                            var gId = newData[0][idx].gId; 
                            var sql = ` select * from cake_car where username = '${username}' and gId = '${gId}' `;
                            $pop.props.T_select('http://localhost:888/Datagrid.php',sql).then(res =>{
                                if(res.length !==0 ){
                                    var update = `delete from cake_car where username = '${username}' and gId = '${gId}'`;
                                    $pop.props.T_updata('http://localhost:888/Datagrid.php',update).then(res=>{
                                        var sql = ` select * from cake_car where username = '${username}'`;
                                        $pop.props.T_select('http://localhost:888/Datagrid.php',sql)
                                    });
                                }
                            });
                            $('#ZZao').hide(800);
                        });
                        $('.btn_cancel').click(function(){
                            $('#ZZao').hide(800);
                        });
                    }
                    $this.text(num);

                });

            });
        });  
             
    }
    componentWillReceiveProps(nextProps){
        nextProps.dataset.length>0 ? newData =  nextProps.dataset : '';
        
    }
    render(){
        $this = this;
        this.props.dataset.length>0 ? newData =  this.props.dataset : '';
        if(newData.length){
            return (
                <div className="t_cart">
                    <div id="ZZao">
                        <p className="f_message">下单成功</p>
                        <div className="tv_btn">
                            <p>您确定要删除这个商品么？</p>
                            <button className="btn_sure">确定</button>
                            <button className="btn_cancel">取消</button>
                        </div>
                    </div>
                    <SpinnerComponent loading={this.props.loading}/>
                    <div className="t_header">
                        <GoBack/>
                        <h2><span>购物车</span></h2>
                    </div>
                    <div className="t_content">
                        <div className="t_message">
                            <p>21cake注册未下单用户，首次购买送2磅(正价298元)及以上规格磅数蛋糕，随单赠送：小切块2片。</p>
                            <img src="./src/img/limit.png" alt="" />
                        </div>
                        <div className="empty">
                            <img src="./src/img/cart.jpg" alt="" />
                            <p>·您的购物车什么都没有·</p>
                        </div>
                        {
                            newData[0].map(function(obj,index){
                                return(
                                        <div className="t_goodslist" key={index + 'kk'}>
                                            <div className="t_gh">
                                                <ul>
                                                    <li><img src={obj.gPicture} alt="" className="t_gPicture"/></li>
                                                    <li>
                                                        <dl>
                                                            <dt className="t_gNameEN">{obj.gNameEN}</dt>
                                                            <dd className="t_gNameZH">{obj.gNameZH}</dd>
                                                            <dd className="t_gSpec">{obj.gSpec}</dd>
                                                            <dd>￥<span className="t_tprice">{obj.gPrice}</span></dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <button className="tt_delete" onClick={$this.reduce}><Icon type="delete"/><span>-</span></button>
                                                        <span className="t_num" ref="num">{obj.gNb}</span>
                                                        <button className="tt_add" onClick={$this.add}><span>+</span></button>
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
                        <div className="t_btn" onClick={this.order}>下单</div>
                    </div>
                </div>
            )
        }else{
            return(<div id="NotData"><p>数据请求失败</p><img src="" alt="加载失败..." /></div>)
        }
    }
    order(){
        $('.t_num').each(function(idx){
            var num = $(this).text()
            var gId = newData[0][idx].gId; 
            var sql = ` select * from cake_car where username = '${username}' and gId = '${gId}' `;
            $this.props.T_select('http://localhost:888/Datagrid.php',sql).then(res =>{
                if(res.length !==0 ){
                    var gNewNb = num;
                    var update = `update cake_car set gNb = '${gNewNb}'  where username = '${username}' and gId = '${gId}'`;
                    $this.props.T_updata('http://localhost:888/Datagrid.php',update).then(res=>{
                        var sql = ` select * from cake_car where username = '${username}'`;
                        $this.props.T_select('http://localhost:888/Datagrid.php',sql)
                    });
                }
            });
        })
        var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] == 'token'){
    
                }
            }.bind(this));
        } else {

        }
        $('#ZZao').fadeToggle();
        $('.tv_btn').hide();
        $('.f_message').show;
        setTimeout(function(){
            $('#ZZao').fadeToggle()
        },1000)
        // $this.props.dataset[0].map(function(obj,index){
        //     const insert = `insert into order_list (gId,gNameEN,gNameZH,gNb,gPicture,gTotal,gSpec,gWare,username,gTime,gNum,\`key\`) values ('${obj.gId}','${obj.gNameEN}','${obj.gNameZH}','${obj.gNb}','${obj.gPicture}','${obj.gPrice}','${obj.gSpec}','${obj.gWare}','${obj.username}','${str}','${Num}','${obj.gId}')`;
        //     $this.props.T_Tadd('http://localhost:888/Datagrid.php',insert)
        //     const tdelete = `delete from cake_car where username = '${username}' and gId = '${obj.gId}'`
        //     $this.props.T_Tadd('http://localhost:888/Datagrid.php',tdelete);
        //     hashHistory.push('/order');
        // })
    }
    
}
export default connect(mapStateToProps,cartAction)(cartComponent)