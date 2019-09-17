function goBack() {
	window.history.go(-1)
}
var app = new Vue({
	el: '#vueIdWithdraw',
	data: {
		balance: 0,
		withdrawValue: 0,
		phone: '',
		tips: ['提现门槛为1元起提', '提现门槛为1元起提', '提现门槛为1元起提', '提现门槛为1元起提', '提现门槛为1元起提', '提现门槛为1元起提']
	},
	created() {
		var that = this
		var param = {
			appId: localStorage.appId,
			userId: localStorage.userId
		}
		var params = JSON.stringify(param)
		jup_request("POST", "user/getAccount", true, param).then(function(res) {
			that.balance = res.result.balance;
			that.phone = res.result.phone;
		})
	},
	methods: {
		item_grid1_click() {
			$("#item-grid1").css({
				"background-color": "#e63634",
			});
			$("#item-grid2").css({
				"background-color": "#ffffff",
			});
			$("#item-grid3").css({
				"background-color": "#ffffff",
			});
			$("#item-grid4").css({
				"background-color": "#ffffff",
			});
			this.withdrawValue = 1
		},
		item_grid2_click() {
			$("#item-grid2").css({
				"background-color": "#e63634",
			});
			$("#item-grid1").css({
				"background-color": "#ffffff",
			});
			$("#item-grid3").css({
				"background-color": "#ffffff",
			});
			$("#item-grid4").css({
				"background-color": "#ffffff",
			});
			this.withdrawValue = 10
		},
		item_grid3_click() {
			$("#item-grid3").css({
				"background-color": "#e63634",
			});
			$("#item-grid1").css({
				"background-color": "#ffffff",
			});
			$("#item-grid2").css({
				"background-color": "#ffffff",
			});
			$("#item-grid4").css({
				"background-color": "#ffffff",
			});
			this.withdrawValue = 20
		},
		item_grid4_click() {
			$("#item-grid4").css({
				"background-color": "#e63634",
			});
			$("#item-grid1").css({
				"background-color": "#ffffff",
			});
			$("#item-grid2").css({
				"background-color": "#ffffff",
			});
			$("#item-grid3").css({
				"background-color": "#ffffff",
			});
			this.withdrawValue = 50
		},
		withdraw() {
			var param = {
				model:localStorage.model,
				amount: this.withdrawValue,
				appId: localStorage.appId,
				userId: localStorage.userId
			}
			
			if (this.withdrawValue == 0) {
				$('.alert').html('请选择提现金额').addClass('alert-success').show().delay(1500).fadeOut();
			} else if (this.withdrawValue !== 0 && this.withdrawValue > this.balance) {
				$('.alert').html('余额不足	').addClass('alert-success').show().delay(1500).fadeOut();
			} else {
				jup_request("POST", "user/withdraw", true, param).then(function(res) {
					if (res.code == 0) {
						$('.alert').html(res.message).addClass('alert-success').show().delay(1500).fadeOut();
					    location.reload()
					} else {
						$('.alert').html(res.message).addClass('alert-success').show().delay(1500).fadeOut();
					}
				})
			}
		}
	}
})
