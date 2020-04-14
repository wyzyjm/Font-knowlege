if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			throw new TypeError("'this' is not function");
		}

		// bind's default arguments, array without first element
		// first part arguments for the function
		var aBindArgs = Array.prototype.slice.call(arguments, 1);
		var fToBind = this; // the function will be binding
		var fNOP = function() {};
		var fBound = function() {
			// target this will be binding
			var oThis = this instanceof fNOP ? this : oThis || this;
			// last part arguments for the function
			var aCallArgs = Array.prototype.slice.call(arguments);
			// complete arguments for the function
			var aFuncArgs = aBindArgs.concat(aCallArgs);
			return fToBind.apply(oThis, aFuncArgs);
		};

		// fBound extends fToBind
		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	};
}

// 调用
var add = function(a, b, c) {
	return a + b + c;
};
var newAdd = add.bind(null, 1, 2);
var result = newAdd(3);
