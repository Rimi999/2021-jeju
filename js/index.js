// main-wrapper에서 할일
// 1. 배너가 자동으로 움직인다
// 2. 동영상은 플레이가 끝난 이후에 다음으로 넘어간다
// 3. 배너가 나타나면 그 후에 내부요소들이 animation으로 나타난다

	/* if(idx == lastIdx) mainIdx = 0
	else idx = idx + 1 */

/*************** main-wrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $wrapper = $('.main-wrapper')
	var $slide = $('.main-wrapper .slide')
	var $pagerSlide = $('.main-wrapper .pager-slide')
	var video = $('.main-wrapper .video')[0]
	var $weather = $('.main-wrapper .weather')
	var len = $slide.length
	var lastIdx = len - 1
	var depth = 2
	var idx = 0
	var gap = 5000
	var speed = 500
	var timeout
	var weatherURL = 'https://api.openweathermap.org/data/2.5/weather'
	var weatherData = {
		appid: '4a25235891e03dd674f2b7ba12cbf13a', //my key
		units: 'methric'
	}
	var weatherIcon = {
		i01d: 'bi-brightness-high',
		i01n: 'bi-brightness-high-fill',
		i02d: 'bi-cloud-sun',
		i02n: 'bi-cloud-sun-fill',
		i03d: 'bi-cloud',
		i03n: 'bi-cloud-fill',
		i04d: 'bi-clouds',
		i04n: 'bi-cloud-fills',
		i09d: 'bi-cloud-rain-heavy',
		i09n: 'bi-cloud-rain-heavy-fill',
		i10d: 'bi-cloud-drizzle',
		i10n: 'bi-cloud-drizzle-fill',
		i11d: 'bi-cloud-lightning',
		i11n: 'bi-cloud-lightning-fill',
		i13d: 'bi-cloud-snow',
		i13n: 'bi-cloud-snow-fill',
		i50d: 'bi-cloud-haze',
		i50n: 'bi-cloud-haze-fill'
	}
	init()
	
	
	/*************** 사용자 함수 *****************/
	function init() {
		$slide.eq(idx).css('z-index', depth++)
		$slide.eq(idx).addClass('active')

		for(var i=0; i<len; i++) $pagerSlide.append('<i class="pager"></i>')
		$pagerSlide.find('.pager').click(onPagerClick)
		$pagerSlide.find('.pager').eq(idx).addClass('active')

		/* for(var i=0; i<len; i++) {
			$('<i class="pager"></i>').appendTo($pagerSlide).click(onPagerClick).addClass((idx === i) ? 'active': '')
		} */
		ani()
	}


	/*************** 이벤트 등록 *****************/
	video.addEventListener('loadeddata', onLoadedVideo)
	video.addEventListener('ended', onPlay)
	
	$('.bt-video').click(onModalVideo)
	$('.modal-video').find('.bt-close').click(onModalVideoClose)
	$('.cookie-wrapper').find('.bt-close').click(onCookieClose)



	/*************** 이벤트 콜백 *****************/
	function onPagerClick() {
		idx = $(this).index()
		onPlay('pager')
	}

	function onCookieClose() {
		$('.cookie-wrapper').hide()
	}
	
	function onModalVideoClose() {
		$('.modal-video').hide()
	}
	
	function onModalVideo() {
		$('.modal-video').show()
	}
	
	function onLoadedVideo() {
		if(video.readyState >= 2) {
			video.playbackRate = 4.0
		}
	}
	
	function ani() {
		$(this).addClass('active')
		video.currentTime = 0
		if($slide.eq(idx).hasClass('is-video')) video.play()
		else {
			clearTimeout(timeout)
			timeout = setTimeout(onPlay, gap)
		}
	}

	function onPlay(e) {
		if(e !== 'pager') idx = (idx == lastIdx) ? 0 : idx + 1
		$pagerSlide.find('.pager').removeClass('active')
		$pagerSlide.find('.pager').eq(idx).addClass('active')
		$slide.eq(idx).css({'z-index': depth++, 'left': '100%'})
		$slide.removeClass('active')
		$slide.eq(idx).stop().animate({'left': 0}, speed, ani)
	}

})