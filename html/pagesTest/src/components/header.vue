<template>
    <div class="header">
      <div class="header-main">
        <div class="header_left">
          <a href="index.html">耐耐网首页</a>
          <span class="welcome">您好，欢迎进入耐耐网</span>
          <a class="login-a" href="login.html">请登录</a>
          <a class="reg-a" href="register.html">欢迎注册</a>
        </div>
        <div class="header_right">
        <a class="kefu">在线客服</a>
        <span>|</span>
        <a class="jyTime">交易时间：09:00：00--23:00:00</a>
      </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "vheader",
      data() {
        return {

        }
      },
    }
</script>

<style scoped lang="less">
  @import "../../static/css/style";
  .header{
    background: #f9f9f9;
    font-size: @baseFont;
    .header-main{
      width: 1190px;
      height: 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

    }

  }
</style>
