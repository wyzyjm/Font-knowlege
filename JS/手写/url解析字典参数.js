function parseQuery(url) {
	url = url == null ? window.location.href : url;
	var search = url.substring(url.lastIndexOf("?") + 1);
	var hash = {};
	var reg = /([^?&=]+)=([^?&=]*)/g;
	search.replace(reg, function(match, $1, $2) {
		var name = decodeURIComponent($1);
		var val = decodeURIComponent($2);
		hash[name] = String(val);
		return match;
	});
	return hash;
}
