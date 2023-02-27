<template>
  <v-container>
    account.vue
    <nuxt-child />
  </v-container>
</template>

<script>
  export default {
    layout: 'loggedIn',
    // falseを返すページのアクセスを制限する => OK:/account/passowrd     NG:/account
    validate ({ route}) {
      return route.name !== 'account'
    }
  }
</script>