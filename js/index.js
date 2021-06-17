/*************** headerWrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $Wrapper = $('.main-wrapper')
	var $Slide = $('.main-wrapper .slide')
	var Len = $Slide.length
	var LastIdx = Len - 1
	var Depth = 2
	var Idx = 0
	var Gap = 3000
	var Speed = 500
	var Interval
	init()


	/*************** 사용자 함수 *****************/
	function initMain() {
		$Slide.eq(mainIdx).css('z-index', Depth++)
		Interval = setInterval(oAni, Gap)
	}


	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
	function onAni() {
		Idx = (Idx == LastIdx) ? 0 : Idx + 1
		$Slide.eq(Idx).css('z-index', Depth++)
	}

})