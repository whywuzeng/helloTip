<template>
	<view class="content">
		<view v-if="hasLogin" class="hello">
			<view class="title">
				您好 {{userName}}，您已成功登录。
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				 @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">
						<text>{{text.title}}</text>
						<view class="uni-list">
							<radio-group @change="radioChange">
								<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in text.answer" :key="item.value">
									<text>1111</text>
									<view>
										<radio :value="item.value" :checked="index === current" />
										<!-- :value="item.value" -->
									</view>
								</label>
							</radio-group>
						</view>
					</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客。
			</view>
			<view class="ul">
				<view>这是 uni-app 带登录模板的示例App首页。</view>
				<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				// question:[
				// 	text:{
				// 		title:"问题1：黄河为什么是黄的？",
				// 		answer:["A:太多沙","B:太多沙","C:太多沙"],
				// 	},
				// ],
				text: {
					title: "问题1：黄河为什么是黄的？",
					answer: [{
							value: 'A',
							name: 'A:太多沙'
						},
						{
							value: 'B',
							name: 'B:太多沙',
							checked: 'true'
						},
						{
							value: 'C',
							name: 'C:太多沙'
						}
					]
				},
				current: 0,
			}
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.text.answer.length; i++) {
					if (this.text.answer[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		}
	}
</script>

<style>
	.scroll-Y {
		flex: 1;
		max-height: 1280upx;
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}

	.scroll-view-item {
		height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.uni-list-cell {
		/* justify-content: flex-start */
	}
</style>
