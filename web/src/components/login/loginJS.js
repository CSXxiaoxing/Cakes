
$(window).resize(function(){

    var w = $('#LoginDL').outerWidth();
    var h = $('#LoginDL').outerHeight();

    $('#LoginDL form').css({
        'left': w/2,
        'top' : h/2,
        'transform': 'translate(-50%,-50%)'

    })
})