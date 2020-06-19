//index.js
//获取应用实例
const app = getApp()
import { indexData } from '../../data/Data.js';
Page({
  data: {
    ...indexData,
    current: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 4000,//swiper时间
    duration: 500,//动画时间
    sortImg: ['/images/ic-sort.png', '/images/ic-sort-cur.png'],
    selectI: 0,
    selectInfo: [0, 0, 0],
    focusFlag: '0',
    selectFlag: false,
    cityFlag: false,
    selectABC: '',
    moveY: 0
  },
  initHandle({ changedTouches: [{ pageY }], target: { dataset: { i } } }) {
    if (i != null) {
      this.moveY = pageY;
      this.i = +i;
    }
  },
  handle({ changedTouches: [{ pageY }] }) {
    let val = pageY - this.moveY,
      offsetY = val;
    if (Math.abs(offsetY) >= 19) {
      offsetY -= 19;
      this.moveY += offsetY >= 0 ? 19 : -19;
      this.i += offsetY >= 0 ? 1 : -1;
      console.log(val,this.i)
    }
  },
  tabChange(e) {
    let current = app.getDataset1(e, 'type');
    this.setData({
      current
    })
  },
  searchfocus(e) {
    let focusFlag = app.getDataset1(e, 'focus');
    if (this.data.cityFlag && focusFlag != '1' && this.data.focusFlag != '1') {
      this.setData({
        cityFlag: false
      })
    }
    this.setData({
      focusFlag
    })
  },
  changeSelect() {
    let selectFlag = !this.data.selectFlag;
    this.setData({
      selectFlag
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
  cityfocus() {
    this.setData({
      cityFlag: true
    })
  },
  selectWhich(e) {
    let selectABC = app.getDataset1(e, 'sort');
    if (!selectABC) return;
    this.setData({
      selectABC
    })
  },
  getCity(e) {
    let id = app.getDataset1(e, 'id');
    console.log(id);
  },
  searchItem(e) {
    let val = e.detail.value,
      url = `search?search=${val}`
      ;
    this.setData({
      focusFlag: '0'
    });
    if (val) {
      wx.navigateTo({
        url
      })
    }
  },
  onLoad: function () {
    this.setData({
      selectI: undefined
    })
  },
  getUserInfo: function (e) {

  }
})
