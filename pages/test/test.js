// pages/test/test.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: "1",
    qr: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()

    let thisinfo = options.info;
    this.setData({
      info: thisinfo
    })


    var that =this;
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=' + app.globalData.access_token,
      method: "POST",
      data: {
        path: "pages/test/test?info='scanQrCode'"
      },
      success: function(res){
        let image_src= res.data;
        console.log(image_src);
        let qqr = "data:image/png;base64," + image_src;
        that.setData({
          qr: "data:image/png;base64," + image_src
        })

        ctx.drawImage(image_src)
        ctx.draw()
      }
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