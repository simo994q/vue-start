<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
}

</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
main {
  max-width: 800px;
  margin: auto;

  h1 {
    border-bottom: 2px solid #333;
    padding: 10px 0;
    color: #333;
  }

  p {
    color: #333;
    margin: 10px 0;
  }
}
</style>
