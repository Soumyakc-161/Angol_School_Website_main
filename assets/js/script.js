'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.20) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

//gallery //


/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	$(document).ready(function() {
		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')   
   });  

	
	//Switch dark/light
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	}); 	
	
	
  })(jQuery); 
/**
 * Rating
 */

/**Slider Section Start*/



/**Slider Section End */

/**Events start */

/**sanu */


// Swiper

var swiper = new Swiper(".swiper", {
	effect: "cube",
	grabCursor: true,
	loop: true,
	speed: 1000,
	cubeEffect: {
	  shadow: false,
	  slideShadows: true,
	  shadowOffset: 10,
	  shadowScale: 0.94,
	},
	autoplay: {
	  delay: 2600,
	  pauseOnMouseEnter: true,
	},
  });
  
  // tsParticles
  
  tsParticles.load("tsparticles", {
	fpsLimit: 60,
	backgroundMode: {
	  enable: true,
	  zIndex: -1,
	},
	particles: {
	  number: {
		value: 30,
		density: {
		  enable: true,
		  area: 800,
		},
	  },
	  color: {
		value: [
		  "#3998D0",
		  "#2EB6AF",
		  "#A9BD33",
		  "#FEC73B",
		  "#F89930",
		  "#F45623",
		  "#D62E32",
		],
	  },
	  destroy: {
		mode: "split",
		split: {
		  count: 1,
		  factor: {
			value: 5,
			random: {
			  enable: true,
			  minimumValue: 4,
			},
		  },
		  rate: {
			value: 10,
			random: {
			  enable: true,
			  minimumValue: 5,
			},
		  },
		  particles: {
			collisions: {
			  enable: false,
			},
			destroy: {
			  mode: "none",
			},
			life: {
			  count: 1,
			  duration: {
				value: 1,
			  },
			},
		  },
		},
	  },
	  shape: {
		type: "circle",
		stroke: {
		  width: 0,
		  color: "#000000",
		},
		polygon: {
		  sides: 5,
		},
	  },
	  opacity: {
		value: 1,
		random: false,
		animation: {
		  enable: false,
		  speed: 1,
		  minimumValue: 0.1,
		  sync: false,
		},
	  },
	  size: {
		value: 8,
		random: {
		  enable: true,
		  minimumValue: 4,
		},
		animation: {
		  enable: false,
		  speed: 40,
		  minimumValue: 0.1,
		  sync: false,
		},
	  },
	  collisions: {
		enable: true,
		mode: "destroy",
	  },
	  move: {
		enable: true,
		speed: 7,
		direction: "none",
		random: false,
		straight: false,
		out_mode: "out",
		attract: {
		  enable: false,
		  rotateX: 600,
		  rotateY: 1200,
		},
	  },
	},
	detectRetina: true,
  });
/*new hreo*/
  