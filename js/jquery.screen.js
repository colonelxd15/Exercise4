jQuery(document).ready(function($){
	
	var winHeight, winWidth, loaderWidth, loaderHeight;
	$(window).load(getSize());
	$(window).resize(getSize());
	function getSize(){
		winHeight = $(window).height();
		winWidth = $(window).width();
		loaderWidth = $('#loader img').width();
		loaderHeight = $('#loader img').height();
		$('#loader img').css({'top':((winHeight/2)-loaderHeight) + 'px','left':((winWidth/2)-loaderWidth) +'px','position':'fixed'

	});
	$('#head-images').height(winHeight);
	};

	
});