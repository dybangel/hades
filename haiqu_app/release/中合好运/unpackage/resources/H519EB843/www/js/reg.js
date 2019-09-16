var app = new Vue({
				el: '#vueIdReg',
				data: {
					phone: '',
					code: ''
				},
				created() {
					if (localStorage.userId == '' || localStorage.userId == null || localStorage.userId == undefined) {
						return false;
					} else {
						window.location.href = "index.html"
					}
				},
				methods: {
					submit() {
						// var that = this
						var param = {
							appId: "a0",
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
					},
					go_back() {
						window.history.go(-1)
					},
					get_code() {
						var param = {
							  appId: "a0",
							  phone: this.phone
						}
						jup_request("POST", "login/send_sms", true, param).then(function(res) {
							if (res.code == 0) {
								$('.alert').html('短信发送成功').addClass('alert-success').show().delay(1500).fadeOut();
							} else {
								$('.alert').html('短信发送失败').addClass('alert-success').show().delay(1500).fadeOut();
							}
						})
						var second = 60;
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
					}
				}
			})
