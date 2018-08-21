<template>
  <div class="home-main">
    <!--轮播图-->
    <div class="carousel-wrap" id="carousel">
      <!--  // 轮播图列表-->
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" :style="{background:list.background}">
          <a :href="list.clickUrl">
            <img :src="list.imgSrc" :alt="list.desc">
          </a>
        </li>
      </transition-group>
      <!--// 轮播图位置指示-->
      <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
      </div>
    </div>
    <!--轮播图-->
    <!--交易市场-->
    <div class="trading">
      <div class="trad-title">
        <div class="tradName">交易市场</div>
        <div class="cardNameList">
          <span class="cardName" v-for="cardList in cardLists"><a class="cardName-a">{{cardList.card_name}}</a></span>
        </div>
      </div>
      <div class="trading_lists">
        <div class="trading_list" v-for="prolist in prolists">
          <img class="pro_img" :src="prolist.pro_img"/>
          <div class="pro_con">
            <span class="pro_name">{{prolist.pro_name}}</span>
            <span class="pro_price">{{prolist.pro_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
  @import "../../../static/css/index.less";
</style>
<script>
  import * as apiUrl from '../../api/api'
  export default{
    name: 'home',
    data () {
      return {
        slideList:[],
        currentIndex: 0,
        timer: '',
        cardLists:[],//类型集合
        prolists:[],//产品集合
      }
    },
    created(){
      this.imgData()
      //在DOM加载完成后，下个tick中开始轮播
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
      this.cardDatas()//分类
      this.proData()
    },
    methods: {
      //获取图片数据imgData
      imgData(){
        let that = this
        that.$http({
          method: 'get',
          url: apiUrl.SLIDEIMG
        }).then(function(res){
          console.log("imgData:",res.data.data)
          that.slideList = res.data.data

          //初始数据end
        }).catch(function (res) {

        })
      },
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop() {
        clearInterval(this.timer)
        this.timer = null
      },
      change(index) {
        this.currentIndex = index
      },
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      //获取图片数据和动态效果end
      //分类获取
      cardDatas(){
        let that = this
        that.$http({
          method: 'get',
          url: apiUrl.CARD
        }).then(function(res){
          console.log("carData:",res.data.cardData)
          that.cardLists = res.data.cardData

          //初始数据end
        }).catch(function (res) {

        })
      },
      proData(){
        let that = this
        that.$http({
          method: 'get',
          url: apiUrl.TRADING
        }).then(function(res){
          console.log("carData:",res.data.dataList)
          that.prolists = res.data.dataList

          //初始数据end
        }).catch(function (res) {

        })
      }

    },

  }
</script>
