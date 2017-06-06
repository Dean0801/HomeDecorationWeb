$(function() {

	// 动态计算装修效果图的高度
	function showExamples(){
		var w = $(window).width();
		var p60_w = w * 3 / 10;
		$("#examples img").height(p60_w * 2 / 3);
		$("#examples img").parent().height(p60_w * 2 / 3);
	}
	showExamples();
	$(window).resize(function(event) {
		showExamples();
	});

	// 轮播图
	var timerId;
	var index = 0;
	function startLoop(){
		timerId = setInterval(function(){

			index ++ ;
			if(index == 5)
				index = 0;
			showBanner(index);
		},5000);
	}
	startLoop();

	$(".banner_bullets span").click(function(event) {
		if(index == $(this).attr("id").substr(-1) - 1){
			return;
		}
		clearInterval(timerId);
		index = $(this).attr("id").substr(-1) - 1;
		showBanner();
	});

	$("#banner_left").mouseenter(function(event) {
		clearInterval(timerId);
	});
	$("#banner_left").mouseleave(function(event) {
		startLoop();
	});

	function showBanner(){
		$("#banner_left a").css("display","none");
		$(".banner_bullets span").removeClass('bullet_highlight');
		$("#banner").get(0).className = '';
		$("#banner_left a").eq(index).fadeIn('slow');
		$(".banner_bullets span").eq(index).addClass('bullet_highlight');
		$("#banner").addClass('banner_bgcolor' + index);
	}

	// 装修样板间，点击选项卡切换
	$(".tabs ul li a").click(function(event) {
		$(this).parent().siblings().children().removeClass('tab-select');
		$(this).addClass('tab-select')
		return false;
	});

	
	// 轮播图2
	var timer;
	var list = 0;
	function startSlide(){
		timer = setInterval(function(){
			list ++ ;
			if(list == 6)
				list = 0;
			showSlide(list);
		},3000);
	}
	startSlide();

	$(".slide_bullets span").click(function(event) {
		if(index == $(this).attr("id").substr(-1) - 1){
			return;
		}
		clearInterval(timer);
		list = $(this).attr("id").substr(-1) - 1;
		showSlide();
	});

	$("#slide ul li").mouseenter(function(event) {
		clearInterval(timer);
	});
	$("#slide ul li").mouseleave(function(event) {
		startSlide();
	});

	// 下一张图片
	$("#prev").click(function(event) {
		clearInterval(timer);
		list --;
		if(list == -1)
			list = 5;
		showSlide();
		startSlide();
	});

	// 上一张图片
	$("#next").click(function(event) {
		clearInterval(timer);
		list ++;
		if(list == 6)
			list = 0;
		showSlide();
		startSlide();
	});

	function showSlide(){
		// $("#banner_left a").fadeOut('slow');
		$("#slide ul li").css("display","none");
		$(".slide_bullets span").removeClass('bullet_highlight');
		$("#slide ul li").eq(list).fadeIn('slow');
		$(".slide_bullets span").eq(list).addClass('bullet_highlight');
	}

	// 装修效果图动画效果
	// $(".p40").mouseover(function(event) {
	// 	$(this).siblings().css("width","40%");
	// });
	// $(".p60").mouseover(function(event) {
	// 	$(this).css("width","60%");
	// 	$(this).children('.example-hover').css("width","100%");
	// });
});