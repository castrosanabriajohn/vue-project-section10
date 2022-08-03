<template>
  <ul>
    <resource
      v-for="sr in storedResources"
      :key="sr.id"
      :title="sr.title"
      :description="sr.description"
      :link="sr.link"
    ></resource>
  </ul>
</template>

<script>
import Resource from './components/resources/Resource.vue';
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
  components: { Resource },
};
</script>
