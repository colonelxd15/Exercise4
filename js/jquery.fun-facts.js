jQuery(document).ready(function(){

	var counter = 0;
	var limit = 250;
	var tweets = 99;
	var clients = 85;
	var projects = 120;
	var coffee = 250;
	var scrollVal;
	var executed = false;
	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		if((scrollVal >= 3826) && !executed){
			$('p.header7#tweet-fact').countTo({  
				from: 00,
      			to: 99,
        		speed: 5000,
        		refreshInterval: 50,});
			$('p.header7#client-fact').countTo({  
				from: 00,
      			to: 85,
        		speed: 5000,
        		refreshInterval: 50,});	
			$('p.header7#project-fact').countTo({  
				from: 00,
      			to: 120,
        		speed: 5000,
        		refreshInterval: 50,});
			$('p.header7#coffee-fact').countTo({  
				from: 00,
      			to: 250,
        		speed: 5000,
        		refreshInterval: 50,});
			executed = true;
		}

	})	
});
