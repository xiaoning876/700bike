<template>
    <div class="box">
        <a class="right_top_btn" href="">登录</a>
        <div class="content_box">
            <a href="">
                <div class="logo"></div>
            </a>
            <form action="">
                <div>
                    <div class="inp">
                        <input @blur='myBlur($event,0)' pattern='^1(3|4|5|7|8)\d{9}$' style="border-top-left-radius: 6px;border-top-right-radius: 6px;" type="text" placeholder="手机号码"><span>请填写手机号码</span>
                    </div>
                    <div class="inp">
                        <input @blur='myBlur($event,1)' pattern='^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$' type="text" placeholder="设置密码"><span>请填写密码</span>
                    </div>
                    <div class="inp">
                        <input @blur='myBlur($event,2)' pattern='^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$' type="text" placeholder="确认密码"><span>请填写确认密码</span>
                    </div>
                    <div class="inp">
                        <input @blur='myBlur($event,3)' style="border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;" type="text" placeholder="短信验证码"><span>请填写验证码</span>
                        <input id='verification' type="button" value="获取验证码">
                    </div>
                    <input class="register_btn" type="submit" value="注册">
                </div>
            </form>
            <div class="agreement_box">点击"注册"表示您同意 <a href="" class="agreement">《700Store用户注册协议》</a></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return {
            regular:{
                reg:['请填写手机号码','请填写密码','请填写确认密码','请填写验证码'],
                reg1:['手机号码格式不正确','密码只能由英文、数字及符号组成，请修改','',''],
                zz:[new RegExp(/^1(3|4|5|7|8)\d{9}$/),/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,new RegExp(/^[a-zA-Z0-9_-]{1,4}$/)]
            }
        }
        
    },
    methods:{
        myBlur(e,s){
            
            var aa = this.regular.zz[s]
            var bb = e.target.value
            if(bb.length == 0){
                e.target.parentNode.children[1].style.display = 'inline-block'
                e.target.parentNode.children[1].innerHTML = this.regular.reg[s]
                // alert('0')
            }
            
            else if(!aa.test(bb)){
                e.target.parentNode.children[1].style.display = 'inline-block'
                e.target.parentNode.children[1].innerHTML = this.regular.reg1[s]
                // alert(!aa.test(bb))
            }
            else{
                e.target.parentNode.children[1].style.display = 'none'
                // alert('2')
            }

            if(s == 2){
                if(e.target.value != $('.inp:eq(1)').find('input').val()){
                    e.target.parentNode.children[1].style.display = 'inline-block'
                    e.target.parentNode.children[1].innerHTML = '两次输入不一致'
                }
                else{
                    e.target.parentNode.children[1].style.display = 'none'
                }
            }
           
        }
    },
    mounted(){
        // alert($(document).height())
        
    }

}
</script>

<style scoped>
.box{
    background: url(http://s1.700static.com/store/v2.0/css/img/login_bg.jpg);
    width: 100%;
    height: 944px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.content_box{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -195px;
    width: 300px;
    height: 405px;
}
.right_top_btn{
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 40px;
    border-radius: 25px;
    border: 2px solid #bbb;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    color: #bbb;
}
.logo{
    margin: 0 auto;
    width: 87px;
    height: 72px;
    background: url(http://s1.700static.com/store/v2.0/css/img/iconMerge_669a29d.png) 0 -90px no-repeat;
}
.agreement_box{
    color: white;
    font-size: 12px;
    text-align: center;
}
.agreement{
    color: white;
}
.agreement:hover{
    color: yellow;
}
.inp{
    position: relative;
    height: 43px;
    box-sizing: border-box;
}
.inp input{
    width: 287px;
    height: 42px;
    border: 0;
    font-size: 14px;
    padding: 0 0 0 10px;
    border-bottom: 1px solid #eee;
    
}
.inp span{
    position: absolute;
    left: 310px;
    top: 10px;
    font-size: 14px;
    color: #fff;
    white-space: nowrap;
    display: none
}
form{
    margin-top: 30px;
}
#verification{
    position: absolute;
    left: 188px;
    height: 36px;
    background: #eeeeee;
    border: 1px solid #dddddd;
    width: 105px;
    bottom: 3px;
    padding: 0px;
    text-align: center;
    line-height: 35px;
    border-radius: 6px;
}
.register_btn{
    margin: 10px auto;
    width: 300px;
    height: 40px;
    border-radius: 18px;
    background: #fcc800;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-weight: bolder;
    color: #483906;
    cursor: pointer;
    border-width: 0;
}
</style>
