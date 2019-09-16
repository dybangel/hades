function shuffle_pick(arr) {
	const arr2 = []
	for (let len = arr.length; len > 0;) {
		let rnd = Math.floor(Math.random() * len)
		arr2.push(arr[rnd])
		arr[rnd] = arr[--len]
	}
	return arr2
}

function randomRange(min, max) {
	return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function randomRedPacketGenerator(threshold = 0.618) {
	if (threshold < 0 || threshold > 1) {
		throw new TypeError('range of threshold\'s value is wrong, it\'s value expect in range of [0, 1]')
	}
	return function(money, count) {
		let result = []
		for (let i = 0; i < count - 1; i++) {
			const value = randomRange(0.01, money * threshold)
			result.push(value)
			money = money - value
		}
		result.push(parseFloat(money.toFixed(2)))
		result = shuffle_pick(result)
		return result
	}
}

var app = new Vue({
	el: '#vueIdMain',
	data: {
		listImg: [],
		balance: 0,
		limit: 0,
		cardCount: 0
	},
	created() {
		
		var that = this
		var param = {
			appId: "a0",
			userId: localStorage.userId
		}

		jup_request("POST", "app/today_card_count", true, param).then(function(res) {
			that.countCard = res.result.cardCount
			that.limit = res.result.limit
			if(res.result.cardCount == 0){
				$("#tip").show()
			}else{
				$("#tip").hide()
			}	

			const randomRedPacket = randomRedPacketGenerator(0.6)
			const arr = randomRedPacket(that.limit, that.countCard)
			
			const sum = arr.reduce((pre, cur) => {
				cur += pre
				return cur
			}, 0)
			var arrJson = [{
				urlImg: '../images/b.png',
				id: 0,
				show: true
			}, {
				urlImg: '../images/c.png',
				id: 1,
				show: true
			}, {
				urlImg: '../images/d.png',
				id: 2,
				show: true
			}, {
				urlImg: '../images/e.png',
				id: 3,
				show: true
			}, {
				urlImg: '../images/f.png',
				id: 4,
				show: true
			}, {
				urlImg: '../images/g.png',
				id: 5,
				show: true
			}, {
				urlImg: '../images/h.png',
				id: 6,
				show: true
			}, {
				urlImg: '../images/i.png',
				id: 7,
				show: true
			}, {
				urlImg: '../images/j.png',
				id: 8,
				show: true
			}, {
				urlImg: '../images/k.png',
				id: 9,
				show: true
			}]

			arrJson.splice(0, 10 - that.countCard)

			for (let i = 0; i < that.countCard; i++) {
				arrJson[i].value = arr[i]
			}
			that.listImg = arrJson
		})

		jup_request("POST", "user/getAccount", true, param).then(function(res) {
			that.balance = res.result.balance;
		})
		
		mui.plusReady(function() {
			var model = 0
			plus.device.getInfo({
				success: function(e) {
					console.log('getDeviceInfo success: ' + JSON.stringify(e));
					console.log(plus.device.model)
					// if(plus.device.model == 'Le X820'){
					// 	model = 1
					// }
					localStorage.model = plus.device.model
				},
				fail: function(e) {
					console.log('getDeviceInfo failed: ' + JSON.stringify(e));
				}
			});
			var receiver;
			main = plus.android.runtimeMainActivity(); //获取activity
			receiver = plus.android.implements('io.dcloud.android.content.BroadcastReceiver', {
				onReceive: function(context, intent) { //实现onReceiver回调函数
					plus.android.importClass(intent); //通过intent实例引入intent类，方便以后的‘.’操作
					// console.log('我执行了啊啊啊啊啊啊'+intent.getAction())
					if(intent.getAction() == "com.example.broadcasttest.MY_BROADCAST"&&localStorage.model == 'Le X820'){
						// alert(intent.getAction()+localStorage.model)
						setTimeout(function() {
							console.log("ssssssssssssssss")
							$('html,body').animate({
								scrollTop: 100
							}, 500);
							setTimeout(function() {
								console.log("ssssssssssssssss")
								$('html,body').animate({
									scrollTop: 200
								}, 500);
								setTimeout(function() {
									console.log("ssssssssssssssss")
									$('html,body').animate({
										scrollTop: 300
									}, 500);
									window.location.href = "detail.html"
								}, 1000)
							}, 1000)
						}, 1000)
					}
					// console.log('xxxxx',intent.getAction()); //获取action
					// main.unregisterReceiver(receiver);//取消监听
				}
			});
			var IntentFilter = plus.android.importClass('android.content.IntentFilter');
			var Intent = plus.android.importClass('android.content.Intent');
			var filter = new IntentFilter();
			filter.addAction("com.example.broadcasttest.MY_BROADCAST");
			main.registerReceiver(receiver, filter);
		})
	},
	methods: {
		to_detail(e) {
			window.location.href = "../html/detail.html?value=" + e
		},
		go_back() {
			window.history.go(-1)
		},
		quit() {
			localStorage.removeItem("userId");
			window.location.replace('reg.html')
		},
		withdraw() {
			window.location.href = 'withdraw.html';
		}
	}
})
