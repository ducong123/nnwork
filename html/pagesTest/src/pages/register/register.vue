<template>
  <div class="reg">
    <v-header></v-header>
    <div class="reg_main">
      <div class="title">
        <span>会员注册</span>
        <span>已有账号？<a href="login.html">立即登录</a></span>
      </div>
      <div class="reg-input">
        <input class="text-input" v-model="username"  type="text" placeholder="请输入用户名"/>
        <input class="text-input" v-model="password"  type="password" placeholder="请输入密码"/>
        <input class="text-input" v-model="mobile" type="mobile" placeholder="请输入手机号"/>
        <input class="regBut" type="submit" value="注册" @click="regData"/>
      </div>
    </div>
  </div>
</template>
<script>
  import vheader from "../../components/header";
  import * as apiUrl from "../../api/api";
  export default {
    name:'register',
    components:{
      "v-header":vheader
    },
    data(){
      return{
        username:'',
        password:'',
        mobile:'',
      }
    },
    created(){

    },
    methods:{

      regData(){
        let username = this.username;
        let password = this.password;
        let mobile = this.mobile;
        this.$http({
          method: 'post',
          url: apiUrl.REG,
          dara:{
            usename:username,
            password:password,
            mobile:mobile
          }
        }).then(function(res){
         console.log("reslogin:",res.data.success)
          if(res.data.success == 1){
            alert("注册成功")
            location.href='login.html'
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
  .reg_main{
    width: 400px;
    margin: 20px auto;
  }
  .title{
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
  }
  .reg-input{
    display: flex;
    flex-direction: column;
  }
  .reg-input input.text-input{
    width: 340px;
    margin: 10px auto 0px;
    height: 30px;
    border:1px solid #eee;
    padding-left: 10px;
  }
  .regBut{
    width: 350px;
    margin: 10px auto 0px;
    height: 30px;
    background: #c81623;
    border:0px;
    color: #fff;
    cursor: pointer;
  }
</style>
