const app = getApp();
import {searchData} from '../../data/Data.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ...searchData,
    focusFlag: '0',
    cityNotNead:true,
    selectFlag: false,
    sortImg: ['/images/ic-sort.png', '/images/ic-sort-cur.png'],
    selectI: 0,
    selectInfo: [0, 0, 0]
  },
  searchfocus(e) {
    let focusFlag = app.getDataset1(e, 'focus');
    this.setData({
      focusFlag
    })
  },
  sortSelect(e) {
    let selectI = app.getDataset2(e, 'i'),
      val = this.data.selectInfo[selectI] + 1;
    let selectInfo = [0, 0, 0];
    if (val >= 3) val = 0;
    selectInfo[selectI] = val;
    this.setData({
      selectI,
      selectInfo
    })
  },
  changeSelect() {
    let selectFlag = !this.data.selectFlag;
    this.setData({
      selectFlag
    })
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