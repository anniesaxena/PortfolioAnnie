jQuery(document).ready(function(){
	var $logo = $('#logo');

	if(location.href.indexOf("#")!= -1) {
		$logo.show();
	}

	$('.menu .tabs a').click(function(){
		$logo.fadeIn('slow');
	});

	$('.tab-profile').click(function() {
		$logo.fadeOut('slow');
	});

	$(".pulse-button").click(function(e){
		$(".socialicons").toggleClass("main");
	});

	$('#yellow-color').click(function (e) {
		$(".main-wrapper-resume").attr("id","yellow");
	});
	$('#red-color').click(function (e) {
		$(".main-wrapper-resume").attr("id","red");
	});
	$('#blue-color').click(function (e) {
		$(".main-wrapper-resume").attr("id","blue");
	});
	$('#green-color').click(function (e) {
		$(".main-wrapper-resume").attr("id","green");
	});
	$("#setting-icon").click(function(){
		$(".color-box").toggleClass("main");
	});


	var $content = $("#content");

	$content.easytabs({
		animate: true,
		updateHash: false,
		transitionIn: 'slideDown',
		transitionOut: 'slideUp',
		animationSpeed: 600,
		tabs: ".tmenu",
		tabActivateClass:'active',
	});

	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function() {
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);


	 
	
	var $catsfilter 		= $('.cats-filter');

	
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	

	var $plist	 	= $('#portfolio-list');
	var $pfilter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
			duration			: 750,
			easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
			duration			: 750,
			easing				: 'linear',
			queue				: false,
	   	}
	  });
	  	return false;
	});	 



	// Menu Navigation
	 $(".menu .tabs").carouFredSel({
        responsive          : true,
        direction           : "left",
 	    circular: false,
    	infinite: false,
        pagination  		: "#menu-controls",  
        auto    			: false,
        scroll 			: {
            items           : 1,
            duration        : 300,                        
            wipe    : true
        },
		prev	: {	
			button	: "#menu-prev",
			key		: "right"
		},
		next	: { 
			button	: "#menu-next",
			key		: "left"
		},
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 140,
            visible: {
              min: 2,
              max: 5
            }
        }           
    });

	 
});

