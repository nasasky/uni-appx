import Base from '../../utils/base.js';
let base = new Base();

const state = {
  swiperlist: '',
  productlist: [],
  speed:6,
  pagestart:1
};
const getters = {

}

const mutations = {
  // 设置swiper数据
  setSwiper (state, payload) {
    state.swiperlist = payload;
  },
  // 设置首页推荐产品
  setProducts (state, payload) {
    state.pagestart = state.pagestart+1;
    for (let key in payload) {
      state.productlist.push(payload[key]);
    }
  }
}
const actions = {
  getSwiper({ commit },callback, payload) {
      var param = {
        url: '/api/Ajaxdata/getad',
        data: payload,
        sCallback: function (data) {
         callback&&callback(data)
        }
      }
      base.request(param);
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}