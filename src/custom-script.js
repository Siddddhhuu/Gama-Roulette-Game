(function($) {
	
	"use strict";
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Search Toggle
	if ($('#scroll-nav').length) {
		$(window).on("load",function(){
			$("#scroll-nav li a,#scroll-nav-2 li a").mPageScroll2id({
				highlightSelector:"#scroll-nav li a"
			});
		});
	}

	// Custom Scroll Linsk / Sidebar

	if($('.hidden-bar .custom-links li a').length){
		$(".hidden-bar .custom-links li a").on('click', function(e) {
			e.preventDefault();
		   $('.hidden-bar,body').removeClass('visible-sidebar');

		});
	}
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('li.dropdown > a').append(function () {
			return '<button type="button" class="btn-expander"><i class="icon sl-icon-arrow-down"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();

		$(".hidden-bar .side-menu ul li.dropdown .btn-expander").on('click', function(e) {
			e.preventDefault();
			$(this).parent('').parent('li').children('ul').slideToggle();
			// toggling arrow of expander
			$(this).find('i').toggleClass('sl-icon-arrow-up sl-icon-arrow-down');
			return false;
		});
	}

	hiddenBarMenuConfig();


	//Custom Scroll for Hidden Sidebar
	if ($('.hidden-bar-wrapper').length) {
		
		$('.hidden-bar-closer,.menu-backdrop').on('click', function () {
			$('.hidden-bar,body').removeClass('visible-sidebar');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('.hidden-bar,body').removeClass('visible-sidebar');
	        }
	    });
		$('.hidden-bar-opener').on('click', function () {
			$('.hidden-bar,body').addClass('visible-sidebar');
		});
	}

	
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is Resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});
	
	

})(window.jQuery);
















