//app.js//long
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  getDataset1(e, data) {
    return e.target.dataset[data]
  },
  getDataset2(e, data) {
    return e.currentTarget.dataset[data]
  }
})