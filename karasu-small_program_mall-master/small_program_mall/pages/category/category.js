// pages/category/category.js
import {Category} from './category-model.js'
let category = new Category

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
    this.__loadData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  __loadData() {
    category.getCategoryType((res)=>{
      this.setData({
        categoryTypeArr: res
      })
      let firstId = res[0].id
      category.getProductsByCategory(firstId, (products) => {
        let dataObj = {
          products,
          topImgUrl:res[0].img.url,
          title: res[0].name
        }
        this.setData({
          categoryInfo0: dataObj
        })
      })
    })
    
  }

})