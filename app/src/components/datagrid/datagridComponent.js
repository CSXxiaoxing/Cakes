import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'
import { Icon } from 'antd';

import SpinnerComponent from '../spinner/spinner';
import * as datagridAction from './datagridAction';
<<<<<<< HEAD
import { Link } from 'react-router'
import { Icon } from 'antd';
import $ from '../../libs/jquery-3.2.1';
=======
>>>>>>> a5b2e9379f56a1c01d8a83cdafe55e6f47b2135f

import './datagrid.scss';

class datagridComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
        // 滑动
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
                  // span.style.position = "absolute";
            span_top = $(this).offset().top;
            span_left = $(this).offset().left;
            start_top = touch.pageY
            start_left = touch.pageX

            page_left = touch.pageX
            page_top = touch.pageY
                 }
             });
         // 滑动
            span.addEventListener('touchmove', function(event) {
           if (event.targetTouches.length == 1) {

            var touch = event.targetTouches[0];
            // span.style.position = "absolute";
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
                event.stopPropagation();
            });
        }
        span_move_fun()
    }
    change(e){
        if(e.target.nodeName.toLocaleLowerCase() == 'a'){
            $('#xq li').removeClass('pageXQ');
            $(e.target).parent().addClass('pageXQ');

        }
    }
    render(){
        return (
            <div className="dataPage">
                    <div id="XQQ"></div>
                    <nav id="xq">
                        <ul onClick={this.change}>
                            <li className="pageXQ"><Link to="/datagrid/cc/cake" >蛋糕</Link></li>
                            <li><Link to="/datagrid/cc/small">小切块</Link></li>
                            <li><Link to="/datagrid/cc/ice">冰淇淋</Link></li>
                            <li><Link to="/datagrid/cc/flower">鲜花</Link></li>
                            <li><Link to="/datagrid/cc/gift">礼品</Link></li>
                            <li><Link to="/datagrid/cc/recommend">店长推荐</Link></li>
                        </ul>
                    </nav>
                
                <main id="aaa">
                    {this.props.children}
                    <article>
                        {
                            this.props.dataset.map(function(obj, index){
                                obj.gSpec = obj.gSpec.slice(0,2)
                                var objGID = String("/cakeDatail/"+obj.gId);
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
    }
}
const mapStateToProps = function(state){
    // console.log(state.datagrid.dataset)
    var dataset  =  JSON.parse(state.datagrid.dataset || '[]')
    return {
        loading: state.datagrid.loading,
        dataset: dataset[0] || []
        // dataset: test
    }
}

export default connect(mapStateToProps, datagridAction)(datagridComponent)