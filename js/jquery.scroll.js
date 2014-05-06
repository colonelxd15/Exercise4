jQuery(document).ready(function(){
	var scrollVal;
	$(window).scroll(function(){
		scrollVal = $(window).scrollTop();
		if(scrollVal<=312){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#home-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=2565){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#about-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=4873){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#team-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=6952){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#services-section"]').css('color','#B3D4FC');
		}
		else if(scrollVal<=8413){
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#portfolio-section"]').css('color','#B3D4FC');
		}
		else{
			$('.nav ul li a').css('color','#414141');
			$('.nav ul li a[href="#contact-section"]').css('color','#B3D4FC');
		}
	});
	$('a').click(function(){
		var section;
		var scrollValue;
		section = $(this).attr('href');
		console.log(section);

		if(section=='#home-section'){
			scrollValue = 0;
		}
		else if(section=='#about-section'){
			scrollValue = 685;
		}
		else if(section=='#team-section'){
			scrollValue = 3045;
		}
		else if(section=='#services-section'){
			scrollValue = 5247;
		}
		else if(section=='#portfolio-section'){
			scrollValue = 7346;
		}
		else if(section=='#contact-section'){
			scrollValue = 8733;
		}
			
		$('html,body').animate({
			scrollTop:scrollValue
		},2000);
	});	
});