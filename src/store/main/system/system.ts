import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

import { getPageListDate } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload.pageUrl)
      console.log(payload.queryInfo)

      const pageResult = await getPageListDate(
        payload.pageUrl,
        payload.queryInfo
      )
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
