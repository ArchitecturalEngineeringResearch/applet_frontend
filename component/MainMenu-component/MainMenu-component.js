// component/MainMenu-component/MainMenu-component.js
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
    menus: [
      '找开锁',
      '水电维修',
      '砖瓦工'
    ],
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
    }
  }
})
