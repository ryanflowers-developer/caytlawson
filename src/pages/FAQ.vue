<template>
  <Layout>
    <v-container>
      <v-row class="text-center">
        <v-col md="12" lg="8" offset-lg="2" sm="12">
          <v-card
            tile="true"
            height="100%"
            width="100%"
            color="#f3eee8"
            flat
            style="border: 3px outset #c0beb1!important; padding:20px;"
          >
            <v-row class="text-center">
              <v-col lg="6" md="12" cols="12">
                <CaytLawsonLogo />
              </v-col>
              <v-spacer></v-spacer>
              <v-col lg="4" offset-lg="0" cols="4" offset="4">
                <v-img src="https://i.imgur.com/VAwhRBU.png"></v-img>
              </v-col>
            </v-row>
            <h2 class="mt-md-n12">FAQ</h2>

            <v-row>
              <v-col cols="10" offset="1">
                <h3 class="text-left">Questions for Cayt Lawson</h3>
                <v-divider></v-divider>
              </v-col>
            </v-row>

            <v-row>
              <v-col lg="10" offset-lg="1" cols="12">
                <Faqs />
              </v-col>
            </v-row>

            <v-row>
              <v-col lg="4" offset-lg="2" cols="12">
                <h3>
                  Have other question's for
                  <br />Cayt Lawson?
                </h3>
                <br />
                <p>
                  Feel free to email her at
                  <a href="mailto:caytlawson@gmail.com">caytlawson@gmail.com</a>
                </p>
                <v-row>
                  <v-col cols="4" offset="4">
                    <v-img src="https://i.imgur.com/0ZyXdcm.png"></v-img>
                  </v-col>
                  <v-col>
                    <br />
                    <h3>Learn more about the</h3>
                    <br />
                    <v-img src="https://i.imgur.com/mZTtWZE.png"></v-img>
                    <h4>To the</h4>
                    <h3>
                      <g-link style="color: #573a1d;" to="/books/">BOOKSHELF</g-link>
                    </h3>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="4" cols="12">
                <NewsletterSignUp />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import CaytLawsonLogo from "~/components/CaytLawsonLogo.vue";
import Faqs from "~/components/Faqs.vue";
import NewsletterSignUp from "~/components/NewsletterSignUp.vue";

export default {
  components: {
    CaytLawsonLogo,
    Faqs,
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
  font-size: 22px;
  font-weight: 100;
}
a {
  text-decoration: none;
  color: #573a1d !important;
}
</style>