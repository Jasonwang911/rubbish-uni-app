<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.getLocation({
			// 	type: 'wgs84',
			// 	success: function (res) {
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 	}
			// });
			// uni.chooseLocation({
			// 	success: function (res) {
			// 		console.log('位置名称：' + res.name);
			// 		console.log('详细地址：' + res.address);
			// 		console.log('纬度：' + res.latitude);
			// 		console.log('经度：' + res.longitude);
			// 	}
			// });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
uni-page-body, page {
	background-color: #f6f6f6;
	font-size: 30upx;
	width: 100%;
}
</style>
