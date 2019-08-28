<template>
	<view class="content">
		<view v-if="hasLogin" class="hello">
			<!-- <view class="title">
				您好 {{userName}}，您已成功登录。
			</view> -->
			<view>
				<scroll-view scroll-y="true" class="scroll-Y">
					<view class="self-scroll-view-item" v-for="(item,index) in question" :key="item.id">
					<text>{{item.title + (item.isMultiple ? "(多选)" : "")}}</text>
					<view  class="uni-list">
						<checkbox-group v-if="item.isMultiple" @change="radioChange($event,index)">
						                <label class="uni-list-cell uni-list-cell-pd" v-for="(item1, index1) in item.answer">
											<view>{{item1.name}}</view>
						                    <view>
						                        <checkbox :value="item1.value" :checked="item1.checked=='true'" />
						                    </view>
						                    
						                </label>
						 </checkbox-group>
									
						<radio-group v-else  @change="radioChange($event,index)">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item1, index1) in item.answer">
								<view>{{item1.name}}</view>
								<view>
									<radio   :value="index1"  :checked="item1.checked=='true'" /> 
								</view>
							</label>
						</radio-group>
						
					</view>
					</view>
					<view @tap="sumbmit" class="uni-link uni-center uni-common-mt">
						<button v-if="hasLogin" type="default">提交</button>
					</view>
				</scroll-view>
			</view>
			
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好！
			</view>
			<view class="ul">
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
				question: [{
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
				{
					title: "问题1：黄河为什么是黄的？",
					answer: [{
							value: 'A',
							name: 'A:太多沙2'
						},
						{
							value: 'B',
							name: 'B:太多沙2',
							checked: 'true'
						},
						{
							value: 'C',
							name: 'C:太多沙2'
						}
					]
				}, 
				{
					title: "问题1：黄河为什么是黄的？",
					answer: [{
							value: 'A',
							name: 'A:太多沙3'
						},
						{
							value: 'B',
							name: 'B:太多沙3',
							checked: 'true'
						},
						{
							value: 'C',
							name: 'C:太多沙3'
						}
					]
				}, 
				{
					title: "问题1：黄河为什么是黄的？",
					answer: [{
							value: 'A',
							name: 'A:太多沙4'
						},
						{
							value: 'B',
							name: 'B:太多沙4',
							checked: 'true'
						},
						{
							value: 'C',
							name: 'C:太多沙4'
						}
					]
				},
				{
					title: "问题1：黄河为什么是黄的？",
					isMultiple:true,
					answer: [{
							value: 'A',
							name: 'A:太多沙4'
						},
						{
							value: 'B',
							name: 'B:太多沙4',
							checked: 'true'
						},
						{
							value: 'C',
							name: 'C:太多沙4'
						}
					]
				}
				]
			}
		},
		methods: {
			radioChange(evt,item) {
				console.log(`evt${JSON.stringify(evt)}item${item}`);
				//为多选
				if (this.question[item].isMultiple == true) {
					                   let values = evt.detail.value;
					                for (let i = 0, lenI = this.question[item].answer.length; i < lenI; ++i) {
					                    let eachItem = this.question[item].answer[i];
					                    if(values.includes(eachItem.value)){
					                        this.$set(eachItem,'checked',"true")
					                    }else{
					                        this.$set(eachItem,'checked',"false")
					                    }
					                }
					console.log(`question${JSON.stringify(this.question)}`);
					return;
				}
				for (let i = 0; i < this.question[item].answer.length; i++) {
					this.question[item].answer[i].checked = "false";
				}
				this.question[item].answer[parseInt(evt.target.value)].checked = "true";
				console.log(`question${JSON.stringify(this.question)}`);
			},
			
			sumbmit: function() {
				
			}	
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
