(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	$('.img-expander .img-details a').click(function() {
		if ($('.img-expander .img-details a').attr('href').length == 0
){
			event.preventDefault();
		}
	});
    
    $('.work-image-website').click(function(){
		var lang = document.documentElement.lang;
		
        $('.expander img').attr("src", $(this).attr("src"));
        $('.expander img').attr("alt", $(this).attr("alt"));
        $('.expander h3').text($(this).attr("site-name"));
        $('.expander p').text($(this).attr("site-description"));
		
		if ($(this).attr("site-is-online").toLowerCase() == 'false')
		{
			if (lang == "pt-BR") {
				$('.expander a').text("Site indisponível");
			}
			else {
				$('.expander a').text("Site Not Available");
			}
			
			$('.expander a').attr("href", "");
			$('.expander a').attr("target", "");
		}
		else
		{		
			if (lang == "pt-BR") {
				$('.expander a').text("Acesse o site");		
			}
			else {
				$('.expander a').text("Visit the website");		
			}
			
			$('.expander a').attr("target", "_blank");
			$('.expander a').attr("href", $(this).attr("site-link"));
		}		
		
        $('.expander').fadeIn(400);
        $('.expander-fade').fadeIn();
    });
    
    $('.close-expander').click(function(){
        $('.expander').fadeOut(300);
        $('.expander-fade').fadeOut();
    });
    

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		
	});
	
	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});
	
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");               
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
		}
	});   

})(jQuery);
