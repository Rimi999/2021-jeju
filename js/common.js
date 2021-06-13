/*************** 글로벌 설정 *****************/
initCommon ()


/*************** 사용자 함수 *****************/
function initCommon() {
	if($.cookie('hideNotice') === 'Y') onCloseNotice ()
	else {
		$('.notice-wrapper').find('.notice-content').hide()
		$('.notice-wrapper').find('.bt-hide').hide()
	}
}

function scrollNotice(scTop){
	var noticeHeight = $('.notice-wrapper').outerHeight()
	if(scTop > 0) {
		$('.notice-wrapper').hide()
		$('.notice-wrapper').css('top', noticeHeight + 'px')
	}
	else {
		$('.notice-wrapper').show()
		$('.notice-wrapper').css('top', 'upset')
	}
}

function scrollHeader(scTop) {
	var headerGap = $('.notice-wrapper').outerHeight()
	if(headGap < scTop ){
		$('.header-wrapper').css({'position':'fixed', 'top': 0})
	}
	else{
		$('.header-wrapper').css({'position':'absolute', 'top':'unset'})
	}
}

/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll).trigger('scroll')


$('.header-wrapper .link-lang').click(onToggleLang)
$('.header-wrapper .link-lang').mouseenter(onShowleLang)
$('.header-wrapper .link-lang').mouseleave(onHideleLang)
$('.header-wrapper .link-lang .lang').click(onChgLang)

$('.notice-wrapper .bt-show').click(onShowNotice)
$('.notice-wrapper .bt-hide').click(onHideNotice)
$('.notice-wrapper .bt-close').click(onCloseNotice)
$('.notice-wrapper .bt-today').click(onHideTodayNotice)


/*************** 이벤트 콜백 *****************/
function onScroll(e) {
	var scTop = $(this).scrollTop()
	scrollNotice(scTop)
	scrollHeader(scTop)
}

// lang
function onToggleLang() {
	$('.header-wrapper .link-lang .hover').toggle()
}

function onShowleLang() {
	$('.header-wrapper .link-lang .hover').show()
}

function onHideleLang() {
	$('.header-wrapper .link-lang .hover').hide()
}

function onChgLang() {
	var $span = $(this).parent().prev().find('span')
	var myLang = $(this).text()
	var spanLang = $span.text()
	$span.text(myLang)
	$(this).text(spanLang)
}

//notice
function onShowNotice() {
	$('.notice-wrapper').find('.bt-show').hide()
	$('.notice-wrapper').find('.bt-hide').show()
	$('.notice-wrapper').find('.notice-content').show()
}

function onHideNotice() {
	$('.notice-wrapper').find('.bt-show').show()
	$('.notice-wrapper').find('.bt-hide').hide()
	$('.notice-wrapper').find('.notice-content').hide()
}

function onCloseNotice() {
	$('.notice-wrapper').hide()
}

function onHideTodayNotice() {
	$.cookie('hideNotice', 'Y', { expired: 1, path: '/' })
	onCloseNotice()
}


