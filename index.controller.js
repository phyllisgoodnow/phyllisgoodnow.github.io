(function () {
	// Taken from Joseph Silber's answer on https://stackoverflow.com/questions/7717527
	let $root = $('html, body');

	$('a[href^="#"]').click(function() {
		let href = $.attr(this, 'href');

		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});

		return false;
	});
})();
