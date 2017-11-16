import React from 'react';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';
import { Link } from 'react-router'
import { Icon } from 'antd';
import $ from '../../libs/jquery-3.2.1';

import './datagrid.scss';

class datagridComponent extends React.Component{
    componentDidMount(){
        console.log(this)
        this.props.Init();

        function span_move_fun(){
            // touchmove
         var span = document.getElementById("aaa");
         var span_left = $(span).offset().left;
         var span_top = $(span).offset().top;
         var start_left = $(span).offset().left;
         var start_top = $(span).offset().top;
         var page_left = 0;
         var page_top = 0;
         span.addEventListener('touchstart', function(event) {
           // event.preventDefault();
           if (event.targetTouches.length == 1) {
                  var touch = event.targetTouches[0];
                  span.style.position = "absolute";
            span_top = $(this).offset().top;
            span_left = $(this).offset().left;
            start_top = touch.pageY
            start_left = touch.pageX
            console.log(touch)
            page_left = touch.pageX
            page_top = touch.pageY
                 }
             });

        // 滑动
            span.addEventListener('touchmove', function(event) {
           if (event.targetTouches.length == 1) {

            var touch = event.targetTouches[0];
            span.style.position = "absolute";
           }
          });
            // pageXQ
            span.addEventListener('touchend', function(event) {
                var touch = event.changedTouches[0];
                var pd = page_left-touch.pageX;
                var pdTop = Math.abs(page_top-touch.pageY)

                if(parseFloat(pd) < -100 && pdTop<100){
                    console.log('右滑')
                    if($('#xq .pageXQ').index() > 0 ){
                        $('#xq .pageXQ').toggleClass('pageXQ').prev().toggleClass('pageXQ')
                    }
                }else if(parseFloat(pd) > 100 && pdTop<100){
                    console.log('左滑')
                    if($('#xq .pageXQ').index() < $('#xq li').length-1){
                        $('#xq .pageXQ').toggleClass('pageXQ').next().toggleClass('pageXQ')
                    }

                }
                var top = $('#xq').outerHeight();
                span.style.top = String(top) + 'px';
                event.stopPropagation();
            });
         
        }
        span_move_fun()
    }
    render(){
        return (
            <div className="dataPage">
                <nav id="xq">
                    <ul>
                        <li className="pageXQ"><Link to="/datagrid/cc/cake" >蛋糕</Link></li>
                        <li><Link to="/datagrid/cc/xqk">小切块</Link></li>
                        <li><Link to="/datagrid/cc/bql">冰淇淋</Link></li>
                        <li><Link to="/">鲜花</Link></li>
                        <li><Link to="/">礼品</Link></li>
                        <li><Link to="/">店长推荐</Link></li>
                    </ul>
                </nav>
                <main id="aaa">
                    {this.props.children}
                    <article>
                        {
                            this.props.dataset.map(function(obj, index){
                                obj.gSpec = obj.gSpec.slice(0,2)
                                return (
                                <Link to="/" key={index + 'a'} className="datapageA">
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
    }
}

const mapStateToProps = function(state){
    var test = [{
        'ename': 'Mango Cream Cake', 
        'cname': '砖头',
        'jianjie': '/\纯正黄泥烧制而成/',
        'price': 198.00,
        'b': 2.0,
        'src': './src/img/cake1.jpg'
    },
    {
            'ename': 'Mango Cream Cake', 
            'cname': '砖头',
            'jianjie': '/\纯正黄泥烧制而成，整体色系票是互动式acid那次啊u的大我发大王峰/',
            'price': 198.00,
            'b': 2.0,
            'src': './src/img/cake1.jpg'
        }
    ]
    console.log(state.home.dataset)
    return {
        loading: state.home.loading,
        dataset: state.home.dataset || []
        // dataset: test
    }
}

export default connect(mapStateToProps, datagridAction)(datagridComponent)