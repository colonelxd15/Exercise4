jQuery(document).ready(function(){
	var item;
	$('.port-btn-prop').click(function(){
		item = $(this).attr('id');
		console.log(item);
		filter(item);
	});
	
	function filter(prop){
		$('.clients-info').css('display','none');
		$('.' + prop).css('display','block');
	}

});