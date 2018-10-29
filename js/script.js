$(document).ready(function() {

	// Custom Options
	// -------------------------------------------------------

  // The list of focus and the list of parts should be in the 
  // same order for the process to work.
  // It all works with the index of element in the DOM

	var object = $("#custom");

  // When a icon element is clicked
  object.find('.js-custom-image').on('click','i', function(){
		// Disable scroll on the background
		$("body").addClass("modal-open");

	  // Remove the 'is-active' class from all siblings elements'
	  object.find('.is-active').removeClass('is-active');

  	// Display the popup
		object.find('.js-custom').addClass('is-open');

	  // Add class 'is-active' to the element
	  $(this).addClass('is-active');

	  // Get the index of the element clicked
	  var n = $(this).index('.js-focus');

	  // Add class to the corresponding element of the part section
		object.find('.js-part').eq(n).addClass("is-active");
	});



	// Close the popup window
	// -------------------------------------------------------
  object.find('.js-custom-close').click(function(){
  	// Close the popup
		object.find('.js-custom').removeClass('is-open');
		// Enable scroll on the background
		$("body").removeClass("modal-open");
  });



	// Change the size of the logo when the window is scrolled
	// -------------------------------------------------------
		$(window).on('scroll', function () {
	    var scrollTop = $(window).scrollTop();
	    if (scrollTop > 200) {
	        $("#logo").addClass("is-scroll");
	    }
	    else {
	         $("#logo").removeClass("is-scroll");   
	    }
	});



	// Display the elements of the menu
	// --------------------------------------------------------

	// get the ID of the navigation
	var nav = $("#mainNav");

	// when the menu button is pressed
	nav.find(".js-menu-icon").click(function(){

		// if the button is active,
		//	- remove all the active elements
		if ($(this).hasClass("is-active")) {
			nav.find(".is-active").removeClass("is-active");
			// Enable scroll on the background
			$("body").removeClass("modal-open");
		}

		// else
		// - change the icon
		// - display the menu
		else {
			$(this).addClass("is-active");
			nav.children('ul').addClass("is-active");
			// Disable scroll on the background
			$("body").addClass("modal-open");
		}
	});

	// when a link is clicked
	nav.children('ul').find('a').click(function(){

		// if link is not active
		if (!$(this).siblings().hasClass("is-active")) {

			// hide all other submenu
  		nav.children("ul").find(".is-active").removeClass("is-active");

  		// display the submenu
  		$(this).siblings().addClass("is-active");

  		// display the back button
  		nav.find(".js-menu-back").addClass("is-active");
		}

		else { // link is active
			// hide all active elements	
  		nav.find(".is-active").removeClass("is-active")
		}

  });

	// when the back button is pressed
	nav.find(".js-menu-back").click(function(){
  	nav.children("ul").find(".is-active").removeClass("is-active");
  	nav.find(".js-menu-back").removeClass("is-active");
  });



	// Hide menu when clicked outside of it
	// --------------------------------------------------------
	$(document).mouseup(function(e) 
	{
		var container = $("#mainNav");

		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			container.find(".is-active").removeClass("is-active");
		}
	});
});  

var fixed = document.getElementById('mainNav');
fixed.addEventListener('touchmove', function(e) {
        e.preventDefault();
}, false);