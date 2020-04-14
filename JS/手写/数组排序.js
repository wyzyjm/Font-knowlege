var quickSort = function(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
};

// 调用
quickSort([9, 4, 2, 8, 1, 5, 3, 7]);


// 数组冒泡排序
var bubble = function(arr) {
	var maxIndex = arr.length - 1,
		temp, flag;
	for (var i = maxIndex; i > 0; i--) {
		flag = true
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				flag = false;
			}
		}
		if (!flag) {
			break;
		}
	}
	return arr;
}
// 调用
var arr = bubble([13, 69, 28, 93, 55, 75, 34]);
