var jup_request = (type, path, isAsync, param) => {
	var domain = 'haiquapp.dianqu666.online'
	// var domain = 'http://repo.natapp1.cc/'
	var path = path
	var url = domain + path
	var strParam = JSON.stringify(param)
	return new Promise(function(resolve, reject) {
		$.ajax({
			type: type,
			url: url,
			async: isAsync,
			data: strParam,
			dataType: "json",
			contentType: "application/json",
			success: function(res) {
				resolve(res)
			},
			error: function(res) {
				console.log('网络请求错误')
			}
		})
	})
}