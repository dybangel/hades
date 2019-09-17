function plusReady() {
	mui.back = false
}
if (window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function goBack() {
	if (disappear == 1) {
		window.history.go(-1)
	} else {
		$('.alert').html('您还没有刮完').addClass('alert-success').show().delay(1500).fadeOut();
	}
}


var app = new Vue({
	el: '#vueIdDetail',
	data: {
		amount: ''
	},
	created() {
		var a = GetRequest();
		this.amount = a['value'];
	},
	methods: {

	}
})

function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

var disappear = 0

const oImg = document.getElementById('img');

function draw() { //等图片加载完成后再添加canvas画布在上面
	let can = document.createElement('canvas'); //创建一个canvas画布
	can.width = oImg.width; //等于图片的宽高
	can.height = oImg.height;
	can.style.position = "absolute"; //canvas画布设置浮动会漂浮在图片上
	can.style.left = oImg.offsetLeft + "px"; //保存与画布位置一致
	can.style.top = oImg.offsetTop + "px";
	//找到图片的父级：parentNode  在oImg子元素前面添加canvas标签：insertBefore
	oImg.parentNode.insertBefore(can, oImg) //在img前面去插入canvas标签
	let ctx = can.getContext('2d');
	ctx.fillStyle = "#bbb"; //刮刮乐的颜色
	ctx.fillRect(0, 0, oImg.width, oImg.height) //填充宽度

	//合成:处理合成图片的透明样式；
	//拖拽的时候，canvas图层显示透明；destination-out：新图形与原图形重叠部分透明
	ctx.globalCompositeOperation = "destination-out";
	ctx.strokeStyle = "#eee"; //触笔的颜色 随便  因为它终究变成透明
	ctx.lineWidth = 30; //拖动时开始画线的线宽
	ctx.lineCap = "round" //这两步是把画笔变成圆形

	mui.plusReady(function() {
		var model = 0
		plus.device.getInfo({
			success: function(e) {
				console.log('getDeviceInfo success: ' + JSON.stringify(e));
				console.log(plus.device.model)
				if (plus.device.model == 'Le X820') {
					model = 1
				}
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
				if (intent.getAction() == "com.example.broadcasttest.MY_BROADCAST" && localStorage.model == 'Le X820') {
					setTimeout(function() {
						ctx.beginPath(); //拖动时开始画线
						ctx.moveTo(10, 48); //起始点   
						ctx.lineTo(384, 48);
						ctx.stroke();
						setTimeout(function() {
							check()
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

	can.ontouchstart = function(e) {
		console
		// e = e || window.event;  //兼容低版本IE浏览器
		//e.pageX距离文档右边缘； offsetLeft：canvas画布距离文档的右边距离
		let x = e.touches[0].clientX - can.offsetLeft; //得到的x是在canvas上的坐标值
		let y = e.touches[0].clientY - can.offsetTop;
		console.log(x + '++++++++++' + y)
		ctx.beginPath();
		// ctx.moveTo(  x,y )//从哪里开始来画
		ctx.arc(x, y, 15, 0, 6.3, false); //点第一下是画一个圆

		ctx.fill();
		//按下后拖拽
		can.ontouchmove = function(e) { //拖动时一直执行下面

			e = e || window.event; //兼容低版本IE浏览器
			ctx.beginPath(); //拖动时开始画线
			ctx.moveTo(x, y); //起始点   
			ctx.lineTo(e.touches[0].clientX - can.offsetLeft, e.touches[0].clientY - can.offsetTop); //移动的过程

			//每次移动的时候，样式所在的坐标；
			x = e.clientX - can.offsetLeft; //第二次渲染刮图片效果的起始点应该在上一次的终止点
			y = e.clientY - can.offsetTop;
			ctx.stroke(); //弹出图形并恢复画布
		}
		can.ontouchend = function(e) {
			//抬起后将事件注销
			can.ontouchmove = null;
			this.ontouchend = null;
			if (disappear == 0) {
				check();
			} else {
				return false
			}
			//完成后通过像素计算刮过的的百分比
		}
	}

	function check() {
		//获取画布的像素列表
		let data = ctx.getImageData(0, 0, can.width, can.height).data;
		let n = 0; //计算透明像素的个数
		for (let i = 0; i < data.length; i += 4) { //感觉这一步比较消耗性能
			//RGBA
			if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0 && data[i + 3] == 0) {
				n++;
			}
		}
		let f = n * 100 / (can.width * can.height); //算出所刮的面积的占比；
		// txt.value = `刮开面积:${f.toFixed(2)}%`;
		//刮开面积的比例
		if (f > 10) { //如果所刮的面积大于30%   则将canvas画布整体清除fillRect
			ctx.beginPath();
			ctx.fillRect(0, 0, can.width, can.height);
			disappear = 1;
			var a = GetRequest();
			var param = {
				amount: a['value'],
				appId: localStorage.appId,
				userId: localStorage.userId
			}

			jup_request("POST", "app/upload_card_info", true, param).then(function(res) {
				if (res.code == 0) {
					$('.alert').html('恭喜您获得奖励金').addClass('alert-success').show().delay(1500).fadeOut();
					setTimeout(function() {
						window.history.go(-1)
					}, 2000)
				} else {
					$('.alert').html('获取奖励金失败').addClass('alert-success').show().delay(1500).fadeOut();
					setTimeout(function() {
						window.history.go(-1)
					}, 2000)
				}
			})
			// $.ajax({
			// 	type: "POST",
			// 	url: "http://xiaomage.natapp1.cc/app/upload_card_info",
			// 	async: false,
			// 	data: params,
			// 	dataType: "json",
			// 	contentType: "application/json",
			// 	success: function(res) {
			// 		console.log(res)
			// 	}
			// })
			// txt.value = "刮开面积大于30%，全部显示"
		}
	}
}
if (oImg.readyState === "complete") {
	draw(); //true表示已经加载完成 执行draw()方法
} else {
	//图片加载完成执行draw方法
	oImg.onload = draw;
}
