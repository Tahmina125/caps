//  SIDEBAR ACCORDION MENU
	$("#leftside-navigation .sub-menu > a").click(function(e) {
		$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
		e.stopPropagation()
	});


// OWL-CAROUSEL FOR SHOWCASE
jQuery("#carousel").owlCarousel({
  loop: true,
  autoHeight: true,
  smartSpeed: 800,
  nav: true,
	dots: false,
  items: 1
});
	

// Owl Caoursel for client says

jQuery("#comments").owlCarousel({
  loop: true,
  autoHeight: true,
  smartSpeed: 800,
  nav: false,
	dots: true,
	items:1
});


// Owl Caoursel for kapZguru

jQuery("#kapzguru").owlCarousel({
  loop: true,
  smartSpeed: 800,
  nav: true,
	dots: false,
  margin:20,
  stagePadding: 50,
  items: 1
});
	
// TOGGLE MENU
var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

function menutoggle(){
  if(menuItems.style.maxHeight == "0px")
      {
        menuItems.style.maxHeight = "200px";
      }
      else{
        menuItems.style.maxHeight = "0px"
      }
};

