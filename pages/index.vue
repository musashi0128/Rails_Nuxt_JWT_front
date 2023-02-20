<template>
  <div>
    <h2>
      Usersテーブルの取得
    </h2>
    <table v-if="users.length">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
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
          <!-- <td>{{ dateFormat(user.created_at) }}</td> -->
        </tr>
      </tbody>
    </table>

    <div v-else>
      ユーザーが取得できませんでした
    </div>
  </div>
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
    return { users }
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
