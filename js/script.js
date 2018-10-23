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
		//	- change the icon
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
  	// display the submenu
  	$(this).siblings().toggleClass("is-active");
  	nav.find(".js-menu-back").addClass("is-active");
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