function span_move_fun(){
    // touchmove
 // var span = document.getElementsByClassName(".content");
 var span = $('.content')[0]
 console.log(span)
 var span_top = $(span).offset().top;
 var start_top = $(span).offset().top;
 var page_top = 0;
 var xialaLoading_top =0;

 // 按下
 span.addEventListener('touchstart', function(event) {
    // event.preventDefault();
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        // span.style.position = "absolute";
    span_top = $(this).offset().top;
    start_top = touch.pageY
    
    page_top = touch.pageY
    console.log(page_top)
         }
    });

 // 按住
    span.addEventListener('touchmove', function(event) {
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
        // 下拉更新
        $('#bottomLoading').css({
            'top': $('.header').outerHeight()
        })
        if($('.content').scrollTop() == 0 ){
            $('.content').triggerHandler('xialaLoading')
            $('.content')[0].style.position = 'relative';
        }
        $('.content').bind("xialaLoading", function(){
            
            xialaLoading_top = (touch.pageY- page_top) >0 ? (touch.pageY- page_top) : 0;
            if(xialaLoading_top < $('.content').innerHeight()*0.23 ){
                $('.content')[0].style.top = xialaLoading_top + 'px';
                if(xialaLoading_top > $('.content').innerHeight()*0.17 ){
                    $('#bottomLoading').css({
                        'display':'block',
                        'margin-bottom': -$('#bottomLoading').outerHeight(),
                        'padding-top': $('#bottomLoading').outerHeight()*0.2
                    })
                }
            }
        })
        }
    });
    
    // 松开
    span.addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];
        var pdTop = Math.abs(page_top-touch.pageY)
        
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
                let top = parseInt($('.content').css('top')) - 4;
                if(top>0){
                    $('.content').css({
                        'top': top
                    })
                } else {
                    $('.content').css({
                        'top': 0
                    })
                    $('.content').removeAttr("style");
                    clearInterval( time )
                }
            },10)
            
            $('#bottomLoading').removeAttr("style");
        }
        // 复位
        span_top = $(span).offset().top;
        start_top = $(span).offset().top;
        page_top = 0;
        xialaLoading_top =0;
        // event.stopPropagation();
    });

}
span_move_fun()
