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
    index: 0,//父节点选中的
    subordinate: 0,//二级菜单
    switchoverStatus: true, //true服务 false需求
    openPicker:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchover() {
      //开关
      this.setData({
        switchoverStatus: !this.data.switchoverStatus
      })
      this.triggerEvent('blockevent', { switchoverStatus: this.data.switchoverStatus });
    },
    selItem(e) {
      //二级
      this.setData({
        subordinate: e.detail.value
      })
    },
    bindPickerChange(e) {
      //父级发生改变
      this.setData({
        menus: config.work_type_tree[e.detail.value].childs,
        index: e.detail.value,
        subordinate:0,
      })
    },
    openPicker(){
      this.setData({
        openPicker: !this.data.openPicker
      })
    }
  }
})
