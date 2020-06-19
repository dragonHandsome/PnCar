const app = getApp();
import {formatTime} from '../../utils/util.js';
const async = require("./async.min.js");
console.log(async)
const date = new Date()
const years = []
const months = []
const days = []
const NYR = [date.getFullYear(), date.getMonth(), date.getDate() - 1];

for (let i = date.getFullYear(), end = i + 2; i <= end; i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

/**
 * 省市区
 */
import { json } from '../../utils/nativeData.js';
const provinces = []
const citys = []
const countys = []
const indexs = [0, 0, 0]
json.forEach(current => {
  provinces.push(current.name)
});
function changeCity(i) {
  citys.length = 0;
  json[i].city.forEach(current => {
    citys.push(current.name)
  });
}
changeCity(0);
function changecounty(i, j) {
  countys.length = 0;
  json[i].city[j].area.forEach(current => {
    countys.push(current)
  });
}
changecounty(0,0)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: formatTime(new Date()).match(/\d{4}-\d{2}-\d{2}/),
    addressInfo: {
      name: '',
      phone: '',
      getTime: '',
      native: [],
      detailAddr: ''
    },
    years: years,
    months: months,
    days: days,
    year: NYR[0],
    value: [0, ...NYR.slice(1)],
    dateFlag: false,
    //省市区
    provinces,
    citys,
    countys,
    value2: indexs,
    cityPickerFlag: false,
    endValue: indexs
  },
  bindblur(e) {
    let val = e.detail.value,
      types = app.getDataset2(e, 'type');
    if (types && val != this.data.addressInfo[types]) {
      if (types == 'name') {
        this.setData({
          'addressInfo.name': val
        })
      } else if (types == 'phone') {
        //只允许16位以内长度数字
        val = val.match(/\d+/g);
        if(val!=null){
          val = val.join('').slice(0, 16);
          this.setData({
            'addressInfo.phone': val
          })
        }
      } else if (types == 'detailAddr'){
        this.setData({
          'addressInfo.detailAddr': val
        })
        console.log(val)
      }
    }
  },
  bindchange(e){
    let val = e.detail.value,
        types = app.getDataset2(e,'type')
    ;
    if (val != this.data.addressInfo[types]) {
        switch (types){
          case 'getTime':
            this.setData({
              'addressInfo.getTime': val
            })
          ;break;
          case 'native':
            this.setData({
              'addressInfo.native': val
            })
            console.log(val)
          ; break;
        }
      }
  },
  dealDate(val) {
    if (!val[0] && val[1] <= NYR[1]) {
      val[1] = NYR[1];
      if (val[2] < NYR[2]) val[2] = NYR[2];
    }
    if (val[1] == 1) {
      let year = NYR[0] + val[0];
      val[2] = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 28 : 27;
    } else if (val[2] == 30) {
      switch (val[1]) {
        case 0: case 2: case 4: case 6: case 8:
          break;
        default: val[2] = 29;
      }
    }
    return val;
  },
  bindChange: function (e) {
    const val = this.dealDate(e.detail.value);
    this.setData({
      value: val
    })
  },
  changeDateFlag(e) {
    let dateFlag = !this.data.dateFlag,
        types = app.getDataset2(e,'type');
    this.setData({
      dateFlag
    });
    if (types === 'submit'){
      let val = this.data.value,
        year = this.data.years[val[0]],
        month = this.data.months[val[1]],
        day = this.data.days[val[2]];
      this.setData({
        "addressInfo.getTime": [year,month,day].join('-')
      })
    }
  },
  bindChange2: function (e) {
    let val = e.detail.value,
      endValue = this.data.endValue;
    if (val[0] != endValue[0]) {
      changeCity(val[0]);
      changecounty(val[0], 0);
      this.setData({
        citys,
        countys
      })
    } else if (val[1] != endValue[1]) {
      changecounty(val[0], val[1]);
      this.setData({
        countys
      })
    }
    this.setData({
      endValue: val,
      value2:val
    })
  },
  changeCityFlag(e) {
    let cityPickerFlag = !this.data.cityPickerFlag;
    let types = app.getDataset2(e,'type');
    if (types === 'submit') {
      console.log(1)
      let val = this.data.value2,
        province = provinces[val[0]],
        city = citys[val[1]],
        county = countys[val[2]];
      this.setData({
        "addressInfo.native": [province, city, county],
        cityPickerFlag
      })
      return;
    }
    this.setData({
      cityPickerFlag
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