<template>
    <div id="header">
        <div id="head">
            <div class="head-top">
                <div class="logo">
                    <a href="#"></a>
                </div>
                <div class="ul-list">
                    <ul class="list" >
                        <li v-for="(list,index) in topLists" :class="changeList == index ? 'checked':''" @click="checkList(index)">
                            <router-link :to="list.href" :class="{change:changeList==index}" >{{list.name}}</router-link>
                            <em :class="{show:changeList==index}"></em>
                        </li>
                    </ul>
                </div>
                <!-- <div class="hot">
                    <em></em>
                </div> -->
                <div class="head-list">	
                    <div class="check-input">
                        <input type="text" id="check-name" name="check-name" placeholder="音乐/电台/用户"/>
                    </div>
                    <div class="video">
                        <a href="#">视屏投稿</a>
                    </div>
                    <div class="login">
                        <div class="login_btn" style="z-index: 9999;">
                            <a href="#" class="login_href">登录</a>
                            <div class="list-key">
                                <i class="arr"></i>
                                <ul class="login_list">
                                    <li >
										<a href="#" hidefocus="true" target="_blank" data-action = "login" data-type = "tencent" class="itm">
											<i class = "icn icn-mb"></i>
											<em>手机号登录</em>
										</a>
									</li>
                                    <li>
                                        <a href="#" hidefocus="true" target="_blank" data-action = "login" data-type = "tencent" class="itm">
                                            <i class = "icn icn-wx"></i>
                                            <em>微信登录</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" hidefocus="true" target="_blank" data-action = "login" data-type = "tencent" class="itm">
                                            <i class = "icn icn-qq"></i>
                                            <em>QQ登录</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" hidefocus="true" target="_blank" data-action = "login" data-type = "tencent" class="itm">
                                            <i class = "icn icn-xinlang"></i>
                                            <em>新浪微博登录</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" hidefocus="true" target="_blank" data-action = "login" data-type = "tencent" class="itm">
                                            <i class = "icn icn-163"></i>
                                            <em>网易邮箱账号登录</em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--中间红色条幅-->
        <div class="m-subnav" v-show="!isDiscover">
        </div>
        <!--顶部导航list-->
        <div id="navigat" v-show="isDiscover">
            <div class="navigat-top">
                <ul class="nav" >
                    <li v-for="(list,index) in discoverList" >
                        <router-link :to="list.href"  hidefocus="true" :data-modlue = "list.modlue" :class="changeTop==index ? 'zalt':''" > 
                            <em @click="checkTop(index)">{{list.name}}</em>
                        </router-link> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name: "header",
    data:function(){
      return {
        changeList:0,
        changeTop:0,
        isDiscover:true,
        topLists:
        [
            {href:"/index",name:"发现音乐"},
            {href:"/mymusic",name:"我的音乐"},
            {href:"/friends",name:"朋友"},
            {href:"/mall",name:"商城"},
            {href:"/Musician",name:"音乐人"},
            {href:"/download",name:"下载客户端"},
        ],
        discoverList:
        [
            {href:"/index",modlue:"toplist",name:"推荐"},
            {href:"/toplist",modlue:"discover",name:"排行榜"},
            {href:"songlist",modlue:"playlist",name:"歌单"},
            {href:"/radio",modlue:"djradio",name:"主播电台"},
            {href:"singer",modlue:"artist",name:"歌手"},
            {href:"shelves",modlue:"album",name:"新碟上架"},
        ],
      }
    },
    methods:{
        checkList:function(index){
            this.changeList = index;
        },
        checkTop:function(index){
            this.changeTop = index;
        }
    },
  }
</script>
<style>
    @import  "../assets/css/header.css";
</style>



