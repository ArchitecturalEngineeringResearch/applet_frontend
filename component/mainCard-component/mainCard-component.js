// component/mainCard-component/mainCard-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList: {
      type: Array,
      vaule: [1, 2, 3, 4],
      observer: function(oldVal) {
        //开关数据变化
        this.getData()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
      userName: '周建',
      avater: '',
      type: '驾驶员-货车司机',
      content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工'
    }, {
        userName: '李耀',
        avater: '',
        type: '土建类-植筋工',
        content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工'
      }, {
        userName: '周建',
        avater: '',
        type: '驾驶员-货车司机',
        content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工'
      }],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取数据
    getData() {

    },
    //跳转到详情页面
    jumpDetails(e){
      //获取跳转的帖子id
      let pid = e.target.dataset.pid;
      wx.navigateTo({
        url: '../../pages/detailsPage/detailsPage?pid=' + pid,
      })
    },
    //拨打电话
    callPhone(e){
      //获取电话号码
      let phone = e.target.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: phone
      })
    } 
  }
})