import {Base} from '../../utils/base.js'

class Category extends Base{
  constructor() {
    super()
  }
  getCategoryType(sCallback) {
    this.request({
      url:'category/all',
      sCallback
    })
  }
  getProductsByCategory(id,sCallback) {
    this.request({
      url:`product/by_category/${id}`,
      sCallback
    })
  }
}

export {
  Category
}