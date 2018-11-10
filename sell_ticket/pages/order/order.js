
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
    topList: [],
    orderList:[],


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var self = this;
    self.setData({
      topList: config.getTopList
    });
    self.setOrderList();

  },

  //设置数据
  setOrderList: function () {
    var self = this;
    var orderList = [{ id: "1", title: "苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state:"待付款",date:"2018-08-03",deadline:"05" },
      { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05"},
    ]
    self.setData({
      orderList: orderList
    })
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
  }
})
