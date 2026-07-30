(function ($) {

    "use strict";
	
	// Initialize loader
	initializeLoader();
	
	// Initialize all features
	initializeAnimations();
	initializeScrollEffects();
	//initializeParallax();

	// LINE PROGRESS BAR
	enableLineProgress();
	
	// RADIAL PROGRESS BAR
	enableRadialProgress();
	
	// ACCORDIAN
	panelAccordian();

	$(window).on('load', function(){
		
		// ISOTOPE PORTFOLIO WITH FILTER
		if(isExists('.portfolioContainer')){
			var $container = $('.portfolioContainer');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		 
			$('.portfolioFilter a').click(function(){
				$('.portfolioFilter .current').removeClass('current');
				$(this).addClass('current');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			}); 
		}
	
	});
	
	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}
	
	var countCounterUp = 0;
	
	var a = 0 ;
	
	countCounterUp = enableCounterUp(countCounterUp);
	
	$(window).on('scroll', function(){
		
		countCounterUp = enableCounterUp(countCounterUp);
	
	});
	
	
})(jQuery);

function panelAccordian(){
	
	var panelTitle = $('.panel-title');
	panelTitle.on('click', function(){
		$('.panel-title').removeClass('active');
		$(this).toggleClass('active');
		
	});
	
}

function enableRadialProgress(){
	
	$(".radial-progress").each(function(){
		var $this = $(this),
			progPercent = $this.data('prog-percent');
			
		var bar = new ProgressBar.Circle(this, {
			color: '#666',
			strokeWidth: 3,
			trailWidth: 1,
			trailColor: '#999',
			easing: 'easeInOut',
			duration: 1400,
			text: {
				
			},
			from: { color: '#999', width: 1 },
			to: { color: '#C81CDE', width: 3 },
			// Set default step function for all animate calls
			step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});
		
		$(this).waypoint(function(){
		   bar.animate(progPercent);  
		},{offset: "90%"})
		
	});
}

function enableLineProgress(){
	
	$(".line-progress").each(function(){
		var $this = $(this),
			progPercent = $this.data('prog-percent');
			
		var bar = new ProgressBar.Line(this, {
			strokeWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			color: '#C81CDE',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				style: {
					
				},
			},
			from: {color: '#C81CDE'},
			to: {color: '#A91BC4'},
			step: (state, bar) => {
				bar.setText(Math.round(bar.value() * 100) + ' %');
			}
		});
		
		$(this).waypoint(function(){
		   bar.animate(progPercent);  
		},{offset: "90%"})
		
	});
}

function enableCounterUp(a){
	
	var counterElement;
	
	if(isExists('#counter')){ counterElement = $('#counter'); }
	else{ return; }
		
	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function() {
			var $this = $(this),
				countDuration = $this.data('duration'),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},{

				duration: countDuration,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}

			});
		});
		a = 1;
	}

	return a;
}

function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}

// New animation and effect functions
function initializeAnimations() {
	// Add loading screen
	$('body').prepend('<div class="loading"><div class="spinner"></div></div>');
	
	// Hide loading screen after page load
	$(window).on('load', function() {
		setTimeout(function() {
			$('.loading').addClass('hidden');
			setTimeout(function() {
				$('.loading').remove();
			}, 500);
		}, 1000);
	});
	
	// Add fade-in animations to sections
	$('.section').each(function(index) {
		$(this).addClass('fade-in-up');
		$(this).css('animation-delay', (index * 0.2) + 's');
	});
}

function initializeScrollEffects() {
	// Smooth scroll for anchor links
	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var target = $(this.getAttribute('href'));
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top - 80
			}, 1000);
		}
	});
	
	// Add scroll-triggered animations
	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		
		// Parallax effect removed
		
		// Animate elements on scroll
		$('.section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = elementTop + $(this).outerHeight();
			
			if (scrollTop + windowHeight > elementTop && scrollTop < elementBottom) {
				$(this).addClass('animate-in');
			}
		});
		
		// Navbar background on scroll
		if (scrollTop > 100) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	});
}

// Parallax function removed completely

// Enhanced typing effect with more options
var typingGeneration = 0;

function enhancedTypingEffect(options) {
	options = options || {};
	var introTexts = [
		options.hello || "Hola, soy:",
		options.name || "Alexander Narváez"
	];
	var typingTexts = options.roles || [
		"Software Developer",
		"Web Developer",
		"Full Stack Developer",
		"UI/UX Designer",
		"Mobile App Developer"
	];
	
	var introElements = [
		document.querySelector(".intro-text-1"),
		document.querySelector(".intro-text-2")
	];
	var typingElement = document.querySelector(".typing-effect");
	
	if (!introElements[0] || !introElements[1] || !typingElement) return;

	var generation = ++typingGeneration;
	
	introElements[0].textContent = "";
	introElements[1].textContent = "";
	typingElement.textContent = "";
	introElements[0].classList.remove("typed", "typing-effect");
	introElements[1].classList.remove("typed", "typing-effect");
	typingElement.classList.remove("typed");
	
	var introIndex = 0;
	var introCharIndex = 0;
	var typingIndex = 0;
	var typingCharIndex = 0;
	var isDeleting = false;

	function typeIntro() {
		if (generation !== typingGeneration) return;

		var currentText = introTexts[introIndex];
		var currentElement = introElements[introIndex];
		
		if (introCharIndex < currentText.length) {
			currentElement.textContent += currentText.charAt(introCharIndex);
			currentElement.classList.add("typing-effect");
			introCharIndex++;
			setTimeout(typeIntro, 150);
		} else {
			currentElement.classList.remove("typing-effect");
			currentElement.classList.add("typed");
			introIndex++;
			if (introIndex < introTexts.length) {
				introCharIndex = 0;
				setTimeout(typeIntro, 500);
			} else {
				setTimeout(type, 800);
			}
		}
	}

	function type() {
		if (generation !== typingGeneration) return;

		var currentText = typingTexts[typingIndex];
		typingElement.style.minHeight = typingElement.offsetHeight + "px";
		
		if (isDeleting) {
			typingElement.textContent = currentText.substring(0, typingCharIndex - 1);
			typingCharIndex--;
			if (typingCharIndex === 0) {
				isDeleting = false;
				typingIndex = (typingIndex + 1) % typingTexts.length;
			}
		} else {
			typingElement.textContent = currentText.substring(0, typingCharIndex + 1);
			typingCharIndex++;
			if (typingCharIndex === currentText.length) {
				isDeleting = true;
				setTimeout(function () {
					if (generation !== typingGeneration) return;
					typingElement.classList.remove("typed");
				}, 2000);
			}
		}
		setTimeout(type, isDeleting ? 100 : 150);
	}

	setTimeout(typeIntro, options.immediate ? 0 : 1000);
}

window.restartTypingEffect = function (options) {
	options = options || {};
	options.immediate = true;
	enhancedTypingEffect(options);
};

// Typing starts from i18n after language is applied
document.addEventListener("DOMContentLoaded", function() {
	if (!window.I18n) {
		enhancedTypingEffect();
	}
});

// Add hover effects to portfolio items
function initializePortfolioEffects() {
	$('.p-item a').hover(
		function() {
			$(this).find('img').css('transform', 'scale(1.1)');
		},
		function() {
			$(this).find('img').css('transform', 'scale(1)');
		}
	);
}

// Initialize portfolio effects when document is ready
$(document).ready(function() {
	initializePortfolioEffects();
});

// Add particle effect to hero section
function createParticles() {
	const heroSection = $('.intro-section');
	const particleCount = 50;
	
	for (let i = 0; i < particleCount; i++) {
		const particle = $('<div class="particle"></div>');
		particle.css({
			position: 'absolute',
			width: Math.random() * 4 + 1 + 'px',
			height: Math.random() * 4 + 1 + 'px',
			background: 'rgba(255, 255, 255, 0.5)',
			borderRadius: '50%',
			left: Math.random() * 100 + '%',
			top: Math.random() * 100 + '%',
			animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
			animationDelay: Math.random() * 2 + 's'
		});
		heroSection.append(particle);
	}
}

// Initialize particles
$(document).ready(function() {
	createParticles();
});

// Dark Mode Toggle Functionality
function initializeDarkMode() {
	const darkModeToggle = document.getElementById('darkModeToggle');
	const body = document.body;
	
	// Check for saved theme preference or default to light mode
	const currentTheme = localStorage.getItem('theme') || 'light';
	
	// Apply the saved theme
	if (currentTheme === 'dark') {
		body.classList.add('dark-mode');
		darkModeToggle.innerHTML = '<i class="ion-ios-moon"></i>';
	}
	
	// Toggle dark mode
	darkModeToggle.addEventListener('click', function() {
		body.classList.toggle('dark-mode');
		
		// Save theme preference
		if (body.classList.contains('dark-mode')) {
			localStorage.setItem('theme', 'dark');
			darkModeToggle.innerHTML = '<i class="ion-ios-moon"></i>';
		} else {
			localStorage.setItem('theme', 'light');
			darkModeToggle.innerHTML = '<i class="ion-ios-sunny"></i>';
		}
	});
}

// Initialize dark mode when document is ready
$(document).ready(function() {
	initializeDarkMode();
});

// Shared scroll-spy helpers (fixes last section / contact active state)
function getCurrentSectionId() {
	const sections = document.querySelectorAll('section[id]');
	if (!sections.length) return '';

	const scrollPosition = window.scrollY + 120;
	const docHeight = document.documentElement.scrollHeight;
	const nearBottom = window.innerHeight + window.scrollY >= docHeight - 150;

	// Contact is short; near page bottom always highlight the last section
	if (nearBottom) {
		return sections[sections.length - 1].getAttribute('id');
	}

	let current = sections[0].getAttribute('id');
	sections.forEach(function (section) {
		if (scrollPosition >= section.offsetTop) {
			current = section.getAttribute('id');
		}
	});

	return current;
}

function setActiveNavBySection(sectionId) {
	document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
		link.classList.remove('active');
		if (link.getAttribute('data-section') === sectionId) {
			link.classList.add('active');
		}
	});
}

function updateActiveNavLinks() {
	setActiveNavBySection(getCurrentSectionId());
}

// Floating Navigation Functionality
function initializeFloatingNav() {
	const navLinks = document.querySelectorAll('.nav-link');
	
	// Smooth scroll for navigation links
	navLinks.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetSection = document.getElementById(targetId);
			
			if (targetSection) {
				setActiveNavBySection(targetId);
				const offsetTop = targetSection.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
	
	window.addEventListener('scroll', updateActiveNavLinks);
	updateActiveNavLinks();
}

// Initialize floating navigation when document is ready
$(document).ready(function() {
	initializeFloatingNav();
	initializeMobileMenu();
});

// Loader functionality
function initializeLoader() {
	const loader = document.getElementById('loader');
	const spinnerIcons = document.querySelectorAll('.spinner-icon');
	
	if (!loader) return;
	
	let currentIcon = 0;
	const totalIcons = spinnerIcons.length;
	let isPageLoaded = false;
	let animationInterval;
	
	// Function to show next icon
	function showNextIcon() {
		// Remove active class from all icons
		spinnerIcons.forEach(icon => {
			icon.classList.remove('active');
		});
		
		// Add active class to current icon
		if (spinnerIcons[currentIcon]) {
			spinnerIcons[currentIcon].classList.add('active');
		}
		
		// Move to next icon
		currentIcon++;
		
		// If we've shown all icons, restart the sequence
		if (currentIcon >= totalIcons) {
			currentIcon = 0;
		}
		
		// Check if page is loaded
		if (isPageLoaded) {
			// Hide loader after showing all icons one more time
			if (currentIcon === 0) {
				setTimeout(() => {
					loader.classList.add('hidden');
					// Remove loader from DOM after animation
					setTimeout(() => {
						loader.remove();
					}, 500);
				}, 800);
				return;
			}
		}
		
		// Continue animation
		animationInterval = setTimeout(showNextIcon, 800);
	}
	
	// Check if page is fully loaded
	function checkPageLoaded() {
		if (document.readyState === 'complete') {
			isPageLoaded = true;
		} else {
			// Check again after a short delay
			setTimeout(checkPageLoaded, 100);
		}
	}
	
	// Start checking page load status
	checkPageLoaded();
	
	// Start the animation
	setTimeout(showNextIcon, 500);
	
	// Also listen for window load event as backup
	window.addEventListener('load', function() {
		isPageLoaded = true;
	});
}

// Mobile Menu functionality
function initializeMobileMenu() {
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');
	const mobileNavOverlay = document.getElementById('mobileNavOverlay');
	const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
	
	if (!mobileMenuBtn || !mobileNavOverlay) return;
	
	// Toggle mobile menu
	mobileMenuBtn.addEventListener('click', function(e) {
		e.preventDefault();
		mobileMenuBtn.classList.toggle('active');
		mobileNavOverlay.classList.toggle('active');
		document.body.classList.toggle('menu-open');
		
		// Update active state when opening menu
		if (mobileNavOverlay.classList.contains('active')) {
			updateMobileMenuActiveState();
		}
	});
	
	// Close menu when clicking on overlay
	mobileNavOverlay.addEventListener('click', function(e) {
		if (e.target === mobileNavOverlay) {
			closeMobileMenu();
		}
	});
	
	// Close menu when clicking on nav links
	mobileNavLinks.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			
			const targetId = this.getAttribute('href').substring(1);
			const targetSection = document.getElementById(targetId);
			
			if (targetSection) {
				setActiveNavBySection(targetId);
				const offsetTop = targetSection.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
			
			closeMobileMenu();
		});
	});
	
	// Close menu function
	function closeMobileMenu() {
		mobileMenuBtn.classList.remove('active');
		mobileNavOverlay.classList.remove('active');
		document.body.classList.remove('menu-open');
	}
	
	// Close menu on escape key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
			closeMobileMenu();
		}
	});
	
	function updateMobileMenuActiveState() {
		updateActiveNavLinks();
	}
}

