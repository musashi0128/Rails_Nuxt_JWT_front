const redirectPath = 'projects'

export const state = () =>  ({
  styles : {
    homeAppBarHeight: 56
  },
  loggedIn: {
    redirectPath: {
      name: redirectPath
    }
  }
})

// アプリ全体の算出プロパティ -> computed
export const getters = {}

// stateの値を変更する場所 ->
export const mutations =  {}

// アプリ全体のメソッド -> method
export const actions = {}
