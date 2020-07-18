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
            <h3 class="mt-md-n12">The happily ever after</h3>
            <h2>BOOKSHELF</h2>

            <v-row>
              <v-col>
                <BigBookNew />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="10" offset="1" class="text-left">
                <h2 id="title-series">Stone Ranch Series</h2>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="8" offset-lg="2">
                <BookCards />
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
import BookCards from "~/components/BookCards.vue";
import BigBookNew from "~/components/BigBookNew.vue";

export default {
  metaInfo: {
    title: "Books"
  },
  components: {
    BookCards,
    CaytLawsonLogo,
    BigBookNew
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
  font-family: Rochester, "Times New Roman", Times, serif;
  font-size: 26px;
  font-weight: 200;
}

#title-series {
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  text-transform: capitalize;
  font-weight: 100;
}
</style>