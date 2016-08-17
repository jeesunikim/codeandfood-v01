(function (window, document, $, undefined) {

	var navSelf,
		fixedNav = function() {},
		scrollThreshold = 50;

	fixedNav.prototype.init = function () {

		this.isSticky = false;
		this.header = $('header');
		this.mainNav = this.header.find('.site-nav nav.nav-list');
		this.bodyContainer = $('body');
		this.scrollPositionStart = 0;
		this.defaultLH = parseInt(this.header.css('line-height'));
		this.mobile = $('.inner');

		navSelf = this;

		this.bindEvents();
		this.checkSticky();
	}

	fixedNav.prototype.bindEvents = function () {	
		this.startScrolling();
	}

	fixedNav.prototype.checkSticky = function() {
		
		var scrollTop = $(document).scrollTop();

        this.currentLH = parseInt(navSelf.header.css('line-height'));
        this.calculatedLH;

		navSelf.scrollPositionStart;

        if ( navSelf.defaultLH > 88 && ( scrollTop > navSelf.scrollPositionStart )) {
        	
	        	this.calculatedLH = navSelf.defaultLH - scrollTop;	
	        	if( this.calculatedLH > 88 ) {
       			navSelf.header.css('line-height', this.calculatedLH + 'px');
       			}

        	if ( scrollTop >= 88 && !this.isSticky ) {
	        	
	        	this.setSticky();
	        
	        } else if ( scrollTop < 88 && this.isSticky) {
	        
	        	this.setUnsticky();
	        
	        }
	        
        } else {
        	this.setUnsticky();
			navSelf.header.css('line-height', navSelf.defaultLH + 'px');
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
		this.isSticky = true;
		navSelf.header.css('line-height', 88 + 'px'); 
		navSelf.header.addClass('fixed')

	}

	fixedNav.prototype.setUnsticky = function () {
		this.isSticky = false;
		navSelf.header.removeClass('fixed');
	}

	$(function() {
		
		var nav = new fixedNav();
		nav.init();

		navSelf.mobile.on('click', function () {
			// $this = $(this);
			if ($('body').hasClass('hovered')) { 
				$('body').removeClass('hovered');
			} else {
				$('body').addClass('hovered');
			}
		})

	});

})(window, document, jQuery);