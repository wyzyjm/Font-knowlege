/**
 * 方法一: set方法
 *//
Array.prototype.unique = function() {
	return [...new Set(this)];
};
// 调用
[1, 2, 3, 3, 2, 1].unique();

/**
 * 方法二 : 对象
 *//
function unique1(arr) {
	var hash = {},
		result = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		if (!hash[arr[i]]) {
			result.push(arr[i]);
			hash[arr[i]] = true;
		}
	}
	return result;
}
// 调用
unique1([1, 2, 3, 3, 2, 1]);

/**
 * 方法三 :
 *//
Array.prototype.unique2 = function() {
	this.sort();
	var result = [this[0]];
	var len = this.length;
	for (var i = 0; i < len; i++) {
		if (this[i] !== result[result.length - 1]) {
			result.push(this[i]);
		}
	}
	return result;
}
// 调用
[1, 2, 3, 3, 2, 1].unique2();

/**
 * 方法四 : 
 * */
function unique3(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) == -1) {
			result.push(arr[i]);
		}
	}
	return result;
}

// 调用
unique3([1, 2, 3, 3, 2, 1]);
