import {Base} from '../../utils/base.js'

class Theme extends Base{
  constructor() {
    super()
  }
  getThemeDetail(id, sCallback) {
    this.request({
      url:`theme/${id}`,
      sCallback
    })
  }
}

export {
  Theme
}