<template>
	<view class="content">
		<view class="input-group">
			<!-- <view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view> -->
			<view class="input-row border">
				<text class="title" style="width: 30%;">供应商编码：</text>
				<m-input class="m-input" type="text" clearable focus v-model="coding" placeholder="请输入编码"></m-input>
			</view>
			<view class="input-row border">
				
				<!-- <text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input> -->
				
					<checkbox-group  @change="radioChange" style="display: flex;">
					                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in selectItem" :key="item.name">
										
					                    <view>
					                        <checkbox :value="item.name" :checked="item.checked" />
					                    </view>
										<view>{{item.name}}</view>
					                    
					                </label>
					 </checkbox-group>
				 
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">开始调研</button>
		</view>
		<!-- <view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view> -->
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				coding: '',
				positionTop: 0,
				selectItem:[{name:"配送",checked:true},{name:"自提",checked:false}]
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				// if (this.account.length < 5) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '账号最短为 5 个字符'
				// 	});
				// 	return;
				// }
				// if (this.password.length < 6) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '密码最短为 6 个字符'
				// 	});
				// 	return;
				// }
				
				if (this.coding.length <= 0) {
					uni.showToast({
						icon: 'none',
						title: '供应商编码不能为空'
					});
					return;
				}
				let filterArr = this.selectItem.filter(item => item.checked == true);
				// console.log(`filter:${JSON.stringify(filterArr)}`);
				if (filterArr.length <= 0) {
					uni.showToast({
						icon: 'none',
						title: '请选择配送或自提至少一种'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				uni.request({
				    url:`http://192.168.1.245:8080/api/supplier/${this.coding}`,//仅为示例，并非真实接口地址。
				    data: {},
				    success: (res) => {
						console.log(res.data.result.supplierName);
						if (res.data.code == 1) {
								this.toMain(this.coding,res.data.result.supplierName,filterArr);
						}
						else {
							uni.showToast({
								icon: 'none',
								title: '供应商编码错误'
							});
						}
				    }
				});
				// if (validUser) {
				
				// } else {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '用户账号或密码不正确',
				// 	});
				// }
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								this.toMain(infoRes.userInfo.nickName);
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			toMain(code,supplierName,filterArr) {
				let obj = {
					code:code,
					supplierName:supplierName,
					filterArr:filterArr
				};
				this.login(obj);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				uni.reLaunch({
					url: '../main/main',
				});

			},
			radioChange(evt) {
				console.log(`evt:${JSON.stringify(evt)}`);
				let values = evt.detail.value;
				                for (let i = 0, lenI = this.selectItem.length; i < lenI; ++i) {
				                    let eachItem = this.selectItem[i];
				                    if(values.includes(eachItem.name)){
				                        this.$set(eachItem,'checked',true)
				                    }else{
				                        this.$set(eachItem,'checked',false)
				                    }
				                }
				console.log(`selectItem:${JSON.stringify(this.selectItem)}`);
				}
		},
		onReady() {
			this.initPosition();
			this.initProvider();
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}
</style>
