const data = [
  {
    title: 'a', content: [
      { name: 'name', img: 'img' },
      { name: 'name', img: 'img' },
      { name: 'name', img: 'img' }
    ]
  },
  {
    title: 'a', content: [
      { name: 'name', img: 'img' },
      { name: 'name', img: 'img' }
    ]
  },
  {
    title: 'a', content: [
      { name: 'name', img: 'img' }
    ]
  }
];
Page({
  data: {
    current: 0,
    tabs: data
  },
  onLoad(){
    
  }
})
