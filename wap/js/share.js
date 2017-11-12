function share(){
    var url = window.location.href;
    var http = "http://www.sgmw.com.cn/m/20170810/";
    $.ajax({
      type:'get',
      url:'http://www.jzvcode.com/luoxini_hongbao/share.php',
      data:{url:url},
      async: false,
      dataType: "jsonp",
      success:function(data){
        wx.config({
          debug: false,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: [
          // 所有要调用的 API 都要加到这个列表中
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'closeWindow',
            'scanQRCode'
          ]
        });

        wx.ready(function () {
        // 在这里调用 API
          wx.onMenuShareAppMessage({
            title: "突破百万，宝骏730携礼再出发！",
            desc: "",
            link: http,
            imgUrl: http+"images/share.jpg",
            trigger: function (res) {
              //alert('用户点击发送给朋友');
            },
            success: function (res) {
              //alert('已分享');
            },
            cancel: function (res) {

              //alert('已取消');
            },
            fail: function (res) {
              //alert(JSON.stringify(res));
            }
          });

          // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
          wx.onMenuShareTimeline({
            title: "突破百万，宝骏730携礼再出发！",
            link: http,
            imgUrl: http+"images/share.jpg",
            trigger: function (res) {
              //alert('用户点击分享到朋友圈');
            },
            success: function (res) {

              //alert('已分享');
            },
            cancel: function (res) {
              //alert('已取消');
            },
            fail: function (res) {
              //alert(JSON.stringify(res));
            }
          });
        });
        wx.error(function (res) {
          alert(res.errMsg);
        });

      }
    });
  }
  share();