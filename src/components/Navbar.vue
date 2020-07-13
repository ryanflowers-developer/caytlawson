<template>
  <div>
    <v-app-bar
      color="#c0beb1"
      dense
      fixed
    >
      <v-spacer></v-spacer>
      <v-tab><g-link style="color: #573a1d" to="/books/">Books</g-link></v-tab>
      <g-link style="color: #573a1d" to="/author/"><v-tab>Author</v-tab></g-link>
      <g-link to="/"><v-tab><v-icon size="40" color="#573a1d">mdi-home</v-icon></v-tab></g-link>
      <g-link style="color: #573a1d" to="/faq/"><v-tab>FAQ</v-tab></g-link>
      <g-link style="color: #573a1d" to="/events/"><v-tab>Events</v-tab></g-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container style="height: 50px; margin-top: 50px; margin-bottom: -25px;">
      <v-row>
      <v-spacer></v-spacer>
        <a href="https://www.facebook.com/CaytLawson/" target="_blank"><v-icon color="#573a1d" style="margin-left: 20px; margin-right: 20px;">mdi-facebook</v-icon></a>
        <a href="https://twitter.com/caytlawson" target="_blank"><v-icon color="#573a1d" style="margin-left: 20px; margin-right: 20px;">mdi-twitter</v-icon></a>
        <a href="https://www.instagram.com/caytlawson/" target="_blank"><v-icon color="#573a1d" style="margin-left: 20px; margin-right: 20px;">mdi-instagram</v-icon></a>
        <a href="https://www.goodreads.com/author/show/18144598.Cayt_Lawson" target="_blank"><v-icon color="#573a1d" style="margin-left: 20px; margin-right: 20px;">mdi-goodreads</v-icon></a>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  metadata {
    siteName
  },
}
</static-query>

<style scoped>
#author-title{
font-family: Rochester;
font-size: 28px;

}

a{
  text-decoration: none;
}

</style>