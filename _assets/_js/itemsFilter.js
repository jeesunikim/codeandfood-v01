(function (window, document, $, undefined) {

	var filtered,
	filteredNav = function () {};

	filteredNav.prototype.init = function () {
		this.posts = $('ul.posts');
		this.eachPost = this.posts.find('li');
		this.MainNav = $('nav');
		this.EachNav = this.MainNav.find('a');

		filtered = this;

		this.bindEvents();

	}

	filteredNav.prototype.bindEvents = function () {
		this.EachNav.on('click', function () {
			console.log('i am being clicked')
		})
	}

	




	$(function() {

		var filter = new filteredNav();
		filter.init();

		filtered.EachNav.on('click', function () {
			console.log('hey')
		})

		console.log(filter.MainNav);
		// $(this).delay(i * 350).queue(function () {
		// 	$(this).addClass('fadein');
		// });
			
		// $(this).attr('data-post-sroll', 'in-view');
		// console.log($(this), "THIS");
		//  setTimeout(function () {
		//  	$(this).css('visibility','visible');
		//  }, 2000);

	});
})(window, document, jQuery);