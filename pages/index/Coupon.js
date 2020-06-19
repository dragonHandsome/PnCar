const app = getApp();
import {CouponData} from '../../data/Data.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ...CouponData,
    current:0,
    imgs:[
      ['/images/08.png', '/images/09.png', '/images/10.png'],
      ['/images/08-1.png', '/images/09-1.png', '/images/10-1.png'],
      ['/images/08-2.png', '/images/08-2.png', '/images/08-2.png'],
    ]
  },
  changeCoupon(e){
    let current = app.getDataset1(e,'current');
    console.log(current)
    if (current != this.data.current){
      this.setData({
        current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})