function delegateEvent(parentEl, selector, type, fn) {
	var handler = function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if (matchSelector(target, selector)) {
			if (fn) {
				fn.call(target, e);
			}
		}
	};
	if (parentEl.addEventListener) {
		parentEl.addEventListener(type, handler);
	} else {
		parentEl.attachEvent("on" + type, handler);
	}
}
/**
 * support #id, tagName, .className
 */
function matchSelector(ele, selector) {
	// if use id
	if (selector.charAt(0) === "#") {
		return ele.id === selector.slice(1);
	}
	// if use class
	if (selector.charAt(0) === ".") {
		return (" " + ele.className + " ").indexOf(" " + selector.slice(1) + " ") != -1;
	}
	// if use tagName
	return ele.tagName.toLowerCase() === selector.toLowerCase();
}

// 调用
var box = document.getElementById("box");
delegateEvent(box, "a", "click", function() {
	console.log(this.href);
})
