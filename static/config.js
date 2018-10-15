const own_menus = [
  { title: '发布记录', icon: 'icon-jilu-bangong', url:'record/record'},
  { title: '我的收藏', icon: 'icon-dianzan', url: 'collection/collection'},
  { title: '评论 / 回复', icon: 'icon-pinglun', url: 'comment/comment'},
]
const work_type_tree = [
  {
    name: '土建类',
    childs: [
      '植筋工',
      '钢筋工',
      '架子工',
      '混论土工',
      '模板工',
      '抹灰工',
      '砌筑工',
      '油漆工',
      '电焊工',
      '防水工',
      '水电工',
      '杂活工'
    ]
  },
  {
    name: '安装类',
    childs: [
      '通风工',
      '起重工',
      '管道工',
      '电器工',
      '弱电工',
      '给排水',
      '安装钳工',
      '照明线路',
      '钢结构工',
      '其他安装',
    ]
  },
  {
    name: '驾驶类',
    childs: [
      '挖机',
      '叉车',
      '翻斗车',
      '吊车',
      '搅拌车',
      '半挂车'
    ]
  },
  {
    name: '班组类',
    childs: [
      '劳务公司',
      '架工班组',
      '木工班组',
      '钢筋班组',
      '杂活力工',
      '其他班组'
    ]
  },

]

const work_group = ['土建类', '安装类', '驾驶类', '班组类']
const work_type_childs = [
  [
    '植筋工',
    '钢筋工',
    '架子工',
    '混论土工',
    '模板工',
    '抹灰工',
    '砌筑工',
    '油漆工',
    '电焊工',
    '防水工',
    '水电工',
    '杂活工'
  ],
  [
    '通风工',
    '起重工',
    '管道工',
    '电器工',
    '弱电工',
    '给排水',
    '安装钳工',
    '照明线路',
    '钢结构工',
    '其他安装',
  ],
  [
    '挖机',
    '叉车',
    '翻斗车',
    '吊车',
    '搅拌车',
    '半挂车'
  ],
  [
    '劳务公司',
    '架工班组',
    '木工班组',
    '钢筋班组',
    '杂活力工',
    '其他班组'
  ]
]
module.exports = {
  own_menus,
  work_type_tree,
  work_group,
  work_type_childs
}