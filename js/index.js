/*************** headerWrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $wrapper = $('.main-wrapper')
	var $slide = $('.main-wrapper .slide')
	var video = $('.main-wrapper .video')[0]
	var len = $slide.length
	var lastIdx = len - 1
	var depth = 2
	var idx = 0 //시작 인덱스
	var gap = 3000
	var speed = 500
	init()


	/*************** 사용자 함수 *****************/
	function init() {
		$slide.eq(idx).css('z-index', depth++)
		onAni()
	}


	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
	function onAni() {
		if($slide.eq(idx).hasClass('is-video')) {

		}
		idx = (idx == lastIdx) ? 0 : idx + 1
		$slide.eq(idx).css({'z-index': depth++, 'left': '100%'})
		$slide.eq(idx).stop().animate({'left':0}, speed)
	}

})