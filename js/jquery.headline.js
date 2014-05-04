jQuery(document).ready(function($){
	var active  = $('#head-cont ul li#active');
	var timer1 = setInterval(function(){
		$(active).fadeIn(1000, function(){	
		$(active).nextSibling().attr('id','active');
		$(active).removeAttr('id','active');
		active = $('#head-cont ul li#active');
	}).fadeOut(1000);
	}, 5000);

});