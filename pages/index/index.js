Page({
  data: {
    chooseMoney : true,
    title: "",
    price: 0,
    nums: 0,

    money: [
      {
        id :0,
        value: 5,
        chosen: true,
        display: "5 "
      },
      {
        id:1,
        value: 10,
        chosen: false,
        display: "10"
      },
      {
        id:2,
        value: 20,
        chosen: false,
        display: "20"
      },
      {
        id:3,
        value: -1,
        chosen: false,
        display: "···"
      }
    ]

  },

  

  checkMore: function(e){
    let curId= e.currentTarget.id;

    for (let i = 0 ; i < this.data.money.length; i ++){
      this.data.money[i].chosen = false;
    }

    this.data.money[curId].chosen = true;

    if (curId != 3){
      this.data.price = this.data.money[curId].value;
    }

    if (curId == 3){
      this.setData({
        chooseMoney: false,
        price: 0
      })
    }
  },

  buttonTap: function(e){
    let cur_title = this.data.title;
    let cur_price = this.data.price;
    let cur_nums = this.data.nums;


    if (cur_title == "" ){
      openAlert("标题不得为空");
      return;
    } else if( cur_price == 0){
      openAlert("红包金额不得为空");
      return;
    } else if ( cur_nums == 0 ){
      openAlert("红包份数不得为空");
      return;
    }

    let push_data = {
      title: cur_title,
      money: cur_price,
      nums : cur_nums
    }

    console.log(push_data);

    


  },

  titleInput: function(e){
    let title_value = e.detail.value;
    this.setData({
      title: title_value
    });
  },

  numsInput: function(e){
    var regNum = new RegExp('^[0-9]*$');
    var result = regNum.test(e.detail.value);

    if (!result){
      openAlert("请输入数字");
      
    }

    console.log(result);

    let nums_value = e.detail.value;
    this.setData({
      nums: nums_value
    });
  },

  priceInput: function(e){
    let price_value = e.detail.value;
    this.setData({
      price: price_value
    });
  },


  

  
});

let openAlert = function (alert_content) {
  let this_content = alert_content;
  wx.showModal({
    content: this_content,
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      }
    }
  });
}
