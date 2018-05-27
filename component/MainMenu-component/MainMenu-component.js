// component/MainMenu-component/MainMenu-component.js
var config = require('../../static/config.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    array: config.work_group,
    menus: config.work_type_tree[0].childs,
    index:0,
    subordinate:0,//二级菜单
    switchoverStatus:true, //true服务 false需求
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchover(){
      //开关
      this.setData({
        switchoverStatus: !this.data.switchoverStatus
      })
      this.triggerEvent('blockevent', { switchoverStatus: this.data.switchoverStatus});
    },
    swiperItem(e){
      console.log(e.currentTarget.dataset.id)
      this.setData({
        subordinate: e ? e.currentTarget.dataset.id:0
      })
      console.log(this.data.subordinate == e.currentTarget.dataset.id)
    },
    bindPickerChange(e){
      this.setData({
        menus:config.work_type_tree[e.detail.value].childs,
        index: e.detail.value,
      })
    }
  }
})
