import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		code:"",
		supplierName:"",
		selectType:[]
    },
    mutations: {
        login(state, obj) {
            state.code = obj.code;
            state.hasLogin = true;
			state.supplierName = obj.supplierName;
			state.selectType = obj.filterArr;
        },
        logout(state) {
            state.code = "";
			state.supplierName = "";
            state.hasLogin = false;
        }
    }
})

export default store
