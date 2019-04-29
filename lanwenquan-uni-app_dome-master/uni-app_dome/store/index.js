import Vue from 'vue'
import Vuex from 'vuex'
import Goods from './modules/goods.js'
import home from './modules/home.js'
import Config from '../utils/config.js';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        host: Config.restUrl
    },
	 modules: {
		home
	 }
});
export default store;