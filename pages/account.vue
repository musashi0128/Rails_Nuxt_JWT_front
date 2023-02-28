<template>
  <v-container>
    <v-btn
      if="!!currentProject"
      small
      plain
      color="primary"
      :to="$my.projectLinkTo(currentProject.id, dashboardPath)"
    >
      <v-icon>
        mdi-chevron-double-left
      </v-icon>
      {{ $my.pageTitle(dashboardPath) }}に戻る
    </v-btn>
    <nuxt-child />
  </v-container>
</template>

<script>
  export default {
    layout: 'loggedIn',
    // falseを返すページのアクセスを制限する => OK:/account/passowrd     NG:/account
    validate ({ route}) {
      return route.name !== 'account'
    },
    data () {
      return {
        dashboardPath: 'project-id-dashboard'
      }
    },
    computed: {
      currentProject () {
        return this.$store.state.project.current
      }
    }
  }
</script>