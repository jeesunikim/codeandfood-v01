(function (window, document, $, undefined) {

$(function() {
	window.onbeforeunload = function(){
		window.scrollTo(0,0);
	};
	window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
	});
})


})(window, document, jQuery);