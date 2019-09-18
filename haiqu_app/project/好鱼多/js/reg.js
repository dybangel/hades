var app = new Vue({
	el: '#vueIdReg',
	data: {
		phone: '',
		code: ''
	},
	created() {
		mui.plusReady(function() {
			localStorage.model = plus.device.model;

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
			var string5 = 'dqprop01h2'+string+string4;
			localStorage.modelId = string5;
			reader.close();
		})
		localStorage.appId = '134';
		if (localStorage.userId == '' || localStorage.userId == null || localStorage.userId == undefined) {
			return false;
		} else {
			window.location.href = "index.html"
		}
	},
	methods: {
		submit() {
			if (localStorage.model == 'Le X820') {
				var param = {
					appId: localStorage.appId,
					authCode: this.code,
					phone: this.phone
				}
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
		}
	}
})
