$(window).on('load resize', function () {
	var mheight = $(window).height();
	var mwidth = $(window).width();
  		// $(".hero-section .left-panel, .hero-section .right-panel").height(mheight-26);
		if(mwidth >= 768 && mwidth <= 1024) {
			$(".hero-section .left-panel, .hero-section .right-panel").height(mheight-26);
		}
});
