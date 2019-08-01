<template>
	<view class="content">
		<view>
			<text class="title">{{addressName}}</text>
		</view>
	</view>
</template>

<script>
	import amap from '../../common/utils/amap-wx.js';  
	
	export default {
		data() {
			return {
				loadMap: '定位中',
				amapPlugin: null,  
				gaoDeKey: 'f725aaf46db3765941463defd0342c18',
				addressName: '定位中...',
				weather: {  
						hasData: false,  
						data: []  
				},
				location: ''
			}
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({  
					key: this.gaoDeKey  
			}); 
			this.getRegeo()
		},
		methods: {
			getRegeo() {  
					uni.showLoading({  
							title: '获取信息中'  
					});  
					this.amapPlugin.getRegeo({  
							success: (data) => {  
									console.log(JSON.stringify(data))  
									this.addressName = data[0].regeocodeData.formatted_address;  
									uni.hideLoading();  
							}  
					});  
			} 
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
