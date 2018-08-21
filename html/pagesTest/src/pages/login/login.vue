

<template>
  <div class="login">
    <v-header></v-header>
  <div class="login_main">
    <div class="login-title">
      <span>会员登录</span>
      <span>还没有会员账号？<a href="register.html">免费注册</a></span>
    </div>
    <div class="login_input">
      <input class="text-input" v-model="username"  name="username" type="text" placeholder="请输入用户名"/>
      <input class="text-input" v-model="password"   name="password" type="password" placeholder="请输入密码"/>
      <input class="loginup" type="submit" value="登录" @click="loginData"/>
      <a class="a-forget" href="forget.html">忘记密码</a>
    </div>
  </div>
  </div>
</template>
<script>
import * as apiUrl from "../../api/api";
//星号是匹配符，匹配这个apiUrl的所有export function(注释：* as apiUrl 可替换成{LOGIN} 下面直接调用LOGIN表示登录的接口地址)
  import  vheader from "../../components/header";
  export default {
    name:'login',
    components:{
    "v-header":vheader
    },
    data(){
      return{
        username:'',
        password:''
      }
    },
    created(){

    },
    methods:{
      loginData(){
        let username = this.username;
        let password = this.password;
        this.$http({
          method: 'get',
          url: apiUrl.LOGIN,
          params:{
            usename:username,
            password:password
          }
        }).then(function(res){
         console.log("reslogin:",res.data.success)
          if(res.data.success == 1){
             location.href='index.html'
             console.log("跳转")
          }else{
            alert(res.data.infor);
          }
          //初始数据end
        }).catch(function (res) {

        })
      }
    }
  }
</script>
<style scoped>
  .login_main{
    width: 400px;
    margin: 20px auto;

  }
  .login-title{
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
  }
  .login_input{
    display: flex;
    flex-direction: column;
  }
  .login_input input.text-input{
    width: 340px;
    margin: 10px auto 0px;
    height: 30px;
    border:0px;
    padding-left: 10px;
  }
  .loginup{
    width: 350px;
    margin: 10px auto 0px;
    height: 30px;
    background: #c81623;
    border:0px;
    color: #fff;
    cursor: pointer;
  }
  .a-forget{
    padding:0 20px;
    text-align: right;
    margin-top: 10px;
  }
</style>
