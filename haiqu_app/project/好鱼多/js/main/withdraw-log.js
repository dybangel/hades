var app = new Vue({
	el: '#vueIdWithdrawLog',
	data: {
		list: [],
		page: 0
	},
	created() {
		var that = this;
		mui.init({
			pullRefresh: {
				container: '#pullrefresh',
				down: {
					style: 'circle',
					callback: that.pulldownRefresh
				},
				up: {
					auto: true,
					contentrefresh: '正在加载...',
					callback: that.pullupRefresh
				}
			}
		});
	},
	methods: {
		data_get() {
			let that = this;
			var param = {
				pageIndex: that.page,
				pageSize: 20,
				userId: localStorage.userId
			};
			jup_request("POST", "app/withdraw_log", true, param).then(function(res) {
				that.list = res.result;
				if (res.code == 0) {
					that.page++;
				}
			});
		},
		pulldownRefresh() {
			let that = this;
			setTimeout(function() {
				var param = {
					pageIndex: 0,
					pageSize: 10,
					userId: localStorage.userId
				};
				jup_request("POST", "app/withdraw_log", true, param).then(function(res) {
					if (res.code == 0) {
						that.page = 1;
						that.list = res.result;
						mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
						mui.toast("刷新完成");
						// location.reload();
					}
				});
			}, 1500);
			console.log(that.page)
		},
		pullupRefresh() {

			let that = this;
			setTimeout(function() {
				var param = {
					pageIndex: that.page,
					pageSize: 10,
					userId: localStorage.userId
				};
				jup_request("POST", "app/withdraw_log", true, param).then(function(res) {
					if (res.code == 0) {
						that.list = that.list.concat(res.result);
						mui('#pullrefresh').pullRefresh().endPullupToRefresh();
						// mui('#pullrefresh').pullRefresh().endPullupToRefresh((res.result.length < 10));
						that.page++;
					}
				});
			}, 1500);
		},
		goBack(){
			window.history.go(-1);
		}
	}
})
