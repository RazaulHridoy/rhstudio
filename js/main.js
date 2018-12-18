/*

Template:  NS - Creative Stdio
Author: bm.rafiq2
Version: 1
Design and Developed by: BM Rafiq 
NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. wow js active
	03. scrollUp jquery active 

 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";



    /*-------------------------------------------
    	01. Responsive menu
    --------------------------------------------- */

    $(".navbar-toggle").on('click', function() {
        $("body").addClass("mobil-menu-activted");
    });
    $("ul#ns-res-nav li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });

    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
    	03. scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });


    /*----------------------------
        owl carousel
    ------------------------------ */  
  $(".testimonial-wrap").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:true,
      navigation:false,    
      items : 1,
      transitionStyle: "goDown",     /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
  });


    /*----------------------------
          tooltip
    ------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /*----------------------------
      masonry active
    ------------------------------*/

  
/*--------------------------
  jQuery smooth scroll
---------------------------- */ 
  $('.exp-more').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '74';
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
  });


    /*--------------------------
  jQuery smooth scroll
---------------------------- */ 
  $('li.smoot-menu a').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '75';
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
  });

/*--------------------------
  jQuery scroll Nav
---------------------------- */
var top_offset = $('.header-area').height() - 0;  // get height of fixed navbar
$('.primary-menu').onePageNav({
    scrollOffset: 75
}); 
  
/*--------------------------
  jQuery sticky
---------------------------- */
  $(".header-area").sticky({
    topSpacing: 0
  });


var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".slider-area").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = width * pageX * -1 - 30;
      var newvalueY = height * pageY * -1 - 5;
      $('.slider-area').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });




})(jQuery);


