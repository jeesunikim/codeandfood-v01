(function (window, document, $, undefined) {

	var navSelf,
		fixedNav = function() {},
		scrollThreshold = 50;

	fixedNav.prototype.init = function () {

		this.isSticky = false;
		this.mainNav = $('header');
		this.bodyContainer = $('body');
		this.scrollPositionStart = 0;
		this.defaultLH = parseInt(this.mainNav.css('line-height'));
		
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

	        this.currentLH = parseInt(navSelf.mainNav.css('line-height'));
	        this.calculatedLH;

			// console.log(this.defaultLH, 'this.defaultLH');

			// scroll direction is up
			// scroll direction is down

			navSelf.scrollPositionStart // 0
	        if ( navSelf.defaultLH > 88 && ( scrollTop > navSelf.scrollPositionStart )) {

	        	 this.calculatedLH = navSelf.defaultLH - scrollTop;


        		navSelf.mainNav.css('line-height', this.calculatedLH + 'px'); 	

	        	console.log(navSelf.defaultLH, 'navSelf.defaultLH', this.currentLH, 'this.currentLH')       
	        	if ( this.currentLH < 92 ) {
		        	console.log("HEYY")
		        	navSelf.mainNav.css('line-height', 88 + 'px'); 
		        } 

	        } else {
	        	this.calculatedLH = navSelf.defaultLH + scrollTop;

        		navSelf.mainNav.css('line-height', this.calculatedLH + 'px'); 	
	        }

	        

	    }

	    // console.log(scrollTop, 'scrollTop', this.defaultLH, 'defaultLH');

	    // subtract the number of scroll value 

	    // var isMobile = (this.breakpoints.current === 'sm') ? true : false;
	    // var mainNavFixed = $(this.mainNav).hasClass('is-fixed');

	    // var isNavFixed = mainNavFixed && isMobile;
	    // var navAdjustment = isNavFixed ? this.mainNavHeight : 0;
	    // var threshold = mainNavFixed && isMobile ? this.originalY - this.mainNavHeight : this.originalY;

	    // // check if we need to set sticky
	    // if (scrollTop >= threshold && !this.isSticky) {
	    //     this.setSticky();
	    // } else if (scrollTop < (this.originalY - navAdjustment) && this.isSticky) {
	    //     this.setUnsticky();
	    // }
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

	}

	fixedNav.prototype.setUnsticky = function () {
		navSelf.isSticky = false;
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