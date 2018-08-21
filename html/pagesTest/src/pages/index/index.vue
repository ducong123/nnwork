<template>
  <div class="index">
    <v-header><!--头部--></v-header>
    <div class="main">
      <div class="top">
        <div class="logo"><img src="../../assets/index/logo.png"/></div>
        <div class="serch">
          <input class="serch-input" type="text" placeholder="请输入关键词查询"/>
          <input class="serchBut" type="button" value="搜索"/>
        </div>
        <div class="Hotline">
          <img class="hotline-img" src="../../assets/index/phone.gif"/>
          <span class="hotline-title">服务热线：</span>
          <span class="hotline-num">400-6238-086</span>
        </div>
      </div>
      <div class="nav-classify">
        <div class="nav">
          <div class="classify-title">
            <img class="classify_icon" src=""/>
            <span>全部产品分类</span>
          </div>
          <div class="navLists">
            <div class="navList" v-for="(navlist,index) in navlists"  :class="{hover:index == navId}" @click="addHover(index)">
              <router-link  :to="{ path: navlist.path }">{{navlist.name}}</router-link>
            </div>
          </div>
        </div>
        <div class="classifys">
          <!--产品分类-->
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <!--尾部-->
  </div>
</template>
<script>
  import vheader from '../../components/header.vue'
  export default {
    name: "index",
    components: {
      'v-header':vheader,
    },
    data(){
      return{
        navlists:[
          {name:'首页',path:'/'},
          {name:'交易中心',path:'/trading'},
          {name:'招投标',path:'/trading'},
          {name:'竞价',path:'/trading'},
          {name:'店铺',path:'/trading'},
          {name:'仓储专区',path:'/trading'},
          {name:'帮我找',path:'/trading'},
          {name:'耐耐咨询',path:'/trading'},
        ],
        navId:0,


      }
    },
    methods:{
      /*点击选择nav*/
      addHover(index){
        this.navId = index
      }
      /*点击选择nav end*/
    }
  }
</script>
<style scoped lang='less'>
  @import "../../../static/css/index.less";
</style>
