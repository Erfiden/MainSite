(function() {

//On your marks, Get set....
$(document).ready(function()){

	//Cache the window object
	$window = $(window);

	//Cache the Y offset and the speed of each slide
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
		$(this).data('offsetX', parseInt($(this).attr('data-offsetX')));
		$(this).data('Yposition', $(this).attr('data-Yposition'));
	});

	//For Each Element that has a data-type attribute called above...
	$('section[data-type="background"]').each(function(){


		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		// When the window is scrolled...
	    $(window).scroll(function() {

			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 

				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}

				//If this element has a X offset then add it on
				if ($self.data('offsetX')) {
					xPos += $self.data('offsetX');
				}

				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });


			}; // in view

		}); // window scroll

	});	// each data-type
}

var navigationSensor = function() {

	var slideHomeOffset = $('#slideHome').offset().top - $('#slideHome').outerHeight()*0.5;
	var slideGalleryOffset = $('#slideGallery').offset().top - $('#slideGallery').outerHeight()*0.5;
	var slideAboutOffset = $('#slideAbout').offset().top - $('#slideAbout').outerHeight()*0.5;
	var slideContactOffset = $('#slideContact').offset().top - $('#slideContact').outerHeight()*0.5;
	var viewScrollTop = $view.scrollTop();

	if (viewScrollTop > $('#headErf').offset().top) {
		$('#headErf').addClass('fixed');
	}
	else if (viewScrollTop < $('#slideHome').offset().top) {
		$('#headErf').removeClass('fixed');
	}

	if (viewScrollTop <= slideHomeOffset) {
		$('#headErf a').removeClass('active');
		$('#link-slideHome').addClass('active');
	}
	else if (viewScrollTop <= slideGalleryOffset) {
		$('#headErf a').removeClass('active');
		$('#link-slideGallery').addClass('active');
	}
	else if (viewScrollTop <= slideAboutOffset) {
		$('#headErf a').removeClass('active');
		$('#link-slideAbout').addClass('active');
	}
	else if (viewScrollTop <= slideContactOffset) {
		$('#headErf a').removeClass('active');
		$('#link-slideContact').addClass('active');
	}
}
}