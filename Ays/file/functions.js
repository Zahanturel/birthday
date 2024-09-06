

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // Use Date() constructor correctly
    var seconds = (current - new Date(date)) / 1000; // Compute elapsed seconds
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);

    // Format values with leading zeros if needed
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    // Construct the result string for elapsed time
    var result = "<span class=\"digit\">" + days + "</span> DAYS <span class=\"digit\">" + hours + "</span> HOURS <span class=\"digit\">" + minutes + "</span> MINUTES";

    // Update HTML elements
    $("#message-box").html("THE WORLD GOT LUCKIER SINCE"); // This line shows the static message
    $("#clock").html(result); // This line shows the time elapsed
}

