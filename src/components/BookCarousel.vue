<template>
  <div>
    <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="image in images" :key="image">
        <v-img :src="image"></v-img>
      </v-carousel-item>
    </v-carousel>
    <h2>Available Books</h2>
    <br />
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        "https://i.imgur.com/madlag7.jpg",
        "https://i.imgur.com/cwttvll.jpg"
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 3px;
}
</style>