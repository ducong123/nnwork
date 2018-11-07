<template>
  <div class="login">
    <el-row class="tac">
      <el-col><div class="login-title">管理员登录</div></el-col>
      <el-col>
        <span>用户名：</span>
        <input class="text-input" v-model="username"  name="username" type="text" placeholder="请输入用户名"/>
      </el-col>
      <el-col>
        <span>密码：</span>
        <input class="text-input" v-model="password"   name="password" type="password" placeholder="请输入密码"/>
      </el-col>
      <el-col>
        <input class="loginup" type="submit" value="登录" @click="loginData"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import * as apiUrl from "../api/api";
  //星号是匹配符，匹配这个apiUrl的所有export function(注释：* as apiUrl 可替换成{LOGIN} 下面直接调用LOGIN表示登录的接口地址)
  export default {
    name: 'Login',
    data () {
      return {
        username:'',
        password:''
      }
    },
    created(){

    },
    methods:{
      loginData(){
       //this.$router.push({ path: '/home' })
        let that =this
        let username = that.username;
        let password = that.password;
        console.log("用户名",username,password)
        this.$http({
          method: 'get',
          url: apiUrl.LOGIN,
          params:{
            username:username,
            password:password
          }
        }).then(function(res){
          if(res.data.success != 0){
            console.log("res-",res.data.success)
            that.$router.replace('/home')
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
  .login .el-col{
  text-align: center;

  }
  .login .tac{
    position: relative;
    top:40%;
  }
</style>
