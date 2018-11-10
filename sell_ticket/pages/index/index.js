
//index.js
import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var wxApi = require('../../utils/wxApi.js');
var wxRequest = require('../../utils/wxRequest.js');
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp();

Page({
  data: {
    postsList: [],
    swiperList: [],
    discountList:[],
    Swiper:true,
    isLastPage: false,
    page: 1,
    search: '',
    categories: 0,
    per_page:10,
    loading: false,
    isLoading: "nospinner",
    isDisplay: "display",
    noDisplay: "nodisplay",
    Navigation: [],
    loginModal: true,
    userInfo:app.globalData.userInfo
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var self = this;
    self.fetchSwiperPosts();
    self.setData({
      Navigation: config.getNavigation
    });

    util.DoLoginInServer(app, self);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setStorageSync('openLinkCount', 0);
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '“' + config.getAppSite + '”分享有趣旅行,讲述奇闻趣事',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
   * 关键词查询
   */
  formSubmit: function (e) {
    var url = '../list/list'
    var key = '';
    if (e.currentTarget.id == "search-input") {
      key = e.detail.value;
    } else {
      key = e.detail.value.input;
    }
    if (key != '') {
      url = url + '?search=' + key;
      wx.navigateTo({
        url: url
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请输入内容',
        showCancel: false,
      });
    }
  },
  /**
   * 获取滑动文章
   */

  //设置数据
  fetchSwiperPosts: function () {
    var self = this;
    var imageList = [{ id: '1', thumbnail: '../../images/index1.jpg'},
      { id: '2', thumbnail: '../../images/index2.jpg' },
      { id: '3', thumbnail: '../../images/index3.jpg'  },
      { id: '4', thumbnail: '../../images/index4.jpg'}]
    var postList = [{ id: "1", name: "拙政园（5A）", image:"../../images/sz.jpg",price:"100",countprice:50,msg:"世界文化遗产 中国四大名园"},
      { id: "2", name: "寒山寺（4A）", image: "../../images/tps.jpg", price: "100", countprice: 50, msg: "著名唐诗《枫桥夜泊》的出处" },
      { id: "3", name: "狮子林（4A）", image: "../../images/index1.jpg", price: "100", countprice: 50, msg: "世界文化遗产，苏州四大名园之一" }
    ]

    var discountList = [{ id: "1", name: "金凤凰温泉度假双人票", image: "../../images/sz.jpg", price: "380", disprice: 50},
    { id: "2", name: "寒山寺（4A）", image: "../../images/tps.jpg", price: "400", disprice: 50},
    { id: "3", name: "狮子林（4A）", image: "../../images/index3.jpg", price: "900", disprice: 50},
      { id: "4", name: "狮子林（4A）", image: "../../images/index1.jpg", price: "900", disprice: 50 },
      { id: "5", name: "狮子林（4A）", image: "../../images/index2.jpg", price: "900", disprice: 50 },
      { id: "6", name: "狮子林（4A）", image: "../../images/index3.jpg", price: "900", disprice: 50 },
    ]
      self.setData({
        swiperList: imageList,
        postsList:postList,
        discountList: discountList
      })
  },
  
  /**
   * 返回小程序首页
   */
  redictHome: function (e) {
    //console.log('查看某类别下的文章');  
    var id = e.currentTarget.dataset.id,
    url = '/pages/index/index';
    wx.switchTab({
      url: url
    });
  },
  /**
   * 首页图标跳转
   */
  navRedirect: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  
})
