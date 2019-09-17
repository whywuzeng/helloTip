<template>
	<!-- <view style="flex: 1;display: flex"> -->
		<view scroll-y="true" show-scrollbar="false" style="flex:1;background-color: #efeff4;padding: 20upx;">
		<view v-if="hasLogin" class="hello" >
			<!-- <view class="title">
				您好 {{userName}}，您已成功登录。
			</view> -->
			
					
					<view class="self-scroll-view-item" v-for="(item,index) in question" :key="item.id">
					<text>{{"问题" + (index+1) +"："+ item.title + (item.isMultiple ? "(多选)" : "")}}</text>
					
					<view  class="uni-list">
						<checkbox-group v-if="item.isMultiple" @change="radioChange($event,index)">
						                <label class="uni-list-cell uni-list-cell-pd" v-for="(item1, index1) in item.answer" :key="index1">
											<view>{{item1.name}}</view>
						                    <view>
						                        <checkbox :value="item1.value" :checked="item1.checked=='true'" />
						                    </view>
						                    
						                </label>
						 </checkbox-group>
						 
						 <view v-else-if="item.isFillIn" class="uni-textarea">
						         <textarea @input="contentChange($event,index)" v-model="item.content" placeholder-style="color:gray" :placeholder="item.placeholder">
								 </textarea>
						 </view>
									
						<radio-group v-else  @change="radioChange($event,index)">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item1, index1) in item.answer">
								<view>{{item1.name}}</view>
								<view>
									<radio   :value="index1"  :checked="item1.checked=='true'" /> 
								</view>
							</label>
						</radio-group>
						
					</view>
					<view class="">
						<view v-if="!item.isFillIn" class="uni-textarea">
						        <textarea   @input="reasonChange($event,index)" v-model="item.reason" placeholder-style="color:gray" placeholder="请输入选择的理由">
						        </textarea>
						</view>
					</view>
					
					
					</view>
					
					<view @tap="sumbmit" class="uni-link uni-center uni-common-mt">
						<button v-if="hasLogin" type="default">提交</button>
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
	<!-- </view> -->
</template>

<script>
	import request from './question.js';
	import {
	    mapState,
	    mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				question:[],
			}
		},
		methods: {
			...mapMutations(['logout']),
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
				// console.log(`question${JSON.stringify(this.question)}`);
				for (let i = 0; i < this.question.length; i++) {
					if (this.question[i].answer == null) {
						continue;
					}
					let selectAnser = this.question[i].answer.filter(item => item.checked == "true");
					if (selectAnser.length <= 0) {
						uni.showToast({
							icon: 'none',
							title: '请填写问题'+(i+1)
						});
						return;
					}
					console.log(this.question[i].reason);
					if (this.question[i].reason.length<=0) { 
						uni.showToast({
							icon: 'none',
							title: '请填写问题'+(i+1)+"的原因"
						});
						return;
						
					}
				};
				let requestAttr = [];
				this.question.forEach(element => {
					let eachItem = {};
					let anwser = "";
					if (element.isFillIn != true) {
						let anwserArr = element.answer.filter((item) => item.checked == "true");
						anwserArr.forEach (e => {
							if (anwser.length <= 0) {
								anwser = e.name;
							}
							else {
								anwser += "," + e.name;
							}
						});
						eachItem.title = element.title;
						eachItem.reason = element.reason;
						eachItem.answer = anwser;
						eachItem.code = this.code;
						requestAttr.push(eachItem);
					}
					else {
						eachItem.title = element.title;
						eachItem.reason = "";
						eachItem.answer = element.content;
						eachItem.code = this.code;
						requestAttr.push(eachItem);
					}
				});
				console.log(`requestAttr:${JSON.stringify(requestAttr)}`);
				uni.request({
				    url:`https://wccstest.ab-inbev.cn/WCCSAPI/WechatProgram.aspx?type=02`,//仅为示例，并非真实接口地址。
				    data: requestAttr, 
					method:"POST",
				    success: (res) => {
						console.log(`${JSON.stringify(res.data)}`);
						if (res.data.Result == "True") {
								uni.showToast({
									icon: 'none',
									title: "提交成功"
								});
								this.logout();
								uni.navigateBack({
								    delta: 1,
								    animationType: 'pop-out',
								    animationDuration: 200
								});
						}
						else {
							uni.showToast({
								icon: 'none',
								title: "提交失败"
							});
						}
				    },
					fail:(res) => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					}
				});
				
			},
			contentChange(avg,index) {
				this.question[index].content = avg.detail.value;
			},
			reasonChange (avg,index) {
				this.question[index].reason = avg.detail.value;
			}
			
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName',"selectType","code"]),
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
			else {
				if (this.selectType.length == 2) {
					this.question = request.allData();
				}
				else if (this.selectType[0].name == "配送") {
					this.question = request.peisongData();
				}else {
					this.question = request.zitiData();
				}
				
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
