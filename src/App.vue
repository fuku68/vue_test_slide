<template>
<v-app>
  <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar app color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Page Title</v-toolbar-title>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    pageTitle() {
      return this.$router.currentRoute.name;
    },
  },
  methods: {
  }
};
</script>
