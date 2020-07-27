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
			var voltage = parseInt($('#voltage').val());
			var current = parseInt($('#current').val());
			var pot = parseInt($('#pot').val());
			var depth = parseInt($('#depth').val());

			var Vo = voltage + (20+10*Math.random());
			var E = voltage * current * pot;
			var Tc = (50) * Math.log(Vo/(Vo-voltage));
			var power = E / (Tc) ;

			var ea = eb - ((Math.random() * 0.6) + 0.3).toFixed(6);
			var ta = tb - ((Math.random() * 0.4) + 0.2).toFixed(6);
			var mrr = ((27.4/1000) * Math.pow(power,1.54)).toFixed(6);
			var mt = ((78.54 * depth) / mrr).toFixed(2);
			var EWR = ((eb - ea) / (100* mt)).toFixed(4);
			var MRR = ((tb - ta) / (100* mt)).toFixed(4);

			var timesRun = 0;
			var interval =	setInterval(function () {
					$('#slideshow > div:first')
						.hide()
						.next()
						.show()
						.end()
						.appendTo('#slideshow');
					timesRun += 1;
					if(timesRun === 36){
						clearInterval(interval);
						$(".ea_value b").html(ea+" gms");
						$(".ta_value b").html(ta+" gms");
						$(".mt_value b").html(mt+" min");
						//$(".mrr_value b").html(MRR+" gm/min");
						//$(".ewr_value b").html(EWR+" gm/min");
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

	$('input[type="range"]').on('input', function() {

		var control = $(this),
		  controlMin = control.attr('min'),
		  controlMax = control.attr('max'),
		  controlVal = control.val(),
		  controlThumbWidth = control.data('thumbwidth');

		var range = controlMax - controlMin;

		var position = ((controlVal - controlMin) / range) * 100;
		var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
		var output = control.next('output');

		output
		  .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
		  .text(controlVal);

	});


})(jQuery);
