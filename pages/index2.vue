<template>
  <v-container fluid>
    <v-card
      flat
      tile
      color="transparent"
    >
      <v-card-title>
        Usersテーブルの取得
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <temdivplate
            v-if="users.length"
            v-slot:default
          >
            <thead>
              <tr>
                <th
                  v-for="(key, i) in userKeys"
                  :key="`key-${i}`"
                >
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(user, i) in users"
                :key="`user-${i}`"
              >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.created_at }}</td>
              </tr>
            </tbody>
          </temdivplate>
          <!-- <template v-else>ユーザーが存在しません</template> -->
        </v-simple-table>
      </v-card-text>
      <v-card-title>
        Vuetifyの導入（オリジナルカラーの確認）
      </v-card-title>
      <v-card-text>
        <v-btn
          v-for="(color, i) in colors"
          :key="`color-${i}`"
          :color="color"
          class="mr-2"
        >
          {{ color }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  // asyncData関数 => コンポーネントのデータを表示する前に実行するメソッド -> DBからGETしてデータを取得しておくなど
  // async => promiseを返す(promise => 非同期処理の結果を表示するオブジェクト)
  // await => promiseを返すまでJSを待機させる
  async asyncData ({ $axios }) {
    let users = []
    await $axios.$get('/api/v1/users')
      .then(res => (users = res))
    const userKeys = Object.keys(users[0] || {}) // 追加
    return { users, userKeys }
  },
  // data () 追加
  data () {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'error', 'background']
    }
  },
  // computedは算出プロパティと呼ぶ
  //算出プロパティ => 計算しデータを返す関数のこと
  // computed: {
  //   dateFormat () {
  //     return (date) => {
  //       const dateTimeFormat = new Intl.DateTimeFormat(
  //         'ja', { dateStyle: 'medium', timeStyle: 'short' }
  //       )
  //       return dateTimeFormat.format(new Date(date))
  //     }
  //   }
  // }
}
</script>
