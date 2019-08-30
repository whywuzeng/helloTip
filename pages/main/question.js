

const allData = function () {
    let ret =  [{
					title: "0-10分，您有多大可能推荐我们的品牌和产品给其他经销商或亲朋好友?",
					answer: [{
							value: '0',
							name: '0'
						},
						{
							value: '1', 
							name: '1'
						},
						{
							value: '2',
							name: '2'
						},
						{
							value: '3',
							name: '3'
						},
						{
							value: '4',
							name: '4'
						},
						{
							value: '5',
							name: '5'
						},
						{
							value: '6',
							name: '6'
						},
						{
							value: '7',
							name: '7'
						},
						{
							value: '8',
							name: '8'
						},
						{
							value: '9',
							name: '9'
						},
						{
							value: '10',
							name: '10'
						}
					]
				}, 
				{
					title: "关于百威中国",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '合作伙伴关系'
						},
						{
							value: '2',
							name: '品牌和产品组合',
						}
					]
				}, 
				{
					title: "产品质量",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '产品包装 ( 比如包装损坏（纸箱撕裂/压破/凹陷/开胶掉底/塑箱断裂）'
						},
						{
							value: '2',
							name: '产品酒龄',
						},
						{
							value: '3',
							name: '产品酒液 如酒体和口味（香气、苦度、酒体协调）'
						}
					]
				}, 
				{
					title: "下单和收货(包括配送和自提）的体验 ",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '运输包装安全性（货物稳定/完整）'
						},
						{
							value: '2',
							name: '货物在订单请求交货日期内发出',
						},
						{
							value: '3',
							name: '回瓶及时性（及时排计划/承运商未拒绝回瓶）'
						},
						{
							value: '4',
							name: '破损赔付'
						},
						{
							value: '5',
							name: '货物能在订单请求交货日期内备好'
						},
						{
							value: '6',
							name: '工厂能按车辆预约时间（±2小时）将车辆准时放行进厂'
						},
						{
							value: '7',
							name: '工厂的运作人员提供良好的服务品质'
						}
					]
				},
				{
					title: "客户服务和售后支持",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '价格和促销活动'
						},
						{
							value: '2',
							name: '市场活动',
							
						},
						{
							value: '3',
							name: '公司的垫付款返还及零售点奖励的审核进度'
						},
						{
							value: '4',
							name: '百威销售同事至少每月拜访一次'
						},
						{
							value: '5',
							name: '百威中国的销售同事和您公司沟通过本月、本季、本年度目标并核实完成情况'
						}
					]
				},
				{
					title: "若您还有其他反馈，请告诉我们",
					isFillIn:true,
					content:"",
					placeholder:"请输入反馈信息"
				}
				
				];
				
    return ret;
}

const peisongData = function () {
    let ret =  [{
					title: "0-10分，您有多大可能推荐我们的品牌和产品给其他经销商或亲朋好友?",
					answer: [{
							value: '0',
							name: '0'
						},
						{
							value: '1', 
							name: '1'
						},
						{
							value: '2',
							name: '2'
						},
						{
							value: '3',
							name: '3'
						},
						{
							value: '4',
							name: '4'
						},
						{
							value: '5',
							name: '5'
						},
						{
							value: '6',
							name: '6'
						},
						{
							value: '7',
							name: '7'
						},
						{
							value: '8',
							name: '8'
						},
						{
							value: '9',
							name: '9'
						},
						{
							value: '10',
							name: '10'
						}
					]
				}, 
				{
					title: "关于百威中国",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '合作伙伴关系'
						},
						{
							value: '2',
							name: '品牌和产品组合',
						}
					]
				}, 
				{
					title: "产品质量",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '产品包装 ( 比如包装损坏（纸箱撕裂/压破/凹陷/开胶掉底/塑箱断裂）'
						},
						{
							value: '2',
							name: '产品酒龄',
						},
						{
							value: '3',
							name: '产品酒液 如酒体和口味（香气、苦度、酒体协调）'
						}
					]
				}, 
				{
					title: "下单和收货(包括配送和自提）的体验 ",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '运输包装安全性（货物稳定/完整）'
						},
						{
							value: '2',
							name: '货物在订单请求交货日期内发出',
						},
						{
							value: '3',
							name: '回瓶及时性（及时排计划/承运商未拒绝回瓶）'
						},
						{
							value: '4',
							name: '破损赔付'
						}
					]
				},
				{
					title: "客户服务和售后支持",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '价格和促销活动'
						},
						{
							value: '2',
							name: '市场活动',
							
						},
						{
							value: '3',
							name: '公司的垫付款返还及零售点奖励的审核进度'
						},
						{
							value: '4',
							name: '百威销售同事至少每月拜访一次'
						},
						{
							value: '5',
							name: '百威中国的销售同事和您公司沟通过本月、本季、本年度目标并核实完成情况'
						}
					]
				},
				{
					title: "若您还有其他反馈，请告诉我们",
					isFillIn:true,
					content:"",
					placeholder:"请输入反馈信息"
				}
				
				];
				
    return ret;
}

const zitiData = function () {
    let ret =  [{
					title: "0-10分，您有多大可能推荐我们的品牌和产品给其他经销商或亲朋好友?",
					answer: [{
							value: '0',
							name: '0'
						},
						{
							value: '1', 
							name: '1'
						},
						{
							value: '2',
							name: '2'
						},
						{
							value: '3',
							name: '3'
						},
						{
							value: '4',
							name: '4'
						},
						{
							value: '5',
							name: '5'
						},
						{
							value: '6',
							name: '6'
						},
						{
							value: '7',
							name: '7'
						},
						{
							value: '8',
							name: '8'
						},
						{
							value: '9',
							name: '9'
						},
						{
							value: '10',
							name: '10'
						}
					]
				}, 
				{
					title: "关于百威中国",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '合作伙伴关系'
						},
						{
							value: '2',
							name: '品牌和产品组合',
						}
					]
				}, 
				{
					title: "产品质量",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '产品包装 ( 比如包装损坏（纸箱撕裂/压破/凹陷/开胶掉底/塑箱断裂）'
						},
						{
							value: '2',
							name: '产品酒龄',
						},
						{
							value: '3',
							name: '产品酒液 如酒体和口味（香气、苦度、酒体协调）'
						}
					]
				}, 
				{
					title: "下单和收货(包括配送和自提）的体验 ",
					isMultiple:true,
					answer: [
						{
							value: '1',
							name: '货物能在订单请求交货日期内备好'
						},
						{
							value: '2',
							name: '工厂能按车辆预约时间（±2小时）将车辆准时放行进厂'
						},
						{
							value: '3',
							name: '工厂的运作人员提供良好的服务品质'
						}
					]
				},
				{
					title: "客户服务和售后支持",
					isMultiple:true,
					answer: [{
							value: '1',
							name: '价格和促销活动'
						},
						{
							value: '2',
							name: '市场活动',
							
						},
						{
							value: '3',
							name: '公司的垫付款返还及零售点奖励的审核进度'
						},
						{
							value: '4',
							name: '百威销售同事至少每月拜访一次'
						},
						{
							value: '5',
							name: '百威中国的销售同事和您公司沟通过本月、本季、本年度目标并核实完成情况'
						}
					]
				},
				{
					title: "若您还有其他反馈，请告诉我们",
					isFillIn:true,
					content:"",
					placeholder:"请输入反馈信息"
				}
				
				];
				
    return ret;
}

export default {
    allData,
	peisongData,
	zitiData
}
