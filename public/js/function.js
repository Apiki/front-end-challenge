$('nav.mobile h3').click(function(){
    $('nav.mobile').find('ul').slideToggle();
    return false;
})

$('nav.desktop a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
})