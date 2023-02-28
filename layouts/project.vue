<template>
  <v-app>
    <logged-in-app-bar
      #navigation-toggle-button
      clipped-left
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />
    </logged-in-app-bar>
    <!-- navigation drawer-->
    <project-navigation-drawer
      :drawer.sync="drawer"
    />
    <!-- main content -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    middleware: 'get-project-current',
    data () {
      return {
        drawer: null
      }
    }
  }
</script>
