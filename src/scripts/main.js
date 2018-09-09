// Main
$(document).ready(function () {
	// Phần Slider
	$('.home_banner .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoplay:true,
		loop:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	// Phần Clients
	$('.logonho .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		dots: false,
		autoplay: true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
});
