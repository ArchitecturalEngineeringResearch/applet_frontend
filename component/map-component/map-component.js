// component/map-component/map-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    switchoverStatus:{
      type:Boolean,
      vaule:true,
      observer: function (oldVal){
        //开关数据变化
        this.getData()
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
    controls:'',
    markers:[ ],
  },
  ready(){
    //初始化定位
    this.goLocation();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    regionchange(e) {

    },
    markertap(e) {

    },
    controltap(e) {
      switch (e.controlId){
        case 0:
        //定位
          this.goLocation();
        break;
      }
    },
    goLocation(){
      let location = new Promise((resolve,reject)=>{
        wx.getLocation({
          type: 'gcj02',
          success: resolve
        })
      })
      location.then((res) => {
        let latitude = res.latitude
        let longitude = res.longitude
        this.setData({
          longitude: longitude,
          latitude: latitude,
        });
        //初始化数据
        this.initMapinfo();
      })
    },
    initMapinfo() {
      this.setData({
        markers: [
          {
            iconPath: "/resource/image/map/灯泡.png",
            id: 1,
            latitude: this.data.latitude-0.001,
            longitude: this.data.longitude - 0.001,
            width: 50,
            height: 50
          }
        ]
      });
      //初始化地图信息
      wx.getSystemInfo({
        success:(res)=>{
          this.setData({
            controls: [{
              id: 0,
              iconPath: '/resource/image/tabBar/定位.png',
              position: {
                left: 5,
                top: (res.windowHeight - res.windowHeight * 0.1) * 0.99 - 40,
                width: 40,
                height: 40
              },
              clickable: true
            }]
          })
        }
      })
    },
    getData(){
      if (this.data.switchoverStatus){
        this.setData({
          markers: [
            {
              iconPath: "/resource/image/map/灯泡.png",
              id: 1,
              latitude: this.data.latitude - 0.001,
              longitude: this.data.longitude - 0.001,
              width: 50,
              height: 50
            },
            {
              iconPath: "/resource/image/map/灯泡.png",
              id: 2,
              latitude: this.data.latitude - 0.002,
              longitude: this.data.longitude - 0.006,
              width: 50,
              height: 50
            },
            {
              iconPath: "/resource/image/map/灯泡.png",
              id: 3,
              latitude: this.data.latitude + 0.005,
              longitude: this.data.longitude - 0.002,
              width: 50,
              height: 50
            }
          ]
        });
      }else{
        this.setData({
          markers: [
            {
              iconPath: "/resource/image/map/工人.png",
              id: 1,
              latitude: this.data.latitude + 0.001,
              longitude: this.data.longitude + 0.001,
              width: 50,
              height: 50
            }
          ]
        });
      }
    }
  }
})
