// pages/packet/packet.js
var app = getApp();
const {Cloud, User} = require('../../lib/av-weapp-min');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    username: '辉哥哥',
    avatar: '../image/mine-1.png',
    amount: 0,
    num: 0,
    leftNum: 0,
    leftAmount: 0,
    title: 'Hello World!',
    answer: [],
    imhSrc:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(options['p_id'])
    const p_id = parseInt(options['p_id']);
    console.log
    this.data.imgSrc = options['img_url']
    
   
    User.loginWithWeapp().then((user) => {
      const u_id = user.attributes.username;
      Cloud.run('queryRedPacket', {p_id: p_id, u_id: u_id}).then((response)=>{
        let packet = response.packet;
        that.setData({
          amount: packet.amount,
          num: packet.num,
          leftNum: packet.leftNum,
          leftAmount: packet.leftAmount,
          titie: packet.title,
          answer: packet.answer,
          avatar: packet.avatar,
          username: packet.username
        })
      });
    });
  },
  toshareChat:function(){
    
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
  
  },

  toMine: function () {
    wx.switchTab({
      url: '../mine/mine'
    });
  },

  toCompete: function () {
    console.log(this.data.imgSrc)
    wx.navigateTo({
      url: `../compete/compete?imgSrc=${this.data.imgSrc}`,
     
    });
  }

  
})