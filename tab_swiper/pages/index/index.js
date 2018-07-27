//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()

Page({
  data: {
    School_introduction: [],
    tabs: ["韶院简介", "韶院报告", "缤纷社团"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  //事件处理函数
 

  onLoad: function () {
    this.School_introduction();
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log((res.windowWidth / that.data.tabs.length - sliderWidth) / 2, res.windowWidth / that.data.tabs.length * that.data.activeIndex)
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    console.log(e.currentTarget.id)
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      currentTab: e.currentTarget.id
    });
    var title = this.data.tabs[e.currentTarget.id]
    wx.setNavigationBarTitle({
      title: title
    })
    if (e.currentTarget.id == 0) {
      this.School_introduction();
    } else if (e.currentTarget.id == 1) {
      this.School_news();
    } else {
      this.School_association();
    }
  },
  currentTab: function (e) {
    var that = this
    this.setData({
      activeIndex: e.detail.current,
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    console.log(e.detail.current)
    var title = this.data.tabs[e.detail.current]
    wx.setNavigationBarTitle({
      title: title
    })
    if (e.detail.current == 0) {
      this.School_introduction();
    } else if (e.detail.current == 1) {
      this.School_news();
    } else {
      this.School_association();
    }
  },
  School_introduction: function () {
    console.log('学校简介')
  },
  School_news: function () {
    console.log('韶院报告')

  },
  School_association: function () {
    console.log('缤纷社团')

  },

  
})
