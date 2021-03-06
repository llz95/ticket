
var DOMAIN = "demo.imahui.com";// 网站域名
var SITENAME = "趣旅行"; // 网站名称
var DESCRIPTION = '分享有趣旅行,讲述奇闻趣事'; // 网站描述
var SITELOGO = "../../images/icon.png"; // 网站LOGO
var REPLAYTEMPPLATEID = 'AoEILP56aMEqW07Zzix5aRAFaADRz_MIEqgDvzYE2k4';//回复评论消息模版id
var THUMBNAIL = 'https://demo.imahui.com/uploads/default.png'; // 默认缩略图
var QRCODEPATH = 'https://' + DOMAIN + '/uploads/qrcode/';		// 二维码目录
var HOST_URI = 'https://' + DOMAIN + '/wp-json/wp/v2/';
var HOST_WECHAT = 'https://api.weixin.qq.com/sns/jscode2session';
var DOWNLOADDOMAIN = [	// 信任下载域名
  { id: 1, domain: 'www.imahui.com' },
  { id: 2, domain: 'demo.imahui.com' }
]
var INDEXNAVIGATION = [ //首页图标导航，'id' 为导航的Id，可以自定义，'name'为名称，'image'为图标路径，'url' 为跳转页面
  { id: '1', name: '景点', image: '../../images/Attractions.png', url: '../list/list?id=2'},
  { id: '2', name: '美食', image: '../../images/Foods.png', url: '../list/list?id=3'},
  { id: '3', name: '电影', image: '../../images/Travels.png', url: '../list/list?id=4'},
  { id: '4', name: '游记', image: '../../images/Strategy.png', url: '../list/list?id=1'}
]


var ORDERTOPLIST = [ //订单图标导航，'id' 为导航的Id，可以自定义，'name'为名称，'image'为图标路径，'url' 为跳转页面
  { id: '1', name: '待付款', image: '../../images/Attractions.png', url: '../orderinfo/orderinfo?id=2' },
  { id: '2', name: '待评价', image: '../../images/Foods.png', url: '../orderinfo/orderinfo?id=3' },
  { id: '3', name: '待使用', image: '../../images/Travels.png', url: '../orderinfo/orderinfo?id=4' },
  { id: '4', name: '全部订单', image: '../../images/Strategy.png', url: '../orderinfo/orderinfo?id=1' },
  { id: '5', name: '退款/售后', image: '../../images/Strategy.png', url: '../orderinfo/orderinfo?id=4' }
]

export default {
  getDomain: DOMAIN,
  getAppSite: SITENAME,
  getAppDescript: DESCRIPTION,
  getAppLogo: SITELOGO,
  getHostUrl: HOST_URI,
  getHostPlus: HOST_WECHAT,
  getThumbnail:THUMBNAIL,
  getQrcodePath:QRCODEPATH,
  getNavigation: INDEXNAVIGATION,
  getDownloadDomain: DOWNLOADDOMAIN,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getTopList:ORDERTOPLIST
}