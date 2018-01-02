//粗暴的引入
import * as types from '../mutation-types'


const state = {
  current: 0,
  number: 88,
  center:"116.39,39.99"
}

//获取
const getters = {
  current: state => state.current,
  number: state => state.number,
  center:state=>state.center,
}
//如何改变IncrementNumber
const mutations = {
  [types.INCREMENT_NUMBER]: (state, payload) => {
//将在前面进行传值操作
    state.current += payload.data;
  },
  [types.SET_CENTER]: (state, payload) => {
    state.center = center
  },
}

//调用mutations来实现改变
const actions = {
  incrementNumber({commit}, payload) {
    commit(types.INCREMENT_NUMBER, payload)
  },
  setCenter({commit}, payload) {
    commit(types.SET_CENTER, payload)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
