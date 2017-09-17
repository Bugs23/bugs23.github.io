/***************************************************
WOW JS
***************************************************/

new WOW().init();



/***************************************************
NAME SLIDE DOWN
***************************************************/

  	// Declare and initialize variables
	$(function() {  
		$("#nameContainer").hide().slideDown("slow");
	});



/***************************************************
LANDING DIV RESIZE
***************************************************/
	
	$(function() {
		// Get the landing div container
		var $landingDiv = $('div.landing');
		// Set it's height to the height of current the window
	  	$landingDiv.css({ height: $(window).innerHeight() });
	});



/***************************************************
INTRO SCROLL TO
***************************************************/

	$(function() {
		// Get scroll button and capture click
		$("#introScrollButton").click(function(e) {
			// Prevent browser from jumping to the anchor when clicked 
			e.preventDefault();
			$('html, body').animate({ scrollTop: $("#intro-greeting").offset().top - 50}, 1000);
		});
	});



/***************************************************
NAVBAR SCROLL FADE
***************************************************/

/*
	// Get the navbar
	var $navbar = $("nav");

	// When the user scrolls
	$(window).scroll(function() {
		var $scroll = $(window).scrollTop();
		
		if ($scroll > 200) {
			$navbar.fadeTo("slow", 0)
		} else if ($scroll > 200) {
			$navbar.fadeTo("slow", 1.0)
		}
	});	
*/	



/***************************************************
ICON BAR ROTATE
***************************************************/
	
	$(function() {
		// Get nav button
		var $mobileNavButton = $("button.navbar-toggle.collapsed");
		// Capture click event
		$mobileNavButton.click(function() {
			// Toggle css rotation
			$(this).toggleClass("rotate-90-degrees");
		});
	});



















// When a button is clicked get the category of that button
$('.portfolio-category-btn').click(function() {
    $('.portfolio-category-btn').removeClass('category-btn-active');
    // Show category is active
    $(this).addClass('category-btn-active');
    // The category to filter is the value of the data attribute of this button
    var categoryToFilter = $(this).attr('data-category-btn');

    filterItems(categoryToFilter);
});

// Filter portfolio
function filterItems(category) {
    // Hide all items
    $(".portfolio-category-item").addClass('animated zoomOut').hide()

    // If the all button is clicked show all the items
    if (category == 'all') {
        $(".portfolio-category-item")
            .removeClass('animated zoomOut')
            .addClass('animated zoomIn all-categories')
            .show();
    } else {
        // If another category button is clicked show all items with data value matching that category
        $(".portfolio-category-item[data-portfolio-category='" + category + "']")
            .removeClass('animated zoomOut')
            .addClass('animated zoomIn')
            .show();
        // Hide items with data value not matching that category
        $(".portfolio-category-item").not("[data-portfolio-category='" + category + "']")
            .removeClass('animated zoomIn')
            .addClass('animated zoomOut')
            .hide();
    };
};