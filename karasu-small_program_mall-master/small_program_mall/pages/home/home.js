import Home from 'home-model.js'

let home = new Home()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.__loadData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  __loadData() {
    home.getBannerData(1, (res) => {
      this.setData({
        'bannerArr': res
      })
    })
    home.getThemeData((res) => {
      this.setData({
        'themeArr': res
      })
    })
    home.getRecentData((res) => {
      this.setData({
        productsArr: res
      })
    })
  },

  onProductsItemTap(event) {
    let id = home.getDataset(event, 'id')
    wx.navigateTo({
      url: `../products/products?id=${id}`,
    })
  },
  onThemesItemTap(event) {
    let id = home.getDataset(event, 'id')
    let name = home.getDataset(event, 'name')
    wx.navigateTo({
      url: `../theme/theme?id=${id}&name=${name}`,
    })
  }
})