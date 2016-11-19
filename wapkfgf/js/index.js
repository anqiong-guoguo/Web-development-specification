/**
 * Created by Administrator on 2016/11/7.
 */
$(function(){
    //跳转到指定位置（元素定位）
    function ctrolScroll_new(ele)
    {
        var bojTop =  $(ele).offset().top;
        //var scrollTop = $(window).scrollTop();
        //var paceHeight = $(ele).height();
        //console.log(scrollTop+"|"+bojTop+"|"+paceHeight);
        window.scrollTo(0,bojTop -90);
        $(".ui-icon-bars").click();
    }
    //菜单栏切换和内容加载
    $(".ui-grid-c li a").click(function(){
        var txt=$(this).text();
        document.body.scrollTop=0;
        if(txt=="一般规范"){
            $("#text-content").html("").load("content.html #txt1",function(){
                var title=$("#text-content h1").text();
                var subTitle=$("#text-content h2");
                var str="<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-a ui-first-child'>"+title+"</li>";
                $.each(subTitle,function(){
                    str+="<li><a name="+$(this).attr('id')+" class='ui-btn'>"+$(this).text()+"</a></li>";
                });
                $("#list-item ul").html(str);
                $("#list-item ul li a").on("click",function(){
                    var id=$(this).attr("name");
                    //document.getElementById(id).scrollIntoView();
                    var oDiv=$('#'+id);
                    ctrolScroll_new(oDiv);
                    //var oDiv=document.getElementById(id);
                    //var t=document.createElement("input");t.type="text";
                    //oDiv.insertAfter(t,oDiv.firstChild);//========
                    //t.focus();
                    //oDiv.removeChild(t);
                    //var init_pos = $('#'+id).offset().top;
                    //console.log(init_pos);
                    //$('#'+id).offset().top=init_pos+100;
                    //console.log($('#'+id).scrollTop());
                    //var t = $(window).scrollTop();
                    //$('body').animate({'scrollTop':t+200},100);
                });
            });
        }if(txt=="HTML规范"){
            $("#text-content").load("content.html #txt2",function(){
                var title=$("#txt2 h1").text();
                var subTitle=$("#txt2 h2");
                var str="<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-a ui-first-child'>"+title+"</li>";
                $.each(subTitle,function(){
                    str+="<li><a name="+$(this).attr('id')+" class='ui-btn'>"+$(this).text()+"</a></li>";
                });
                $("#list-item ul").html(str);
                $("#list-item ul li a").on("click",function() {
                    var id = $(this).attr("name");
                    //document.getElementById(id).scrollIntoView();
                    var oDiv = $('#' + id);
                    ctrolScroll_new(oDiv);
                });
            });
        }if(txt=="JS规范"){
            $("#text-content").load("content.html #txt3",function(){
                var title=$("#txt3 h1").text();
                var subTitle=$("#txt3 h2");
                var str="<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-a ui-first-child'>"+title+"</li>";
                $.each(subTitle,function(){
                    str+="<li><a name="+$(this).attr('id')+" class='ui-btn'>"+$(this).text()+"</a></li>";
                });
                $("#list-item ul").html(str);
                $("#list-item ul li a").on("click",function() {
                    var id = $(this).attr("name");
                    //document.getElementById(id).scrollIntoView();
                    var oDiv = $('#' + id);
                    ctrolScroll_new(oDiv);
                });
            });
        }if(txt=="CSS/SCSS"){
            $("#text-content").load("content.html #txt4",function(){
                var title=$("#txt4 h1").text();
                var subTitle=$("#txt4 h2");
                var str="<li data-role='list-divider' role='heading' class='ui-li-divider ui-bar-a ui-first-child'>"+title+"</li>";
                $.each(subTitle,function(){
                    str+="<li><a name="+$(this).attr('id')+" class='ui-btn'>"+$(this).text()+"</a></li>";
                });
                $("#list-item ul").html(str);
                $("#list-item ul li a").on("click",function() {
                    var id = $(this).attr("name");
                    //document.getElementById(id).scrollIntoView();
                    var oDiv = $('#' + id);
                    ctrolScroll_new(oDiv);
                });
            });
        }
    });
});