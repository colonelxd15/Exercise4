jQuery(document).ready(function(){
	
	var scrollVal;
	$('#w-60,#w-70,#w-80,#w-90,#w-100').css('width','');
	

	$(window).scroll(function(){
		scrollVal  = $(window).scrollTop();
		if(scrollVal >= 6027)
		{
			$('.prog-fill#w-60').animate({'width':'60%'},3000);
			$('.prog-fill#w-70').animate({'width':'70%'},3000);
			$('.prog-fill#w-80').animate({'width':'80%'},3000);
			$('.prog-fill#w-90').animate({'width':'90%'},3000);
			$('.prog-fill#w-100').animate({'width':'100%'},3000);
		}

	});
});