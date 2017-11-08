$(function() {
  layer.config({
    title: "提示"
  })
  $('.close').click(function(){
     layer.closeAll();
  })
  var sqmObj = {
    "1a": function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-submit']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击提交表单pc', location.pathname]);
    },
    "1b": function(name, mobile, province, city, leadsID) {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-submitsuccess', '{' + name + '_' + mobile + '_' + province + '_' + city + '_' + leadsID + '_' + '}']);
      var gsq_key = "sqtywl" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000);
      if (window.gsTracker) {
        var orderid = gsq_key;
        gsTracker.addOrder(orderid, 1);
        gsTracker.setEcomProperty(orderid, "1", name);
        gsTracker.setEcomProperty(orderid, "2", mobile);
        gsTracker.setEcomProperty(orderid, "3", "宝骏730");
        gsTracker.setEcomProperty(orderid, "4", $(".pro option:selected").val());
        gsTracker.setEcomProperty(orderid, "5", $(".city option:selected").val());
        gsTracker.setEcomProperty(orderid, "6", $(".dealer option:selected").val());
        gsTracker.addProduct(orderid, location.pathname, location.pathname, 1, 1, "宝骏730置换补贴");
        //此处可以根据活动页面实际title进行更换；
        gsTracker.trackECom();
        gsTracker.track("/targetpage/formsubmit/sqtywlpc");
        // 当为移动端时，请换成如下代码：
        // gsTracker.track("/targetpage/formsubmit/sqtywlwap");
      }
    },
    2: function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-QCZJhugerush']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '汽车之家购车节pc', location.pathname]);
    },
    3: function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-YChugerush']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '易车购车文化节pc', location.pathname]);
    },
    4: function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-PLAY']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击视频pc', location.pathname]);
    },
    5: function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-article']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击文章pc', location.pathname]);
    },
    6: function() {
      _smq.push(['custom', '17-baojun', 'baojun730-yiyuan-PC-tick']);
      _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击同意政策pc', location.pathname]);
    },
  }

  $("#userAgree").change(function() {
    console.log($(this).attr("checked"));
    if ($(this).attr("checked") == 'checked') {
        sqmObj[6].call();
    }
  })
  $('.mask').click(function() {
    $(this).hide();
  })
  //查看详细规则
  $('.rule1').click(function() {
    $('.mask').fadeIn();
    $('#popup_1').show();
  })
  $('.rule2').click(function() {
    $('.mask').fadeIn();
    $('#popup_2').show();
  })
  var video_index = 0,
      video_url = ['https://v.qq.com/x/page/v0532ifzplw.html', 'https://v.qq.com/x/page/l0532d4s97h.html', 'https://v.qq.com/x/page/k0532t6x5w0.html'];
  $('.video_bar .content img').click(function() {
    console.log('图片顺序', $(this).index());
    $('.big_video img').attr('src', $(this).attr('src'));
    video_index = $(this).index();
  })
  $('.big_video img').click(function() {
    sqmObj[4].call()
    window.open(video_url[video_index]);
  })
  $('.play').click(function() {
    sqmObj[4].call()
    window.open(video_url[video_index]);
  })

  $("#checkMsg").click(function() {
    layer.open({
      title: "用户信息保护及对策声明",
      type: 1,
      skin: 'layui-layer-demo', //样式类名
      closeBtn: 1, //不显示关闭按钮
      anim: 2,
      shadeClose: true, //开启遮罩关闭
      area: ['800px', '600px'],
      content: "用户信息保护及对策声明<br>上汽通用五菱汽车股份有限公司承诺在提供产品和服务时保护用户的个人信息。我们将按照此条款来处理您向我们提供的个人信息。 <br>一、用户须知 <br>1、上汽通用五菱汽车股份有限公司是处理通过本网站（简称“网站”）收集的所有个人信息的管理者。上汽通用五菱汽车股份有限公司尊重您的隐私，遵照中华人民共和国相关处理网络个人信息的规定来处理您的信息。 <br>2、本声明将介绍我们如何处理通过网站收集的所有个人信息，以及访问和更正这些个人信息的权利。 <br>3、若不同意本声明内容，请停止您提交信息的行为。 <br>二、个人信息的类型和用途 <br>1、上汽通用五菱汽车股份有限公司将以下列方式使用您的个人信息。未经您的同意，我们不会改变个人信息的使用方式。 <br>用户名和密码： 使您能够登录网站，访问您的个人信息和网站上受保护的内容。 <br>用户信息： 您在网站的表格上输入的信息，包括姓名、联系方式、电子邮件信箱等。我们将利用这些信息为您提供各种个性化服务。 <br>其他： 在您上载到网站的内容中包含的任何个人信息 <br>2、以上个人信息均是您自愿提供。您有权拒绝提供，但如果您拒绝提供某些个人信息，您将可能无法使用我们提供的产品、服务，或者可能对您使用产品或服务造成一定的影响。 <br>3、对于不满 18 岁的用户，须在其法定监护人已经阅读本声明并且许可的情况下，通过网站提交个人信息。 <br>4、安全措施 我们采取相应措施保护您所提供的个人信息，确保信息不丢失，不被滥用和变造。尽管我们有这些安全措施，但请注意在因特网上不存在“完善的安全措施”。 访问这些个人信息的权限仅限于需要进行此类访问以完成相关服务工作的人员。 <br>访问这些个人信息的权限仅限于需要进行此类访问以完成相关服务工作的人员。 <br>5、信息使用范围 <br> 您同意，上汽通用五菱汽车股份有限公司可以通过以下方式对个人信息进行使用和披露（包含对于个人信息的存储和处理）： <br>5.1、我们（含分支机构）自行使用； <br>5.2、我们向关联公司（包括但不限于上汽通用五菱汽车股份有限公司的附属公司、控股公司、联营公司、广告代理公司等）披露并由其使用； <br>5.3、我们向相关五菱宝骏特约店披露并由其使用； <br>5.4、我们及关联公司及相关五菱宝骏特约店为满足您的需求，通过您提供的信息与您联系； <br>5.5、我们及关联公司及相关五菱宝骏特约店会定期或不定期向您发送有关产品、服务或相关活动的信息，您同意接收上述信息。 <br>5.6、您同意免除上述个人信息的接收和/或使用方在按照本法律声明所述情形下进行信息披露和使用而导致的或可能导致的所有索赔、责任和损失。 <br>6、更正或投诉 <br> 如果您需要查询、修改或更正您的个人信息，或对个人信息保护问题有任何疑问或投诉，您可以拨打400热线：400-889-5050或400-861-2345联系我们。 <br>7、订阅或取消订阅邮件。 <br>您可以订阅电子邮件。并且随时取消已订阅的邮件。 <br>本声明的最后更新时间：2017年8月21日。 <br>本条款适用于上汽通用五菱汽车股份有限公司的所有网站。"
    })
  })

  function createPro() {
    $(".pro").empty();
    $(".pro").append('<option sid="-1">省</option>');
    for (var i = 0; i < provinceData.length; i++) {
      $(".pro").append('<option sid=' + provinceData[i].proid + '>' + provinceData[i].proname + '</option>');
    }
  }
  createPro();

  $(".pro").change(function(event) {
    var city = $(this).parent().parent().find('.city');
    var _id = $(this).find('option:selected').attr('sid');
    // var _id = $(".pro option:selected").attr("sid");

    city.empty();
    city.append('<option sid="-1">市</option>');
    for (var i = 0; i < cicyData.length; i++) {
      if (cicyData[i].proID == _id) {
          city.append('<option sid=' + cicyData[i].cityID + '>' + cicyData[i].cityName + '</option>');
      }
    }
  });

  $(".city").change(function(event) {
    var dealer = $(this).parent().parent().find('.dealer');
    var _id = $(this).find('option:selected').attr('sid');

    dealer.empty();
    for (var i = 0; i < dealersData.length; i++) {
      if (dealersData[i].city == _id) {
          dealer.append('<option sid=' + dealersData[i].dealerCode + '>' + dealersData[i].company + '</option>');
      }
    }
  });
  $(".name").focus(function() {
    if ($(this).val() == "姓名") $(this).val("");
  })
  $(".name").blur(function() {
    if ($(this).val() == "") $(this).val("姓名");
  })
  $(".vcode").focus(function() {
    if ($(this).val() == "验证码") $(this).val("");
  })
  $(".vcode").blur(function() {
    if ($(this).val() == "") $(this).val("验证码");
  })
  $(".phone").focus(function() {
    if ($(this).val() == "电话") $(this).val("");
  })
  $(".phone").blur(function() {
    if ($(this).val() == "") $(this).val("电话");
  })
  //获取验证码
  $('.get_vcode').click(function() {
    console.log('点击获取验证码')
    var tel = $(this).parent().parent().find('.phone').val();
    var _this = $(this);
    if (!validate.isMobile(tel)) {
      layer.alert("请输入正确的手机号码");
      return false;
    }
    $.get(Config.url+'sms_send.php',
      {mobile:tel},function(data){
        console.log('发送验证码返回',data);
        if(Config.debug){
          layer.alert('验证码为:'+data.vcode);
        }else{
          layer.alert('发送短信成功');
        }
        if(data.status=='success'){
          var count_down = 60;
           _this.hide().next().show();
          var t = setInterval(function(){
            if(count_down>1){
              _this.next().html(count_down--+'s');
            }else{
              clearInterval(t);
              _this.show().next().hide();
            }
          },1000)
        }else{
          layer.alert(data.msg);
        }
      },'json'
    )
  })
  var has_add_info = false;     //是否已经提交留资，用于点击饼干的判断
  //提交留资
  $(".submit").click(function() {
    var type = $(this).index();     //中奖类型0是下面那个1是上面那个
    sqmObj['1a'].call();
    var name     = $(this).parent().parent().find('.name').val();
    var tel      = $(this).parent().parent().find('.phone').val();
    var vcode    = $(this).parent().parent().find('.vcode').val();
    var province = $(this).parent().parent().find('.pro option:selected').attr('sid');
    var city     = $(this).parent().parent().find('.city option:selected').attr('sid');
    var dealer   = $(this).parent().parent().find('.dealer option:selected').attr('sid');
    var checked  = $(this).parent().parent().find('.userAgree').attr('checked');
    // console.log(name,tel,province,city,dealer,checked);return;
    if (checked != 'checked') {
      layer.alert("请勾选同意《用户信息保护及政策声明》");
      return false;
    };
    if (!validate.isEmpty(name)) {
      layer.alert("请输入姓名");
      return false;
    }
    if (!validate.isMobile(tel)) {
      layer.alert("请输入正确的手机号码");
      return false;
    }
    if (!validate.isEmpty(vcode)) {
      layer.alert("请输入验证码");
      return false;
    }
    if (province == -1) {
      layer.alert("请选择省份");
      return false;
    }
    if (city == -1) {
      layer.alert("请选择城市");
      return false;
    }
    if (dealer == -1) {
      layer.alert("请选择经销商");
      return false;
    }
    //验证验证码
    $.get(Config.url+'sms_verify.php',{mobile:tel,sms_code:vcode},function(data){
      console.log('验证短信验证码返回',data)
      if(data.status=='success'){
        addInfo(name, tel, province, city, dealer)
        if(type==1){
          $.get(Config.url+'reward.php',{mobile:tel,type:1},function(res){
            console.log('是否获奖接口返回',res)
            if(res.status=='success'){
              $('#popup_win .name').val(name);
              $('#popup_win .phone').val(tel);
              layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: ['579px','844px'],
                skin: 'layui-layer-nobg', //没有背景色
                shadeClose: false,
                content: $('#popup_win')
              });
            }else{
              layer.alert(res.msg)
            }
          },'json')
        }else{
          has_add_info = true;
          $('#part_3 .cookie').addClass('shrink');
          layer.alert('请点击幸运饼干抽奖')
        }
      }else{
        layer.alert('验证码验证失败')
      }
    },'json')
  })
  //点击饼干
  $('#part_3 .cookie').click(function(){
    var tel = $('#part_3 .phone').val();
    var name = $('#part_3 .name').val();
    $('#popup_cookie_win .name').val(name);
    $('#popup_cookie_win .phone').val(tel);
    if(has_add_info){
      $.get(Config.url+'reward.php',{mobile:tel,type:2},function(data){
        if(data.status=='success'){
          layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['604px','583px'],
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: false,
            content: $('#popup_cookie_win')
          });
        }else{
          layer.alert(data.msg)
        }
      },'json')
    }else{
      layer.alert('请填写资料后再进行抽奖')
    }
  })
  //点击置换补贴基金，6000的那个
  $('.submit_subsidy').click(function(){
    var id_card  = $(this).parent().find('.id_number').val();
    var mobile   = $(this).parent().find('.phone').val();
    var name     = $(this).parent().find('.name').val();
    var province = $('#part_2').find('.pro option:selected').attr('sid');
    var city     = $('#part_2').find('.city option:selected').attr('sid');
    var dealer   = $('#part_2').find('.dealer option:selected').attr('sid');
    var prize    = 2
    console.log('身份证：',id_card);
    if(validate.isId(id_card)){
      saveUser(mobile,name,id_card,province,city,dealer,prize);
    }else{
      layer.alert('身份证号码不合法');
    }
  })
  //点击提交购置税,每天10个的那个
  $('.submit_tax').click(function(){
    var id_card  = $(this).parent().find('.id_number').val();
    var mobile   = $(this).parent().find('.phone').val();
    var name     = $(this).parent().find('.name').val();
    var province = $('#part_3').find('.pro option:selected').attr('sid');
    var city     = $('#part_3').find('.city option:selected').attr('sid');
    var dealer   = $('#part_3').find('.dealer option:selected').attr('sid');
    var prize    = 1
    console.log('身份证：',id_card);
    if(validate.isId(id_card)){
      saveUser(mobile,name,id_card,province,city,dealer,prize);
    }else{
      layer.alert('身份证号码不合法');
    }
  })
  //信息入库
  function saveUser(mobile,name,id_card,province,city,dealer,prize){
    $.get(Config.url+'baojun730_tax.php',{
      mobile  : mobile,
      name    : name,
      id_card : id_card,
    },function(data){
      if(data.status=='success'){
        layer.closeAll();
        layer.alert('提交成功！请等待短信通知！')
        lanmenAddUser(name,mobile,province,city,dealer,id_card,prize)
      }else{
        layer.alert('提交失败'+data.msg);
      }
    },'json')
  }
  var validate = {
    isEmpty: function(val) {
      if (val == "") {
        return false;
      } else {
        return true;
      }
    },
    isMobile: function(val) {
      if (val == "") {
        return false;
      }
      if (!val.match(/^1[3|4|5|7|8][0-9]\d{4,8}$/) || val.length != 11) {
        return false;
      } else {
        return true;
      }
    },
    isId : function(val){
      return val.match(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
    },
    vcode: function(val) {
      if (val != localStorage.get('temp_vcode')) {
        return false;
      }
    }
  }

  function addInfo(_name, _tel, _province, _city, _dealer) {
    clickFlag = false;
    $.ajax({
      url: "http://www.sgmw.com.cn/ashx/reservation_json.aspx",
      dataType: 'jsonp',
      data: {
        aid: 0,
        fid: 0,
        lid: 0,
        name: _name,
        phone: _tel,
        key: md5(_tel).toUpperCase().substr(0, 10),
        province: _province,
        city: _city,
        dealercode: _dealer,
        cartype: '宝骏730',
        mark: '',
        source: '730置换税，购置补贴',
        ordering: 0,
        driving: 1,
        credit: 0
      },
      jsonp: 'callback',
      success: function(result) {
        var wr = result.success[0].result;
        if (wr == 1) {
          // layer.alert("预约成功");
          _tel = _tel.substring(0, 3) + '****' + _tel.substring(7, 11)
          localStorage.submit_flag = true;
          sqmObj["1b"](_name, _tel, _province, _city, _dealer);
        } else if (wr == 2) {
          // layer.alert('您已预约成功,');
        } else {
          layer.alert('预约失败，请稍后重试');
        }
        clickFlag = true;
      }
    });
  }
  $('.winner_list').click(function(){
    layer.open({
      type: 1,
      title: false,
      closeBtn: 0,
      area: ['468px','671px'],
      skin: 'layui-layer-nobg', //没有背景色
      shadeClose: false,
      content: $('#reward_list')
    });
  })
  function $_GET(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return "";
  }
})
//核销接口 przie 1是购置税2是置换基金
function lanmenAddUser(name,phone,provid,cityid,dealer,idcardnum,prize){
  console.log(arguments);return;
  $.get('http://www.sgmw.com.cn/activities/20171109/ashx/AddUser.ashx',{
    name:name,
    phone:phone,
    provid:provid,
    cityid:cityid,
    dealer:dealer,
    idcardnum:idcardnum,
    prize,prize,
  },function(data){
    console.log('核销接口返回',data);
  },'json')
}