<template>
  <v-row class="align-center">
    <v-col lg="2" offset-lg="3" cols="6" offset="3"  class="pt-16 mt-n12">
      <v-card flat color="#f3eee8">
        <v-rating v-model="rating" class="mx-auto"  half-increments="true" color="yellow darken-3" size="20"></v-rating>
        <v-img width="65%"  class="mx-auto" src="https://i.imgur.com/lV7SCFr.png?1"></v-img>
      </v-card>

    </v-col>

    <v-col lg="2" offset-lg="0" cols="8" offset="2">
      <v-img src="https://i.imgur.com/VYUnW4A.jpg"></v-img>
    </v-col>
    
    <v-col lg="2" offset-lg="0" cols="6" offset="3">
      <v-card flat color="#f3eee8">
        <v-rating v-model="rating" class="mx-auto"  half-increments="true" color="yellow darken-3" size="20"></v-rating>
        <v-img width="65%"  class="mx-auto" src="https://i.imgur.com/Q59NfSL.png?1"></v-img>
      </v-card>
    
    
    </v-col>
  </v-row>
</template>

<script>
export default {
      data: () => {
    return {
      rating: 4.5
    };
  }
};
</script>

<style>
</style>