import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import SpinnerComponent from '../spinner/spinner';
import * as cartAction from './cartAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import './cartComponent.scss';
import GoBack from "../tinyComponents/goback"

var $this;
var dataset;
var arr=[];
const mapStateToProps = function(state){
    dataset  = state.cart.dataset || []
    // console.log(dataset)
    return {
        loading: state.cart.loading,
        dataset: dataset || []
    }
}
class cartComponent extends React.Component{
    componentDidMount(){
        var $pop = this;
        // console.log(arr)
        // console.log(dataset)

        const username = 13432858111;
        this.props.Init().then(res=>{
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
                    // const gId = $this.props.params.id;
                    var gId = arr[idx].gId; 
                    var sql = ` select * from cake_car where username = '${username}' and gId = '${gId}' `;
                    $pop.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
                        if(res[0].length !==0 ){
                            console.log(res)
                            var gNewNb = num;
                                
                            var update = `update cake_car set gNb = '${gNewNb}'  where username = '${username}' and gId = '${gId}'`;

                            $pop.props.T_updata('http://localhost:888/Datagrid.php',update);
                        }
                    });
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
                    // var gId = $this.props.params.id;
                    var gId = arr[idx].gId;
                    var gPicture = $pop.props.dataset.gPicture;       
                    var sql = ` select * from cake_car where username = '${username}' and gId = '${gId}'`;
                    $pop.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
                        if(res[0].length !==0 ){
                            var gNewNb = num;
                            var update = `update cake_car set gNb = '${gNewNb}'  where username = '${username}' and gId = '${gId}'`;
                            $pop.props.T_updata('http://localhost:888/Datagrid.php',update);
                        }
                    }); 
                });
            });
        });      
    }
    componentWillReceiveProps(){
        // console.log(dataset)
    }
    render(){
        $this = this;
        if(this.props.dataset.length){
            return (
                <div className="t_cart">
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
                        {
                            this.props.dataset[0].map(function(obj,index){
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
                                                        <button className="t_delete"><Icon type="delete"/><span>-</span></button>
                                                        <span className="t_num">{obj.gNb}</span>
                                                        <button className="t_add"><span>+</span></button>
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
            return(<div>jkhkjhkjhkh</div>)
        }
    }
    order(){
        // var insert = `insert into list (id) values ('10122')`;
        //         $this.props.T_Tadd('http://localhost:888/Datagrid.php',insert);
        $this.props.dataset[0].map(function(obj,index){
            console.log(obj)
            const insert = `insert into order_list (gId,gNameEN,gNameZH,gNb,gPicture,gTotal,gSpec,gWare,username,gTime,gNum,key) values ('${obj.gId}','${obj.gNameEN}','${obj.gNameZH}','${obj.gNb}','${obj.gPicture}','${obj.gPrice}','${obj.gSpec}','${obj.gWare}','${obj.username}','2001/11/11','111','11')`;
            $this.props.T_Tadd('http://localhost:888/Datagrid.php',insert);

        })
    }
    // add(e){
    //     console.log($(e.target).text())
    //     if($(e.target).text() == '+'){
    //         const username = 13432858111;
    //         // const gId = $this.props.params.id;
    //         const gNameEN = $('.t_gNameEN').text();
    //         const gNameZH = $('.t_gNameZH').text();
    //         const gId = 11;
    //         const gSpec = $('.gSpec').text();
    //         const gPrice = $('.t_tprice').text();
    //         const gWare = $('.t_gWare').text();
    //         const gNb = 1 ;
    //         const gPicture = $this.props.dataset.gPicture;       
    //         const sql = ` select * from cake_car where username = '${username}' and gId = gId`;
    //         $this.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
    //             if(res[0].length !==0 ){
    //                 const gNewNb = res[0][0].gNb*1+1;

    //                 const update = `update cake_car set gNb = '${gNewNb}'  where username = '${username}' and gId = '${gId}'`;

    //                 $this.props.T_updata('http://localhost:888/addgoodsnum.php',update);
    //             }
    //             else if(res[0].length ==0){
    //                 const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${obj.gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
    //                 $this.props.T_Tadd('http://localhost:888/addgoodsnum.php',insert);
    //             }
    //         });
    //     } 
    // }
    // sub(){
    //     const username = 13432858111;
    //     // const gId = $this.props.params.id;
    //     const gNameEN = $('.t_gNameEN').text();
    //     const gNameZH = $('.t_gNameZH').text();
    //     const gId = 11;
    //     const gSpec = $('.gSpec').text();
    //     const gPrice = $('.t_tprice').text();
    //     const gWare = $('.t_gWare').text();
    //     const gNb = 1 ;
    //     const gPicture = $this.props.dataset.gPicture;       
    //     const sql = ` select * from cake_car where username = '${username}' and gId = gId`;
    //     $this.props.T_add('http://localhost:888/Datagrid.php',sql).then(res =>{
    //         // console.log(res)/
    //         if(res[0].length !==0 ){
    //             const gNewNb = res[0][0].gNb*1-1;
    //             const update = `update cake_car set gNb = '${gNewNb}'  where username = '${username}' and gId = '${gId}'`;
    //             $this.props.T_updata('http://localhost:888/addgoodsnum.php',update);
    //         }
    //         else if(res[0].length ==0){
    //             const insert = `insert into cake_car (username,gId,gNameEN,gNameZH,gSpec,gPrice,gWare,gNb,gPicture) values ('${username}','${gId}','${gNameEN}','${gNameZH}','${gSpec}','${gPrice}','${gWare}','${gNb}','${gPicture}')`;
    //             // console.log(666)
    //             $this.props.T_Tadd('http://localhost:888/addgoodsnum.php',insert).then(response=>{
    //             });
    //         }
    //     });
    // }
    
}
export default connect(mapStateToProps,cartAction)(cartComponent)