$(document).ready(function() {
	$(window).scroll(function(event) {
		/* Act on the event */
		var vitribody = $('html,body').scrollTop();
		console.log(vitribody);
		if(vitribody >= 15)
		{
			$('.menuphai').addClass('scroll');
		}
		else{
			$('.menuphai').removeClass('scroll');
		}
	});

	$('.khoi-product').isotope({
		itemSelector:'li'
	});
});