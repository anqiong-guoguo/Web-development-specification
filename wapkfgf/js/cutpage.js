/**
 * Created by Administrator on 2016/11/16.
 */
$(function(){
    var menuBtn=new Hammer(document.getElementById("header-menu"));
    var swipe=new Hammer(document.getElementById("body"));
    $(".menu nav ul li").on("click",function(){
        $this=$(this);
        var thStr=$(".active img").attr("src");
        var array=thStr.split("/");
        var a=array[1].toString().substr(1);
        thStr=array[0]+"/"+a;
        $(".active img").attr({"src":thStr});
        $(".menu nav ul li a").removeClass("active");
        $this.find("a").addClass("active");
        var srcStr=$this.find("a>img").attr("src");
        var array1=srcStr.split("/");
        srcStr=array1[0]+"/1"+array1[1];
        $this.find("a>img").attr({"src":srcStr});
    });
    menuBtn.on("tap",function(){
        $(".list-nav").slideToggle("fast");
    });
});