<template>
  <div>
    <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'h1' : 'small']">Cayt Lawson</h1>
    <p :class="[$vuetify.breakpoint.mdAndUp ? 'h1' : 'psmall']">Historical Romance Author</p>
  </div>
</template>

<script>
export default {
  data: {}
};
</script>

<style scoped>
h1 {
  font-size: 96px;
  font-family: Rochester;
  color: #573a1d;
  text-shadow: 2px 2px #9ed9df;
  white-space: nowrap;
}
p {
  margin-top: -20px;
  margin-left: 300px;
  font-size: 22px;
  font-family: Rochester;
  white-space: nowrap;
}

h1.small {
  font-size: 64px;
  font-family: Rochester;
  color: #573a1d;
  text-shadow: 2px 2px #9ed9df;
  white-space: nowrap;
}

p.psmall {
  margin: auto;
  font-size: 18px;
  font-family: Rochester;
  white-space: nowrap;
}
</style>