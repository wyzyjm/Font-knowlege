var Event = (function() {
	var list = {},
		bind, trigger, remove;
	bind = function(key, fn) {
		if (!list[key]) {
			list[key] = [];
		}
		list[key].push(fn);
	};
	trigger = function() {
		var key = Array.prototype.shift.call(arguments);
		var fns = list[key];
		if (!fns || fns.length === 0) {
			return false;
		}
		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments);
		}
	};
	remove = function(key, fn) {
		var fns = list[key];
		if (!fns) {
			return false;
		}
		if (!fn) {
			fns & (fns.length = 0);
		} else {
			for (var i = fns.length - 1; i >= 0; i--) {
				var _fn = fns[i];
				if (_fn === fn) {
					fns.splice(i, 1);
				}
			}
		}
	};
	return {
		bind: bind,
		trigger: trigger,
		remove: remove
	}
})();

// 调用
Event.bind('Hit', function() {
	console.log('bind event');
}); // 绑定事件
Event.trigger("Hit", function() {
	console.log('trigger event');
}); // 触发事件
