<template>
  <Layout>
    <v-container>
      <v-row  class="text-center">
        <v-col md="12" lg=8 offset-lg="2" sm="12">
          <v-card
            tile="true"
            height="100%"
            width="100%"
            color="#f3eee8"
            flat
            style="border: 3px outset #c0beb1!important; padding:20px;"
          >
          <v-row>
            <v-col cols='12'>
              <CaytLawsonLogo />
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="10" offset-lg="1">
              <OfficialBio />
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="8" offset-lg="2">
            <v-img src="https://picsum.photos/200"></v-img>

            </v-col>
          </v-row>



          <br><br><br>
          <h1>Cayt Lawson</h1>
          <h1>Page content coming soon...</h1>


            
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </Layout>
</template>

<script>
import CaytLawsonLogo from '~/components/CaytLawsonLogo.vue';
import OfficialBio from '~/components/OfficialBio.vue';

export default {
  metaInfo: {
    title: 'About us'
  },
  components : {
    CaytLawsonLogo,
    OfficialBio
  }
}
</script>

<style scoped>
h1{
  font-family:'Times New Roman', Times, serif;
}
</style>
