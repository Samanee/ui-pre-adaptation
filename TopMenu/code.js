var nr = 1;

var timer1=0;
var timer2=0;

function set(mark){
	clearTimeout(timer1);
	clearTimeout(timer2);
	nr = mark-1;
	
	hide();
	setTimeout("slide()",1000);
}

function hide(){
$("#slider").fadeOut(1000);
}

function slide(){
	nr++; if(nr>4) nr=1;
	var file = "<img src=\"pic"+nr+".jpg\"/>";
	document.getElementById("slider").innerHTML=file;
	$("#slider").fadeIn(1000);
	
	timer1 = setTimeout("slide()",5000);
	timer2 = setTimeout("hide()",4000);
}

window.onload = slide;

/* ----------    Sticky   -------------------*/

$(document).ready(function(){
var NavY = $('.nav').offset().top;

var stickyNav = function(){
var ScrollY = $(window).scrollTop();

if (ScrollY > NavY){
	$('.nav').addClass('sticky');
} else {
	$('.nav').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function(){
	stickyNav();
	});
	});
	
