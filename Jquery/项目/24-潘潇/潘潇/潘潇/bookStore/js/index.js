$(document).ready(function(){
	window.open('open.html','top=0,left=150,width=400');
	//小广告
	$(window).scroll(function(){
		var ky=$(this).scrollTop()+50;
		$("#right").css("top",ky);
	});
	$("#right").find("a").click(function(){
		$("#right").hide();
	});
	//轮播
	 function changeImg(){
        var index=0;
        var stop=false;
        var $li=$("#content").find("#scroll_img").children("li");
        var $page = $("#content").find("#scroll_number").children("li");
        $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        $page.mouseover(function(){
            stop=true;
            index=$page.index($(this));
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $(this).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        }).mouseout(function(){
            stop=false;
        });
        setInterval(function(){
            if(stop) return;
            index++;
            if(index>=$li.length){
                index=0;
            }
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        },3000);
    }
    changeImg();
    $(".book ul img").mouseenter(function(){
        $(this).animate({width:"110%"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).animate({width:"80%"},"slow");
    });
    $(".tab ol li:first-of-type").mouseover(function(){
    	$(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"})
    	$(this).css({"width":"119px","background":"#ffffff","border":"none"})
    	$(".tab ul:first-of-type").show();
    	$(".tab ul:last-of-type").hide();
    });
    $(".tab ol li:last-of-type").mouseover(function(){
    	$(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"})
   		$(this).css({"width":"119px","background":"#ffffff","border":"none"})
    	$(".tab ul:first-of-type").hide();
    	$(".tab ul:last-of-type").show();
    });
    $(".tab ul li p").mouseenter(function(){
    	$(this).next().show();
    	$(this).hide();
    	$(this).parent().siblings().children("p").show().end().children("dl").hide();
    });
    
    
    
    
	function movedome(){
		var marginTop=0;
		var stop=false;
		var interval= setInterval(function(){
			if(stop) return;
			$("#express").children("li").first().animate({"margin-top":marginTop--},0,function(){
				var $first=$(this);
				if(!$first.is(":animated")){
					if((-marginTop)>$first.height()){
						$first.css({"margin-top":0}).appendTo($("#express"));
						marginTop=0
					}
				}
		});
	},50);
	 $("#express").mouseover(function(){
            stop=true;
        }).mouseout(function(){
            stop=false;
        });
    }
    movedome();
});