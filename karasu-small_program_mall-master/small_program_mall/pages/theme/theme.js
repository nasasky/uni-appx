// pages/theme/theme.js
import {Theme} from './theme-model.js'

let theme = new Theme()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id
    this.data.name = options.name

    this.__loadData()
  },
  __loadData() {
    theme.getThemeDetail(this.data.id,(res)=> {
      this.setData({
        'headImg': res.head_img.url,
        'productsArr': res.products
      })
    })
  },

  onProductsItemTap(event) {
    let id = theme.getDataset(event, 'id')
    wx.navigateTo({
      url: `../products/products?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
  }
})