/**
 * rem运用时的换算
 * @param {Object} doc
 * @param {Object} win
 */
function resize() {
	var doc = document;
	var win = window;
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 640) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
}
resize();
setTimeout(show, 1)

function show() {
	document.getElementById("body").style.visibility = "visible"
}
//qq联系
function chatQQ() {
	/*1234567对应的就是需要聊天的客服*/
	window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=519363006&version=1&src_type=web&web_src=oicqzone.com";
}
//微信联系
function showWechat(){
	document.getElementById('weChat').style.display = 'block'
}
document.getElementById('weChat').onclick = function(){
	document.getElementById('weChat').style.display = 'none'
}


window.onscroll= function(){
	var fixNav = document.getElementsByClassName('fix-nav')[0];
	if (document.documentElement.scrollTop < 0) {
		fixNav.style.display = 'none';
	} else{
		fixNav.style.display = 'flex'
	}
}
