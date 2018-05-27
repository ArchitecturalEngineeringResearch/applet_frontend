// pages/aboutMe/aboutMe.js
var config = require('../../static/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    whetherLogIn:false,
    userInfo:{},
    menus: config.own_menus
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadUserInfo();
  },
  onGotUserInfo: function (e){
    let userInfo = e.detail.userInfo;
    wx.setStorage({
      key: "userInfo",
      data: userInfo,
      success:(e)=>{
       this.loadUserInfo()
      }
    })
  },
  loadUserInfo:function(){
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        whetherLogIn: true,
        userInfo: userInfo
      })
    }
  }
})