//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        var logTime = new Date(log)
        if ( ! (Date.now() - logTime > 60000 * 10))
          return util.formatTime(logTime)
      })
    })
  }
})
