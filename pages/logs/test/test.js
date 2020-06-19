const initConfig = (width=320,baseI=3,size = 40,time=3000) => {
  width = width - size;
  let wid = wx.getSystemInfoSync().windowWidth;
  return {
    width,
    baseI,
    size,
    sizeHalf:size / 2,
    time,
    baseLeft: (wid-width)/2,
  }
}
const Myconfig = initConfig();
let time,time2;
Page({
  data: {
    images:[
      "/images/pic-banner01.png",
      "/images/pic-banner01.png",
      "/images/pic-banner01.png",
      "/images/pic-banner01.png",
      "/images/pic-banner01.png",
    ],
    i: Myconfig.baseI,
    left: Myconfig.width * Myconfig.baseI + Myconfig.sizeHalf /2,
    moveFlag:false,
    animationFlag:true
  },
  MoveTrue(){
    this.data.moveFlag = true
    clearTimeout(time2)
  },
  MoveFalse(){
    this.data.moveFlag = false
    time2 = setTimeout(() => {
      this.times()
    }, Myconfig.time)
  },
  scroll(e){
    let _this = this;
    let {scrollLeft} = e.detail,
      { i, left, moveFlag } = _this.data,
      { width, sizeHalf } = Myconfig;
    if (!moveFlag) return;
    time && clearTimeout(time);
    time = setTimeout(()=>{
      i = (scrollLeft + (width / 4)) / width >> 0;
      let left = width * i + sizeHalf;
      _this.setData({ i, left})
    },500)
  },
  onLoad(){
    time2 = setTimeout(()=>{
        this.times()
    }, Myconfig.time)
  },
  times() {
    let { i, left, images, animationFlag } = this.data,
      { width, sizeHalf, time } = Myconfig;
    i++;
    if (i >= images.length - 1){
      i = 1;
      this.setData({
        animationFlag:false
      })
      time = 0
    } else if (animationFlag === false){
      this.setData({
        animationFlag: true,
      })
    }
    left = width * i + sizeHalf;
    this.setData({ i, left })
    time2 = setTimeout(() => {
        this.times()
    }, time)
  }
})
