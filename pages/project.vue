<template>
  <v-container>
    project.vue
    <nuxt-child />
  </v-container>
</template>

<script>
  export default {
    layout: 'project',
    // falseを返すページのアクセスを制限する => OK:/project/{id}     NG:/project
    validate ({ route}) {
      return route.name !== 'project'
    }
  }
</script>