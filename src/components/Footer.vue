15<template>
  <v-card height="100px" color="#89d8d2">
    <v-footer v-bind="localAttrs" :padless="padless" color="#89d8d2">
      <v-card flat tile width="100%" class="text-center" color="#89d8d2">
        <v-card-text>
          <a href="https://www.facebook.com/CaytLawson/" target="_blank">
            <v-icon
              size="30"
              color="#573a1d"
              style="margin-left: 15px; margin-right: 15px;"
            >mdi-facebook</v-icon>
          </a>
          <a href="https://twitter.com/caytlawson" target="_blank">
            <v-icon
              size="30"
              color="#573a1d"
              style="margin-left: 15px; margin-right: 15px;"
            >mdi-twitter</v-icon>
          </a>
          <a href="https://www.instagram.com/caytlawson/" target="_blank">
            <v-icon
              size="30"
              color="#573a1d"
              style="margin-left: 15px; margin-right: 15px;"
            >mdi-instagram</v-icon>
          </a>
          <a href="https://www.goodreads.com/author/show/18144598.Cayt_Lawson" target="_blank">
            <v-icon
              size="30"
              color="#573a1d"
              style="margin-left: 15px; margin-right: 15px;"
            >mdi-goodreads</v-icon>
          </a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Cayt Lawson, L.L.C.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
</style>