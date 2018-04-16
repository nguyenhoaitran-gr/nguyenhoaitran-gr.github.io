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
	$('.navlink.nha').click(function() {
		$('html,body').animate({scrollTop: $('#_home').offset().top},1000);
		
	});
	$('.navlink.toi').click(function() {
		$('html,body').animate({scrollTop: $('#_about').offset().top},1000);
		
	});
	$('.navlink.gd').click(function() {
		$('html,body').animate({scrollTop: $('#_edu').offset().top},1000);
		
	});
	$('.navlink.manh').click(function() {
		$('html,body').animate({scrollTop: $('#_strength').offset().top},1000);
		
	});
	$('.navlink.sothich').click(function() {
		$('html,body').animate({scrollTop: $('#_hobbies').offset().top},1000);
		
	});
	$('.navlink.lienlac').click(function() {
		$('html,body').animate({scrollTop: $('#_fb').offset().top},1000);
		
	});
	

});