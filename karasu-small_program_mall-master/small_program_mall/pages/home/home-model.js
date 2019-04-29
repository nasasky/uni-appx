import {Base} from '../../utils/base.js'

class Home extends Base{
  constructor() {
    super()
  }
  getBannerData(id, callback) {
    this.request({
      url: `banner/${id}`,
      sCallback: function (res) {
        callback(res.items)
      }
    })
  }
  getThemeData(callback) {
    this.request({
      url:'theme?ids=1,2,3',
      sCallback: function (res) {
        callback(res)
      }
    })
  }
  getRecentData(callback) {
    this.request({
      url:'product/recent',
      sCallback: function (res) {
        callback(res)
      }
    })
  }
}

export default Home