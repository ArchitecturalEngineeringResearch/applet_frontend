// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: '找活', value: '0', checked: true },
      { name: '招工', value: '1' }
    ],
    location: {},
    markers: {},
    title: '',//简短描述
    content: '',//详情描述
    phone: '',//电话
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initLocation();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  radioChange: function (e) {
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    this.setData({
      radioItems: radioItems
    });
  },
  /**
   * 定位改变
   * */
  location: function () {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          location: {
            longitude: res.longitude,
            latitude: res.latitude,
          },
          markers: [{
            iconPath: "/resource/image/map/定位.png",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }]
        })
      }
    })
  },
  initLocation: function () {
    let loca = new Promise((resolve, reject) => {
      wx.getLocation({
        success: resolve
      })
    });
    loca.then((res) => {
      this.setData({
        location: {
          longitude: res.longitude,
          latitude: res.latitude
        }
      })
    })
  },
  publish: function () {
    let userInfo = wx.getStorageSync('userInfo');
    if (!userInfo) {
      wx.showToast({
        title: '发布失败!请到个人页面绑定账号',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    let assemble = this.assemble();
    if (!assemble.state) {
      console.log(assemble);
      wx.showToast({
        title: '请正确的填写',
        icon: 'none',
        duration: 2000
      })      
      return;
    }
    wx.request({
      url: 'http://192.168.199.136:3000/wxapp/',
      method: 'post',
      data: assemble.body,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  assemble: function () {
    let body, state=true;
    body = {
      location: this.data.location,
      title: this.data.title.length>=3? this.data.title : state = false,
      content: this.data.content ? this.data.content : state = false,
      phone: /^1[34578]\d{9}$/.test(this.data.phone) ? this.data.phone : state = false
    }
    return {
      body: body,
      state: state,
    };
  },
  titleV:function(e){
    //保存标题
    this.setData({
      title:e.detail.value
    })
  },
  contentV: function (e) {
    //保存内容
    this.setData({
      content: e.detail.value
    })
  },
  phoneV: function (e) {
    //保存电话
    this.setData({
      phone: e.detail.value
    })
  },
})