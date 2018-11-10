
// pages/hot/hot.js
import config from '../../utils/config.js';
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var wxApi = require('../../utils/wxApi.js');
var wxRequest = require('../../utils/wxRequest.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {

    postsList: [],
    hasitmes: false,
    isDisplay: "nodisplay",
    tabsItems: [
      // id name selected 选中状态
      { id: '1', name: '全部', selected: false },
      { id: '2', name: '待付款', selected: false },
      { id: '3', name: '待使用', selected: false },
      { id: '4', name: '待评价', selected: false },
      { id: '5', name: '退款/售后', selected: false },

    ],
    tab: 1,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.fetchPostsData("1");
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 页面点击重新加载事件的处理函数
   */
  reLoad: function (e) {
    var self = this;
    self.fetchPostsData(self.data.tab);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var title = "分享“" + config.getAppSite + "”文章排行榜";
    var path = "pages/hot/hot";
    return {
      title: title,
      path: path,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
   * 切换标签
   */
  onTapTag: function (e) {
    var self = this;
    var tab = e.currentTarget.id;
    var tabsItems = self.data.tabsItems;
    // 切换 topBarItem 
    for (var i = 0; i < tabsItems.length; i++) {
      if (tab == tabsItems[i].id) {
        tabsItems[i].selected = true;
      } else {
        tabsItems[i].selected = false;
      }
    }
    self.setData({
      tabsItems: tabsItems,
      tab: tab
    })
    if (tab !== 0) {
      self.fetchPostsData(tab);
    } else {
      self.fetchPostsData(1);
    }
  },
  /**
   * 获取文章数据
   */
  fetchPostsData: function (tab) {
    var self = this;
    if(tab==1){
      var postList=[
        { id: "1", title: "全部订单苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" },
        { id: "1", title: "苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" }
      ]
      self.setData({
        postsList:postList,
        hasitmes: true
      })
    }
    else if(tab==2){
      var postList = [
        { id: "1", title: "待付款苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" },
        { id: "1", title: "苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" }
      ]
      self.setData({
        postsList: postList,
        hasitmes: true
      })
    }

    else if (tab == 3) {
      var postList = [
        { id: "1", title: "待使用苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" },
        { id: "1", title: "苏州乐园，请至少提前一天的23点前购买", image: "../../images/sz.jpg", price: 380.00, count: 1, state: "待付款", date: "2018-08-03", deadline: "05" },
        { id: "2", title: "太平山，请至少提前一天的23点前购买", image: "../../images/tps.jpg", price: 400.00, count: 2, state: "已付款", date: "2018-08-03", deadline: "05" }
      ]
      self.setData({
        postsList: postList,
        hasitmes: true
      })
    }
    else{
        var postList =null;
        self.setData({
          postsList: postList,
          hasitmes: false
        })
    }
   
  },
  /**
   * 查看订单详情
   */
  redictDetail: function (e) {
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
    })
  }
})