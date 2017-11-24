<template>
  <div id="toplist" class="g-bd3 g-bd3-1 f-cb">
        <div class="g-sd3 g-sd3-1">
            <div class="n-minelst n-minelst-2">
                <h2 class="f-ff1">云音乐特色榜</h2>
                <ul class="f-cb">
                    <li v-for="list in features" :class="list.index == topList ? 'mine z-selected' : 'mine'" data-res-id = 'id' @click="loadTopList(list.index,list.id)" >
                        <div class="item f-cb">
                            <div class="left">
                                <a href="#" class="avatar">
                                    <img :src="list.imgUrl" :alt="list.name"/>
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name">
                                <a href="#" class="s-fc0">{{list.name}}</a>
                            </p>
                            <p class="s-fc4">{{list.updateTime}}</p>
                        </div>
                    </li>                    
                </ul>
                <h2 class="scd f-ff1">全球媒体榜</h2>
                <ul class="f-cb">
                    <li v-for="list in global" :class="list.index == topList ? 'mine z-selected' : 'mine'" data-res-id = 'id' @click="loadTopList(list.index,list.id)" >
                        <div class="item f-cb">
                            <div class="left">
                                <a href="#" class="avatar">
                                    <img :src="list.imgUrl" :alt="list.name"/>
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <p class="name">
                                <a href="#" class="s-fc0">{{list.name}}</a>
                            </p>
                            <p class="s-fc4">{{list.updateTime}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="g-mn3">
            <div class="g-mn3c">
                <div class="g-wrap">
                    <div class="m-info m-info-rank f-cb">
                        <div class="cover u-cover u-cover-rank">
                            <img :src="lists.coverImgUrl"/>
                            <span class="msk1"></span>
                        </div>
                        <div class="cnt">
                            <div class="cntc m-info">
                                <div class="hd f-cb">
                                    <h2 class="f-ff2">{{lists.name}}</h2>
                                </div>
                                <div class="user f-cb">
                                    <i class="u-icn u-icn-57"></i>
                                    <span class="sep s-fc3">最近更新：{{lists.updateTime}}</span>
                                    <span class="s-fc4">（每周四更新）</span>
                                </div>
                                <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放" data-res-type="13" data-res-id="id" data-res-action="play" data-res-from="31" data-res-data="2222">
                                        <i>
                                            <em class="ply"></em>
                                            播放
                                        </i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表" data-res-type="13" data-res-id="id" data-res-action="addto" data-res-from="31" data-res-data="2222"></a>
                                    <a id="toplist-fav" href="javascript:;" class="u-btni u-btni-fav" hidefocus="true" data-res-type="13" data-res-id="id" data-res-action="fav" data-res-from="31" data-res-data="2222">
                                        <i>({{lists.subscribedCount}})</i>
                                    </a>
                                    
                                    <a id="toplist-share" href="javascript:;" class="u-btni u-btni-share" hidefocus="true" data-res-type="13" data-res-id="id" data-res-action="share" data-res-name="网易原创歌曲榜" data-res-author="原创君" data-res-data="2222">
                                        <i>({{lists.shareCount}})</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-dl" data-res-type="13" data-res-id="id" data-res-action="download" >
                                        <i>下载</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt j-cmt" data-res-id="id" data-res-action="comment" >
                                        <i>(<span id="comment-count">{{lists.commentCount}}</span>)</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="g-wrap12">
                    <div class="u-title u-title-1 f-cb">
                        <h3>
                            <span class="f-ff2">歌曲列表</span>
                        </h3>
                        <span class="sub s-fc3">
                            <span>{{lists.trackCount}}</span>
                            首歌
                        </span>
                        <div class="more s-fc3">
                            播放：
                            <strong class="s-fc6" id="play-count">{{lists.playCount}}</strong>
                            次
                        </div>
                    </div>
                    <div id="song-list-pre-cache" data-key="song_toplist-2885855" data-simple="0" data-pvnamed="0">
                        <div id="songList">
                            <div class="j-flag" id="songListTop">
                                    <table class="m-table m-table-rank">
                                    <thead>
                                        <tr>
                                            <th class="first w1"></th>
                                            <th>
                                                <div class="wp">
                                                    标题
                                                </div>
                                            </th>
                                            <th class="w2-1">
                                                <div class="wp">
                                                    时长
                                                </div>
                                            </th>
                                            <th class="w3">
                                                <div class="wp">
                                                    歌手
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listsongs" id="tr_list1"  :class="index%2==0 ? 'even':''">
                                            <td>
                                                <div class="hd">
                                                    <span class="num">{{index+1}}</span>
                                                    <div class="rk">
                                                        <span class="u-icn u-icn-75"></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td :class="index <3 ? 'rank':''">
                                                <div class="f-cb">
                                                    <div class="tt">
                                                        <a v-if="index < 3" href="#">
                                                            <img  :src="item.album.picUrl" alt="" class="rpic"/>
                                                        </a>
                                                        <span class="ply" data-res-id="516320327" data-res-type="18" data-res-action="play">&nbsp;</span>
                                                        <div class="ttc">
                                                            <span class="txt">
                                                                <a href="#">
                                                                    <b :title="item.name">{{item.name}}</b>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="s-fc3">
                                                <!-- <span class="u-dur">03:37</span> -->
                                                <span class="u-dur">
                                                    {{item.lMusic.playTime | getStr}}
                                                </span>


                                                <div class="opt hshow">
                                                    <a href="javascript:;" class="u-icn u-icn-81 icn-add" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-action="addto"></a>
                                                    <span class="icn icn-fav" title="收藏" data-res-id="516320327" data-res-type="18" data-res-action="fav"></span>
                                                    <span class="icn icn-share" data-res-action="share" title="分享">分享</span>
                                                    <span class="icn icn-dl" title="下载">下载</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text" :title="item.artists.name">
                                                    <span :title="item.artists.name">
                                                        <a href="#" hidefocus="true">{{item.artists[0].name}}</a>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="n-cmt" id="comment-box" data-count="83514">
                        <div id="comment-list">
                            <div class="u-title u-title-1">
                                <h3>
                                    <span class="f-ff2">评论</span>
                                </h3>
                                <span class="sub s-fc3">
                                    共
                                    <span class="j-flag">{{comments.total}}</span>
                                    条评论
                                </span>
                            </div>
                            <div class="m-cmmt">
                                <div class="iptarea">
                                    <div class="head">
                                        <img src="../assets/img/musicTop/1.jpg"/>
                                    </div>
                                    <div class="j-flag">
                                        <div class="">
                                            <div class="m-cmmtipt f-cb f-pr">
                                                <div class="u-txtwrap holder-parent f-pr">
                                                    <textarea class="u-txt area j-flag" placeholder="评论"></textarea>
                                                </div>
                                                <div class="btns f-cb f-pr">
                                                    <i class="icn u-icn u-icn-36 j-flag"></i>
                                                    <i class="icn u-icn u-icn-41 j-flag"></i>
                                                    <a href="javascrit:;" class="btn u-btn u-btn-1 j-flag">评论</a>
                                                    <span class="zs s-fc4 j-flag">140</span>
                                                </div>
                                                <div class="corr u-arr">
                                                    <em class="arrline">◆</em>
                                                    <span class="arrclr">◆</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cmmts j-flag">
                                    <h3 v-if="hotComments.length>0" class="u-hd4">精彩评论</h3>
                                    <div id="list1" class="itm" v-for="(list,index) in hotComments">
                                        <div class="head">
                                            <a href="#">
                                                <img :src="list.user.avatarUrl"/>
                                            </a>
                                        </div>
                                        <div class="cntwrap">
                                            <div>
                                                <div class="cnt f-brk">
                                                    <a href="#" class="s-fc7">{{list.user.nickname}}</a>
                                                    : {{list.content}}
                                                </div>
                                            </div>
                                            <div class="rp">
                                                <div class="time s-fc4">
                                                    昨天11:14
                                                </div>
                                                <a href="javascript:;" data-type="like">
                                                    <i class="zan u-icn2 u-icn2-12"></i>
                                                    ({{list.likedCount}})
                                                </a>
                                                <span class="sep">|</span>
                                                <a href="javascript:;" class="s-fc3" data-type="reply">回复</a>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <h3 class="u-hd4">最新评论({{comments.total}})</h3>
                                    <div id="list4" class="itm" v-for="(list,index) in newComments">
                                        <div class="head">
                                            <a href="#">
                                                <img :src="list.user.avatarUrl"/>
                                            </a>
                                        </div>
                                        <div class="cntwrap">
                                            <div>
                                                <div class="cnt f-brk">
                                                    <a href="#" class="s-fc7">{{list.user.nickname}}</a>
                                                    : {{list.content}}
                                                </div>
                                            </div>
                                            <div class="rp">
                                                <div class="time s-fc4">
                                                    {{list.time}}
                                                </div>
                                                <a href="javascript:;" data-type="like">
                                                    <i class="zan u-icn2 u-icn2-12"></i>
                                                    ({{list.likedCount}})
                                                </a>
                                                <span class="sep">|</span>
                                                <a href="javascript:;" class="s-fc3" data-type="reply">回复</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="j-flag auto-1509759547054-parent">
                                    <div class="auto-1509759547054 u-page">
                                        <a href="javascript:;" class="zbtn zprv js-p-1509759547052 js-disabled">上一页</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052 js-selected">1</a>
                                        <span class="zdot on">...</span>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">2</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">3</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">4</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">5</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">6</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">7</a>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">8</a>
                                        <span class="zdot">...</span>
                                        <a href="javascript:;" class="zpgi zpg1 js-i-1509759547052">1102</a>
                                        <a href="javascript:;" class="zbtn znxt js-p-1509759547052">下一页</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
  @import '../assets/css/musicTop.css';
</style>
<script>
// http://localhost:8083/static/img/button.52c2a54.png   assets/img/musicTop/new.jpg
  export default{
    name: "index",
    data:function(){
      return {
        topList:0,
        features:[
            {imgUrl:"static/img/musicTop/sheng.jpg",name:"云音乐飙升榜",updateTime:"每天更新",id:3,index:0},
            {imgUrl:"static/img/musicTop/new.jpg",name:"云音乐新歌榜",updateTime:"每天更新",id:0,index:1},
            {imgUrl:"static/img/musicTop/yuan.jpg",name:"网易原创歌曲榜",updateTime:"每周四更新",id:2,index:2},
            {imgUrl:"static/img/musicTop/hot.jpg",name:"云音乐热歌榜",updateTime:"每周四更新",id:1,index:3}
        ],
        global:[
            {imgUrl:"static/img/musicTop/eleyin.jpg",name:"云音乐电音榜",updateTime:"每周五更新",id:4,index:4},
            {imgUrl:"static/img/musicTop/beatport.jpg",name:"Beatport全球电子舞曲榜",updateTime:"每周四更新",id:21,index:5},
            {imgUrl:"static/img/musicTop/Japen.jpg",name:"日本Oricon周榜",updateTime:"每周四更新",id:10,index:6},
            {imgUrl:"static/img/musicTop/UK.jpg",name:"UK排行榜周榜",updateTime:"每周一更新",id:5,index:7},
            {imgUrl:"static/img/musicTop/bill.jpg",name:"美国Billboard周榜",updateTime:"每周三更新",id:6,index:8},
            {imgUrl:"static/img/musicTop/NRG.jpg",name:"法国NRJ Vos Hits 周榜",updateTime:"每周五更新",id:19,index:9},
            {imgUrl:"static/img/musicTop/iTunes.jpg",name:"iTunes榜",updateTime:"每周一更新",id:8,index:10},
            {imgUrl:"static/img/musicTop/Hit FM.jpg",name:"Hit FM Top榜",updateTime:"每周一更新",id:9,index:11},
            {imgUrl:"static/img/musicTop/KTV.jpg",name:"KTV唛榜",updateTime:"每周五更新",id:7,index:12},
            {imgUrl:"static/img/musicTop/gangao.jpg",name:"中国TOP排行榜(港台榜)",updateTime:"每周一更新",id:14,index:13},
            {imgUrl:"static/img/musicTop/neidi.jpg",name:"中国TOP排行榜(内地榜)",updateTime:"每周一更新",id:15,index:14},
            {imgUrl:"static/img/musicTop/xianggang.jpg",name:"香港电台中文歌曲龙虎榜",updateTime:"每周五更新",id:16,index:15},
            {imgUrl:"static/img/musicTop/xianggang.jpg",name:"中国嘻哈榜",updateTime:"每周五更新",id:18,index:16},
        ],
        lists:[],
        listsongs:[],
        songsListId:'',
        comments:[],
        hotComments:[],
        newComments:[],
      }
    },
    mounted:function(){
        //加载最新上架歌单
        var url = "http://localhost:3000/top/list?idx=3";
        this.$http.get(url).then(function(data){
            this.lists = data.body.result;
            this.songsListId = data.body.result.id;
            this.listsongs = data.body.result.tracks;
            console.log(this.listsongs);
            return this.songsListId;
        }).then(function(songsListId) {
            //加载评论
            var url = "http://localhost:3000/comment/playlist?id="+songsListId;
            this.$http.get(url).then(function(data){
                this.comments = data.body;
                this.hotComments = data.body.hotComments;
                this.newComments = data.body.comments;
                console.log(this.comments);
            })
        })

        // //加载评论
        // var url = "http://localhost:3000/comment/playlist?id="+this.songsListId;
        // this.$http.get(url).then(function(data){
        //     console.log(data.body);
        // })
    },
    methods:{
    	loadTopList:function(index,id){
            this.topList = index;
            var url = "http://localhost:3000/top/list?idx="+id;
            this.$http.get(url).then(function(data){
                this.lists = data.body.result;
                this.songsListId = data.body.result.id;
                this.listsongs = data.body.result.tracks;
                console.log(this.listsongs);
                return this.songsListId;
            }).then(function(songsListId) {
                //加载评论
                var url = "http://localhost:3000/comment/playlist?id="+songsListId;
                this.$http.get(url).then(function(data){
                    this.comments = data.body;
                    this.hotComments = data.body.hotComments;
                    this.newComments = data.body.comments;
                    console.log(this.comments);
                })
            })
        }
    },
  }
</script>


		

