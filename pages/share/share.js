// pages/share/share.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    p_id: 0,
    username: '',
    userInfo:[],
    houBaoStyle:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {src, p_id, username} = options;
    var that  = this;
    console.log(options);
    that.setData({
      src: src,
      p_id: p_id,
      username: username,
      houBaoStyle: options.houBaoStyle,
      userInfo: app.globalData.userInfo,
    })
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
  onShareAppMessage: function (res) {
    const that = this;
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: `你的小伙伴给你发了个红包`,
      path: `/pages/packet/packet?p_id=${that.data.p_id}`,
      success: function(res) {
        // 转发成功
        console.log(res);
      },
      fail: function(res) {
        // 转发失败
        console.log(res);        
      }
    }
  }
})