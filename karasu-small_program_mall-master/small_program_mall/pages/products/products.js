// pages/products/products.js
import {
  Product
} from './product-model.js'

let product = new Product()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    index: 0,
    productCounts: 1,
    boxArr: ['商品详情', '产品参数', '售后保障'],
    currentTabsIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id
    this.__loadData(id)
  },
  __loadData(id) {
    product.getProductDetail(id, (res) => {
      this.setData({
        product: res
      })
    })
  },
  bindPickerChange(e) {
    let value = e.detail.value;
    this.setData({
      productCounts: this.data.countsArray[value]
    })
  },
  changeTabs(e) {
    let idx = e.currentTarget.dataset.idx
    this.setData({
      currentTabsIndex: idx
    })
  }
})