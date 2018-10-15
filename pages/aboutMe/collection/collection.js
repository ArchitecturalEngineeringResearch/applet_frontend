Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      userName: '周建',
      time:'2018-07-09',
      avater: '',
      type: '驾驶员-货车司机',
      content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工写招工类型可写招工'
    }, {
        userName: '李耀',
        time: '2018-07-09',
        avater: '',
        type: '土建类-植筋工',
        content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工',
        images: ['../../../resource/image/record/1.jpeg', '../../../resource/image/record/2.jpeg']
      }, {
        userName: '李耀',
        time: '2018-07-09',
        avater: '',
        type: '土建类-植筋工',
        content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工'
      }, {
        userName: '李耀',
        time: '2018-07-09',
        avater: '',
        type: '土建类-植筋工',
        content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工'
      }, {
      userName: '周建',
        time: '2018-07-09',
      avater: '',
      type: '驾驶员-货车司机',
      content: '可写招工类型，电话，信息服务，以及地址等等可写招工类型，电话，信息服务，以及地址等等可写招工类型可写招工'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  jumpTo: function (e) {
    let pid = e.currentTarget.dataset.pid;
    console.log(pid)
    wx.navigateTo({
      url: '../userInfo/userInfo?'+pid
    })
  }
})