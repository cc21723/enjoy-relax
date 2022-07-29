function mainNavff(){
    var winWidth = window.outerWidth;

    function setMenu(){
        
        $('#mainNav>ul>li').off('mouseenter mouseleave');
        $('#mainNav>ul>li>div').off('click');
    
        //先把classname為closeBtn德清掉
        $('#menuBtn').removeClass('closeBtn'); 

        if(!window.matchMedia('(max-width:600px)').matches){
            $('#menuBtn').hide();
            $('#mainNav').show();
            // $('#menuBtn').css({'top':0,'left':-600});
            $('#mainNav ul ul').css({
                'position':'relative',
                // 'position':'static',
                'top':200,
                'left':0
            }).hide()

            $('#mainNav>ul>li').hover(function(){
                $(this).children('ul').show().css({'opacity':0}).stop()
                       .animate({'top':0,'opacity':1},1000);
            },function(){
                $(this).children('ul').stop()
                       .animate({'top':200,'opacity':0},1000,function(){
                        $(this).hide();
                       });
            })
    
        }else{
            $('#menuBtn').show();
            $('#mainNav').hide();
            $('#mainNav ul ul').css({
                'position' : 'static',
                'opacity':1,
            }).hide();
            $('#mainNav>ul>li>div').click(function(){
                $(this).next().stop().slideToggle();
                // $(this).next().stop().animate({'left':0});
            })
        }
    }
    // var winWidth =window.outerWidth;
    setMenu();
    // $(window).resize();
    // alert(winWidth);

    
    $(window).resize(function(){
        if (window.outerWidth != winWidth) {
            setMenu();
            // winWidth.window=outerWidth;
        }
        
    })

    setMenu();

    // $(window).resize();

    $('#menuBtn').click(function(){
        $('#mainNav').stop().slideToggle();
        $(this).toggleClass('closeBtn'); //.toggleClass() 檢查有無此class名稱 沒有就+上去

        return false;
    });
}