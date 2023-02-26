<template>
  <v-toolbar-title>
    {{ appName}}
  </v-toolbar-title>
</template>

<script>
  export default {
    // $confgi: で.envの値を使うnuxt.configから変数を取得できる。
    data ({ $config: {appName} }) {
      return {
        appName
      }
    }
  }
</script>

<style lang="css" scoped>
 </style>