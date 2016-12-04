/*右侧的内容区域*/
function creatLeft(){
    var $sidContent=$(".sidContent");
    var $sidCon=$('<div class="pdr15 width30 fn-left"> <div class="sectionCaptionOne"></div> <div class="sectionCaptionTwo"></div></div>'+
        '<div class="fn-right width70"><h3 class="boxBorderCaption" href="#">目标管理</h3>'+
        '<div class="projectContent">'+
        '<ul class="projectTarget bgFE0 fn-clear">'+
        '<li class="fn-left borderR"><a href="#" class="textOrange font20 lineH12" id="myPlan">36</a><br/>我的工作计划</li>'+
        '<li class="fn-left borderR"><a href="#" class="textOrange font20 lineH12" id="myWork">90</a><br/>我的工作任务</li>'+
        '<li class="fn-left"><a href="#" class="textOrange font20 lineH12" id="myReport">22</a><br/>我的工作报告</li>'+
        '</ul>'+
        '</div>'+
        '<div class="fn-clear"><div class="fn-left width50 pdr15"><div class="sectionCaptionThree"></div></div>'+
        '<div class="fn-left width50"><a class="boxBorderCaption" id="mailList" href="#" target="black"><div class="tipCount fn-right">5</div>内部通讯录···</a>'+
        '<div class="boxBorderContent"><input type="text" class="searchInput"/><a href="javascript:;" target="_blank"><i id="searchBtn" class="icon-search"></a></i><ul class="nameList"></ul></div></div>'+
        '<div class="fn-left width50"><div class="sectionCaptionFour"></div></div>'+
        '<div class="fn-left width50"><div class="sectionCaptionFive"></div></div></div></div>')
    $sidContent.append($sidCon);
}

/*渲染数据模块*/
function sectionCaption(json){
    var settings = {
        data:{},
        num:"",
        section:"",
        Img:[]||""
    };
    var toStr = Object.prototype.toString;
    for(var attr in json){
        if(toStr.call(json[attr]) === toStr.call(settings[attr])){
            settings[attr] = json[attr];
        }
    };
    var $section=$(".sectionCaption"+settings.num);
    var $title=$('<a class="boxBorderCaption" href="#">'+
        '<div class="tipCount fn-right">'+settings.data[settings.section+'Total']+'</div>'+settings.data[settings.section+'Title']+'</a>');
    $section.append($title);
    var $boxBorderContent=$("<div class='boxBorderContent' />");
    var contentStr='';
    if(settings.Img!=0){
        var $imgFocus=$('<div class="imgFocus fn-relative">'+
            '<ul id="focusImg"></ul>'+
            '<div class="imgNum fn-clear"></div>'+
            '</div>');
        var $ImgStr="";
        var $NumStr="";
        $.each(settings.Img,function(i,e){
            $ImgStr+='<li><img src="../images/desktop/'+e+'"/></li>';
            $NumStr+='<img src="../images/main/dotGray.gif">';
        });
        $section.append($imgFocus);
        $("#focusImg").append($ImgStr);
        $(".imgNum").append($NumStr);
    }


    $.each(settings.data[settings.section],function(i,e){
        contentStr+='<div><span class="textGray fn-right pdl10">'+settings.data[settings.section][i].num+'</span><a href="index.html"><i class="'+settings.data[settings.section+'Icon']+' textOrange"></i>'+
            '<img border="0" src="../images/desktop/priority0.gif"><span>'+settings.data[settings.section][i].text+'</span></a></div>'
    });
    $boxBorderContent.html(contentStr);
    $section.append($boxBorderContent);
};
/*轮播图*/
var num = 0;
var timer = null;
timer = setInterval(function () {
    var n = $("#focusImg li").length;
    $(".imgNum img").eq(num).attr("src", "../images/main/dotRed.gif").siblings().attr("src", "../images/main/dotGray.gif");
    $("#focusImg li").eq(num).removeClass("fn-hide").siblings().addClass("fn-hide");
    num++;
    num %= n;
    if (num >= n) {
        num = n;
    }
}, 2000);
$(".imgNum").on("click", "img", function () {
    num = $(this).index();
    $(this).attr("src", "../images/main/dotRed.gif").siblings().attr("src", "../images/main/dotGray.gif");
    $("#focusImg li").eq($(this).index()).removeClass("fn-hide").siblings().addClass("fn-hide");
});
/*跟hash显示相应的内容*/
var $sidContent=$(".sidContent");
var $header=$(".header");
function romance (){
    var hashVal=window.location.hash.split("=")[1];
    var hashId=window.localStorage.getItem("curItem");
    var setLocal="";
    $(".listMenu").addClass("fn-hide");
    $(".treeMenu h2,.listMenu li").removeClass("textHighlight");
    if($("#"+hashId).parents(".listMenu")!=undefined){
        $("#"+hashId).parents(".listMenu").removeClass("fn-hide");
    }
    $("#"+hashVal).addClass("textHighlight");
    sectionLogo(data[hashVal]);
    $sidContent.html("");
    switch(hashVal){
        case "oa100" :
            creatLeft();
            /*待处理事务*/
            sectionCaption({
                data:data.oa100,
                num:"One",
                section:"shiwu"
            });
            /*未读邮件*/
            sectionCaption({
                data:data.oa100,
                num:"Two",
                section:"youjian"
            });
            /*我的目标管理*/
            sectionCaption({
                data:data.oa100,
                num:"Three",
                section:"xinxi",
                Img:data.oa100.xinxiImg
            });
            /*我关注的知识*/
            sectionCaption({
                data:data.oa100,
                num:"Four",
                section:"zhishi"
            });
            /*友情链接*/
            sectionCaption({
                data:data.oa100,
                num:"Five",
                section:"shixun"
            });
            $('.sectionCaptionOne').on("click",".boxBorderCaption",function(ev){
                $(ev.currentTarget).attr("href","desktop.html#sid=oa102");
                romance();
                $(".treeMenu h2,.treeMenu li").removeClass("textHighlight");
                $("li[sid='oa102']").addClass("textHighlight").parent().removeClass("fn-hide");
            });
            $("#oWorkflowList").on("click","a",function(ev){
                $(ev.currentTarget).attr("href","addNew.html")
            });
            $(".projectTarget").on("click","a",function(e){
                var myAim=e.currentTarget.id;
                switch(myAim){
                    case "myPlan":
                        $('#'+myAim).attr("href","desktop.html#sid=oa105");
                        romance ();
                       break;
                    case "myWork":
                        $('#'+myAim).attr("href","desktop.html#sid=oa107");
                        romance ();
                       break;
                    case "myReport":
                        $('#'+myAim).attr("href","desktop.html#sid=oa109");
                        romance ();
                        break;
                }

            });
            $("#mailList").on('click',function(){
                $(this).attr("href","mailList.html");
            });
            $(".sectionCaptionTwo .boxBorderCaption").attr("href","javascript:;");
            $(".sectionCaptionThree .boxBorderCaption").attr("href","javascript:;");
            $(".sectionCaptionFour .boxBorderCaption").attr("href","javascript:;");
            $(".sectionCaptionFive .boxBorderCaption").attr("href","javascript:;");

            /*搜索功能*/
            $(".searchInput").on("input",function(){
                var _this=this;
                var $list=$(".nameList");
                var arr=[];
                var listStr="";
                $list.html("");
                arr=searchName($(this).val());
                $.each(arr,function(i,e){
                    listStr+="<li>"+e.split($(_this).val()).join("<span class='textOrange'>"+$(_this).val()+"</span>")+"</li>";
                });
                $list.html(listStr);
            });
            function searchName(val){
                var arr=[];
                for(var i=0; i<mailData.length;i++){
                    for(var attr in mailData[i]){
                        if((mailData[i][attr]+"").indexOf(val)!=-1&&val!=""){
                            arr.push(mailData[i][attr])
                        }
                    }
                }
                return arr;
            }
            $(".nameList").on("click","li",function(){
                $(".searchInput").val($(this).text());
                $(this).parent().html("");
            });
            $("#searchBtn").click(function(){
                if($(".searchInput").val()==""){
                    return;
                }
                var valName=$(".searchInput").val();
                localStorage.setItem("searchName",valName);
                $(this).parent("a").attr("href","sechName.html");
            });
            break;
        case "oa101" :
            awork();
            break;
        case "oa102" :
            work(data.oa102,"noworkMenu","noworkCon");
            break;
        case "oa103" :
            Ywork(data.oa103,"yworkMenu","yworkCon");
            break;
        default :
            work(data.oa102,"noworkMenu","noworkCon");
    }
}
/*logo部分*/
function sectionLogo(sid){
    $header.html('');
    var $h1=$('<h1 class="logo fn-left"><img class="pdr5" src="../images/desktop/menu.png" alt="'+sid.logoTitle+'"/>'+sid.logoTitle+'</h1>');
    var $logoContent=$('<div class="fn-right">'+
        '<a class="button1 button1L fn-left goBack" title="'+sid.logoContent[0]+'" href="javascript:history.back();"><i class="icon-angle-left"></i></a>'+
        '<span id="'+sid.logoContentId+'" class="fn-left"><a href="javascript:void(0)" class="button1 button1R fn-left">'+sid.logoContent[1]+'</a></span></div>');
    $header.append($h1);
    $header.append($logoContent);
}
/*左侧菜单栏*/
create(data.dataMenu);
function create(data){
    var $treeMenu=$(".treeMenu");
    $.each(data,function(i,e){
        var $li=$("<li />");
        var $h2=$('<h2><img src="../images/desktop/'+e.img+'">'+e.title+'</h2>');
        if(e.sid!=undefined){
            $h2.attr({
                "sid": e.sid,
                "id":e.sid
            });
        }
        if(i==0){
            $h2.addClass("textHighlight");
        }else if(i==12){
            $h2.attr("id","goOut");
        }
        $li.append($h2);
        if(e.content!=undefined){
            var $ul=$("<ul class='listMenu fn-hide' />");
            for(var j=0; j<e.content.length; j++){
                var $lis=$("<li id='"+e.content[j].sid+"' sid='"+e.content[j].sid+"'><img src='../images/desktop/catalogue1.png'>"+e.content[j].title+"</li>");
                $ul.append($lis);
            };
            $li.append($ul);
            $ul.siblings("h2").addClass("icon-caret-down");
        }
        $treeMenu.append($li);
    });
};
$(".treeMenu").on("click","h2,.listMenu li",function(ev){
    if(ev.target.tagName=="H2"){
        $(".listMenu li").removeClass("textHighlight");
        if($(ev.currentTarget).siblings(".listMenu").length!=0){
            $(ev.currentTarget).siblings(".listMenu").toggleClass("fn-hide");
            $(ev.currentTarget).parent().siblings("li").children(".listMenu").addClass("fn-hide");
        }else{
            $(".listMenu").addClass("fn-hide");
            $(ev.currentTarget).addClass("textHighlight");
        }
    }else{
        $("h2").removeClass("textHighlight");
        $(ev.currentTarget).addClass("textHighlight").siblings().removeClass("textHighlight");
    };
    if($(ev.currentTarget).attr('sid')){
        var sid=$(ev.currentTarget).attr('sid');
        window.location.hash = 'sid='+sid;
        window.localStorage.setItem("curItem", sid);
        sectionLogo(data[sid]);
        $sidContent.html("");
        romance();
    }
});
//注销
$("#goOut").wrap('<a href="login.html"></a>');
$("#goOut").click(function(){
    localStorage.removeItem("loginMess");
});
//nig
function listStorage(){
    if(localStorage.getItem("userList")==""){
        dataStem=JSON.stringify(mailData);
        localStorage.setItem("userList",dataStem);
    }else{
        dataGtem=localStorage.getItem("userList");
        dataGte =JSON.parse(dataGtem);
    }
}
