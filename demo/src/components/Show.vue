<template>
  <div id="box">
    <!-- 1导航 -->
    <div class="header_bar">
      <div id="header_bar_box" class="box">
        <div class="header_bar_box_left">
          <a href="">
            <div class="logo"></div>
          </a>
          <div class="drop">
            <div class='dropdown'>
              <span>
                首页
              </span>
            </div>
            <div @mouseleave='myMouseleave_asi'>
              <div class='dropdown'>
                <span @mouseenter='myMouseenter_asi'>
                  自行车
                </span>
              </div>
              <div class='dropdown'>
                <span @mouseenter='myMouseenter_asi2'>
                  好物
                </span>
              </div>
              <!-- 下拉 -->
              <div class="aside_big_box box">
                <div class="aside_box">
                  <div class="aside_div" @mouseenter='myMouseenter_aside(index,$event)' v-for='(itemdata,index) in aa' :key='index'>
                    <div>
                      <a href="">
                        <div class="bike_yellow" v-my-mou='$event'>
                          <i v-my-pos='index' class="nav_bike"></i>
                          <br>
                          {{itemdata.pp}}
                        </div>

                        <span class="new_brand" v-if='itemdata.src'> 新品</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='dropdown'>
              <span>
                促销
              </span>
            </div>
            <div class='dropdown'>
              <span>
                专题
              </span>
            </div>
            <div class='dropdown'>
              <span>
                领券中心
              </span>
            </div>
            <div class='dropdown'>
              <span>
                社区
              </span>
            </div>
          </div>
        </div>
        <div class="inp_box">
          <i class=""></i>
          <div class='dropdown'>
            <a href="">
              <span>
                登录
              </span>
            </a>
          </div>
          <div class='dropdown'>
            <a href="#/register">
              <span>
                注册
              </span>
            </a>
            
          </div>
          <div>
            <i class=""></i>
            <span>
              0
            </span>
          </div>
            
        </div>
      </div>
    </div>
    <!-- 2轮播 -->
    <div class="block box">
      <el-carousel height="428px" arrow='never'>
        <el-carousel-item v-for="(item,index) in src" :key="index" value='index'>
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 3新品上市 -->

    <div class="new_arriual box">
        <h4>新品上市</h4>
        <p class="new_img"></p>
        <span></span>
        <div class="bike_box">
          <div class="bike_one">

          </div>
          <div></div>
          <div></div>
        </div>
    </div>



  </div>

</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      src: [
        "http://s1.700static.com/store/v2.0/css/img/banner/20180116.che.web.jpg",
        "http://s1.700static.com/store/v2.0/css/img/banner/20180116.rains.web.jpg",
        "http://s1.700static.com/store/v2.0/css/img/banner/20180116.yinhe.web.jpg"
      ],
      bb: [""],
      aa: [""],
      commonality:'',
      asi: 
        [
          {
            src:true,
            pp: "银河MINI"
          },
          {
            src:true,
            pp: "银河2017"
          },
          {
            src:true,
            pp: "后街2017"
          },
          {
            src:true,
            pp: "银河Lite"
          },
          {
            src:false,
            pp: "银河"
          },
          {
            src:false,
            pp: "后街"
          },
          {
            src:false,
            pp: "后街MINI"
          }
        
      ],
      asi2: 
        [
          {
            src: "http://img1.700bike.com/upload/2016/12/20161206071804360.jpg",
            pp: ""
          },
          {
            src:
              "http://img1.700bike.com/upload/2016/12/201612060701162952.jpg",
            pp: "纽约丨NEW YORK"
          },
          {
            src: "http://img1.700bike.com/upload/2016/12/20161206064724709.jpg",
            pp: "占村为王的嬉皮士搞出了什么嬉皮事？"
          },
          {
            src:
              "http://img1.700bike.com/upload/2016/12/201612060636577752.jpg",
            pp: "G-SHOCK固齿公开赛Fixed Gear Open 6官方纪录片上线"
          },
          {
            src:
              "http://img1.700bike.com/upload/2016/12/201612060606348832.jpg",
            pp: "《破风》车手彭于晏：骑车是最幸福的事儿"
          },
          {
            src:
              "http://img1.700bike.com/upload/2016/12/201612060545158010.jpg",
            pp: "王后的绿色瞳仁：Bianchi"
          }
        ]
      
    };
  },
  directives: {
    "my-pos": {
      inserted: function (el, bindVbind) {
        el.style.backgroundPositionY = `calc(15.7% * ${bindVbind.value})`;
      }
    },
    "my-mou": {
      inserted:function(el,bindVbind){
        el.onmouseenter = function(){
          el.style.color = '#f2bd00';
          el.children[0].style.backgroundPositionY = `calc(15.7% * ${bindVbind.value})`;
          el.children[0].style.backgroundPositionX = '102.5%';
          console.log('11111');
        },
        el.onmouseleave = function(){
          el.style.color = '#666';
          el.children[0].style.backgroundPositionY = `calc(15.7% * ${bindVbind.value})`;
          el.children[0].style.backgroundPositionX = '0';
        }
      }
    }
  },
  methods: {
    myMouseenter_asi() {
      $(".aside_big_box").css("display", "block");
      this.aa = this.asi;
      this.bb = this.asi;
      this.commonality = this.asi;
    },
    myMouseleave_asi() {
      $(".aside_big_box").css("display", "none");
    },
    myMouseenter_asi2() {
      this.aa = this.asi2;
      this.bb = this.asi2;
      this.commonality = this.asi2;
      $(".aside_big_box").css("display", "block");
    },
    myMouseenter_aside(index, e) {
      this.bb = this.commonality[0];
    }
  }
};
</script>

<style>
.box {
  width: 1240px;
  margin: 0 auto;
}

/* 轮播css */

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.is-active .el-carousel__button {
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: #f9f9f9 !important;
  /* border:1px solid red; */
}

.el-carousel__indicator .el-carousel__button {
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: #2b1b1d;
}

/* 轮播css */

/* 导航栏 */
#header_bar_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 10px;
}

.logo {
  width: 58px;
  height: 80px;
  background: url(http://s1.700static.com/store/v2.0/css/img/iconMerge_669a29d.png) 0 21px no-repeat;
  margin-right: 80px;
}

.drop {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drop > div {
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
  margin-right: 62px;
  display: flex;
}

#inp {
  width: 122px;
  height: 25px;
  border: none;
  color: #c2c2c2;
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
  height: 170px;
  position: absolute;
  top: 90px;
  left: 0;
  z-index: 100;
}

.aside_box {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.aside_div {
  padding: 30px 10px 0 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.aside_div img {
  width: 278px;
  height: 190px;
}

.aside_div > div > a {
  display: block;
  font-size: 14px;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.dropdown span:hover {
  color: #fdd000;
}

.drop>.dropdown:first-child span:first-child{
  color: #fdd000;
}
.dropdown span {
  display: inline-block;
  height: 100%;
  font-size: 18px;
  line-height: 90px;
}
drop>.dropdown:first-child{
  margin-left: 0;
}
.dropdown {
  height: 100%;
  cursor: pointer;
  margin: 0 26px;
}

.nav_bike{
  display: inline-block;
  background-image: url(http://s1.700static.com/store/v2.0/css/v3.0/pc/static/styles/img/hover2.png);
  width: 120px;
  height: 70px;
}

.new_brand{
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: #ffcb05;
}

/* 导航栏 */

/* 新品 */

.new_img{
  background: url(http://s1.700static.com/store/v2.0/css/v3.0/pc/static/styles/img/new.png) no-repeat scroll center center;
  height: 25px;
}
.new_arriual>h4{
  text-align: center;
  color: #333;
  font-size: 30px;
  margin: 0;
}
.new_arriual>span{
  border-top: 1px solid #999;
  display: block;
  margin: 20px auto 0;
  width: 120px;
}

/* 新品 */
</style>