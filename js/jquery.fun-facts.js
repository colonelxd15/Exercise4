jQuery(document).ready(function(){

	var counter = 0;
	var limit = 250;
	var tweets = 99;
	var clients = 85;
	var projects = 120;
	var coffee = 250;
	var scrollVal;
	
	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		if(scrollVal >= 3787){
			while(counter<=limit)
			{
				if(counter <= tweets)
				{
					$('p.header7#tweet-fact').delay(10000).html(counter);
				}
				if(counter <= clients)
				{	
					$('p.heacd der7#client-fact').delay(10000).html(counter);	
				}cd 
				if(counter <= projects)
				{	
					$('p.header7#project-fact').delay(10000).html(counter);
				}
				if(counter <= coffee)
				{
					$('p.header7#coffee-fact').delay(10000).html(counter);
				}
				counter++;
			}
		}

	})	
});
