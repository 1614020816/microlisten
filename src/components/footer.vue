<template>
    <div id="foot">
        <div class="foot-top">
            <div class="top-title">
                <p class="first-p">
                    <a href="//music.163.com/about" target="_blank">关于网易</a>
                    <span>|</span>
                    <a href="//help.163.com/" target="_blank">客户服务</a>
                    <span>|</span>
                    <a href="//music.163.com/html/web2/service.html" target="_blank">服务条款</a>
                    <span>|</span>
                    <a href="//sitemap.163.com/" target="_blank">网站导航</a>
                    <span>|</span>
                    <a href="javascript:;" id="feedback" hidefocus="true">意见反馈</a>
                </p>
                <p class="last-p">
                    <span>网易公司版权所有©1997-2017</span>
                    &nbsp;&nbsp;杭州乐读科技有限公司运营：
                    <a href="http://p1.music.126.net/-DB9zs1FAJq8vg7HOb-yOQ==/3250156395654666.jpg" target="_blank">浙网文[2015] 0415-135号</a>
                </p>
            </div>
            <div class="top-pic">
                <ul>
                    <li>
                        <a href="//music.163.com/recruit" class="logo-musician">独立音乐人</a>
                    </li>
                    <li>
                        <a href="//music.163.com/topic/recruit" class="logo-topic">音乐专栏</a>
                    </li>
                    <li>
                        <a href="//music.163.com/topic/selfmedia" class="logo-midea">自媒体</a>
                    </li>
                    <li>
                        <a href="//music.163.com/web/reward" class="logo-reward">赞赏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="g-btmbar">
			<div class="m-playbar m-playbar-lock" id="auto-id-play">
				<div class="updn">
					<div class="left f-f1">
						<a href="javascript:;" class="btn" hidefocus="true" data-action="lock"></a>
					</div>
					<div class="right f-f1"></div>
				</div>
				<div class="bg"></div>
				<div class="hand" title="展开播放条"></div>
				<div class="wrap" id="g_play">
					<div class="btns">
						<a href="javascript:;" hidefocus = "true" data-action = "prev" class="prv" title="上一首(ctrl+←)">上一首</a>
						<a href="javascript:;" hidefocus = "true" data-action = "play" class="ply j-flag" title="播放/暂停(p)">播放/暂停</a>
						<a href="javascript:;" hidefocus = "true" data-action = "next" class="nxt" title="下一首(ctrl+→)">下一首</a>
					</div>
					<div class="hend j-flag">
						<img src="../assets/img/index/6011030069704656.jpg"/>
						<a href="#" class="mask" hidefocus="true"></a>
					</div>
					<div class="play">
						<div class="j-flag words">
							<a href="#" class="f-thide name fc1 f-fl" title="情书">情书</a>
							<span class="by f-thide f-fl">
								<span title="腰乐队">
									<a href="#" hidefocus="true">腰乐队</a>
								</span>
							</span>
							<a href="#" class="src" title="来自歌单"></a>
						</div>
						<div class="m-pbar" data-action="noop">
							<div class="barbg j-flag" id="play-bargb">
								<div class="rdy" style="width: 0%;"></div>
								<div class="cur" style="width: 0%;">
									<span class="btn f-tdn f-alpha" id="play-btn">
										<i></i>
									</span>
								</div>
							</div>
							<span class="j-flag time">
								<em>00:00</em>
								/00:00
							</span>
						</div>
					</div>
					<div class="oper f-fl">
						<a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
						<a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
					</div>
					<div class="ctrl f-fl f-pr j-flag">
						<div class="m-vol" style="visibility: hidden;" id="vol-div">
							<div class="barbg" ></div>
							<div class="vbg j-t" id="volbg-div">
								<div class="curr j-t" style="height: 93px;"></div>
								<span class="btn f-alpha j-t" style="top: 0px;"></span>
							</div>
						</div>
						<a href="javascript:;" hidefocus="true" class="icn icn-vol" data-action="volume"></a>
						<a href="javascript:;" hidefocus="true" class="icn icn-shuffle" data-action="mode" title="循环"></a>
						<span class="add f-pr">
							<span class="tip" style="display: none;">已添加到播放列表</span>
							<a href="javascript:;" hidefocus="true" title="播放列表" data-action="panel" class="icn icn-list s-fc3">132</a>
						</span>
						<div class="tip tip-1" style="display: none;">
							循环
						</div>
					</div>
				</div>
			<!--<div class="list" id="g_playlist">
					<div class="listhd">
						<div class="listhdc">
							<h4>
								播放列表(
								<span class="j-flag">132</span>
								)
							</h4>
							<a href="javascript:;" class="addall" data-action="likeall">
								<span class="ico ico-add"></span>
								收藏全部
							</a>
							<span class="line"></span>
							<a href="javascipt:;" class="clear" data-action = "clear">
								<span class="ico ico-del"></span>
								清除
							</a>
							<p class="lytit f-ff0 f-thide j-flag">情书</p>
							<span class="close" data-action = "close">关闭</span>
						</div>
					</div>
					<div class="listbd">
						<img src="../assets/img/index/picture.png" class="imgbg j-flag" id="list-img" style="top: -360px;"/>
						<div class="msk"></div>
					</div>
				</div>-->
			</div>
		</div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
            
            }
        },
        methods:{
        }
    }
</script>
<style>
    @import  "../assets/css/footer.css";
</style>

