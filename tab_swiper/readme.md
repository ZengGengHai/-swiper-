/*
韶关学院16软工曾耿海
方向：前端
时间：2018年7月27号

*/














1.顶部导航栏采取固定定位；
2.tabs: ["韶院简介", "韶院报告", "缤纷社团"],每一项下标都有记录，为0,1,2；
3.导览栏底部滑动，一开始设置宽度为100%；

<view class="school-navbar__slider" style="left: {{sliderLeft}}px; transform: translateX({{sliderOffset}}px); -webkit-transform: translateX({{sliderOffset}}px);"></view>

再根据左边移动多少sliderOffset 决定的

   wx.getSystemInfo({
      success: function (res) {
        console.log((res.windowWidth / that.data.tabs.length - sliderWidth) / 2, res.windowWidth / that.data.tabs.length * that.data.activeIndex)
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    获取设备的高度：wx.getSystemInfo
    左边空的距离sliderLeft
    要移动的距离sliderOffset


  4.tabClick（）事件是点击导览栏事件确定点击哪一个，再改变数值 currentTab是底部内容显示的id
  this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      currentTab: e.currentTarget.id
    });

  5.current='{{activeIndex}}'确定要展示的模块
    bindchange='currentTab'事件识别有没有滑动

         <swiper current='{{activeIndex}}' style='height:96vh;' bindchange='currentTab'>
          <swiper-item>
            <template is="school-introduction" data="{{School_introduction}}"/>
          </swiper-item>
          <swiper-item > 
            <template is="school-news" data="{{NewsArray}}"/>                       
          </swiper-item>
          <swiper-item >
            <template is="school-association" />  
          </swiper-item>
        </swiper>