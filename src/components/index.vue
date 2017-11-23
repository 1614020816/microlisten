<template>
    <div id="discover-module" class="gbd">
        <div class="gmn-left">
            <div class="hot-recomm">
                <div class="title s-bg">
                    <a href="#" class="tit f-ff2 f-tdn">热门推荐</a>
                    <ul>
                        <li>
                            <a href="#">华语</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="#">流行</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="#">摇滚</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="#">民谣</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="#">电子</a>
                        </li>
                    </ul>
                    <span class="more">
                        <a href="#" class="s-fc3">更多</a>
                        <i class="cor s-bg"></i>
                    </span>
                </div>
                <div class="recomm-list">
                    <ul>
                        <li v-for="(list,index) in playlist">
                            <div class="u-cover">
                                <img :src="list.coverImgUrl"/>
                                <a href="/" :title="list.name" class="msk" data-res-id = "listid"></a>
                                <div class="bottom1">
                                    <a class="icon-play f-fr" title="播放" href="javascript:;" :data-res-id = "list.id" data-action = "play"></a>
                                    <span class="icon-headset"></span>
                                    <span class="nb">{{list.playCount}}</span>
                                </div>
                                <p class="dec">
                                    <a href="" :title="list.name" class="tit" href="#" data-res-id = "listid">{{list.name}}</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="advertise">
                <div class="adv-img">
                    <a href="https://www.kaola.com/activity/detail/30953.shtml?tag=39c18428bdd72630e076b136f47c6b31&__da_4cdeb8a1_57ce1a1cd2833c85#zid_8929396451">
                        <img src="../assets/img/index/ad.bid.jpg"/>
                    </a>
                    <em></em>
                </div>
            </div>
            <div class="newdish">
                <div class="title s-bg">
                    <a href="#" class="tit f-ff2 f-tdn">新碟上架</a>
                    <span class="more">
                        <a href="#" class="s-fc3">更多</a>
                        <i class="cor s-bg"></i>
                    </span>
                </div>
                <div class="disk">
                    <div class="inner" id="album-roller">
                        <a href="javascript:;" hidefocus="true" class="click-flag pre s-bg s-bg-7 f-tdn"></a>
                        <div class="roll f-pr">
                            <ul class="f-cb roller-flag">
                                <li v-for="(album,index) in album1">
                                    <div class="u-cover u-cover-alb1">
                                        <img :src="album.picUrl" class="j-img"/>
                                        <a href="#" :title="album.name" class="msk"></a>
                                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" :data-res-id="album.id" data-res-action="play"></a>
                                    </div>
                                    <p class="f-thide">
                                        <a href="#" :title="album.name" class="s-fc0 tit">{{album.name}}</a>
                                    </p>
                                    <p class="tit f-thide" :title="album.artist.name">
                                        <a href="#" class="s-fc3">{{album.artist.name}}</a>
                                    </p>
                                </li>
                            </ul>
                            <ul class="f-cb roller-flag">
                                <li v-for="(album,index) in album2">
                                    <div class="u-cover u-cover-alb1">
                                        <img :src="album.picUrl" class="j-img"/>
                                        <a href="#" :title="album.name" class="msk"></a>
                                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" :data-res-id="album.id" data-res-action="play"></a>
                                    </div>
                                    <p class="f-thide">
                                        <a href="#" :title="album.name" class="s-fc0 tit">{{album.name}}</a>
                                    </p>
                                    <p class="tit f-thide" :title="album.artist.name">
                                        <a href="#" class="s-fc3">{{album.artist.name}}</a>
                                    </p>
                                </li>
                            </ul>
                            <ul class="f-cb roller-flag">
                                <li v-for="(album,index) in album1">
                                    <div class="u-cover u-cover-alb1">
                                        <img :src="album.picUrl" class="j-img"/>
                                        <a href="#" :title="album.name" class="msk"></a>
                                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" :data-res-id="album.id" data-res-action="play"></a>
                                    </div>
                                    <p class="f-thide">
                                        <a href="#" :title="album.name" class="s-fc0 tit">{{album.name}}</a>
                                    </p>
                                    <p class="tit f-thide" :title="album.artist.name">
                                        <a href="#" class="s-fc3">{{album.artist.name}}</a>
                                    </p>
                                </li>
                            </ul>
                            <ul class="f-cb roller-flag">
                                <li v-for="(album,index) in album2">
                                    <div class="u-cover u-cover-alb1">
                                        <img :src="album.picUrl" class="j-img"/>
                                        <a href="#" :title="album.name" class="msk"></a>
                                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" :data-res-id="album.id" data-res-action="play"></a>
                                    </div>
                                    <p class="f-thide">
                                        <a href="#" :title="album.name" class="s-fc0 tit">{{album.name}}</a>
                                    </p>
                                    <p class="tit f-thide" :title="album.artist.name">
                                        <a href="#" class="s-fc3">{{album.artist.name}}</a>
                                    </p>
                                </li>
                            </ul> 
                        </div>
                        <a href="javascript:;" hidefocus="true" class="click-flag nxt s-bg s-bg-8 f-tdn"></a>
                    </div>
                </div>
            </div>
            <div class="bill">
                <div class="title s-bg">
                    <a href="#" class="tit f-ff2 f-tdn">榜单</a>
                    <span class="more">
                        <a href="#" class="s-fc3">更多</a>
                        <i class="cor s-bg"></i>
                    </span>
                </div>
                <div class="blist" id="top-flag">
                    <dl class="blk">
                        <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="../assets/img/index/18696095720518497 (1).jpg"/>
                                <a href="#" class="msk" title="云音乐飙升榜"></a>
                            </div>
                            <div class="tit">
                                <a href="#" title="云音乐飙升榜">
                                    <h3 class="f-fs1 f-thide">云音乐飙升榜</h3>
                                </a>
                                <div class="btn">
                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" title="播放" hidefocus="true" data-res-action="play" data-res-from="31">播放</a>
                                    <a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏" data-plid = "plid">收藏</a>
                                </div>
                            </div>
                        </dt>
                        <dd >
                            <ul>
                                <li v-for="(soar,index) in soarings">
                                    <span :class="index<3 ? 'no no-top':'no'">{{index+1}}</span>
                                    <a href="#" class="nm s-fc0 f-thide" :title="soar.name">{{soar.name}}</a>
                                    <div class="oper">
                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" :data-res-id="soar.id" data-res-data="19723756"></a>
                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-action="addto" data-res-from="31"></a>
                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" :data-res-id="soar.id" data-res-action="subscribe"></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="more">
                                <a href="#" class="s-fc0">查看更多></a>
                            </div>
                        </dd>
                    </dl>
                    <dl class="blk">
                        <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="../assets/img/index/18740076185638788.jpg"/>
                                <a href="#" class="msk" title="云音乐新歌榜"></a>
                            </div>
                            <div class="tit">
                                <a href="#" title="云音乐新歌榜">
                                    <h3 class="f-fs1 f-thide">云音乐新歌榜</h3>
                                </a>
                                <div class="btn">
                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" title="播放" hidefocus="true" data-res-action="play" data-res-from="31">播放</a>
                                    <a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏" data-plid = "plid">收藏</a>
                                </div>
                            </div>
                        </dt>
                        <dd >
                            <ul>
                                <li v-for="(newsong,index) in newsongs">
                                    <span :class="index<3 ? 'no no-top':'no'">{{index+1}}</span>
                                    <a href="#" class="nm s-fc0 f-thide" :title="newsong.name">{{newsong.name}}</a>
                                    <div class="oper">
                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" :data-res-id="newsong.id" data-res-action="play" data-res-data="19723756"></a>
                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-action="addto" data-res-from="31"></a>
                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" :data-res-id="newsong.id" data-res-action="subscribe"></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="more">
                                <a href="#" class="s-fc0">查看更多></a>
                            </div>
                        </dd>
                    </dl>
                    <dl class="blk blk-1">
                        <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="../assets/img/index/18713687906568048.jpg"/>
                                <a href="#" class="msk" title="网易原创歌曲榜"></a>
                            </div>
                            <div class="tit">
                                <a href="#" title="网易原创歌曲榜">
                                    <h3 class="f-fs1 f-thide">网易原创歌曲榜</h3>
                                </a>
                                <div class="btn">
                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" title="播放" hidefocus="true" data-res-action="play" data-res-from="31">播放</a>
                                    <a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏" data-plid = "plid">收藏</a>
                                </div>
                            </div>
                        </dt>
                        <dd >
                            <ul>
                                <li v-for="(original,index) in originals">
                                    <span :class="index<3 ? 'no no-top':'no'">{{index+1}}</span>
                                    <a href="#" class="nm s-fc0 f-thide" :title="original.name">{{original.name}}</a>
                                    <div class="oper">
                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" :data-res-id="original.id" data-res-action="play" data-res-data="19723756"></a>
                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-action="addto" data-res-from="31"></a>
                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" :data-res-id="original.id" data-res-action="subscribe"></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="more">
                                <a href="#" class="s-fc0">查看更多></a>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="gmn-right">
            <div class="n-myinfo n-myinfo-1 s-bg s-bg-1">
                <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <a href="#" id="index-enter-default" class="btn s-bg s-bg-2 f-tdn" tabindex="1">用户登录</a>
            </div>
            <div class="n-myinfo s-bg s-bg-5 on">
                <div class="f-cb">
                    <a href="#" class="head f-pr">
                        <img src="../assets/img/index/3437073356259449(1).jpg"/>
                    </a>
                    <div class="info">
                        <h4>
                            <a href="#" class="nm nm-icn f-fs1 f-ib f-thide">丶Yejishzhying</a>
                        </h4>
                        <p>
                            <a href="#" class="u-lv u-icn2 u-icn2-lv">7</a>
                            <i class="right u-icn2 u-icn2-lvright"></i>
                        </p>
                        <div class="btnwrap f-pr">
                            <a href="javascript:;" class="sign u-btn2 u-btn2-2" data-action="checkin">
                                <i>签  到</i>
                            </a>
                        </div>
                    </div>
                </div>
                <ul class="dny s-fc3 f-cb">
                    <li class="fst">
                        <a href="#">
                            <strong id="even_count">1</strong>
                            <span>动态</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong id="even_count">2</strong>
                            <span>关注</span>
                        </a>
                    </li>
                    <li class="lst">
                        <a href="#">
                            <strong id="even_count">1</strong>
                            <span>粉丝</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="n-singer">
                <h3 class="v-hd3">
                    <span class="f-f1">热门歌手</span>
                    <a href="#" class="more s-fc3">查看全部 ></a>
                </h3>
                <ul class="n-enter f-cb" id="singer-list">
                    <li v-for="(hotSinger,index) in hotSingers">
                        <a href="#" class="itm f-tdn">
                            <div class="head">
                                <img :src="hotSinger.img1v1Url" class="j-img"/>
                            </div>
                            <div class="ifo">
                                <h4>
                                    <span class="nm f-fs1 f-ib f-thide">{{hotSinger.name}}</span>
                                </h4>
                                <p class="f-thide s-fc3">{{hotSinger.alias[0]}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
@import '../assets/css/index.css';
</style>


<script>
import {getAjax} from './../util/ajax'
  export default{
    name: "index",
    data:function(){
      return {
        changeList:0,
        changeTop:0,
        isDiscover:true,
        playlist:[],
        personalize:[],
        album1:[],
        album2:[],
        soarings:[],
        newsongs:[],
        originals:[],
        hotSingers:[]
      }
    },
    mounted:function(){
    	//加载热门推荐歌单
        var url = "http://localhost:3000/top/playlist?limit=8&order=new";
        this.$http.get(url).then(function(data){
            this.playlist = data.body.playlists;
        });


        // //加载最新上架歌单
        // var url = "http://localhost:3000/top/album?offset=0&limit=5";
        // this.$http.get(url).then(function(data){
        //     this.album1 = data.body.albums;
        // });

        //加载最新上架歌单
        var url = "top/album?offset=0&limit=5";
        getAjax(url,this.$http, function(data){
            this.album1 = data.body.albums;
        });


        //最新上架歌曲第二组
        var url = "http://localhost:3000/top/album?offset=5&limit=5";
        this.$http.get(url).then(function(data){
            this.album2 = data.body.albums;
        });
        //加载飙升榜
        var url = "http://localhost:3000/top/list?idx=3";
        this.$http.get(url).then(function(data){
            var obj = data.body.result.tracks;
            for(var i = 0;i<10;i++){
            	this.soarings.push(obj[i]);
            }
        });
        //加载云音乐新歌榜
        var url = "http://localhost:3000/top/list?idx=0";
        this.$http.get(url).then(function(data){
            var obj = data.body.result.tracks;
            for(var i = 0;i<10;i++){
            	this.newsongs.push(obj[i]);
            }
        });
        //加载云音乐原创榜
        var url = "http://localhost:3000/top/list?idx=2";
        this.$http.get(url).then(function(data){
            var obj = data.body.result.tracks;
            for(var i = 0;i<10;i++){
            	this.originals.push(obj[i]);
            }
        });
        //加载热门歌手
        var url = "top/artists?offset=0&limit=10";
        getAjax(url,this.$http, function(data){
            console.log(data.body.artists);
            this.hotSingers = data.body.artists;
        });
    },
    methods:{
    	
    }
  }
</script>


