/*************** headerWrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $Wrapper = $('.main-wrapper')
	var $Slide = $('.main-wrapper .slide')
	var video = $()
	var Len = $Slide.length
	var LastIdx = Len - 1
	var Depth = 2
	var Idx = 0 //시작 인덱스
	var Gap = 3000
	var Speed = 500
	init()


	/*************** 사용자 함수 *****************/
	function initMain() {
		$Slide.eq(mainIdx).css('z-index', depth++)
		onAni()
	}


	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
	function onAni() {
		if($Slide.eq(idx).hasClass('is-vide0')) {

		}
		Idx = (Idx == LastIdx) ? 0 : Idx + 1
		$Slide.eq(Idx).css({'z-index': depth++, 'left': '100%'})
		$Slide.eq(Idx).stop().animate({'left':0}, speed)
	}

})