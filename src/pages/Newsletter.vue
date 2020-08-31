<template>
  <Layout>
    <v-container>
      <v-row class="text-center">
        <v-col lg="12" xl="8" offset-xl="2">
          <v-card
            tile="true"
            height="100%"
            width="100%"
            color="#f3eee8"
            flat
            style="border: 2px outset #c0beb1!important; padding:20px;"
          >
            <v-row class="text-md-center">
              <v-col lg="6" md="12" cols="12">
                <CaytLawsonLogo />
              </v-col>

              <v-spacer></v-spacer>

              <v-col lg="4" md="12">
                <HeadAuthorImage />
                <Quote class="d-md-none" />
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col order="0" order-lg="first" lg="4" md="8" cols="12">
                <BookCarousel />
                <v-divider></v-divider>
                <br />

                <IndexText />
                <br />
                <LearnMoreAboutCayt />
              </v-col>

              <v-col order="first" lg="4">
                <SbtSPreOrderImage />
                <SbtSExcerpt />
                <br />
                <div class="hidden-md-and-down">
                  <KbaDComingSoon />
                </div>
                <v-icon class="hidden-lg-and-up">mdi-dots-horizontal</v-icon>
              </v-col>

              <v-col lg="4" md="8" cols="12">
                <Quote class="hidden-lg-and-down" />
                <br />
                <NewsletterSignUp />
                <br />
                <StoneRanchTimeline />
                <KbaDComingSoon class="hidden-lg-and-up" />

                <!-- <div style="background-color: red; width:100%; height: 100px; "></div>
              <div style="background-color: red; width:100%; height: 100px; "></div>
              <div style="background-color: red; width:100%; height: 100px; "></div>
              <div style="background-color: red; width:100%; height: 100px; "></div>
                <div style="background-color: red; width:100%; height: 100px; "></div>-->
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import HeadAuthorImage from "~/components/HeadAuthorImage.vue";
import AnnsValleyMultiPlatImage from "~/components/AnnsValleyMultiPlatImage.vue";
import Quote from "~/components/Quote.vue";
import AnnsValleyLinks from "~/components/AnnsValleyLinks.vue";
import IndexText from "~/components/IndexText.vue";
import ParallaxIndex from "~/components/ParallaxIndex.vue";
import AnnsValleyPromoAvailableImage from "~/components/AnnsValleyPromoAvailableImage.vue";
import BookCarousel from "~/components/BookCarousel.vue";
import NewsletterSignUp from "~/components/NewsletterSignUp.vue";
import StoneRanchTimeline from "~/components/StoneRanchTimeline.vue";
import SbtSPreOrderImage from "~/components/SbtSPreOrderImage.vue";
import AnnsValleyCard from "~/components/AnnsValleyCard.vue";
import BookCards from "~/components/BookCards.vue";
import CaytLawsonLogo from "~/components/CaytLawsonLogo.vue";
import SbtSExcerpt from "~/components/SbtSExcerpt.vue";
import KbaDComingSoon from "~/components/KbaDComingSoon.vue";
import LearnMoreAboutCayt from "~/components/LearnMoreAboutCayt.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    HeadAuthorImage,
    AnnsValleyMultiPlatImage,
    Quote,
    AnnsValleyLinks,
    IndexText,
    ParallaxIndex,
    AnnsValleyPromoAvailableImage,
    BookCarousel,
    NewsletterSignUp,
    StoneRanchTimeline,
    SbtSPreOrderImage,
    AnnsValleyCard,
    BookCards,
    CaytLawsonLogo,
    SbtSExcerpt,
    KbaDComingSoon,
    LearnMoreAboutCayt,
  },
};
</script>

<style scoped>
</style>


