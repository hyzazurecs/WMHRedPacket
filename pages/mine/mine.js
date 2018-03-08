// pages/mRecord/myRecord.js
var app = getApp();
const AV = require('../../lib/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mineRecod:1,
    userInfo:[],
    rAmount: 0,
    rNum: 0,
    sAmount: 0,
    sNum: 0,
    rp_ids: [],
    sp_ids: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    const u_id = app.globalData.attributes.username;
    AV.Cloud.run('fetchUser', {u_id: u_id}).then((response)=>{
        let {rAmount, rNum, sAmount, sNum, rp_ids, sp_ids} = response;
        that.setData({
          rAmount: rAmount,
          rNum: rNum,
          sAmount: sAmount,
          sNum: sNum,
          rp_ids: rp_ids,
          sp_ids: sp_ids,
          userInfo:app.globalData.userInfo,
        });
    });
  },
  // tab 切换函数
  changeTab: function(e){
    var that = this;
    that.setData({
      mineRecod:e.currentTarget.dataset.num
    })
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