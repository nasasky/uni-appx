import {Base} from '../../utils/base.js'

class Product extends Base {
  constructor() {
    super()
  }
  getProductDetail(id,sCallback) {
    this.request({
      url:`product/${id}`,
      sCallback
    })
  }
}
export {
  Product
}