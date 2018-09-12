<template>
  <div id="box">
    <div class="top_bar">
      <div class="box" id="top_bar_content">
        <div class="top_left">
          <a href="">首页</a>
          <a href="#/show" style="color:#fdd000;position: relative;">商城<i class="iconfont icon-hot"></i></a>
          <a href="">社区</a>
          <a href="" @mouseenter='myMouseover' @mouseleave='myMouseleave' style="position:relative">问题反馈
            <div class="wechat"></div>
          </a>
        </div>
        <div class="top_right">
          <a href="" style="position:relative" @mouseenter='myMouseover2' @mouseleave='myMouseleave2'><i class="iconfont icon-shouji"></i>下载APP
            <div class="wechat2"></div></a>
          <a href="">关于我们</a>
        </div>

      </div>
    </div>

    <!-- 2 700标题 -->
    <div class="header_bar">
      <div id="header_bar_box" class="box">
        <div class="header_bar_box_left">
          <a href="">
            <div class="logo"></div>
          </a>
          <div class="drop">
            <div @mouseleave='myMouseleave_asi'>
              <div class='dropdown'>
                <span @mouseenter='myMouseenter_asi'>
                  文章列表
                </span><i class="iconfont icon-xiajiantou"></i>
              </div>
              <div class='dropdown'>
                <span @mouseenter='myMouseenter_asi2'>
                  特色频道
                </span><i class="iconfont icon-xiajiantou"></i>
              </div>
              <!-- 下拉 -->
              <div class="aside_big_box box">
                <div class="aside_box">
                  <aside class="aside">
                    <a href="">
                      <p class="aside_p" @mouseenter='myMouseenter_aside(index,$event)' v-for='(itemdata,index) in aa'
                        :key='index'>{{itemdata}}</p>
                    </a>
                  </aside>
                  <div class="aside_div">
                    <div>
                      <a href="">
                        <img :src="bb.src" alt="">
                        <br>
                        {{bb.pp}}
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img :src="bb.src2" alt="">
                        <br>
                        {{bb.pp2}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='dropdown'>
              <span>
                购物车通道
              </span>
            </div>
            <div class='dropdown'>
              <span>
                品牌动态
              </span>
            </div>
          </div>


        </div>

        <div class="inp_box">
          <input id="inp" type="text" placeholder="骑行NASA"><i class="iconfont icon-fangdajing"></i>
        </div>

      </div>

    </div>

    <!-- 3轮播 -->
    <div class="block">
      <el-carousel trigger="click" height="428px" arrow='never'>
        <el-carousel-item v-for="(item,index1) in img" :key="index1 + 'a'">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 4 FEATURE 专题 -->
    <!-- 4.1--1 -->
    <div class="special_box">
      <div class="box title">FEATURE 专题</div>
      <div class="title_box box">
        <div class="title1">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/06/20170616025015942.jpg" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">有什么需求尽管提，满足不了算我输</a></p>
              <p class="text_p2">700Bike和他的6位“老伙计”</p>
            </div>
            <p class="title_bottom">
              <span>
                <i class="iconfont icon-yanjing"></i>2720
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>1天前
              </span>
            </p>
          </div>
        </div>
        <!-- 4.2 -->
        <div class="title1 middle">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/05/201705110417186166.png" alt="">
          <div class="bt_box">
            <p class="bt1">
              <a href="" class="bt">
                每一个热爱自行车的人
                <br>
                都应该有一件骑行主题T恤
              </a>
            </p>
            <p class="bt2">
              <a href="">
                700Bike 2017骑行主题T恤
                <br>
                限量上市
              </a>
            </p>
            <a class="read" @mouseenter='myMouseenter_read($event)' @mouseleave='myMouseleave_read($event)' href="">
              点击阅读
            </a>
          </div>
        </div>
        <!-- 4.3 -->
        <div class="title1">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/05/201705181102383641.jpg" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">动感与美 | 700Bike银河2017，售价4599</a></p>
              <p class="text_p2">与生俱来的科技与美，奖心独具</p>
            </div>
            <p class="title_bottom">
              <span>
                <i class="iconfont icon-yanjing"></i>2980
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>2
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>1天前
              </span>
            </p>
          </div>
        </div>
        <!-- 4.4--2 -->
        <div class="title1">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/06/201706160248085136.jpg" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">新玩范 | 700Bike新一代14寸折叠车银河MINI，1499起</a></p>
              <p class="text_p2">MINI FUN 新玩范</p>
            </div>
            <p class="title_bottom" style="margin-top:57px">
              <span>
                <i class="iconfont icon-yanjing"></i>2720
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>1天前
              </span>
            </p>
          </div>
        </div>
        <!-- 4.5 -->
        <div class="title1" style="width:688px">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/05/201705181138055435.jpg" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">外变速来了 | 700Bike后街2017，售价2999 </a></p>
              <p class="text_p2">外10速焕然登场 预订开启</p>
            </div>
            <p class="title_bottom">
              <span>
                <i class="iconfont icon-yanjing"></i>1377
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>1天前
              </span>
            </p>
          </div>
        </div>

        <!-- 4.6--3 -->
        <div class="title1">
          <span class="item_title">
            <a href="">摄影</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/04/201704170135531972.png" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">朋友圈里那些好看的骑行照片都是怎么拍出来的？</a></p>
              <p class="text_p2">别再把你的骑友拍得那么丑啦</p>
            </div>
            <p class="title_bottom" style="margin-top:57px">
              <span>
                <i class="iconfont icon-yanjing"></i>1420
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>7天前
              </span>
            </p>
          </div>
        </div>
        <!-- 4.7--3 -->
        <div class="title1">
          <span class="item_title">
            <a href="">物品</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2017/04/201704010236396191.png" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt">这套降龙十八锁，我给打9分！</a></p>
              <p class="text_p2">探求武学至高境界—以和为贵。</p>
            </div>
            <p class="title_bottom">
              <span>
                <i class="iconfont icon-yanjing"></i>4220
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>9天前
              </span>
            </p>
          </div>
        </div>
        <!-- 4.8--3 -->
        <div class="title1" style="background-color:#292929">
          <span class="item_title">
            <a href="">城市</a>
          </span>
          <img src="http://img1.700bike.com/upload/others/2016/10/201610310229264297.jpg" alt="">
          <div class="text_box_1">
            <div>
              <p><a href="" class="bt beautiful">耍帅一定要成套，少了单车怎么行</a></p>
              <p class="text_p2">探求武学至高境界—以和为贵。</p>
            </div>
            <p class="title_bottom">
              <span>
                <i class="iconfont icon-yanjing"></i>4220
              </span>
              <span>
                <i class="iconfont icon-xiaoxi"></i>3
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>9天前
              </span>
            </p>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!-- 5活动 -->
    <div class="box title">ACTIVITY 活动</div>
    <div class="activity box">
      <div class="title2" v-for='(item,index2) in list' :key='index2 + "b"'>
        <img :src="item.img2" alt="">
        <div class="text_box_1">
          <div class="bt_new">
            <p><a href="" class="bt">{{item.pp}}</a></p>
          </div>
          <p class="title_bottom" style="margin-top:50px">
            <span>
              <i class="iconfont icon-yanjing"></i>{{item.num1}}
            </span>
            <span>
              <i class="iconfont icon-xiaoxi"></i>{{item.num2}}
            </span>
            <span>
              <i class="iconfont icon-shijian"></i>{{item.num3}}
            </span>
          </p>
        </div>
      </div>

    </div>
    <!-- 6视频 -->
    <div class="box title">VIDEO 视频</div>
    <div class="video_box box">
      <div class="title2" @mouseenter='myMouseenter_video($event)' @mouseleave='myMouseleave_video($event)' v-for='(item,index3) in list2' :key='index3 + "c"' style="height:264px">
        <a href="">
          <img :src="item.img_vid" alt="">
          <span class="play"></span>
          <div class="text_box_1">
            <div class="bt_new">
              <p><a href="" class="bt">{{item.pp}}</a></p>
              <p class="text_p2">{{item.pp2}}</p>
            </div>
          </div>
        </a>
       
      </div>
    </div>

    <!-- 7大家说 -->
    <div class="box title">COMMENT 大家都在说</div>
     <div class="video_box box">
      <div class="title2" v-for='(item,index4) in list_video' :key='index4 + "d"' style="height:327px" @mouseenter='myMouseenter_everyone($event)' @mouseleave='myMouseleave_everyone($event)' ref='el'>
        <img :src="item.img_vid" alt="">
        <div class="text_box_1 text_top" style="padding:0;background-color:#f7f8fa">
          <div class="bt_new">
            <p class="video_title"><a href="" class="bt">{{item.pp}}</a></p>
            <p class="text_p2 everyone">{{item.pp2}}</p>
          </div>
          <p class="title_bottom" style="padding:0 10px">
            <span>
              {{item.num1}}
            </span>
            <span>
              {{item.num2}}
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- 底栏 -->
    <div class="footer_box">
      <div class="box bottom_box">
        <div class="text_box">
          <ul class="text_footer">
            <li v-for='(text_bottom,index5) in list_footer' :key='index5 + "e"'>
              <a href="" v-for='(text0,index6) in text_bottom[0]' :key='index6 + "f"'>
                <h4>{{text0}}</h4>
              </a>
              <a href="" v-for='(text1,index7) in text_bottom[1]' :key='index7 + "g"'>
                <p class="bt" @mouseenter='mouseenter_wx($event)' @mouseleave='mouseleave_wx($event)'>{{text1}}</p>
              </a>
            </li>
          </ul>
          <div class="weixin">
          </div>
        <div class="di">©2012-2018 700BIKE版权所有 | 京ICP备14023642号-4</div>
        </div>
        <div class="di_right">
          <h4>欢迎订阅700bike精品内容</h4>
          <p class="email_box">
            <input type="email" id="email" placeholder="E-mail">
            <input type="submit" id="Submit" value=''>
          </p>
          <a href="" class="bottom_a"></a>
        </div>
      </div>
    </div>

    <!-- 浮游窗 -->
    <div class="floating">
      <a href="" class="bgs1"></a>
      <a href="" class="bgs2"></a>
      <a href="" class="bgs3"></a>
      <a href="" class="bgs4"></a>
    </div>


  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        count1:0,
        count2:0,
        img: {
          img1:
            "http://img1.700bike.com/upload/others/2017/11/201711030220215668.jpg",
          img2:
            "http://img1.700bike.com/upload/others/2017/05/201705170338204172.jpg",
          img3:
            "http://img1.700bike.com/upload/others/2017/05/201705110423098226.jpg"
        },
        list: [
          {
            img2:
              "http://img1.700bike.com/upload/others/2017/03/201703011203221839.jpg",
            pp: "2017年第一次活动：这次“恢复训练”很到位",
            num1: 14564,
            num2: 18,
            num3: "1天前"
          },
          {
            img2:
              "http://img1.700bike.com/upload/others/2016/11/201611100557343583.jpg",
            pp: "700Bike“都市冒险家”，骑行去发现城市的美",
            num1: 22147,
            num2: 9,
            num3: "1月前"
          },
          {
            img2:
              "http://img1.700bike.com/upload/others/2016/11/201611100602223866.jpg",
            pp: "骑行是快乐的，比骑行更快乐的是能认识你们",
            num1: 6795,
            num2: 5,
            num3: "1月前"
          },
          {
            img2:
              "http://img1.700bike.com/upload/others/2016/11/201611100605078591.jpg",
            pp: "车好花好人也好的艺术花园节",
            num1: 2320,
            num2: 1,
            num3: "2月前"
          }
        ],
        list2: [
          {
            img_vid:
              "http://img1.700bike.com/upload/others/2017/05/201705181048075044.jpg",
            pp: "有什么需求尽管提，满足不了算我输",
            pp2: "700Bike和他的6位“老伙计”"
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230504158990.jpg",
            pp: "痴迷于腿 这件事是美好的",
            pp2: "#骑了就懂"
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230510164555.jpg",
            pp: "有时候 你需要的只是释放",
            pp2: "#骑了就懂"
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230500214986.jpg",
            pp: "你的臀部是哪种水果？",
            pp2: "#骑了就懂"
          }
        ],
        list_video:[
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611231110261498.jpg",
            pp: "张向东的自行车革命丨创业者",
            pp2: "「那些很好的车都是少数人在做、在用，和日常人、日常生活没有关系。」……",
            num1: '南方人物...',
            num2: '2016.8.29'
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230123362262.jpg",
            pp: "700Bike张向东：抓住消费升级机遇，须做到这三个“升级”",
            pp2: "在职场中，“干一行爱一行”……",
            num1: '正和鸟',
            num2: '2016.4.21'
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230133478184.jpg",
            pp: "当所有人都在追求更快、更远，曾经最快最远的张向东却停了下来",
            pp2: "旅途让他爱上了自行车……",
            num1: '人物',
            num2: '2016.4.14'
          },
          {
            img_vid:
              "http://img1.700bike.com/upload/2016/11/201611230139225660.jpg",
            pp: "让骑行成为生活的一部分，700Bike MUJI 款银河折叠车",
            pp2: "男人对于车或许有一种天生的眷念感，如果……",
            num1: '数字尾巴',
            num2: '2016.10.27'
          }
        ],
        list_footer:[[['我们的产品'],['新一代自行车','合作品牌','骑行装备']],[['关于我们'],['公司简介','联系我们','加入我们']],[['关注我们'],['官方微信','官方微博']]],
        commonality: "",
        bb: [""],
        aa: [""],

        asi: [
          ["人物", "城市", "物品"],
          [
            {
              src:
                "http://img1.700bike.com/upload/others/2016/10/201610310243106598.jpg",
              pp: "告别了胡同里的蒙古包，她又开始与食物作对",
              src2:
                "http://img1.700bike.com/upload/2016/11/201611291119334081.jpg",
              pp2: "骑车路过一座城，才会有留下的冲动"
            },
            {
              src:
                "http://img1.700bike.com/upload/others/2016/10/201610310229264297.jpg",
              pp: "耍帅一定要成套，少了单车怎么行",
              src2: "http://img1.700bike.com/upload/20161009094740915.jpg",
              pp2: "厉害了word哥，这就是700Bike的简单生活"
            },
            {
              src:
                "http://img1.700bike.com/bbs/2016/1118/65868266DMfj.jpg!680.jpg",
              pp: "『开膛破肚』—Rains Day Bag的评测报告",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612061027377885.jpg",
              pp2: "700众测 ｜ 评测报告精选合集"
            }
          ]
        ],
        asi2: [
          [
            "Mr.Bicycle",
            "In The World",
            "复古骑行",
            "死飞大革命",
            "单车回潮",
            "意式单车风情"
          ],
          [
            {
              src: "http://img1.700bike.com/upload/2016/12/20161206071804360.jpg",
              pp: "你问我答，在穿越美国的路上“不务正业”",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060718018458.jpg",
              pp2: "在有光的夜晚，一再窥探生活的景深"
            },
            {
              src:
                "http://img1.700bike.com/upload/2016/12/201612060701162952.jpg",
              pp: "纽约丨NEW YORK",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060701138159.jpg",
              pp2: "东京丨TOKYO"
            },
            {
              src: "http://img1.700bike.com/upload/2016/12/20161206064724709.jpg",
              pp: "占村为王的嬉皮士搞出了什么嬉皮事？",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060647256241.jpg",
              pp2: "Miss Eliza Vintage ：在胡同中品味时光的味道"
            },
            {
              src:
                "http://img1.700bike.com/upload/2016/12/201612060636577752.jpg",
              pp: "G-SHOCK固齿公开赛Fixed Gear Open 6官方纪录片上线",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060636596224.jpg",
              pp2: "G-SHOCK Fixed Gear Open 6固齿公开赛 属于我们的“部落”"
            },
            {
              src:
                "http://img1.700bike.com/upload/2016/12/201612060606348832.jpg",
              pp: "《破风》车手彭于晏：骑车是最幸福的事儿",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060606356872.jpg",
              pp2: "咖啡师Clark：骑自行车是一种精致生活理念"
            },
            {
              src:
                "http://img1.700bike.com/upload/2016/12/201612060545158010.jpg",
              pp: "王后的绿色瞳仁：Bianchi",
              src2:
                "http://img1.700bike.com/upload/2016/12/201612060545176755.jpg",
              pp2: "玛莎拉蒂的单车版：Milani"
            }
          ]
        ]
      };
    },

    methods: {
      myMouseover() {
        $(".wechat").fadeIn("500");
      },
      myMouseleave() {
        $(".wechat").fadeOut("500");
      },
      myMouseover2() {
        $(".wechat2").fadeIn("500");
      },
      myMouseleave2() {
        $(".wechat2").fadeOut("500");
      },
      myMouseenter_read(e) {
        e.target.style.border = "2px solid yellow";
        e.target.style.color = "yellow";
      },
      myMouseleave_read(e) {
        e.target.style.border = "2px solid #fff";
        e.target.style.color = "#fff";
      },
      // --------------------  下拉框  ------------------
      myMouseenter_asi() {
        $(".aside_big_box").css("display", "block");
        this.aa = this.asi[0];
        this.bb = this.asi[1][0];
        this.commonality = this.asi;
        // $(".aside_p").css({"background-color":"#f3f6fb"});
        if(this.count1 == 0){
          $('.aside_p:first').css({"background-color":"#ffffff"})
        }
        this.count1++
      },
      myMouseleave_asi() {
        $(".aside_big_box").css("display", "none");
      },
      myMouseenter_asi2() {
        this.aa = this.asi2[0];
        this.bb = this.asi2[1][0];
        this.commonality = this.asi2;
        $(".aside_big_box").css("display", "block");
        // $(".aside_p").css({"background-color":"#f3f6fb"});
        if(this.count2 == 0){
          $('.aside_p:first').css({"background-color":"#ffffff"});
          console.log(this.count);
        }
        this.count2++
      },
      myMouseenter_aside(index, e) {
        $(".aside_p").css("backgroundColor", "#f3f6fb");
        e.target.style.backgroundColor = "#ffffff";
        this.bb = this.commonality[1][index];
      },
      // 大家
      myMouseenter_everyone(e){
        e.target.children[1].children[0].children[1].style.height = '102px';
        e.target.children[1].children[0].style.height = '82px';
        e.target.children[1].style.top = '-40px';
      },
      myMouseleave_everyone(e){
        e.target.children[1].children[0].children[1].style.height = '62px';
        e.target.children[1].children[0].style.height = '42px';
        e.target.children[1].style.top = '0';
      },
      // 底栏微信
      mouseenter_wx(e){
        if(e.target.innerHTML == '官方微信'){
          $('.weixin').fadeIn()
        }
      },
      mouseleave_wx(e){
        if(e.target.innerHTML == '官方微信'){
          $('.weixin').fadeOut()
        }
      },
      // 视频图标
      myMouseenter_video(e){
        e.target.children[0].children[1].style.backgroundPosition = '96.2% 85.5%';
      },
      myMouseleave_video(e){
        e.target.children[0].children[1].style.backgroundPosition = '-280px -122px';
      },

      // 浮游窗

      function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#toTop").fadeIn(1500);
                }
                else
                {
                    $("#toTop").fadeOut(1500);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $("#toTop").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
        });
    }


    },
    mounted(){

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* 浮游窗 */
  .floating{
    width: 48px;
    height: 185px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99999999;
    font-size: 12px;
    color: #666;
  }
  
  .floating a{
    display: block;
    width: 41px;
    height: 41px;
    margin-bottom: 7px;
    background-color  : #000;
  }
  .bgs1{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -112px -179px;
  }
  .bgs1:hover{
    background-position: -56px -179px;
  }
  .bgs2{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: 0px -122px;
  }
  .bgs2:hover{
    background-position:-56px -122px;
  }
  .bgs3{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -224px -122px;
  }
  .bgs3:hover{
    background-position:-168px -122px;
  }
  .bgs4{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -112px -122px;
  }
  .bgs4:hover{
    background-position:0 -179px;
  }

  /* 浮游窗 */

  .top_bar {
    background-color: #333333;
    height: 33px;
    display: flex;
    align-items: center;
  }

  .box {
    width: 1040px;
    margin: 0 auto;
  }

  #top_bar_content {
    display: flex;
    justify-content: space-between;
  }

  #top_bar_content a {
    color: #aaa;
    text-decoration: none;
    font-size: 12px;
    display: inline-block;
    padding: 0 12px;
    border-right: 1px solid #404040;
  }

  #top_bar_content a:hover {
    color: #fdd000;
  }

  .top_left a:last-child,
  .top_right a:last-child {
    border: none !important;
  }

  .top_left {
    width: 300px;
  }

  .top_right {
    width: 214px;
  }

  .wechat {
    width: 102px;
    height: 107px;
    padding-top: 10px;
    position: absolute;
    top: 10px;
    left: -20px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-image: url(http://www.700bike.com/static/images/weixin.jpg);
    display: none;
    z-index: 100;
    /* transition: all 0.3s; */
  }

  .wechat2 {
    width: 102px;
    height: 107px;
    padding-top: 10px;
    position: absolute;
    top: 25px;
    left: 111px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    display: none;
    z-index: 100;
    /* transition: all 0.3s; */
  }

  #header_bar_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .logo {
    width: 42px;
    height: 40px;
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
      background-position: -222px -179px;
    margin-right: 92px;
  }

  .drop {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .drop>div{
    display: flex;
  }

  .header_bar_box_left {
    display: flex;
    align-items: center;
  }

  .dropdown {
    margin-right: 40px;
  }

  .inp_box {
    padding-left: 3px;
    border: 2px solid #ededed;
    margin-right: 62px;
  }

  #inp {
    width: 122px;
    height: 25px;
    border: none;
    color: #c2c2c2;
  }

  /* 轮播css */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .is-active .el-carousel__button {
    height: 5px;
    background-color: #ffcd02 !important;
    /* border:1px solid red; */
  }

  .el-carousel__indicator .el-carousel__button {
    height: 5px;
    background-color: #c6c6c6;
  }

  /* 轮播css */

  /* 444 */
  .title {
    height: 85px;
    line-height: 85px;
    font-size: 24px;
    color: #212121;
    font-family: "Arial, Helvetica, sans-serif ";
    font-family: "黑体";
    font-weight: 700;
  }

  .title1 {
    position: relative;
    background-color: #f7f8fa;
    width: 335px;
    height: 410px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .title2 {
    position: relative;
    background-color: #f7f8fa;
    width: 244px;
    height: 293px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .title2 img{
    width: 244px;
    height: 151px;
  }

  .item_title {
    position: absolute;
    background-color: rgba(255, 2555, 255, 0.5);
    top: 0;
    left: 0;
    display: block;
    width: 40px;
    height: 25px;
    line-height: 24px;
    text-align: center;
    z-index: 99;
    opacity: 0.8;
  }

  .item_title a {
    font-size: 12px;
  }

  .title_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .middle {
    text-align: center;
    position: relative;
  }

  .bt_box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .bt1 {
    margin-top: 50px;
    width: 100%;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    font-family: "微软雅黑";
  }

  .bt2 {
    margin-top: 50px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    font-family: "微软雅黑";
  }

  .beautiful{
    color: white;
  }

  .bt1 a {
    color: #fff;
  }

  .bt2 a {
    color: #fff;
  }

  .read {
    margin-top: 135px;
    width: 121px;
    height: 37px;
    line-height: 37px;
    display: inline-block;
    border: 2px solid #fff;
    color: #fff;
  }

  .text_p2 {
    color: #aaa;
    font-size: 12px;
  }

  .title_bottom {
    height: 50px;
    margin-top: 80px;
  }

  .title_bottom span {
    margin-right: 3%;
    display: block;
    height: 18px;
    line-height: 15px;
    float: left;
    color: #9fa3a7;
    font-size: 12px;
  }

  .title_bottom i {
    display: inline-block;
    width: 20px;
    height: 18px;
  }

  .title_bottom > span:last-child {
    float: right;
  }

  .dropdown span {
    display: inline-block;
    height: 100%;
    line-height: 90px;
  }

  .dropdown {
    height: 100%;
    cursor:pointer;
  }

  .bt:hover {
    color: #fdd000;
  }

  .text_box_1 {
    padding: 0 10px;
  }

  /* 活动 */
  .activity {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .bt_new {
    height: 42px;
     transition: all 0.5s;
  }

  .video_box {
    display: flex;
    justify-content: space-between;
  }

  .aside {
    width: 246px;
    height: 100%;
    background-color: #f3f6fb;
    padding-top: 30px;
    box-sizing: border-box;
  }

  .aside_big_box {
    display: none;
    height: 360px;
    position: absolute;
    top: 90px;
    left: 0;
    z-index: 100;
  }

  .aside_box {
    /* display: none; */
    height: 100%;
    display: flex;
  }

  .aside_p {
    margin: 0;
    padding: 0;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }

  /* .aside_p:first-child {
    background-color: #ffffff;
  } */

  .aside_div {
    padding: 30px 80px 0 80px;
    background-color: #ffffff;
    box-sizing: border-box;
    width: 794px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    /* text-align: center; */
  }

  .aside_div img {
    width: 278px;
    height: 190px;
  }

  .aside_div>div>a{
    display: block;
    font-size: 14px;
    width: 275px;
  }
  .aside_div>div>a:hover{
    color: #fdd000;
  }

  .dropdown span:hover{
    color:#fdd000
  }


  /* 66666 */
  .play{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -280px -122px;
    position: absolute;
    left: 23px;
    top: 92px;
    cursor: pointer;
  }
  /* .play:hover{
    background-position: 96.2% 85.5%;
  } */

  /* 大家说 */
  .video_title{
    font-size: 16px;
    line-height: 24px;
    max-height:48px; 
    padding: 24px 15px 0; 
    margin: 0;
    overflow:hidden;
    font-family: '微软雅黑';
    transition: all 0.5s;
  }

  .everyone{
    padding:0 15px;
    height:100px;
    position: relative;
  }

  .text_top{
    position: relative;
    height: 50px;
    top: 0;
    transition: all 0.5s;
  }

  /* 底栏 */
  .footer_box{
    height: 410px;
    background-color: #2c2c2c;
    margin-top: 70px;
  }
  .text_box{
    width: 780px;
    height: 270px;
    position: relative;
  }
  .text_footer{
    display: flex;
    height: 133px;
    justify-content: space-between;
  }
  .text_footer h4{
    color:#fff;
    font-size: 13px;
    width: 260px;
  }
  .text_footer p{
    font-size: 12px;
    color: #6c6c6c;
    line-height: 32px;
  }
  .bottom_box{
    padding: 70px 0;
    display: flex;
  }
  p{
    margin: 0;
  }
  .di{
    line-height: 14px;
    font-size: 12px;
    color: #666;
    padding-top: 85px;
  }
  .di_right{
    font-size: 13px;
    margin-bottom: 20px;
    color: #fff;
    letter-spacing: 2px;
  }
  .di_right h4{
    text-align: center;
  }
  .email_box{
    position: relative;
    width: 238px;
    height: 48px;
    background: #353535;
    border-radius: 48px;
    margin-bottom: 80px;
  }

  #email{
    width: 170px;
    height: 44px;
    line-height: 42px;
    position: absolute;
    left: 18px;
    top: 3px;
    color: #6c6c6c;
    background: #353535;
    border: 0;
    outline: 0;
  }
  #Submit{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -168px -179px;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 4px;
    width: 47px;
    height: 47px;
    cursor: pointer;
    background-repeat: no-repeat;
    border: 0;
    outline: 0;
  }
  .bottom_a{
    background-image: url(http://www.700bike.com/static/styles/pkg/index.min_z.png);
    background-position: -117px 0px;
    display: block;
    width: 196px;
    height: 63px;
    margin-left: 18px;
    background-repeat: no-repeat;
  }
  .weixin{
    background-image: url(http://www.700bike.com/static/images/weixin.jpg);
    background-repeat: no-repeat;
    bottom: 0;
    height: 107px;
    left: 410px;
    top: -68px;
    position: absolute;
    width: 102px;
    display: none;
  }





  @font-face {
    font-family: "iconfont";
    src: url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAgQAAsAAAAAC8AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8rkhuY21hcAAAAYAAAACEAAAB9E0B55tnbHlmAAACBAAAA9UAAATkE6+lvmhlYWQAAAXcAAAAMQAAADYSkBWQaGhlYQAABhAAAAAgAAAAJAffA4RobXR4AAAGMAAAABIAAAAgIAD/+2xvY2EAAAZEAAAAEgAAABIFQAO4bWF4cAAABlgAAAAfAAAAIAEZAF5uYW1lAAAGeAAAAUUAAAJtPlT+fXBvc3QAAAfAAAAAUAAAAG1pNuCSeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT6rYW7438AQw9zAsBkozAiSAwDojQyXeJztkdEJwzAMRE9xnIDpRybIbwhkpn51h/xkgn51ylsjOUmFUugIPfGMddjGnABUAEVsogfsBYPrKdfCL2jh97irn1Q6z8rGmQtX7jzO85fzJYubnwJGeR0GvVv8Fzbgr1usj3c3eqpJ7Fvic+GcKEFwSZQluCY+S+5JzOtIUC+UcyazeJxVVE1sG0UUnjez9tixs/bG++M1Zu3ddbwRRHayttfgYEdIVepGagpFtCcOiUSqqgg45BCpipDSS9WqWFQWJ9oDghsCcUFNL1CoVCGBlBxQ+RWFthSaAweKOMTe8NZWokYz+735eW/mvfk+LaGE7B5lv7IYUYhJSAhaUCuBIwI3QHO9OqgtqOJiHae4WAL2vb81OS1sXbmyJSAeXnOhzKXR3pts48LFa4Jw7eKFjUtQdtcODx0Qpyf9LQ6jEp3cc2BsgxDC8O6/2LtMJ0m8+xm8vcSqLeqqmprkIjBLpLJBMQkv6ZQgZZWhWIYSNDEd9FE0A3jYBv94d6XZXOl+0G2srja6x9vnlj1v+dw769XTp6vrr/BIJyJAYgSkJyToxKPhaFKDgTtGNdb862uNJt31Tq1fXj/ledXXIf9Gxev/J5xkIYiOhv4WJUn87SWuxxKEkyDp7+jLaJIkTyZJg8yRBULGNdMqOlILKiYmJokAIiiSrGomvqZULTogVZRKrSLZNVupV72Ka4Asgm2VoC6rrlerlnASDtXsWkWxFdrd6f1uOACOwYyB7d1M6XqKGQH2qX3ess7/OFcvNHL5GWu8YdiVBVd5KjNeg7kTmyc/YRMGZI2JCcO/Z0xAB/SUfy+lA1rIovW/gNCZM/7O2bNvPT9vt47N5gsta8qru/mpjHv9gWE8wPpgUGsbOiSOE1MEDVS3Dl7RYZn+t7oyBvpobhT0MTkDHVpS/D/iccjIZdQTEXZ3EEJ0m8SIRmxSxhOGgkIdoYJQX3uCYgLVwmOhwpjjUXhsnZL2IqWL7SF6RwCOeEP079wPsW1IQ3qbhe77d+7+lEr+8OfD28nUL/Tp/Yj2on97PwTxoeZ/pQ0+aAZf/zXxUav1SBT/mW3+G5QaQi1uss/ZFHmSuGSGHCJHkVeTh7E5xaA1kaIByXUTU0SSGRJrDomeAaU+XTeRSccqVj1XlcP7A743YJf8F24IAo8II5xRYUXJAmQVlhnYXDzStyLxeOTyqzPwUSR+M5XJFDOZrw+Y977EOADgTOD846xKp4Zn9DfVLD0UiQHEIn48Gnt/+blY9Bvd0bHDAUPCWOdnLMvmSYLkkJlZ0iYvDhl+XLEpOWyjpnHoBZpWuGmFg/1KUOPB/eA5FGaFAyFXi/iHGFZL7/qNdD6fhltaPh+XE/6zSVlOwq2EfMK/mlCUBCwhQpT7V3k0ymGJR2/opumapi6pqqWqbB5y6d7P6RygZYV0rvdhEMYKAUpKov9pMKDHEkr/bT4ywukCjwKe11+18BDXWgLVVLGT/wGxJPprAAAAeJxjYGRgYADiD3d+f47nt/nKwM3CAALXd2T8g9H/f//3ZWFl9gJyORiYQKIAtRwO+wAAAHicY2BkYGBu+N/AEMPC8P/3/98srAxAERTAAQCgYwZqeJxjYWBgYMHA/3/D2AAVKQIbAAAAAAAAAD4AlgEMASoBhAH4AnIAAHicY2BkYGDgYAhiYGcAASYg5gJCBob/YD4DABHFAXgAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbYnBDoAgDMX2QAH5yyVGGIdxABL8eyVe7alpydBHpH8CDCw27HDwCDgoXqzp5CKafMtShNXm2uMUXt7r8Dfr2u5NdYpruY4iRA+BxBUE") format("woff");
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-fangdajing:before {
    content: "\e60a";
  }

  .icon-shijian:before {
    content: "\e61e";
  }

  .icon-hot:before {
    content: "\e677";
    position: absolute;
    top: -10px;
    left: 25px;
  }

  .icon-xiajiantou:before {
    content: "\e629";
  }

  .icon-yanjing:before {
    content: "\e67c";
  }

  .icon-xiaoxi:before {
    content: "\e627";
  }

  .icon-shouji:before {
    content: "\e605";
  }
</style>