/*************** 글로벌 설정 *****************/
var $mainWrapper = $('.main-wrapper')
var $mainSlide = $('.main-wrapper .slide')
var mainLen = $mainSlide.length
var mainLastIdx = mainLen - 1
var mainDepth = 2
var mainIdx = 0
var mainGap = 3000
var mainSpeed = 500
var mainInterval
initMain()


/*************** 사용자 함수 *****************/
function initMain() {
	$mainSlide.eq(mainIdx).css('z-index', mainDepth++)
	mainInterval = setInterval(onMainAni, mainGap)
}


/*************** 이벤트 등록 *****************/


/*************** 이벤트 콜백 *****************/
function onMainAni() {
	mainIdx = (mainIdx == mainLastIdx) ? 0 : mainIdx + 1
	$mainSlide.eq(mainIdx).css('z-index', mainDepth++)
}
