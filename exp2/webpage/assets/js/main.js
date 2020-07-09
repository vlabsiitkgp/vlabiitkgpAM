/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function ($) {

	$(document).on("click", "#submit_values", function () {
		if ($(".eb_value").val() != "" && $(".eb_value").val() != undefined && $(".tb_value").val() != "" && $(".tb_value").val() != undefined) {
			var eb = parseInt($(".eb_value").val());
			var tb = parseInt($(".tb_value").val());
			var ea = eb - (Math.floor(Math.random() * 0.6) + 0.3);
			var ta = tb - (Math.floor(Math.random() * 0.4) + 0.2);
			var mt = Math.floor(Math.random() * 60) + 20;
			var mrr = (eb - ea) / mt;
			var ewr = (tb - ta) / mt;
		
			var timesRun = 0;
			var interval =	setInterval(function () {
					$('#slideshow > div:first')
						.fadeOut(1000)
						.next()
						.fadeIn(1000)
						.end()
						.appendTo('#slideshow');
					timesRun += 1;	
					if(timesRun === 36){
						clearInterval(interval);
						$(".ea_value b").html(ea+" gms");
						$(".ta_value b").html(ta+" gms");
						$(".mt_value b").html(mt+" sec");
						$(".mrr_value b").html(mrr.toFixed(6)+" gm/sec");
						$(".ewr_value b").html(ewr.toFixed(6)+" gm/sec");
					}	
				}, 600);
		}
	});

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

	$("#slideshow > div:gt(0)").hide();


})(jQuery);