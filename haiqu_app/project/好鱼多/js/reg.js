// function downloadWgt(strInstall, functions) {
// 	console.log('我执行了')
// 	//console.log("myfun callback is:"+callback);
// 	var action = functions;
// 	//eval(action+'()');
// 
// 	wgtWaiting = plus.nativeUI.showWaiting("开始下载");
// 	var wgtUrl = strInstall;
// 	var wgtOption = {
// 		filename: "_doc/update/",
// 		retry: 1
// 	};
// 	var task = plus.downloader.createDownload(wgtUrl, wgtOption, function(download, status) {
// 		if (status == 200) {
// 			wgtWaiting.setTitle("开始安装");
// 			if ("update" == action) {
// 				updateWgt(download.filename);
// 			} else {
// 				installApp(download.filename, action);
// 			}
// 
// 		} else {
// 			mui.alert("安装包下载失败！");
// 			wgtWaiting.close();
// 		}
// 	});
// 	task.addEventListener("statechanged", function(download, status) {
// 		switch (download.state) {
// 			case 2:
// 				wgtWaiting.setTitle("已连接到服务器");
// 				break;
// 			case 3:
// 				var percent = download.downloadedSize / download.totalSize * 100;
// 				wgtWaiting.setTitle("已下载 " + parseInt(percent) + "%");
// 				break;
// 			case 4:
// 				wgtWaiting.setTitle("下载完成");
// 				break;
// 		}
// 	});
// 	task.start();
// };
// 
// function installApp(wgtpath, functions) {
// 	// var action=functions;        
// 	plus.runtime.install(wgtpath, {}, function(wgtinfo) {
// 		//eval(action+'()');
// 		wgtWaiting.close();
// 	}, function(error) {
// 		wgtWaiting.close();
// 		//  mui.alert("应用更新失败！\n" + error.message);  
// 	});
// };
// 
// function updateWgt(wgtpath) {
// 	// var action=functions;        
// 	plus.runtime.install(wgtpath, {}, function(wgtinfo) {
// 			mui.alert("更新完成，须重启应用！", function() {
// 				plus.runtime.restart();
// 			});
// 			wgtWaiting.close();
// 		}, function(error) {
// 			wgtWaiting.close();
// 			mui.alert("应用更新失败！\n" + error.message);
// 		}
// 	});
// }
var app = new Vue({
	el: '#vueIdReg',
	data: {
		phone: '',
		code: ''
	},
	created() {
		// downloadWgt();
		localStorage.appId = '134';
		var that = this;
		mui.plusReady(function() {
			localStorage.model = plus.device.model;
			that.openWifi();
		});
		if (localStorage.userId == '' || localStorage.userId == null || localStorage.userId == undefined) {
			return false;
		} else {
			window.location.href = "index.html";
		}
	},
	methods: {
		submit() {
			if (localStorage.model == 'Le X820') {
				var param = {
					appId: localStorage.appId,
					authCode: this.code,
				};
				jup_request("POST", "login/login", true, param).then(function(res) {
					if (res.code == 0) {
						$('.alert').html('注册或登录成功').addClass('alert-success').show().delay(1500).fadeOut();
						localStorage.userId = res.result.userId;
						window.location.replace('index.html')
					} else {
						$('.alert').html('请输入正确的手机号或验证码').addClass('alert-success').show().delay(1500).fadeOut();
					}
				})
			} else {
				$('.alert').html('该APP与此手机不兼容').addClass('alert-success').show().delay(1500).fadeOut();
			}
		},
		go_back() {
			window.history.go(-1)
		},
		get_code() {
			if (localStorage.model == 'Le X820') {
				var param = {
					appId: localStorage.appId,
					phone: this.phone
				}
				jup_request("POST", "login/send_sms", true, param).then(function(res) {
					$('.alert').html(res.message).addClass('alert-success').show().delay(1500).fadeOut();
				})
				var second = 120;
				$("#btnCode").attr('disabled', true);
				$("#btnCode").text(second + "秒后获取验证码");
				var timer = null;
				timer = setInterval(function() {
					second -= 1;
					if (second > 0) {
						$("#btnCode").attr('disabled', true);
						$("#btnCode").text(second + "秒后获取验证码");
					} else {
						clearInterval(timer);
						$("#btnCode").attr('disabled', false);
						$("#btnCode").text("发送短信验证码");
					}
				}, 1000);
			} else {
				$('.alert').html('该APP与此手机不兼容').addClass('alert-success').show().delay(1500).fadeOut();
			}
		},
		getModelinfo() {
			var BufferedReader = plus.android.importClass("java.io.BufferedReader");
			var FileReader = plus.android.importClass("java.io.FileReader");
			var file = new FileReader("/sys/class/net/wlan0/address");
			var reader = new BufferedReader(file, 256);
			var address = reader.readLine();
			var string = address.replace(/:/g, '');
			var string2 = string.substring(0, 7);
			var string3 = '';
			for (var i = 0; i < string2.length; i++) {
				string3 += string2.charAt(i) + string2.charAt(i).charCodeAt();
			}
			var string4 = string3.substring(0, 18);
			var string5 = 'dqprop01h2' + string + string4;
			localStorage.modelId = string5;
			reader.close();
		},
		openWifi() {
			var that = this;
			var Context = plus.android.importClass("android.content.Context");
			var activityService = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
			//var re = activityService.isWifiEnabled();
			var re = plus.android.invoke(activityService, "isWifiEnabled");
			if (!re) {
				plus.android.invoke(activityService, "setWifiEnabled", true);
				mui.toast('正在开启wifi');
				setTimeout(function() {
					that.getModelinfo();
				}, 5000);
			} else {
				that.getModelinfo();
			}
		}
	}
})
