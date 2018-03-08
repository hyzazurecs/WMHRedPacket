//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: [],
    description: '小伙伴们将会根据图片的相似度来领取红包哟',
    title: '',
    money: '',
    num: '',
    answer: '',
  },
  onLoad: function () {
    const that = this;
    wx.getUserInfo({
      success: function (user) {
        that.setData({
          userInfo: user.userInfo,
        })
      }
    });

  },
  // 跳转链接

  tomyRecord: function () {
    var that = this;
    wx.navigateTo({
      url: './mRecord/myRecord',
    })

  },
  // 获取页面填入的值
  titleInput: function (e) {
    const that = this;
    console.log(e.detail.value)
    that.setData({
      title: e.target.value,
    })
  },
  MoneyInput: function (e) {
    const that = this;
    console.log(e.detail.value)
    that.setData({
      money: e.target.value,
    })
  },
  NumberInput: function (e) {
    const that = this;
    console.log(e.detail.value)
    that.setData({
      num: e.target.value,
    })
  },
  jubenAnswerInput: function (e) {
    var that = this;
    console.log(e.detail.value);
    that.setData({
      answer: e.detail.value,
    })
  },
})