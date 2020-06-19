//Coupon
const CouponData = {//优惠券信息
  CouponCard:[//数组下标 0 未使用 1已使用 2已过期
    [
      {
        id:0,
        num:7,//折数
        name:'依依服饰',
        ms:'全场冬装参与活动',//描述
        timeStart:'2018-05-09',
        timeEnd:'2018-05-12'
      },
      {
        id: 0,
        num: 6,//折数
        name: '依依服饰',
        ms: '全场冬装参与活动',//描述
        timeStart: '2018-05-09',
        timeEnd: '2018-05-12'
      },
      {
        id: 0,
        num: 5,//折数
        name: '依依服饰',
        ms: '全场冬装参与活动',//描述
        timeStart: '2018-05-09',
        timeEnd: '2018-05-12'
      }
    ],
    [
      {
        id: 0,
        num: 5,//折数
        name: '依依服饰',
        ms: '全场冬装参与活动',//描述
        timeStart: '2018-05-09',
        timeEnd: '2018-05-12'
      },
      {
        id: 0,
        num: 7,//折数
        name: '依依服饰',
        ms: '全场冬装参与活动',//描述
        timeStart: '2018-05-09',
        timeEnd: '2018-05-12'
      }
    ],
    [
      {
        id: 0,
        num: 5,//折数
        name: '依依服饰',
        ms: '全场冬装参与活动',//描述
        timeStart: '2018-05-09',
        timeEnd: '2018-05-12'
      }
    ]
  ]
}

//index
const indexData = {
  //首页轮播图
  imgUrls: ['/images/pic-banner01.png', '/images/pic-banner01.png'],
  //天气背景图
  weatherImg: '/images/pic-weateher.png',
  //最新入驻
  newIns: [
    { id: 0, img: '/images/pic-weateher.png', name: 'Foodlove' },
    { id: 1, img: '/images/pic-weateher.png', name: 'love' },
    { id: 2, img: '/images/pic-weateher.png', name: 'bbdlove' },
    { id: 3, img: '/images/pic-weateher.png', name: 'ccdlove' },
    { id: 3, img: '/images/pic-weateher.png', name: 'ccdlove' },
    { id: 3, img: '/images/pic-weateher.png', name: 'ccdlove' }
  ],
  //城市信息
  citys: [
    {
      sort: 'A', city: [
        { id: 0, name: '鞍山' },
        { id: 1, name: '鞍山' },
        { id: 2, name: '鞍山' },
        { id: 3, name: '鞍山' },
        { id: 4, name: '鞍山' },
      ]
    }, {
      sort: 'B', city: [
        { id: 5, name: '安庆' },
        { id: 6, name: '安庆' }
      ]
    }, {
      sort: 'C', city: [
        { id: 7, name: '大理' },
        { id: 8, name: '大理' }
      ]
    }, {
      sort: 'D', city: [
        { id: 7, name: '大理' },
        { id: 8, name: '大理' }
      ]
    }, {
      sort: 'E', city: [
        { id: 7, name: '大理' },
        { id: 8, name: '大理' }
      ]
    }, {
      sort: 'F', city: [
        { id: 7, name: '大理' },
        { id: 8, name: '大理' }
      ]
    }
  ],
  //最近访问城市信息
  recentCity: [
    { id: 1, name: '鞍山' },
    { id: 5, name: '安庆' },
  ],
  //猜您想找
  wantSearch: ['奶茶', '饭店'],
  //历史记录
  historySearch: ['饮料', '零食', '果子', '饮料', '零食', '果子', '饮料', '零食', '果子', '饮料', '零食', '果子'],
  //多个商品信息
  shopList: [
    {
      id: 0,
      name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
      price: 4199,
      img: '/images/pic-banner01.png',
      sendNum: 52343,
      property: '自营',
      nature: [
        { natureId: 0, name: '黑色' },
        { natureId: 1, name: '红色' },
        { natureId: 2, name: '金色' }
      ]
    },
    {
      id: 1,
      name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
      price: 8199,
      img: '/images/pic-banner01.png',
      sendNum: 88888,
      property: '自营',
      nature: [
        { natureId: 0, name: '黑色' },
        { natureId: 1, name: '红色' },
        { natureId: 2, name: '蓝色' }
      ]
    },
  ]
}

//search
const searchData = {
  //猜您想找
  wantSearch: ['奶茶', '饭店'],
  //历史记录
  historySearch: ['饮料', '零食', '果子', '饮料', '零食', '果子', '饮料', '零食', '果子', '饮料', '零食', '果子'],
  //多个商品信息
  shopList: [
    {
      id: 0,
      name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
      price: 4199,
      img: '/images/pic-banner01.png',
      sendNum: 52343,
      property: '自营',
      nature: [
        { natureId: 0, name: '黑色' },
        { natureId: 1, name: '红色' },
        { natureId: 2, name: '金色' }
      ]
    },
    {
      id: 1,
      name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
      price: 8199,
      img: '/images/pic-banner01.png',
      sendNum: 88888,
      property: '自营',
      nature: [
        { natureId: 0, name: '黑色' },
        { natureId: 1, name: '红色' },
        { natureId: 2, name: '蓝色' }
      ]
    },
  ]
}
//shopDetail
const shopDetailData = {
  //轮播图
  imgUrls: ['/images/pic-banner01.png', '/images/pic-banner01.png'],
  //商品信息
  shopInfo: {
    id: 0,
    name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
    price: 4199,
    img: '/images/pic-banner01.png',
    sendNum: 52343,
    property: '自营',
    nature: [
      { natureId: 0, name: '黑色' },
      { natureId: 1, name: '红色' },
      { natureId: 2, name: '金色' }
    ],
    roms: [
      { romId: 0, name: '64G' },
      { romId: 1, name: '128G' }
    ]
  },
  //评价信息
  evalInfo: [
    { id: 0, name: '叶子', img: '/images/pic-banner01.png', sendTime: '2018-05-02', content: '非常好的一次网购，是正品；下次还会回购。商家的态度超级好的，祝商家生意越来越好！' },
    { id: 1, name: '李子', img: '/images/pic-banner01.png', sendTime: '2018-05-03', content: '非常好的一次网购，是正品；下次还会回购。商家的态度超级好的，祝商家生意越来越好！' }
  ],
}
const conmitOrderData = {
  addressInfo:{
    name:'黎明',
    phone:'150****0210',
    addr:'广东省东莞市东城区卡布斯国际广场B'
  },
  shopInfo: {
    id: 0,
    name: 'Canon 佳能 1300D18-55STM专业单反套机(EOS 1300D)',
    price: 4199,
    img: '/images/pic-banner01.png',
    num: 1,
    property: '自营',
    natureInfo: [
      { natureId: 0, name: '黑色' },
      { romId: 0, name: '64G' }
    ],
    roms: [
      { romId: 0, name: '64G' },
      { romId: 1, name: '128G' }
    ],
    freight: 0,//快递费
    realMoney: 4199,//实付金额
    invoice: [
      { id: 0, name: '商品明细(电子发票）-个人' },
      { id: 1, name: '商品明细(电子发票）-公司' }
    ]
  }
}

//TP
module.exports = {
  shopDetailData,
  searchData,
  indexData,
  conmitOrderData,
  CouponData
}