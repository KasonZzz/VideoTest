function VideoInit() {
//初始化視頻設置
	var player = videojs('example_video_1', {
		//静音
		muted: true,
		//进度条
		controls: true,
		//单曲循环
		loop: false,
		//预加载
		preload: true,
		//大按钮
		bigPlayButton: true,
		//倍速播放
		playbackRates: [0.5, 1, 1.5, 2, 3],
		//屏幕显示距离
		aspectRatio: "4:3",
//		poster: "https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=1140932995,2884081599&fm=85&s=3BA57D2219DC4CC848D02DD7020010BA",
	});

//视频的监听事件
	var options = {};
	var player = videojs('example_video_1', options, function onPlayerReady() {
		videojs.log('播放器已经准备好了!');
		//			this.play();
		this.on('ended', function() {
			alert("kason");

			videojs.log('播放结束了!');
		});
	});

}