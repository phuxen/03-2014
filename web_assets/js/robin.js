document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("hgroup");  
document.createElement("nav");

$(document).ready(function($){
	
	$('.iosslider').each(function() {
	    $(this).iosSlider({
	        scrollbar: false,
			snapToChildren: true,
			desktopClickDrag: true,
			responsiveSlideWidth: true,
			navNextSelector: $('.sliderNext'),
			navPrevSelector: $('.sliderPrev'),
			infiniteSlider: false,
			keyboardControls: true
		});	
	});
	
});
