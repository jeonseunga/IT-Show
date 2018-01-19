/**
 * 
 */
/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

/************시계****************/

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

/*********************************/

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {
	/*$('.main_nav').addClass('sticky');*/
	/*if ($(window).scrollTop() > 670) {
        $('.sticky').addClass('colorchange');
    } else {
    	$('.sticky').removeClass('colorchange');
    }*/
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {
	 $('.main_nav').addClass('colorchange');

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

/*slide-bar*/
$('.side-bar').click(function(){
   $(this).toggleClass('slide-bar');
});

$('.btn-toggle-side-bar').click(function() {
    $(this).toggleClass('cs-active');
});


var topBarHasClassTop = false;

$(window).scroll(function() {
   var scrollTop = $(window).scrollTop();
   
   if ( scrollTop < 300 && topBarHasClassTop == false ) {
      topBarHasClassTop = true;
      $('#top-bar').addClass('top');
   }
   else if ( scrollTop >= 300 && topBarHasClassTop == true ) {
      topBarHasClassTop = false;
      $('#top-bar').removeClass('top');
   }
});