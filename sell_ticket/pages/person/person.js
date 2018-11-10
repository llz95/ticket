
// pages/person/person.js
import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var auth = require('../../utils/auth.js');
var wxApi = require('../../utils/wxApi.js');
var wxRequest = require('../../utils/wxRequest.js');
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    telphone:"4008850663",
    pagelist: [],
    loginModal: true,
    userInfo: null,
    openid:app.globalData.openid,
    s:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    console.log(app.globalData.userInfo)
      self.setData({
        userInfo: app.globalData.userInfo,
        openid:app.globalData.openid
      });

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '“' + config.getAppSite + '”：分享有趣旅行,讲述奇闻趣事。',
      path: 'pages/person/person',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
   * 点击拔打电话
   */
  dailTelTap: function () {
    var telphone;
    telphone = this.data.telphone;
    wx.makePhoneCall({
      phoneNumber: telphone,
    });
  },
  /**
   * 获取页面列表
   */
  fetchPostsData: function () {
    var self = this;
    self.setData({
      pagelist: []
    });
    var getPagesRequest = wxRequest.getRequest(Api.getPages());
    getPagesRequest.then(response => {
      if (response.statusCode === 200) {
        self.setData({
          pagelist: self.data.pagelist.concat(response.data.map(function (item) {
            //console.log(item);
            return item;
          })),
        });
      } else if (response.statusCode === 404) {
        console.log('加载数据失败,可能缺少相应的数据');
      }
    })
      .then(resonse => {
        self.setData({
          userInfo: app.globalData.userInfo
        });
      })
  },
 

  /**
  * 确认数据
  */
  confirm: function () {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  }
})