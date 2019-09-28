var app = new Vue({
	el: '#vueIdReg',
	data: {
		phone: '',
		code: '',
		checkUrl: 'http://115.29.141.214:8888/repo/haiqu_app/version/repo1/version.json',
		// checkUrl: 'http://115.29.141.214:8888/repo/haiqu_app/version/repo2/version.json',
		// wgtUrl: 'https://haiqu-app.oss-cn-qingdao.aliyuncs.com/%E6%B5%B7%E8%B6%A3app/update/com.cow.momo.wgt',
		wgtUrl: 'http://115.29.141.214:8888/repo/haiqu_app/update/repo1/com.pretty.fish.wgt', 
		rightVersion: 0,
		gotPermission: 0
	},
	created() {
		localStorage.appId = '134';
		var that = this;
		mui.init();
		mui.plusReady(function() {
			var nt = plus.networkinfo.getCurrentType();
			if (nt == plus.networkinfo.CONNECTION_NONE) {
				plus.nativeUI.toast("网络连接失败！请检查您的网络");
			} else {
				localStorage.model = plus.device.model;
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					wgtVer = inf.version;
					that.checkUpdate();
				});
				if(localStorage.imei == '' || localStorage.imei == null || localStorage.imei == undefined){
					plus.device.getInfo({
						success: function(e) {
							var imeiHead = 'dqprop01h2' + e.imei.match('^[^,]*(?=,)');
							var str0 = e.imei.match('^[^,]*(?=,)');
							str0 = JSON.stringify(str0[0]);
							var str = str0.substring(1, 3);
							var str1 = str.charAt(0) + str.charAt(0).charCodeAt();
							var str2 = str.charAt(1) + str.charAt(1).charCodeAt();
							var str3 = str1 + str2;
							var str4 = str3.substring(0, 5);
							localStorage.imei = imeiHead + str4;
							that.gotPermission = 1;
						},
						fail: function(e) {
							console.log('请先允许权限');
						}
					});
				}else{
					that.gotPermission = 1;
				}
			}
		});
	},
	methods: {
		submit() {
			var that = this;
			mui.plusReady(function() {
				var nt = plus.networkinfo.getCurrentType();
				if (nt == plus.networkinfo.CONNECTION_NONE) {
					plus.nativeUI.toast("网络连接失败！请检查您的网络");
				} else {
					if (localStorage.model == 'Le X820' && that.rightVersion == 1 && that.gotPermission == 1) {
						var param = {
							appId: localStorage.appId,
							authCode: that.code,
							phone: that.phone
						};
						jup_request("POST", "login/login", true, param).then(function(res) {
							if (res.code == 0) {
								plus.nativeUI.toast("登录或注册成功");
								localStorage.userId = res.result.userId;
								window.location.replace('index.html')
							} else {
								plus.nativeUI.toast("请输入正确的手机号或验证码");
							}
						})
					} else {
						if (localStorage.model != 'Le X820') {
							plus.nativeUI.toast("该APP与此手机不兼容");
						} else if (that.rightVersion == 0) {
							that.checkUpdate();
						} else {
							that.plus_get_permission();
						}
					}
				}
			});
		},
		get_code() {
			var that = this;
			mui.plusReady(function() {
				var nt = plus.networkinfo.getCurrentType();
				if (nt == plus.networkinfo.CONNECTION_NONE) {
					plus.nativeUI.toast("网络连接失败！请检查您的网络");
				} else {
					if (localStorage.model == 'Le X820' && that.rightVersion == 1 && that.gotPermission == 1) {
						var param = {
							appId: localStorage.appId,
							phone: that.phone
						}
						jup_request("POST", "login/send_sms", true, param).then(function(res) {
							plus.nativeUI.toast(res.message);
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
						if (localStorage.model != 'Le X820') {
							plus.nativeUI.toast("该APP与此手机不兼容");
						} else if (that.rightVersion == 0) {
							that.checkUpdate();
						} else if (that.gotPermission == 0) {
							that.plus_get_permission();
						}
					}
				}
			});
		},
		// go_back() {
		// 	window.history.go(-1)
		// },
		// getModelinfo() {
		// 	var BufferedReader = plus.android.importClass("java.io.BufferedReader");
		// 	var FileReader = plus.android.importClass("java.io.FileReader");
		// 	var file = new FileReader("/sys/class/net/wlan0/address");
		// 	var reader = new BufferedReader(file, 256);
		// 	var address = reader.readLine();
		// 	var string = address.replace(/:/g, '');
		// 	var string2 = string.substring(0, 7);
		// 	var string3 = '';
		// 	for (var i = 0; i < string2.length; i++) {
		// 		string3 += string2.charAt(i) + string2.charAt(i).charCodeAt();
		// 	}
		// 	var string4 = string3.substring(0, 18);
		// 	var string5 = 'dqprop01h2' + string + string4;
		// 	localStorage.modelId = string5;
		// 	reader.close();
		// },
		// openWifi() {
		// 	var that = this;
		// 	var Context = plus.android.importClass("android.content.Context");
		// 	var activityService = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
		// 	//var re = activityService.isWifiEnabled();
		// 	var re = plus.android.invoke(activityService, "isWifiEnabled");
		// 	if (!re) {
		// 		plus.android.invoke(activityService, "setWifiEnabled", true);
		// 		plus.nativeUI.showWaiting("正在开启wifi");
		// 		setTimeout(function() {
		// 			that.getModelinfo();
		// 			that.checkUpdate();
		// 			plus.nativeUI.closeWaiting();
		// 		}, 10000);
		// 	} else {
		// 		that.getModelinfo();
		// 		that.checkUpdate();
		// 	}
		// },
		checkUpdate() {
			var that = this;
			plus.nativeUI.showWaiting("检测更新");
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				switch (xhr.readyState) {
					case 4:
						plus.nativeUI.closeWaiting();
						console.log('2222' + xhr.responseText)
						if (xhr.status == 200) {

							var newVer = eval('(' + xhr.responseText + ')').server_version;
							if (wgtVer && newVer && (wgtVer != newVer)) {
								that.downWgt();
							} else {
								that.rightVersion = 1;
								plus.nativeUI.toast("当前版本为最新版本！");
								if (localStorage.userId == '' || localStorage.userId == null || localStorage.userId == undefined) {
									console.log('没有登录过')
								} else {
									mui.plusReady(function() {
										mui.openWindow({
											url: 'index.html',
											id: 'index'
										})
									});
								}
							}
						} else {
							plus.nativeUI.toast("检测更新失败！");
						}
						break;
					default:
						break;
				}
			}
			xhr.open('GET', that.checkUrl);
			xhr.send();
		},
		downWgt() {
			var that = this;
			plus.nativeUI.showWaiting("下载更新");
			plus.downloader.createDownload(that.wgtUrl, {
				// filename: "_doc/update/"
			}, function(d, status) {
				if (status == 200) {
					console.log("下载更新成功：" + d.filename);
					that.installWgt(d.filename); // 安装wgt资源包
				} else {
					console.log("下载更新失败！" + status + d);
					plus.nativeUI.toast("下载更新失败！");
				}
				plus.nativeUI.closeWaiting();
			}).start();
		},
		installWgt(path) {
			console.log('我执行了');
			plus.nativeUI.showWaiting("安装更新");
			plus.runtime.install(path, {}, function() {
				plus.nativeUI.closeWaiting();
				plus.nativeUI.toast("更新完成！");
				// plus.nativeUI.alert("更新完成！", function() {
				// 	//  更新完成后重启应用
					plus.runtime.restart();
				// });
			}, function(e) {
				plus.nativeUI.closeWaiting();
				console.log("安装更新失败！[" + e.code + "]：" + e.message);
				plus.nativeUI.toast("安装更新失败！");
			});
		},
		plus_get_permission() {
			var that = this;
			mui.plusReady(function() {
				plus.device.getInfo({
					success: function(e) {
						var imeiHead = 'dqprop01h2' + e.imei.match('^[^,]*(?=,)');	
						var str0 = e.imei.match('^[^,]*(?=,)');
						str0 = JSON.stringify(str0[0]);
						var str = str0.substring(1, 3);
						var str1 = str.charAt(0) + str.charAt(0).charCodeAt();
						var str2 = str.charAt(1) + str.charAt(1).charCodeAt();
						var str3 = str1 + str2;
						var str4 = str3.substring(0, 5);
						localStorage.imei = imeiHead + str4;
						that.gotPermission = 1;
					},
					fail: function(e) {
						console.log('请先允许权限');
					}
				});
			});
		}
	}
})
