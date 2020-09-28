
(function ($) {
	$('.error_html').show();
	

	$(document).on("click", "#submit_values", function () {
		var lp = $('#laser_power').val();
		var lss = $('#laser_scan_speed').val();
		var sod = $('#sod').val();
		var gp = $('#gas_pressure').val();


		if(lss == '5000' && sod == '1.75' && gp == '3') {
			if(lp == '800') {
				$('.kwt').html('280');
				$('.kwb').html('200');
			}
			else if(lp == '900'){
				$('.kwt').html('310');
				$('.kwb').html('215');
			}
			else if(lp == '1000'){
				$('.kwt').html('325');
				$('.kwb').html('241');
			}
			else{
				errorHTML();
			}
		}
		else if(lp == '900' && sod == '1.75' && gp == '3') {
			if(lss == '3000') {
				$('.kwt').html('410');
				$('.kwb').html('210');
			}
			else if(lss == '4000'){
				$('.kwt').html('335');
				$('.kwb').html('235');
			}
			else if(lss == '5000'){
				$('.kwt').html('310');
				$('.kwb').html('215');
			}
			else{
				errorHTML();
			}
		}
		else if(lp == '900' && lss == '4000' && gp == '3') {
			if(sod == '1') {
				$('.kwt').html('395');
				$('.kwb').html('300');
			}
			else if(sod == '1.75'){
				$('.kwt').html('335');
				$('.kwb').html('235');
			}
			else if(sod == '2.5'){
				$('.kwt').html('385');
				$('.kwb').html('280');
			}
			else{
				errorHTML();
			}
		}
		else if(lp == '900' && lss == '4000' && sod == '1.75') {
			if(gp == '3') {
				$('.kwt').html('335');
				$('.kwb').html('235');
			}
			else if(gp == '4'){
				$('.kwt').html('375');
				$('.kwb').html('305');
			}
			else if(gp == '5'){
				$('.kwt').html('355');
				$('.kwb').html('310');
			}
			else{
				errorHTML();
			}
		}
		else{
			errorHTML();
		}
	});

	function errorHTML(){
		$('.kwt').html('');
		$('.kwb').html('');
		$('.error_html').css('color', 'red');
        $('.error_html').html("Invalid Input");
        $('.error_html').show();
        $('.error_html').delay(2000).fadeOut('slow');
	}

	var $window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			target: $body,
			visibleClass: 'is-menu-visible',
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});

})(jQuery);
