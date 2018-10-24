$(document).ready(function() {

	// Display th elements of the menu	
	// -------------------------------------------------------	-
		$(window).on('scroll', function () {
	    var scrollTop = $(window).scrollTop();
	    if (scrollTop > 200) {
	    	console.log(scrollTop)
	        $("#logo").addClass("is-scroll");
	    }
	    else {
	         $("#logo").removeClass("is-scroll");   
	    }
	});



	// Display th elements of the menu
	// --------------------------------------------------------

	// get the ID of the navigation
	var nav = $("#mainNav");

	// when the menu button is pressed
	nav.find(".js-menu-icon").click(function(){

		// if the button is active,
		//	- remove all the active elements
		if ($(this).hasClass("is-active")) {
			nav.find(".is-active").removeClass("is-active");
		}

		// else
		// - change the icon
		// - display the menu
		else {
			$(this).addClass("is-active");
			nav.children('ul').addClass("is-active");
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