<template>
    <div id="box">
        <div class="big_box">
            <img class="app_img" src="http://s1.700static.com/app/img/bg.jpg" alt="">
            <!-- logo -->
            <div class="app_header">
                <div class="app_logo"></div>
                <div class="app_logo_text">700Bike</div>
            </div>
            <!-- 二维码 -->
            <div class="app_erweima">
                <img src="http://s1.700static.com/app/img/web_700bike-app_04.png" alt="">
                <div class="er_box">
                     <div>
                        <a class="app_android" href=""></a>
                    </div>
                    <div>
                        <a class="app_ios" href=""></a>
                    </div>
                </div>
               
            </div>
            <!-- 下箭头 -->
            <div @click="top" class="next_page"></div>
            <!-- 中间内容 -->
            <div class="app_contenf">
                <h1>700Bike 骑行App</h1>
                <p>全新 v2.0版本 邀您踏频</p>
            </div>
        </div>
        <!-- 手机模板 -->
        <div class="app_phone">
            <img src="http://s1.700static.com/app/img/app-conbg.jpg" alt="">
            <span class="point point1"></span>
            <span class="point point2"></span>
            <span class="point point3"></span>
            <span class="point point4"></span>
            <span class="point point5"></span>
            <span class="point point6"></span>
            <div class="app_txt app_txt1" @mouseenter='myMouseenter($event,0)'>
                <p>骑行码表</p>
                <p>记录精准骑行数据 掌握不同风格</p>
            </div>
            <div class="app_txt app_txt2" @mouseenter='myMouseenter($event,1)'>
                <p>精彩活动</p>
                <p>线上竞技比拼 线下骑友欢聚</p>
            </div>
            <div class="app_txt app_txt3" @mouseenter='myMouseenter($event,2)'>
                <p>精选</p>
                <p>发现炫酷的骑行装备 掌握最新的</p>
            </div>
            <div class="app_txt app_txt4" @mouseenter='myMouseenter($event,3)'>
                <p>排行榜</p>
                <p>查询自己在全国车友中的名次</p>
            </div>
            <div class="app_txt app_txt5" @mouseenter='myMouseenter($event,4)'>
                <p>定位/追踪</p>
                <p>可实时查看于追踪自行车位置</p>
            </div>
            <div class="app_txt app_txt6" @mouseenter='myMouseenter($event,5)'>
                <p>移动报警</p>
                <p>APP锁车后 自行车移动会立即收到报警信息</p>
            </div>
            <img class="phone_img" src="http://s1.700static.com/app/img/poi_1.jpg" alt="">
        </div>
            <!-- <lunbo :slides="slides" :inv="invTime"></lunbo> -->
    </div>
</template>

<script>
// import lunbo from './lunbo'
export default {
    data(){
        return{
            src:['http://s1.700static.com/app/img/poi_3.jpg','http://s1.700static.com/app/img/poi_1.jpg','http://s1.700static.com/app/img/poi_2.jpg','http://s1.700static.com/app/img/poi_4.jpg','http://s1.700static.com/app/img/poi_6.jpg','http://s1.700static.com/app/img/poi_5.jpg']
        }
    },
    // components:{lunbo},
    methods:{
        top(){
            $('body,html').animate({scrollTop:1200},1000);
        },
        myMouseenter(e,ind){
            $('.app_txt').find('p').css('color','black');
            e.target.children[0].style.color = '#f2bd00';
            e.target.children[1].style.color = '#f2bd00';
            $('.point').css('display','none');

            // console.log($('.point').eq(ind));
            $('.point').eq(ind).css('display','block'); 
            $('.phone_img').attr('src',this.src[ind])
        }
    }
}
</script>

<style scoped>
    #box{
        font-family: "Open Sans",Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑","STHeiti","WenQuanYi Micro Hei",SimSun,sans-serif;
    }
    .big_box{
        position: relative;
    }
    /* logo */
    .app_img{
        width: 100%;
    }
    .app_header{
        position: absolute;
        left: 80px;
        top: 80px;
        line-height: 64px;
        font-size: 24px;
        color: rgba(255,255,255,.7);
        display: flex;
    }
    .app_logo{
        background-image: url(http://s1.700static.com/app/css/img/app-logo_new.png);
        margin-right: 20px;
        width: 64px;
        height: 64px;
    }
    .app_logo_text{
        line-height: 64px;
        font-size: 24px;
    }

    /* 二维码 */
    .app_erweima{
        position: absolute;
        right: 80px;
        top: 80px;
        width: 136px;
        font-size: 0;
        background: #ffcb05;
        height: 205px;
        border-radius: 6px;
    }
    .er_box{
        display: flex;
    }
    .app_android{
        display: inline-block;
        width: 68px;
        height: 68px;
        background-image: url(http://s1.700static.com/app/css/img/appaz.png);
        background-repeat: no-repeat;
    }
    .app_ios{
        display: inline-block;
        width: 68px;
        height: 68px;
        background-image: url(http://s1.700static.com/app/css/img/appios.png);
        background-repeat: no-repeat;
    }
    /* 下箭头 */
    .next_page{
        position: absolute;
        left: 50%;
        bottom: 60px;
        margin-left: -27px;
        width: 54px;
        height: 54px;
        background: url(http://s1.700static.com/app/css/img/nextpage.png);
        cursor: pointer;
    }
    /* 中间内容 */
    .app_contenf{
        position: absolute;
        left: 30%;
        top: 30%;
    }
    .app_contenf h1{
        font-size: 48px;
        color: #ffffff;
        margin: 0;
        padding: 0;
    }
    .app_contenf p{
        font-size: 30px;
        color: rgba(255,255,255,.7);
        margin: 0;
        padding: 0;
    }
    /* 手机模板 */
    .app_phone{
        position: relative;
        margin: 60px auto auto auto;
        padding-bottom: 80px;
        width: 522px;
        white-space: nowrap;
    }
    /* 模板下的小点 */
    .point{
        position: absolute;
        width: 28px;
        height: 28px;
        background: url(http://s1.700static.com/app/css/img/point.png);
        display: none;
    }
    .point1{
        top: 219px;
        left: 32px;
        display: block;
    }
    .point2{
        top: 353px;
        left: -7px;
    }
    .point3{
        top: 486px;
        left: 32px;
    }
    .point4{
        top: 219px;
        left: 462px;
    }
    .point5{
        top: 353px;
        left: 500px;
    }
    .point6{
        top: 486px;
        left: 464px;
    }
    /* 模板的文字 */
    .app_txt{
        position: absolute;
        text-align: right;
        cursor: pointer;
    }
    .app_txt1{
        top: 195px;
        left: -270px;
    }
    .app_txt2{
        top: 330px;
        left: -260px;
    }
    .app_txt3{
        top: 460px;
        left: -270px;
    }
    .app_txt4{
        text-align: left;
        top: 195px;
        left: 530px;
    }
    .app_txt5{
        text-align: left;
        top: 330px;
        left: 540px;
    }
    .app_txt6{
        text-align: left;
        top: 460px;
        left: 530px;
    }
    .app_txt p:first-child{
        line-height: 36px;
        font-size: 30px;
        color: #333333;
    }
    .app_txt p:last-child{
        line-height: 36px;
        font-size: 18px;
        color: #666666;
    }
    .app_txt p{
        margin: 0;
        padding: 0;
    }
    /* 手机图片 */
    .phone_img{
        position: absolute;
        left: 109px;
        top: 98px;
    }

</style>
