<template>
  <v-row align-items="center" mx-auto>
    <v-card height="530px" width="300px" hover="true" style="padding:10px; margin: 20px; background-color: #573a1d;" v-for="book in books" :key="book">
      <v-img style="width: 25000px" :src="book.image"></v-img>
      <v-cared-title><h3>{{ book.title }}</h3></v-cared-title>
      <p>{{book.series}}</p>
      <v-progress-linear color="#9ed9df" :value=book.progress></v-progress-linear><span> {{ book.progress }}% Completed</span>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "Ann's Valley",
          image: "https://i.imgur.com/rAAgDpF.jpg",
          series: "Stone Ranch Prequel",
          progress: "100"
        },
        {
          title: "Seduced by the Saint",
          image: "https://i.imgur.com/rAAgDpF.jpg",

          series: "Stone Ranch Series, Book 1",
          progress: "100"
        },
        {
          title: "Kissed by a Devil",
          image: "https://i.imgur.com/rAAgDpF.jpg",

          series: "Stone Ranch Series, Book 2",
          progress: "45"
        },
        {
          title: "Wanted by the Ranger",
          image: "https://i.imgur.com/rAAgDpF.jpg",

          series: "Stone Ranch Series, Book 3",
          progress: "10"
        },
        {
          title: "Loved by an Outlaw",
          image: "https://i.imgur.com/rAAgDpF.jpg",

          series: "Stone Ranch Series, Book 4",
          progress: "10"
        }
      ]
    };
  }
};
</script>

<style scoped>
h3{
  color: white;
}
p{
  color: white;
}
span {
  color: white;
}
</style>