//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: [],
    description: '小伙伴们将会根据图片的相似度来领取红包哟',
    title: 'Hello World',
    money: 10,
    num: 10,
    answer: '',
  },
  onLoad: function () {
    const that = this;
    wx.getUserInfo({
      success: function (user) {
        that.setData({
          userInfo: user.userInfo
        })
      }
    });
  },
  // 获取页面填入的值
  titleInput: function (e) {
    const that = this;
    that.setData({
      title: e.detail.value
    });
  },
  MoneyInput: function (e) {
    const that = this;
    that.setData({
      money: e.detail.value,
    });
  },
  NumberInput: function (e) {
    const that = this;
    that.setData({
      num: e.detail.value
    });
  },
  jubenAnswerInput: function (e) {
    var that = this;
    that.setData({
      answer: e.detail.value,
    });
  },
  toDraw: function () {
    const options = {
      amount: this.data.money,
      title: this.data.title,
      num: this.data.num
    };
    app.globalData.options = options;
    wx.navigateTo({
      url: '../draw/draw'
    });
  }
})