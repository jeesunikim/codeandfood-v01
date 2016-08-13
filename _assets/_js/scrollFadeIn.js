var posts = $('ul.posts'),
	eachPost = posts.find('li');
	
$(document).ready(function () {
	eachPost.each(function(i) {
		// console.log(i * 400, "I");
		$(this).delay(i * 350).queue(function () {
			$(this).addClass('fadein');
		});
			
		// $(this).attr('data-post-sroll', 'in-view');
		// console.log($(this), "THIS");
		//  setTimeout(function () {
		//  	$(this).css('visibility','visible');
		//  }, 2000);
   });
});