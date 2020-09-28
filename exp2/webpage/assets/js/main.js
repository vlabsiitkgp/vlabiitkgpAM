
(function ($) {

	var copyRightHTML = '<div class="copyright">&copy; Tatikonda Sree Lakshmi, Research Engineer, VLabs IITKGP.</div>';
	$("#footer").append(copyRightHTML);

	$(document).on("change", "#polarity", function () {
		if($('#polarity').val() == "normal"){
			$("#slideshow").show();
			$("#slideshow > div:gt(0)").hide();
			$("#slideshowReverse").hide();
		}
		else{
			$("#slideshowReverse").show();
			$("#slideshowReverse > div:gt(0)").hide();
			$("#slideshow").hide();
		}
	});

	$(document).on("click", "#submit_values", function () {
		if ($(".eb_value").val() != "" && $(".eb_value").val() != undefined && $(".tb_value").val() != "" && $(".tb_value").val() != undefined) {
			var isNormalPolarity = ($('#polarity').val() == "normal")?true:false;
			var eb = parseInt($(".eb_value").val());
			var tb = parseInt($(".tb_value").val());
			var voltage = parseInt($('#voltage').val());
			var current = parseInt($('#current').val());
			var pot = parseInt($('#pot').val());
			var depth = parseInt($('#depth').val());

			var Vo = voltage + (20+10*Math.random());
			var E = voltage * current * pot;
			var Tc = (50) * Math.log(Vo/(Vo-voltage));
			var power = E / Tc ;

			var ea = (isNormalPolarity)? (eb - ((Math.random() * 0.6) + 0.3).toFixed(6)) : ((eb - ((Math.random() * 0.6) + 0.3)*0.5).toFixed(6));
			var ta = (isNormalPolarity)? (tb - ((Math.random() * 0.4) + 0.2).toFixed(6)) : ((tb - ((Math.random() * 0.4) + 0.2)*getRandomArbitrary(0.4,0.11)).toFixed(6));
			var mrr = (27.4/10000 * Math.pow(power,1.54)).toFixed(6);
			var mt = (isNormalPolarity)? (((78.54 * depth) / mrr).toFixed(4)): (((78.54 * depth) / mrr)*3.3).toFixed(4);
			var ewr = (tb - ta) / mt;
			if(current > 10) {
				ea += 0.25;
				ta -= 0.25;
			}
			var timesRun = 0;
			var interval =	setInterval(function () {
					(isNormalPolarity)? $('#slideshow > div:first')
						.hide()
						.next()
						.show()
						.end()
						.appendTo('#slideshow')  :
						$('#slideshowReverse > div:first')
						.hide()
						.next()
						.show()
						.end()
						.appendTo('#slideshowReverse');
					timesRun += 1;
					if(timesRun === 36){
						clearInterval(interval);
						$(".ea_value b").html(ea+" gms");
						$(".ta_value b").html(ta+" gms");
						$(".mt_value b").html(mt+" min");
						//$(".mrr_value b").html("(Wb - Wa)/T gm/min");
						//$(".ewr_value b").html("(Eb - Ea)/T gm/min");
					}
				}, 600);
		}
	});

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
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

	$("#slideshow > div:gt(0)").hide();
	$("#slideshowReverse").hide();

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
