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
  props: ['resourcesList'],
  components: { Resource },
};
</script>
