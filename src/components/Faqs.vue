<template>
  <v-container>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="q in questions" :key="q">
        <v-expansion-panel-header color="#dd786c" id="head-panel">{{ q.q }}</v-expansion-panel-header>
        <v-expansion-panel-content color="#89d8d2" id="answer-panel">{{ q.a }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          q: "What made you decide to become an author?",
          a: `The reasons behind why I became a writer and why I became an author differ from one
                        another. I’ve written stories for years. The main reason being that writing, for a brief
                        time, gives me control over the world – a fictional world and fictional characters,
                        true, but through them I can design whatever I desire. I began writing stories for
                        myself, simply because I knew what I wished to read. I never had any intention to
                        publish my work. My husband, ultimately, was the one to nudge me in that direction.
                        (There’s a short story behind this that I explore in more detail in my bio on BookBub.)
                        In the end it was he who convinced me to share my stories with the rest of the world. He
                        seemed to think that if I enjoyed them, other readers would, too. It’s quite a
                        vulnerable experience to share my beloved characters, so I certainly hope his theory
                        proves true. There’s bound to be someone else out there who enjoys my stories. If that
                        person is you, then I sincerely thank you for making this endeavor worth the effort!`
        },
        {
          q: "Are there any similar themes that will appear in your books?",
          a: `Other than the “happily ever afters” that go with the territory of romance? Yes. A
                        pattern readers may pick up on, is the reoccurring theme of “motherhood” throughout many
                        of my works. It is something, that as an avid reader of romance, myself, I always wished
                        there to be more of.`
        },

        {
          q: "Why write Historical Romance?",
          a: `The reason I write romance is because I’ve witnessed too many women in my life not end
                        up with a “happily ever after” and it has become my mission to deliver that to as many
                        women as possible. Of course, in reality, this goal may be unobtainable, but in a
                        fictional world? Well, there I can ensure strong heroines find love with deserving
                        partners. And my hope is, that perhaps women reading my books will be inspired to wait
                        for their prince instead of settling for a toad. Writing romance set in the 19th Century
                        is a way to combine my love for history and intrigue for survival situations; and
                        survival was quite the feat in this time period. My books will center greatly around
                        women’s everyday struggles, which are only increased in this time!`
        },
        {
          q: "Do you read historical romance, as well?",
          a: `Yes. Ohhh, yes. Almost exclusively since picking up my first historical romance novel
                        over fifteen years ago. Since then, I have averaged reading nearly one book per week,
                        90% of those books being historical romance. That’s a lot of romance!`
        },
        {
          q: "What’s the most difficult aspect of writing Historical Romance?",
          a: `The historical research. I do my best to deliver authenticity and detailed accuracy to my readers!`
        },
        {
          q:
            "Outside of writing, has Historical Romance ever inspired you in your personal life?",
          a: `Without question. Here’s a fun tidbit, of my three children, two of them were named
                        (first and middle names) from historical romance novels I had read!`
        },
        {
          q: "Where do you get your story ideas?",
          a: `Mostly the characters and their stories come to me from seemingly nowhere, in daydreams
                        and night dreams, playing out like movies in my head. Then I try to wake myself and rush
                        for pen and paper to write down and capture every detail I can remember before the
                        images and dialogue fade from memory!`
        }
      ]
    };
  }
};
</script>

<style scoped>
#head-panel {
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
}

#answer-panel {
  color: #573a1d;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
}

</style>