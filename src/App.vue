<template>
  <resources-list :resourcesList="storedResources"> </resources-list>
</template>

<script>
import ResourcesList from './components/resources/ResourcesList.vue';
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Search engine for finding the best information',
          link: 'https://google.com',
        },
      ],
    };
  },
  components: { ResourcesList },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
