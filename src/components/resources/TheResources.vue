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
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';
export default {
  provide() {
    return {
      resourcesList: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
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
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'resources-list';
    },
    deleteResource(resourceId) {
      const index = this.storedResources.findIndex(
        (sr) => sr.id === resourceId
      );
      this.storedResources.splice(index, 1);
    },
  },
  components: { ResourcesList, AddResource },
};
</script>

<style></style>
