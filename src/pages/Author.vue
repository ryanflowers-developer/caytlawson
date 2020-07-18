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
            <v-row>
              <v-col cols="12">
                <CaytLawsonLogo />
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="10" offset-lg="1">
                <OfficialBio />
              </v-col>
            </v-row>
          
            <v-row>
              <v-col>
                <RatingPic />
              </v-col>
            </v-row>

         
            <v-row>
              <v-col>
                <SocialMediaBio />
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
import OfficialBio from "~/components/OfficialBio.vue";
import RatingPic from "~/components/RatingPic.vue";
import SocialMediaBio from "~/components/SocialMediaBio.vue";



export default {
  metaInfo: {
    title: "About us"
  },
  components: {
    CaytLawsonLogo,
    OfficialBio,
    RatingPic,
    SocialMediaBio
  },

};
</script>

<style scoped>
h1 {
  font-weight: 900!important;
  font-family: "Times New Roman", Times, serif;
}
h2 {
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
}
</style>
