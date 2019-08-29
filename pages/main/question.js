

const peisongData = function () {
    let ret =  [{
					title: "0-10分，您有多大可能推荐我们的品牌和产品给其他经销商或亲朋好友?",
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
					title: "关于百威中国合作伙伴关系？",
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
					title: "关于百威中国品牌和产品组合？",
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
					title: "产品包装 ( 比如包装损坏（纸箱撕裂/压破/凹陷/开胶掉底/塑箱断裂）？",
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
					title: "产品酒龄？",
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
					title: "产品酒液 如酒体和口味（香气、苦度、酒体协调）？",
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
					title: "请问您更愿意推荐/希望百威提升以下哪些方面?",
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
				];
				
    return ret;
}

export default {
    peisongData
}
