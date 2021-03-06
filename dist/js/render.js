//封装渲染模块
(function($,root){
	var $scope = $(document.body);
	//渲染歌曲信息
	function renderInfo(data){
		var html = "<h1 class='song-name'>"+data.song+"</h1>"+"<h3 class='singer-name'>"+data.singer+"</h3>"+"<h3 class='album-name'>"+data.album+"</h3>"
		$scope.find('.song-info').html(html);
	}
	//渲染歌曲图片
	function renderImage(src){
		var img = new Image();
		img.src = src;
		img.onload = function(){
			$scope.find(".song-img img").attr("src",src);
			root.blurImg(img,$scope)
		}
	}
	//渲染喜欢按钮
	function renderLikeBtn(isLike){
		if(isLike){
			$scope.find(".like-btn").addClass("liked");
		}else{
			$scope.find(".like-btn").removeClass("liked");
		}
	}
	function changeLikeBtn(){
		if($scope.find(".like-btn").hasClass('liked')){
			$scope.find(".like-btn").removeClass("liked");
		}else{
			$scope.find(".like-btn").addClass("liked");
		}
	}
	root.render = function(data){
		renderInfo(data);
		renderImage(data.image);
		renderLikeBtn(data.isLike);
	}
	root.like = {
		changeLikeBtn : changeLikeBtn
	}
}(window.Zepto,window.player||(window.player = {})))