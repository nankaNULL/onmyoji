$(function(){
	$(function(){
		$('#header').load('s_header.html');
		$(".ss-l-select a").hover(function(){
			if($(this).attr("data-active") == 0)
				$(this).toggleClass("active");
		});
		$(".ss-l-select a").click(function(){
			$(".ss-l-select a").attr("data-active",0);
			$(".ss-l-select a").removeClass("active");
			$(this).addClass("active");
			$(this).attr("data-active",1);
		})
	})
	//  -- 滚动加载更多的提示，滚动时隐藏 --
	$(".ss-r-skgm").scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop>0){
			$("#scroll-more").addClass("hidden");
		}
	});
})