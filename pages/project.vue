<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
  export default {
    layout: 'project',
    // falseを返すページのアクセスを制限する => OK:/project/{id}     NG:/project
    validate ({ store, route}) {
      return !!store.state.project.current && route.name !== 'project'
    }
  }
</script>