// {storeの流れ}
  // 1.actionsで行いたい処理を行う -> 2.mutationsでstateの値を変更する -> 3.view側にデータを返却する
const homePath = 'projects'

// state => storeで設定する変数
// 使い方 => store.state.データ名(styles/loggedIn....)
export const state = () =>  ({
  styles : {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  project: {
    current: null,
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  }
})

// アプリ全体の算出プロパティ -> store内のcomputed
// 使い方 => store.getters.プロパティ名()
export const getters = {}

// stateの値を変更する場所 -> store内のstateはmutationsでしか変更できない
// 使い方 => store.commit.(mutation名,新しい値)
export const mutations =  {
  setCurrentProject (state, payload) {
    state.project.current =  payload;
  }
}

// アプリ全体のメソッド -> methodでデータ加工や非同期処理を行い、結果をmutationsに渡す
// 使い方 => store.dispatch.(action,引数)
// { state / getters / commit / dispatch / rootState / rootGetters }
// rootState =>  (store/index.js)のstateを取得すること -> (rootState=state)
export const actions = {
  getCurrentProject ({ state, commit }, params) {
    const id = Number(params.id);
    const currentProject =
      state.project.list.find(project => project.id === id) || null;

    commit('setCurrentProject', currentProject);
  }
}
