import {Router, Route, Link, hashHistory, IndexRoute, browserHistory} from 'react-router';

export function Init(cakeType){

    // 路径
    var DATAselect = cakeType || '蛋糕';
    return {
        types: ['BeforeRequest', 'DategridRequested', 'RequestError'],
        method : "post",
        url : 'Datagrid.php',
        data: {
            select:  `select * from goods_list where gClass='${DATAselect}'` 
        }
    }

}

export function Slide(){


    //回到顶部
    $('.header').click(function(e){
         $('.content').animate({scrollTop:0},1000);
    })
    
    // 滑动-滑动push->路由
    var cakeValue = ['/datagrid/cc/蛋糕', '/datagrid/cc/小切块', '/datagrid/cc/冰淇淋', '/datagrid/cc/鲜花', '/datagrid/cc/礼品', '/datagrid/cc/店长推荐']

    function span_move_fun(){
        // touchmove
     var span = document.getElementById("datagridMain");
     var span_left = $(span).offset().left;
     var span_top = $(span).offset().top;
     var start_left = $(span).offset().left;
     var start_top = $(span).offset().top;
     var page_left = 0;
     var page_top = 0;
     var xialaLoading_top =0;

     // 按下
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
            // console.log(page_top)
            $('#bottomLoading').css({
                'margin-top' : $('#xq').outerHeight(),
            })
             }
        });

     // 按住
        span.addEventListener('touchmove', function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // 下拉更新
            $('#bottomLoading').css({
                'top': ($('#xq').outerHeight()+$('.header').outerHeight())
            })
            if($('.content').scrollTop() == 0 ){
                $('.content').triggerHandler('xialaLoading')
                $('#datagridMain')[0].style.position = 'relative';
            }
            $('.content').bind("xialaLoading", function(){
                
                xialaLoading_top = (touch.pageY- page_top) >0 ? (touch.pageY- page_top) : 0;
                if(xialaLoading_top < $('.content').innerHeight()*0.2 ){
                    $('#datagridMain')[0].style.top = xialaLoading_top + 'px';
                    if(xialaLoading_top > $('.content').innerHeight()*0.17 ){
                        $('#bottomLoading').css({
                            'display':'block',
                            'margin-bottom': -$('#bottomLoading').outerHeight(),
                            
                            'padding-top': $('#bottomLoading').outerHeight()*0.2,
                            'z-index': 99
                        })
                    }
                }
            })
            }
        });
        
        // 松开
        span.addEventListener('touchend', function(event) {
            var touch = event.changedTouches[0];
            var pd = page_left-touch.pageX;
            var pdTop = Math.abs(page_top-touch.pageY)
            // 左右滑动事件
            if(parseFloat(pd) < -100 && pdTop<100){
                console.log('右滑')
                if($('#xq .pageXQ').index() > 0 ){
                    $('#xq .pageXQ').toggleClass('pageXQ').prev().toggleClass('pageXQ')
                    console.log($('#xq .pageXQ').index())
                    hashHistory.push(cakeValue[$('#xq .pageXQ').index()])
                }
            }else if(parseFloat(pd) > 100 && pdTop<100){
                console.log('左滑')
                if($('#xq .pageXQ').index() < $('#xq li').length-1){
                    $('#xq .pageXQ').toggleClass('pageXQ').next().toggleClass('pageXQ')
                    console.log($('#xq .pageXQ').index())
                    
                    hashHistory.push(cakeValue[$('#xq .pageXQ').index()])
                }

            }
            // 下拉刷新事件停止-延时
            if(xialaLoading_top >= $('.content').innerHeight()*0.23 ){
                setTimeout(function(){
                    settime()
                },600)
            } else {
                settime()
            }
            function settime(){
                let time = setInterval(function(){
                    let top = parseInt($('#datagridMain').css('top')) - 4;
                    if(top>0){
                        $('#datagridMain').css({
                            'top': top
                        })
                    } else {
                        $('#datagridMain').css({
                            'top': 0
                        })
                        $('#datagridMain').removeAttr("style");
                        clearInterval( time )
                    }
                },10)
                
                $('#bottomLoading').removeAttr("style");
            }
            // 复位
            span_left = $(span).offset().left;
            span_top = $(span).offset().top;
            start_left = $(span).offset().left;
            start_top = $(span).offset().top;
            page_left = 0;
            page_top = 0;
            xialaLoading_top =0;
            // event.stopPropagation();
        });

    }
    span_move_fun()

    return {
        type: 'q'
    }
}

export function Edit(){
    return {
        types: ['b']
    }
}