<template>
  <base-card>
    <base-button
      @click="setSelectedTab('resources-list')"
      :mode="listButtonMode"
      >Resources List</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';
export default {
  provide() {
    return {
      resourcesList: this.storedResources,
    };
  },
  data() {
    return {
      selectedTab: 'resources-list',
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
  computed: {
    listButtonMode() {
      return this.selectedTab === 'resources-list' ? null : 'flat';
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  components: { ResourcesList, AddResource },
};
</script>

<style></style>
