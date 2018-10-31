<template>
  <div class="hello">
    <el-container>
      <el-header>
        <div class="header_title"><img src="../assets/logo.png"/>耐耐网后台管理系统</div>
        <el-button type="edit"><i class="el-icon-circle-close"></i>退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="241px">
          <v-leftNav></v-leftNav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import vleftNav from "./leftNav"
export default {
  name: 'Home',
  components: {
    'v-leftNav':vleftNav,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    background-image: linear-gradient(0deg,#323232 0%, #555555 100%);
    color:#efefef;
    height: 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-header  .header_title{
    display: flex;
    align-items: center;
  }
  .el-header  .header_title img{
    padding-right: 20px;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
