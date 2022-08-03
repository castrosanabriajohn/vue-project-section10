<template>
  <ul>
    <resource
      v-for="sr in resourcesList"
      :key="sr.id"
      :title="sr.title"
      :description="sr.description"
      :link="sr.link"
    ></resource>
  </ul>
</template>

<script>
import Resource from './Resource.vue';
export default {
  inject: ['resourcesList'],
  components: { Resource },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
