    $(".quit").bind("click",function(){
        localStorage.removeItem('userId')
		localStorage.removeItem('name')
		window.location.href = 'login.html'
		console.log(localStorage.userId)
    });