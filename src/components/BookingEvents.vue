<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <br />
        <h3>Currently Booking Events</h3>
        <br />
        <v-progress-circular indeterminate size="80" color="#dd786c"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <br><br>
        <v-divider></v-divider>
        <br>
        <br>
        <br>
        <h4>While you're waiting...</h4>
        <br>
        <br>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pl-6 pr-6" lg="4" md="6" cols="12">
        <LearnMoreAboutCayt />
      </v-col>

      <v-col class="my-auto" lg="4" md="6" cols="12">
        <br />
        <h3>Learn more about the</h3>
        <br />
        <v-img src="https://i.imgur.com/mZTtWZE.png"></v-img>
        <h4>To the</h4>
        <h3>
          <g-link style="color: #573a1d;" to="/books/">BOOKSHELF</g-link>
        </h3>
      </v-col>
      <v-col class="my-auto" lg="4" md="6" cols="12">
        <HeadAuthorImage />
        <Quote />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LearnMoreAboutCayt from "~/components/LearnMoreAboutCayt.vue";
import NewsletterSignUp from "~/components/NewsletterSignUp.vue";
import Quote from "~/components/Quote.vue";
import HeadAuthorImage from "~/components/HeadAuthorImage.vue";

export default {
  components: {
    LearnMoreAboutCayt,
    Quote,
    HeadAuthorImage,
    NewsletterSignUp
  }
};
</script>

<style scoped>
h1 {
  font-family: Rochester;
}
h2 {
  font-family: "Times New Roman", Times, serif;
  font-size: 38px;
  text-transform: capitalize;
  font-weight: 100;
}
h3 {
  font-family: "Times New Roman", Times, serif;
  font-size: 26px;
  font-weight: 100;
}
h4 {

  font-family: "Times New Roman", Times, serif;
  font-size: 28px;
  font-weight: 300;
}

</style>