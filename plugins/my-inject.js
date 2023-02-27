class MyInject {
  // Nuxtのcontexとぉ使用するには、constructor(ctx){}内で初期化する
  constructor (ctx) {
    this.app = ctx.app
  }

  pageTitle (routeName) {
    // routeName => 'account-settings / account-password / logout / .....'
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}` // => pages.account.settings
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日時フォーマット変換
  dateFormat (dataStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dataStr))
  }

  // プロジェクトリンクの生成
  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }
}

// inject => オリジナルのクラスをNuxtに登録できる機能
// どこからでもアクセスができるので、主にアプリ全体で使用するメソッドを管理するのに使用
// export default (context, inject)
export default ({app}, inject) => {
  // indejct('呼び出し名'、 クラスのインスタンス(context)) => $myとして呼び出す(今回はMyInject)
  inject('my', new MyInject({ app }))
}