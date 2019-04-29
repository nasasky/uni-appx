import config from 'config.js'

class Base{
  constructor() {
    this.BaseUrl = config.restUrl
  }
  request(params) {
    let url = this.BaseUrl + params.url
    wx.request({
      url,
      method:params.methods?params.methods:'GET',
      data:params.data,
      header: {
        'content-type':'application/json',
        'token':wx.getStorage({key: 'token'})
      },
      success(res) {
        params.sCallback && params.sCallback(res.data)
      }
    })
  }
  getDataset(ev, key) {
    return ev.currentTarget.dataset[key]
  }
}

export {
  Base
}