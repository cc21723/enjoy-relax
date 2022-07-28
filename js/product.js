function proMenuEff(page,item){
    $('#proMenu ul ul').hide();
        $('#proMenu>ul>li>a').click(function(){
            $(this).next().stop().slideToggle();
    });
    $('#proMenu ul ul').eq(page).slideDown()
                       .children('li').eq(item).children('a').addClass('nowPage');
}
