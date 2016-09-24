//处理输入框文字效果
$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val()==""){
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which==13){
			alert('回车提交');
		}
	})
})
//网页换肤
$(function(){
	var $li=$("#skin li");
	$li.click(function(){
		switchskin(this.id);
	});
})
function switchskin(skinname){
    $("#"+skinname).addClass("selected").siblings().removeClass("selected"); 
    $("#cssfile").attr("href","styles/skin/"+skinname+".css");
}
//导航效果
$(function(){
	$(".nav>li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});
})
//热门商品推荐
$(function(){
	$(".jnCatainfo .promoted").append('<span class="hot"></span>');
})

//广告切换
$(function(){
  var index=0;
 var rolllists = $("#jnImageroll div a");
 rolllists.css("opacity",0.7);
 var len=rolllists.length;
 var addTimer=null;
  rolllists.mouseover(function(){
    index = rolllists.index(this);
    showImg(index);
  }).eq(0).mouseover();
  $("#jnImageroll").hover(function(){
  	if(addTimer!=null){
  		clearInterval(addTimer);
  	}
  },function(){
  	addTimer=setInterval(function(){
  		showImg(index);
  		if(index==(len-1)){
  			index=0;
  		}else{
  			index++;
  		}
  	},3000);
  }).trigger("mouseleave");                  //接收两个事件函数mouseenter/mouseleave
})

function showImg(index){
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn()
                    .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
              .eq(index).addClass("chos").css("opacity","1");  //高亮对应的a

}

//给通知添加快速提示通知
$(function(){
	var $jnNotice=$("a.tooltip");
	// var oldtitle="";
	var y=20,
	    x=10;
	$jnNotice.mouseover(function(e){
		this.oldtitle=this.title;
		this.title="";
		var showinfo="<div id='tooltip'>"+this.oldtitle+"</div>";
		$("body").append(showinfo);
		$("#tooltip").css({"top":(e.pageY+y)+"px",
	                     "left":(e.pageX+x)+"px"
	                 }).show("fast");
	}).mouseout(function(){
		this.title=this.oldtitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({"top":(e.pageY+y)+"px",
	                     "left":(e.pageX+x)+"px"});
	})
})
//品牌横向滚动
$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var idx=$("#jnBrandTab li a").index(this);
		showBranList(idx);
		return false;
	}).eq(0).click();
})
function showBranList(index){
	var $rollobj=$("#jnBrandList");
	var rollwidth=$rollobj.find("li").outerWidth();
	rollwidth=rollwidth*4;
	$rollobj.stop(true,false).animate({left : -rollwidth*index},1000);
}
