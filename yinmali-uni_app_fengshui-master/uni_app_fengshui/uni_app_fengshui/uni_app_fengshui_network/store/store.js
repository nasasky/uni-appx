import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading:false,
		screen:false,
		buys:false,//确认购买
		address:false,//地址选择
	},
	
	mutations: {
		/**
		 * @name 是否显示全局组件loading
		 */
		switch_loading(state){
			state.loading = !state.loading
			setTimeout(()=>{
				state.loading = !state.loading
			},1200)
		},
		
		switch_screen(state){
			state.screen = !state.screen
		},
		
		switch_buys(state){
			state.buys = !state.buys
		},
		switch_address(state,bool){
			state.address = !state.address
		}
	},
	actions: {
		 
	}
})

export default store
