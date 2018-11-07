$(function(){
	$(".person-tab>a").click(function(){
		$(this).children().addClass("cur");
		$(this).siblings().children().removeClass("cur");
		$(".pic-con>img").prop("src",$(this).attr("data-target"));
	});

	//  -- 分页 -- 
	pageChange($(".page-prev"),$(".page-next"),$(".strategy-con>ul"));
	pageChange($(".s-prev"),$(".s-next"),$(".skgm-con>ul"));

	function pageChange($prev,$next,$box){
		var $ul = $box;
		var move = $ul.length,
			width = parseInt($ul.css("width")),
			length = $ul.length;
		$prev.click(function(){
			move--;
			if(move<=0) move = length;
			moveLeft($ul,move,length,width);
		});
		$next.click(function(){
			move++;
			if(move>length) move = 1;
			moveLeft($ul,move,length,width);
		});
	}
	function moveLeft($ul,move,length,width){
		var left = 0;
		$ul.each((i,elem)=>{
			// - calculate left -
			if(i-move<-1) left = (length-Math.abs(i-move))*width;
			else left = (i-move)*width;
			// - change - 
			$(elem).css({"left":left,"opacity":0});
			if(left == 0 ) $(elem).css({"opacity":1});
		})
	}

	// -- 右边滚动导航栏 -- 
	// - 点击 -
	$(".s-nav-list a").click(function(){
		$("html").animate({
			// $($(this).attr("href"))是获取id为当前href值的元素
			// offset() 距离整个页面的上、左距离
			scrollTop:$($(this).attr("href")).offset().top-20+"px"
		},500);
		return false;
	})
	// - 滚动 - 
	var scrollTop = $(window).scrollTop();
	$(".scroll-nav").toggleClass("visible",scrollTop>294);
	$(window).scroll(function(){
		scrollTop = $(this).scrollTop();
		$(".scroll-nav").toggleClass("visible",scrollTop>294);
		if(scrollTop>294&&scrollTop<954){
			toSection("section2");
		}
		else if(scrollTop<1620){
			toSection("section3")
		}
		else if(scrollTop<2388){
			toSection("section4")
		}
		else if(scrollTop<2843){
			toSection("section5")
		}
		else if(scrollTop<4232){
			toSection("section6")
		}
		else{
			toSection("section7")
		}
	});
	function toSection(section){
		var children = $(".scroll-nav li").removeClass("s-active").children();
		children.each(function(){
			var href = $(this).prop("href").split('#')[1];
			console.log(section)
			if(href == section){
				$(this).parent().addClass("s-active");
				console.log($(this));
				return;
			}
		})
	}
})