# onmyoji
teamwork for onmyoji
## sikigami
1. tab <br>
根据sidenav的ssr,sr等进行右端切换

2. scroll <br>
顶部nav根据页面滚动判断scrollTop切换效果

3. data <br>
   式神录所有数据利用axios获取，vue渲染
## information for sikigami
1. tab <br>
皮肤的切换
2. video & audio <br>
视频 & 音频的播放
3. slider <br>
轮播
4. paginator <br>
分页，这里是做了评论的分页，
理论上应该从MySQL获取评论，这里暂时vue里存放假数据
5. comment <br>
嗯，然后这里后面补上了评论功能，并且是登录之后才能发表评论
## problem
1. hover <br>
顶部 官方渠道的 hover
2. display:none & transition <br>
视频弹出时，遮罩层display:none 导致 transition 的 opacity 没有效果
// 这里不然就是设置一个延迟，先display:block，或者就是设置z-index，opacity不用写了
