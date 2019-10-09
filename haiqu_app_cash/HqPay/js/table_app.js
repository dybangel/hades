
			
			if(localStorage.userId == null || localStorage.userId == '' || localStorage.userId == undefined){
				 window.location.href = 'login.html'
			}
			$("#name").html(localStorage.name);
			window.url2 = '192.168.3.254:8888'
			window.url1 = 'xiaomage.natapp1.cc'
			
			layui.use('table', function() {
				var table = layui.table;

				table.render({
					elem: '#mobileAll',
					url: 'http://'+url2+'/app_maintain/app_list',
					method: 'POST',
					contentType: 'application/json',
					where: {
						pageIndex: 0,
						pageSize: 100,
						search: '',
						userId: localStorage.userId
					},
					parseData: function(res) {
						return {
							"code": res.code,
							"msg": res.message,
							"count": "",
							"data": res.result
						}
					},
					toolbar: '#toolbarDemo',
					id: 'tableMain',
					cols: [
						[{
							field: 'appNum',
							title: '应用编号',
							width: '',
							edit: 'text'
						}, {
							field: 'appName',
							title: '应用名称',
							width: '',
						}, {
							field: 'icon',
							title: '图标',
							width: '',
							templet: '#imgTpl'
						}, {
							field: 'appVersion',
							title: '版本号',
							width: ''
						},  {
							field: 'status',
							title: '状态',
							width: '',
							templet: '#roleTpl'
						}, {
							field: 'withdrawStatus',
							title: '提现验证状态',
							width: ''
						}, {
							field: 'operatorName',
							title: '操作人',
							width: ''
						}, {
							field: 'updateTime',
							title: '操作时间',
							width: ''
						}, {
							field: 'd',
							title: '操作',
							toolbar: '#barDemo',
							width: ''
						}]
					],
					page: true
				});
				table.on('toolbar(kkk)', function(obj) {
					var checkStatus = table.checkStatus(obj.config.id);
					switch (obj.event) {
						case 'reload':
							table.reload('tableMain', {
								url: 'http://'+url2+'/app_maintain/app_list',
								where: {
									pageIndex: 0,
									pageSize: 100,
									search: $("#demoReload").val(),
									userId: localStorage.userId
								} //设定异步数据接口的额外参数
								//,height: 300
							});
							break;
						case 'getCheckLength':
							var data = checkStatus.data;
							layer.msg('选中了：' + data.length + ' 个');
							break;
						case 'isAll':
							layer.msg(checkStatus.isAll ? '全选' : '未全选');
							break;
					};
				});
				table.on('tool(kkk)', function(obj) {
					var data = obj.data;
					console.log(obj.data)
					if (obj.event === 'edit') {
						window.location.href = 'app_edit.html' + '?appNum=' + data.appNum
					}
				});
			});