$(document).ready(function(){

	// 点击回到顶部图标，回到网页顶部位置
	$(".toTop").click(function(event) {
		$("html,body").animate({scrollTop:0}, 1000);
	});
	// 视口位置距离网页顶部100像素时，才显示回到顶部图标
	$(window).scroll(function(event) {
		if($(window).scrollTop() > 100)
			$(".toTop").slideDown('slow');
		else
			$(".toTop").slideUp('slow');
	});

	
	// 点击图片，弹出包含大图的模态层
	$(".img").click(function(event) {

		// 动态生成.layer标签
		var str  = '<div class="layer">';
			str += '<img src="' + $(this).find("img").attr("src") + '">';
			str += '</div>';

		$("body").prepend(str);

		$(".layer").height($(window).height());

		$(".layer").click(function(event) {

			// 点击空白处，退出模态层
			$(this).fadeOut('fast');

			// 阻止事件冒泡
			return false;
		});


		$(window).keydown(function(event) {

			// 当键盘按下ESC键是，产生与点击layer空白处相同的效果
			// 模拟用户事件
			if (event.keyCode == 27){
				$(".layer").click();
			}
				
		});


		// 阻止a标签的默认事件
		return false;
	});

	

});