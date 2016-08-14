(function (window, document, $, undefined) {

	var navSelf,
		fixedNav = function() {},
		scrollThreshold = 50;

	fixedNav.prototype.init = function () {

		this.isSticky = false;
		this.header = $('header');
		this.mainNav = this.header.find('nav.site-nav');
		this.bodyContainer = $('body');
		this.scrollPositionStart = 0;
		this.defaultLH = parseInt(this.header.css('line-height'));
		
		navSelf = this;

		this.bindEvents();
		this.checkSticky();
	}

	fixedNav.prototype.bindEvents = function () {
		
		this.startScrolling();
	
	}

	fixedNav.prototype.checkSticky = function() {
		var scrollTop = $(document).scrollTop();

	    if (!navSelf.isSticky) {

	        this.currentLH = parseInt(navSelf.header.css('line-height'));
	        this.calculatedLH;

			// console.log(this.defaultLH, 'this.defaultLH');

			// scroll direction is up
			// scroll direction is down

			navSelf.scrollPositionStart // 0
	        if ( navSelf.defaultLH > 88 && ( scrollTop > navSelf.scrollPositionStart )) {

	        	 this.calculatedLH = navSelf.defaultLH - scrollTop;


        		navSelf.header.css('line-height', this.calculatedLH + 'px'); 	
       
	        	if ( this.currentLH < 92 ) {
		        	this.setSticky();
		        }  else {
		        	this.setUnsticky();
		        }

	        } else {
	        	this.calculatedLH = navSelf.defaultLH + scrollTop;

        		navSelf.header.css('line-height', this.calculatedLH + 'px'); 
        		
        		if ( this.currentLH > 92 ) {
		        	this.setUnsticky();
		        } 	
	        }

	        

	    }

	};

	fixedNav.prototype.startScrolling = function () {
		navSelf.bodyContainer.on('scroll', this.onScroll);
		$(window).on('scroll', this.onScroll);
	}	

	fixedNav.prototype.onScroll = function () {
		navSelf.checkSticky();
	}

	fixedNav.prototype.setSticky = function () {
		navSelf.isSticky = true;
		// navSelf.header.css('line-height', 88 + 'px'); 
		navSelf.mainNav.addClass('fixed')

	}

	fixedNav.prototype.setUnsticky = function () {
		navSelf.isSticky = false;
		navSelf.mainNav.removeClass('fixed');
	}

	$(function() {
		
		var nav = new fixedNav();
		nav.init();

		// window.onscroll = function (e) {
		// 	var scrollY = window.pageYOffset;
		// 	var $header = $("header.site-header nav");
		// 	var $nav = $header.find('nav');


		// 	if (scrollY > 90) {
		// 		if(!$nav.hasClass('fixed')) {
		// 			$nav.addClass('fixed');
		// 		}
		// 	}else{
		// 		if($nav.hasClass('fixed')) {
		// 			$nav.removeClass('fixed');
		// 		}
		// 	}
		// };


	});

})(window, document, jQuery);