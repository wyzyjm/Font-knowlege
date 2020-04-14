var fireEvent = function(element, event) {
	if (document.createEventObject) {
		var mockEvent = document.createEventObject();
		return element.fireEvent('on' + event, mockEvent)
	} else {
		var mockEvent = document.createEvent('HTMLEvents');
		mockEvent.initEvent(event, true, true);
		return element.dispatchEvent(mockEvent);
	}
}
