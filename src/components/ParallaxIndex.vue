<template>
  <v-row>
    <v-col lg="12">
      <v-parallax
        height="650"
        class="parallax"
        src="https://i.imgur.com/LWtFHBw.jpg"
        id="background"
      >
        <v-row class="text-center align-center">
          <v-col lg="3" offset-lg="3">
            <HeadAuthorImage />
          </v-col>
          <v-col lg="4">
            <Quote />
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
import HeadAuthorImage from "~/components/HeadAuthorImage.vue";
import Quote from "~/components/Quote.vue";
export default {
  components: {
    HeadAuthorImage,
    Quote
  }
};
</script>

<style scoped>
</style>