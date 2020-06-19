const app = getApp();
import {shopDetailData} from '../../data/Data.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ...shopDetailData,
    indicatorDots: true,
    autoplay: true,
    interval: 4000,//swiper时间
    duration: 500,//动画时间
    buyFlag: false,
    num: 1,
    colorSelect: -1,
    romSelect: -1,
    selectInfo:{
      flag:false,
      nature:'',
      rom:''
    },
  },
  buyShop(e) {
    let buyFlag = !this.data.buyFlag;
    this.setData({
      buyFlag: buyFlag
    })
  },
  changeNum(e) {
    let haviorFlag = app.getDataset1(e, 'havior') == '0',
      num = this.data.num;
    num = haviorFlag ? num - 1 : num + 1;
    if (num < 1 || num > 1000) { }
    else {
      this.setData({
        num
      })
    }
  },
  selectNature(e){
    let colorSelect = app.getDataset1(e,'id');
    if (colorSelect != undefined && colorSelect != this.data.colorSelect) {
      let name = app.getDataset1(e, 'name');
      this.setData({
        colorSelect,
        'selectInfo.nature':name
      })
      if (!this.data.selectInfo.flag) this.setData({ 'selectInfo.flag': true });
    }
  },
  selectRom(e){
    let romSelect = app.getDataset1(e, 'id');
    if (romSelect != undefined && romSelect != this.data.romSelect) {
      let name = '、'+app.getDataset1(e, 'name');
      this.setData({
        romSelect,
        'selectInfo.rom': name
      })
      if (!this.data.selectInfo.flag) this.setData({ 'selectInfo.flag': true });
    }
  },
  seeBigImg(e){
    let src = app.getDataset2(e,'src');
    wx.previewImage({
      urls:[src]
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