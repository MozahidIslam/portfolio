$('.progressbar1').progressBar({
			shadow : true,
			percentage : false,
			animation : true,
	});
	$('.progressbar2').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		barColor : "#527AF9",
	});
	$('.progressbarPhp').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		animateTarget : true,
		barColor : "#52ADF9",
	});
	$('.progressbarGit').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		barColor : "#52ADF9",
	});
	$('.progressbar3').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		animateTarget : true,
		barColor : "#C3B238",
	});

	//Menu
	$(".spinDown").click(function() {
		var target = $(this).data("target");
		var scrollFix = -80;
		target = "#" + target;
		$("html,body").animate({
			scrollTop : $(target).offset().top + scrollFix
		}, 1000);
		return false;
	});