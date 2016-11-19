$(function() {
	$("#normal").load("normal.html");

	$('.normal').click(function() {
		$("#normal").load("normal.html");
	});
	$('.html').click(function() {
		$("#normal").load("html.html");
	});
	$('.js').click(function() {
		$("#normal").load("js.html");
	});
	$('.css').click(function() {
		$("#normal").load("css.html");
	});
});

//导航
$('body').on('click', '.navbar li', function() {
	$(this).addClass('current').siblings().removeClass('current');
});

//左侧边栏
$('body').on('click', '.aside-nav li', function() {
	$(this).addClass('action').children().addClass('hover').parent().siblings().removeClass('action').children().removeClass('hover');
});
$('body').on('mouseover', '.aside-nav li', function() {
    $(this).addClass('current2').siblings().removeClass("current2");
});
$('body').on('mouseout', '.aside-nav li', function() {
    $(this).removeClass("current2");
});

//返回顶部
$(window).scroll(function(){
    var top = $("#return-top", parent.document);
    var scroll = $(this).scrollTop();
    if( scroll > 500){
        top.show();
        top.click(function(){
            if(!$('body,html').is(':animated')) {
                $('body,html').animate({
                      scrollTop: 0
                  },1000
                );
            }
        });
    }else{
        top.hide();
    }	
});
