$(document).ready(function() {
	$(window).scroll(function() {
		/* Act on the  */
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
	$('body').scrollspy({
		target:'#menutren'});
	$('.khoi-product').isotope({
		itemSelector:'li'
	});

	// js cho click chuot
	$('.nav-link.nha').click(function() {
		$('html,body').animate({scrollTop: $('#_home').offset().top},1000);
		
	});
	$('.nav-link.toi').click(function() {
		$('html,body').animate({scrollTop: $('#_about').offset().top},1000);
		
	});
	$('.nav-link.gd').click(function() {
		$('html,body').animate({scrollTop: $('#_edu').offset().top},1000);
	});
	$('.nav-link.manh').click(function() {
		$('html,body').animate({scrollTop: $('#_strength').offset().top},1000);
	});
	$('.nav-link.sothich').click(function() {
		$('html,body').animate({scrollTop: $('#_hobbies').offset().top},1000);
	});
	$('.nav-link.lienlac').click(function() {
		$('html,body').animate({scrollTop: $('#_fb').offset().top},1000);
	});

});