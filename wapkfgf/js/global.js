/**
 * Created by Administrator on 2016/11/5.
 */
$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});
$(function () {
    var menuStatus = false;
    var show = function() {
        if(menuStatus) {
            return;
        }
        //var t=$(window).scrollTop();
        $("body,html").css({
            height:"100%",
            overflow:"hidden"
        });
        //$("#text-content").unbind('touchmove');
        //$("#ext-content").on('touchmove',function(event) { event.preventDefault(); }, false);
        //$("#ext-content").unbind('touchmove');
        //$("body").bind("touchmove",function(event){event.preventDefault();}, false);//code
        menuStatus = true;
        var that= $('#list-item');
        $(that).animate({right:"0"});
        //$(that).scroll(function(){
        //    var viewH =$(this).height(),//可见高度
        //        contentH =$(this).get(0).scrollHeight,//内容高度
        //        scrollTop =$(this).scrollTop();//滚动高度
        //    console.log(scrollTop+"**"+viewH+"**"+contentH);
        //    //if((contentH - viewH)-scrollTop <= 15){
        //    //    console.log("已经到最底部了！");
        //    //    $(this).bind("touchmove",function(event){event.preventDefault();}, false);
        //    //}if(scrollTop<=5){
        //    //    console.log("已经到最顶部了！");
        //    //    $(this).bind("touchmove",function(event){event.preventDefault();}, false);
        //    //}
        //});
        //$(that).on("swipeup", function(){
        //    console.log("向上滑");
        //});
        //$(that).on("swipedown", function(){
        //    console.log("向下滑");
        //});
    };
    var hide = function() {
        if(!menuStatus) {
            return;
        }
        $("body,html").css({
            height:"100%",
            overflow:""
        });
        //$("#text-content").bind('touchmove');
        //$("body").unbind("touchmove");
        //$("#ext-content").on('touchmove',function(event) { event.preventDefault(); }, false);
        //$("#ext-content").unbind('touchmove');
        $('#list-item').animate({right:"-10rem"});
        menuStatus = false;
    };
    var toggle = function() {
        if (!menuStatus) {
            show();
        } else {
            hide();
        }
        return false;
    };
    // 侧边栏导航切换
    $(".ui-icon-bars").click(toggle);
    //$("#text-content").on("tap",toggle);
    $('#content').on("swipeleft", show);
    $('#content').on("swiperight", hide);
    // Menu behaviour
    $("#list-item li a").click(function () {
        var p = $(this).parent();
        p.siblings().removeClass('active');
        p.addClass('active');
    });
    $(".ui-icon-home").click(function(){
        location.reload();
    });
});