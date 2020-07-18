<template>
      <v-row class="text-center">
        <v-card  class="mx-auto" hover style="width: 230px; margin: 20px;" v-for="book in books" :key="book">
          <div>

              <v-img class="mx-auto mt-2" width="90%" :src="book.image"></v-img>
          </div>
          <div style="padding: 10px;" >

          <div>
            <h3>{{ book.title }}</h3>
          </div>
          <p>{{book.series}}</p>
          <v-progress-linear color="#9ed9df" :value="book.progress"></v-progress-linear>
          <span>{{ book.progress }}% Completed</span>
          </div>
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
          image: "https://i.imgur.com/madlag7.jpg?2",

          series: "Stone Ranch Series, Book 1",
          progress: "100"
        },
        {
          title: "Kissed by a Devil",
          image: "https://i.imgur.com/t35wYCR.jpg",

          series: "Stone Ranch Series, Book 2",
          progress: "45"
        },
        {
          title: "Wanted by the Ranger",
          image: "https://i.imgur.com/k83k6dX.jpg",

          series: "Stone Ranch Series, Book 3",
          progress: "10"
        },
        {
          title: "Loved by an Outlaw",
          image: "https://i.imgur.com/NTKfwFn.jpg",

          series: "Stone Ranch Series, Book 4",
          progress: "10"
        }
      ]
    };
  }
};
</script>

<style scoped>
h3 {
  font-family: "Times New Roman", Times, serif;
  color: black;
}
p {
  font-family: "Times New Roman", Times, serif;

  color: black;
}
span {
  font-family: "Times New Roman", Times, serif;

  color: black;
}
h3{
  font-family: 'Times New Roman', Times, serif;
}
</style>