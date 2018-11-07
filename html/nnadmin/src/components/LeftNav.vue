<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#494949"
               text-color="#efefef"  v-model="activeName" accordion>
        <el-submenu v-for="(navlist,f) in navDatas" v-bind:index="navlist.firstId" :name="f" :key="f" >
          <template slot="title">
            <i class="el-icon-location">
              <span>{{navlist.firstNav}}</span>
             <!-- <spn>{{index}}</spn>-->
            </i>
          </template>
          <el-submenu v-for="(secondNavlist,m) in navDatas[f].secondNav" v-bind:index="secondNavlist.secondNavId" :key="m" >
            <template slot="title">{{secondNavlist.secondName}}</template>
            <el-menu-item v-for="(thirdNavlist,n) in secondNavlist.thirdNav" v-bind:index="thirdNavlist.thirdNavId" :key="n" >
              <router-link :to="thirdNavlist.path">{{thirdNavlist.thirdName}}</router-link>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: "vleftNav",
    data() {
      return {
        navDatas:[
          {
            firstId:"1",
            firstNav:"系统管理",
            secondNav:[
              {
                secondNavId:"1-1",
                secondName:"权限管理",
                thirdNav:[
                  {thirdNavId:"1-1-1",
                    thirdName:"管理员分组",
                    path:'/adminGroup'
                  },
                  {thirdNavId:"1-1-2",
                    thirdName:"权限分配",
                    path:'/roleGroup'
                  }
                ]
              },
              {
                secondNavId:"1-2",
                secondName:"二级菜单1-2",
                thirdNav:null
              }
            ]
          },
          {
            firstId:"2",
            firstNav:"会员管理",
            secondNav:[
              {
                secondNavId:"2-1",
                secondName:"企业管理",
                thirdNav:[
                  {thirdNavId:"2-1-1",
                    thirdName:"企业列表",
                    path:'/companyList'
                  },
                  {thirdNavId:"2-1-2",
                    thirdName:"加入企业用户列表",
                    path:'/companyUserList'
                  }
                ]
              },
              
            ]
          }
        ],
        activeName:"1"
      }
    },
  }
</script>
<style scoped>
  a{
    color: #efefef;
  }
  .el-menu-item.is-active a{
    color:#2b46ca;
  }
</style>
