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
setTimeout(show,1)
function show() {
	document.getElementById("body").style.visibility = "visible"
}