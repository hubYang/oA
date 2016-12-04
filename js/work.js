/**
 * Created by ninakikawa on 16/10/22.
 */
function awork(){
    var $awork=$('<ul class="boxBorder" id="awork" />');
    var $aworkStr="";
    $.each(data.oa101.conentMenu,function(i,e){
        $aworkStr+= '<li class="aworkItem"><a class="button1 radius5" href="javascript:void(0)">'+e+'</a><a href="#"><img src="../images/main/flowChart.gif"></a></li>';
    });
    $awork.append($aworkStr);
    $sidContent.append($awork);
}
/*未处理事务*/
function work(data,leftMenu,rightCon){
    $sidContent.html("");
    var $leftMenu=$('<div class="pdr15 width30 fn-left" id=leftMenu />');
    var $rightCon=$('<div class="width70 fn-right" id="rightCon" />');
    var $boxBorderContent="";
    var $rightConStr="";
    var $menuconTitle=$('<a class="boxBorderCaption" href="javascript:void(0)">'+data.conTitle+'</a>');
    var $leftMenuCon=$('<div class="boxBorderContent" />');
    $.each(data.Work,function(i,e){
        $boxBorderContent+='<div class="titleItem"><a href="javascript:void(0)"><img src="../images/main/flow.gif" border="0"><img border="0" src="../images/desktop/priority0.gif">'+e.text+' <span class="tipCountTitle fn-right">'+e.num+'</span></a></div>'
    });
    $leftMenuCon.append($boxBorderContent);
    $leftMenu.append($menuconTitle);
    $leftMenu.append($leftMenuCon);
    $sidContent.append($leftMenu);
    var $tableTi=$('<tr>'+
        '<th width="50%">主题</th>'+
        '<th width="15%">当前步骤</th>'+
        '<th width="10%">发出人</th>'+
        '<th width="25%">发出时间</th>'+
        '</tr>');
    $.each(data.WorkCon,function(i,e){
        $rightConStr+='<tr>'+
            '<td width="50%"><i class="icon-calendar textOrange"></i><img border="0" src="../images/desktop/priority0.gif">'+e.text+'</td>'+
            '<td width="15%">'+e.step+'</td>'+
            '<td width="10%">'+e.master+'</td>'+
            '<td width="25%">'+e.time+'</td>'+
            '</tr>'
    });
    var $table=$('<table />');
    var $tableHead=$('<thead />');
    var $tableBody=$('<tbody />');
    $tableHead.append($tableTi);
    $tableBody.append($rightConStr);
    $table.append($tableHead);
    $table.append($tableBody);
    $rightCon.append($table);
    $sidContent.append($rightCon);
}
/*已处理事务*/
function Ywork(data,leftMenu,rightCon){
    $sidContent.html("");
    var $leftMenu=$('<div class="pdr15 width25 fn-left" id=leftMenu />');
    var $rightCon=$('<div class="width75 fn-right" id="rightCon" />');
    var $boxBorderContent="";
    var $rightConStr="";
    var $menuconTitle=$('<a class="boxBorderCaption" href="javascript:void(0)">'+data.conTitle+'</a>');
    var $leftMenuCon=$('<div class="boxBorderContent" />');
    $.each(data.Work,function(i,e){
        $boxBorderContent+='<div class="titleItem"><a href="javascript:void(0)"><img src="../images/'+ e.img+'" border="0"><img border="0" src="../images/desktop/priority0.gif">'+e.text+'</a></div>'
    });
    $leftMenuCon.append($boxBorderContent);
    $leftMenu.append($menuconTitle);
    $leftMenu.append($leftMenuCon);
    $sidContent.append($leftMenu);
    var $tableTi=$('<tr>'+
        '<th width="50%">主题</th>'+
        '<th width="25%">当前步骤</th>'+
        '<th width="25%">发出时间</th>'+
        '</tr>');
    $.each(data.WorkCon,function(i,e){
        $rightConStr+='<tr>'+
            '<td width="55%"><i class="icon-calendar textOrange"></i><img border="0" src="../images/desktop/priority0.gif">'+e.text+'</td>'+
            '<td width="20%">'+e.step+'</td>'+
            '<td width="25%">'+e.time+'</td>'+
            '</tr>'
    });
    var $table=$('<table />');
    var $tableHead=$('<thead />');
    var $tableBody=$('<tbody />');
    $tableHead.append($tableTi);
    $tableBody.append($rightConStr);
    $table.append($tableHead);
    $table.append($tableBody);
    $rightCon.append($table);
    $sidContent.append($rightCon);
}

