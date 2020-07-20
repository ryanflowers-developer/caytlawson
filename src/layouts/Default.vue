<template>
  <div class="Layout">
    <v-app
      style="background-image: url('https://i.imgur.com/tg6auik.jpg'); backround-repeat: repeat reapeat;"
    >
      <Navbar />
      <slot />
      <Footer />
    </v-app>
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
</style>


