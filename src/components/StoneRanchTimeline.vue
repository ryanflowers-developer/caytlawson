<template>
  <div>
    <h2 id="title">Stone Ranch Timeline</h2>
    <br />
    <br />
    <v-timeline>
      <v-timeline-item
        v-for="book in books"
        :key="book"
        color="#189d98"
        style="padding: -20px;"
        icon="mdi-book-open-page-variant"
      >
        <v-card-text style="margins: 0px;">
          <h2>{{ book.title }}</h2>
          <p>{{ book.series }}</p>
          <v-progress-linear color="#dd786c" :value="book.progress"></v-progress-linear>
          <span>{{ book.progress }}% Completed</span>
        </v-card-text>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "Ann's Valley",
          series: "Stone Ranch Prequel",
          progress: "100"
        },
        {
          title: "Seduced by the Saint",
          series: "Stone Ranch Series, Book 1",
          progress: "100"
        },
        {
          title: "Kissed by a Devil",
          series: "Stone Ranch Series, Book 2",
          progress: "45"
        },
        {
          title: "Wanted by the Ranger",
          series: "Stone Ranch Series, Book 3",
          progress: "10"
        },
        {
          title: "Loved by an Outlaw",
          series: "Stone Ranch Series, Book 4",
          progress: "10"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  font-weight: 100;
}

p {
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  font-style: bold;
}

#title {
  font-size: 24px;
}
</style>