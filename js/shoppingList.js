
window.onload=function(){
	$(".header-search").focus(function(){
		$(".sug-init").css({
			"display":"block"
		})
		$(".icon-sousu").css({
			"color":"#ff6d00"
		})
	})

	$(".header-search").blur(function(){
		$(".sug-init").css({
			"display":"none"
		})
		$(".icon-sousu").css({
			"color":"#666666"
		})
	})
}