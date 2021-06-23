/****************** Array.sort() ********************/
function sortAsc(key) {
	return function(a, b) {
		return key ? a[key] - b[key] : a - b
	}
}

function sortDesc(key) {
	return function(a, b) {
		return key ? b[key] - a[key] : b - a
	}
}



/*************** getSwiper *****************/
function getSwiper(el, opt) {
	/*
	- cls : '.promo-wrapper
	- opt 
	{
		pager: true,
		navi: true,
		auto: true,
		autoEl: '.slide-stage'
		delay: 3000,
		loop: true,
		space: 40,
		break: 1
	}
	*/
	var opt = opt || {}
	var autoEl = el + ' ' + (opt.autoEl || '.slide-stage')
	var pagination = (opt.pager === false) ? false : {
		el: el + ' .pager-wrapper',
		clickable: true
	}

	var navigation = (opt.navi === false) ? false : {
		nextEl: el + ' .bt-slide.right',
		prevEl: el + ' .bt-slide.left',
	}

	var autoplay = (opt.auto === false) ? false : {
		// delay: opt.delay ? opt.delay : 3000
		delay: opt.delay || 3000
	}

	var breakpoints = {};
	if(opt.break == 2) {
		breakpoints = {
			768: { slidesPerView: 2}
		}
	}
	else if(opt.break == 3) {
		breakpoints = {
			768: { slidesPerView: 2},
			1200: { slidesPerView: 3}
		}
	}
	else if(opt.break == 4) {
		breakpoints = {
			576: { slidesPerView: 2},
			992: { slidesPerView: 3},
			1200: { slidesPerView: 4}
		}
	}
	else if(opt.break == 5) {
		breakpoints = {
			576: { slidesPerView: 2},
			768: { slidesPerView: 3},
			992: { slidesPerView: 4},
			1200: { slidesPerView: 5}
		}
	}

	var swiper = new Swiper(el + ' .swiper-container', {
		pagination: pagination,
		navigation: navigation,
		autoplay: autoplay,
		loop: opt.loop === false ? false : true,
		slidesPerView: 1,
		spaceBetween: opt.space || 40,
		breakpoints: breakpoints
	})

	$(autoEl).hover(function(){
		swiper.autoplay.stop()
	}, function(){
		swiper.autoplay.start()
	})

	return swiper
}

function swiperHover(swiper, el) {
	
}