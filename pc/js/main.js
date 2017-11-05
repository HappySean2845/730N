    $(function () {

      layer.config({
//        skin: 'demo-class'
        title:"提示"
      })

      $('.click_close').click(function(){
        layer.close(1);
      })
      var sqmObj = {
        "1a":function (){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-submit']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击提交表单pc',location.pathname]);
          },
        "1b":function(name,mobile,province,city,leadsID){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-submitsuccess','{'+name+'_'+mobile+'_'+province+'_'+city+'_'+leadsID+'_'+'}']);
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
              gsTracker.addProduct(orderid, location.pathname, location.pathname, 1,1, "宝骏730置换补贴");
              //此处可以根据活动页面实际title进行更换；
              gsTracker.trackECom();
              gsTracker.track("/targetpage/formsubmit/sqtywlpc");
              // 当为移动端时，请换成如下代码：
              // gsTracker.track("/targetpage/formsubmit/sqtywlwap");
          }
        },
        2:function(){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-QCZJhugerush']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '汽车之家购车节pc',location.pathname]);
        },
        3:function(){
//          _smq.push(['custom','17-baojun','baojun730-yiyuan-MB-YChugerush']);
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-YChugerush']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '易车购车文化节pc',location.pathname]);
        },
        4:function(){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-PLAY']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击视频pc',location.pathname]);
        },
        5:function(){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-article']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击文章pc',location.pathname]);
        },
        6:function(){
          _smq.push(['custom','17-baojun','baojun730-yiyuan-PC-tick']);
          _gsq.push(['T', 'GWD-002942', 'trackEvent', 'click', '点击同意政策pc',location.pathname]);
        },
      }
      var bottomTitle = '安全舒适 与全新宝骏730探<br>伊犁秘境';
      var bottomDesc = '到新疆不知中国之大，不到伊犁不知新疆之美。在这片秘境，雄山间有绿玉一般的湖泊镶嵌其中，峻岭外则有广袤的草原，徘徊着三五成群的天马。人在里面，真正的以天为被，以地为床。这次我们和两个四口之家，跟随“中国型爸 挑战海拔730”活动大部队，一起驾乘全新宝骏730，穿行在乌孙山和赛里木湖间，领略伊犁的雄奇俊美...'
      var bottomTitle_an = '老奥德赛车主说全新宝骏730<br>232和223布局有哪些不同？';
      var bottomDesc_an = '当看到新车评的“全新宝骏730约驾”招募公告时，我怀抱着好奇（吃瓜群众看热闹不嫌事大）的心态报了名：看XCP对宝骏730和560的评价不低，加之我对手动挡无限的爱，以及对于五菱宝骏神车厂的膜拜，在我还没意识到自己做了什么之前，就手动填写了自荐邮件。然而，回过头来后知后觉的我才看到，这台全新宝骏730竟然是AMT！AMT！AMT！...'

      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        initialSlide:1,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 3,
          slideShadows : true
        }
      });
      var miniSwiper = new Swiper('.miniSwiper', {
        onTransitionEnd: function(swiper){
          if(swiper.activeIndex == '0'){
            $("#bottomTitle").html(bottomTitle_an)
            $("#bottomDesc").html(bottomDesc_an);
          }else if(swiper.activeIndex == '1'){
            $("#bottomTitle").html(bottomTitle)
            $("#bottomDesc").html(bottomDesc);
          }
        },
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        initialSlide:1,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 600,
          modifier: 3,
          slideShadows : false,
        }
      });

      $("#userAgree").change(function(){
        console.log($(this).attr("checked"));
        if($(this).attr("checked") == 'checked'){
          sqmObj[6].call();
        }
      })

      $("#bottomTitle").click(function () {
        sqmObj[5].call();
        var url = ""
        if(miniSwiper.activeIndex == 0){
          url = "http://www.xincheping.com/driveart/245751.html"
        }else if(miniSwiper.activeIndex == 1){
          url = "http://www.sohu.com/a/155689525_110617"
        }
        window.open(url);
      })
      $(".miniSwiper .swiper-slide").click(function(){
        var url = ""
        if(miniSwiper.activeIndex == 0){
          url = "http://www.xincheping.com/driveart/245751.html"
        }else if(miniSwiper.activeIndex == 1){
          url = "http://www.sohu.com/a/155689525_110617"
        }
        window.open(url);
      })
      // $(".swiper-container .swiper-slide").click(
      //   function () {
      //     sqmObj[4].call();
      //     var videoUrl = '';
      //     if(swiper.activeIndex == 1){
      //     // videoUrl = 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=l0532d4s97h&auto=0';
      //       videoUrl = 'https://v.qq.com/x/page/l0532d4s97h.html';
      //     }else if(swiper.activeIndex == 2){
      //       // videoUrl = 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=k0532t6x5w0&auto=0';
      //       videoUrl = 'https://v.qq.com/x/page/k0532t6x5w0.html';
      //     }else if(swiper.activeIndex == 0){
      //       // videoUrl = 'https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=v0532ifzplw&auto=0';
      //       videoUrl = 'https://v.qq.com/x/page/v0532ifzplw.html';
      //     }
      //     // layer.open({
      //     //   type: 2,
      //     //   title: false,
      //     //   area: ['1000px', '680px'],
      //     //   shade: 0.8,
      //     //   closeBtn: 1,
      //     //   shadeClose: true,
      //     //   content: videoUrl,
      //     // });
      //     window.open(videoUrl);
      //   }
      // )
      // 视频
      var video_index = 0,video_url = ['https://v.qq.com/x/page/v0532ifzplw.html','https://v.qq.com/x/page/l0532d4s97h.html','https://v.qq.com/x/page/k0532t6x5w0.html'];
      $('.video_bar .content img').click(function(){
        console.log('图片顺序',$(this).index());
        $('.big_video img').attr('src',$(this).attr('src'));
        video_index = $(this).index();
      })
      $('.big_video img').click(function(){
        sqmObj[4].call()
        window.open(video_url[video_index]);
      })
      $('.play').click(function(){
        sqmObj[4].call()
        window.open(video_url[video_index]);
      })

      $("#checkMsg").click(function(){
        layer.open({
          title:"用户信息保护及对策声明",
          type: 1,
          skin: 'layui-layer-demo', //样式类名
          closeBtn: 1, //不显示关闭按钮
          anim: 2,
          shadeClose: true, //开启遮罩关闭
          area: ['800px', '600px'],
          content: "用户信息保护及对策声明<br>上汽通用五菱汽车股份有限公司承诺在提供产品和服务时保护用户的个人信息。我们将按照此条款来处理您向我们提供的个人信息。 <br>一、用户须知 <br>1、上汽通用五菱汽车股份有限公司是处理通过本网站（简称“网站”）收集的所有个人信息的管理者。上汽通用五菱汽车股份有限公司尊重您的隐私，遵照中华人民共和国相关处理网络个人信息的规定来处理您的信息。 <br>2、本声明将介绍我们如何处理通过网站收集的所有个人信息，以及访问和更正这些个人信息的权利。 <br>3、若不同意本声明内容，请停止您提交信息的行为。 <br>二、个人信息的类型和用途 <br>1、上汽通用五菱汽车股份有限公司将以下列方式使用您的个人信息。未经您的同意，我们不会改变个人信息的使用方式。 <br>用户名和密码： 使您能够登录网站，访问您的个人信息和网站上受保护的内容。 <br>用户信息： 您在网站的表格上输入的信息，包括姓名、联系方式、电子邮件信箱等。我们将利用这些信息为您提供各种个性化服务。 <br>其他： 在您上载到网站的内容中包含的任何个人信息 <br>2、以上个人信息均是您自愿提供。您有权拒绝提供，但如果您拒绝提供某些个人信息，您将可能无法使用我们提供的产品、服务，或者可能对您使用产品或服务造成一定的影响。 <br>3、对于不满 18 岁的用户，须在其法定监护人已经阅读本声明并且许可的情况下，通过网站提交个人信息。 <br>4、安全措施 我们采取相应措施保护您所提供的个人信息，确保信息不丢失，不被滥用和变造。尽管我们有这些安全措施，但请注意在因特网上不存在“完善的安全措施”。 访问这些个人信息的权限仅限于需要进行此类访问以完成相关服务工作的人员。 <br>访问这些个人信息的权限仅限于需要进行此类访问以完成相关服务工作的人员。 <br>5、信息使用范围 <br> 您同意，上汽通用五菱汽车股份有限公司可以通过以下方式对个人信息进行使用和披露（包含对于个人信息的存储和处理）： <br>5.1、我们（含分支机构）自行使用； <br>5.2、我们向关联公司（包括但不限于上汽通用五菱汽车股份有限公司的附属公司、控股公司、联营公司、广告代理公司等）披露并由其使用； <br>5.3、我们向相关五菱宝骏特约店披露并由其使用； <br>5.4、我们及关联公司及相关五菱宝骏特约店为满足您的需求，通过您提供的信息与您联系； <br>5.5、我们及关联公司及相关五菱宝骏特约店会定期或不定期向您发送有关产品、服务或相关活动的信息，您同意接收上述信息。 <br>5.6、您同意免除上述个人信息的接收和/或使用方在按照本法律声明所述情形下进行信息披露和使用而导致的或可能导致的所有索赔、责任和损失。 <br>6、更正或投诉 <br> 如果您需要查询、修改或更正您的个人信息，或对个人信息保护问题有任何疑问或投诉，您可以拨打400热线：400-889-5050或400-861-2345联系我们。 <br>7、订阅或取消订阅邮件。 <br>您可以订阅电子邮件。并且随时取消已订阅的邮件。 <br>本声明的最后更新时间：2017年8月21日。 <br>本条款适用于上汽通用五菱汽车股份有限公司的所有网站。"
        })
      })
      $("#part_6 .btn .next").click(function () {
        var index = swiper.activeIndex + 1;
        index>2?index = 0:index = index;
        swiper.slideTo(index)
      })
      $("#part_6 .btn .prev").click(function () {
        var index = swiper.activeIndex - 1;
        index<0?index = 2:index = index;
        swiper.slideTo(index)
      })
      $("#part_5 .nextBtn img").click(function () {
//        alert("1")1
        var index = miniSwiper.activeIndex + 1;
        index>1?index = 0:index = index;
        miniSwiper.slideTo(index)
      })


      $(".goBuy").click(function () {
//        console.log($("#part_2"))
        // console.log(submit_flag)
        if(localStorage.submit_flag){
          var index = $(this).attr("index");
    //      $('.Container').scrollTop(8.48*_fontSize,500)
          if(index == 3){
            window.open("http://www.bitauto.com/topics/adtopic/baojun_jingpai/index.shtml?rfpa_tracker=30_36_2592&ychrfpa_tracker=20_15_1_590_2&cta_p=sy6_cu30_pc36_mt2592_wb143#jp2");
          }else{
            window.open("http://mall.autohome.com.cn/subject/2017/10/shilibaojun33/");
          }
          sqmObj[index].call();
        }else{
          alert('请先提交信息');
        }
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
        for (var i = 0; i < WuLingdealers.length; i++) {
          if (WuLingdealers[i].city == _id) {
            dealer.append('<option sid=' + WuLingdealers[i].dealerCode + '>' + WuLingdealers[i].company + '</option>');
          }
        }
      });
      $(".name").focus(function () {
         if($(this).val()=="姓名") $(this).val("");
      })
      $(".name").blur(function () {
        if($(this).val()=="") $(this).val("姓名");
      })
      $(".vcode").focus(function () {
         if($(this).val()=="验证码") $(this).val("");
      })
      $(".vcode").blur(function () {
        if($(this).val()=="") $(this).val("验证码");
      })
      $(".phone").focus(function () {
        if($(this).val()=="电话") $(this).val("");
      })
      $(".phone").blur(function () {
        if($(this).val()=="") $(this).val("电话");
      })
      //获取验证码
      $('.get_vcode').click(function(){

      })
      //提交留资
      $(".submit").click(function () {
        sqmObj['1a'].call();
        var name     = $(this).parent().parent().find('.name').val();
        var tel      = $(this).parent().parent().find('.phone').val();
        var vcode    = $(this).parent().parent().find('.vcode').val();
        var province = $(this).parent().parent().find('.pro option:selected').text();
        var city     = $(this).parent().parent().find('.city option:selected').text();
        var dealer   = $(this).parent().parent().find('.dealer option:selected').text();
        var checked  = $(this).parent().parent().find('.userAgree').attr('checked');
        console.log(name,tel,province,city,dealer,checked);return;
        if(checked!='checked'){
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
        if (province == "请选择") {
          layer.alert("请选择省份");
          return false;
        }
        if (city == "请选择") {
          layer.alert("请选择城市");
          return false;
        }
        if (dealer == "请选择") {
          layer.alert("请选择经销商");
          return false;
        }
        addInfo(name, tel, $("#pro option:selected").attr('sid'), $("#city option:selected").attr('sid'), $("#dealer option:selected").attr('sid'))
      })
      var validate = {
        isEmpty: function (val) {
          if (val == "") {
            return false;
          } else {
            return true;
          }
        },
        isMobile: function (val) {
          if (val == "") {
            return false;
          }
          if (!val.match(/^1[3|4|5|7|8][0-9]\d{4,8}$/) || val.length != 11) {
            return false;
          } else {
            return true;
          }
        },
        vcode : function(val){
          if(val!=localStorage.get('temp_vcode')){
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
            aid: 165,
            fid: $_GET('MediaID'),
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
          success: function (result) {
            var wr = result.success[0].result;
            if (wr == 1) {
              layer.alert("预约成功");
              _tel = _tel.substring(0,3)+'****'+_tel.substring(7,11)
              localStorage.submit_flag = true;
              sqmObj["1b"](_name, _tel, _province, _city, _dealer);
            } else if (wr == 2) {
              layer.alert('您已预约成功,请勿重复提交');
            } else {
              layer.alert('预约失败，请稍后重试');
            }
            clickFlag = true;
          }

        });
      }
      function $_GET(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
      }
    })
