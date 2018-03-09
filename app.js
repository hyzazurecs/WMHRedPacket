const AV = require('./lib/av-weapp-min.js');
const config = require('./config.js');
const language = require('./utils/language.js');

AV.init({
  appId: config.appId,
  appKey: config.appKey,
  region: 'us'
});

//app.js
App({
  onLoad: function () {
    console.log("App onLoad");
  },
  onLaunch: function () {
    const that = this;
    const systemInfo = wx.getSystemInfoSync();
    if (systemInfo.language == 'zh_CN') {
      this.globalData.language = language.zh;
    } else {
      this.globalData.language = language.en;
    }
    that.globalData.systemInfo = systemInfo;
    wx.getUserInfo({
      success: function (user) {
        that.globalData.userInfo = user.userInfo;
      }
    })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // leancloud
    AV.User.loginWithWeapp().then(user => {
      that.globalData.attributes = user.attributes;
      let u_id = user.attributes.username;
      AV.Cloud.run('fetchUser', { u_id: u_id }).then((response) => {
        console.log(response);
      });
    });



    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: [],
    language: null,
    systemInfo: null,
    attributes: []
  },
  // 登录
  login: function () {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
  },
})