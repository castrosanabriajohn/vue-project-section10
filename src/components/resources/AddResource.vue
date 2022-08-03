<template>
  <base-dialog
    v-if="invalidInput"
    @close="dismissError"
    title="Input is not valid"
  >
    <template #default>
      <p>Unfortunately, at least one input field is invalid.</p>
      <p>
        Please check all of the input fields and make sure you entered at least
        one character into each input field.
      </p>
    </template>
    <template #actions>
      <base-button @click="dismissError">Confirm</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input ref="titleInput" id="title" name="title" type="text" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          ref="descriptionInput"
          id="description"
          name="description"
          type="text"
          rows="3"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input ref="linkInput" id="link" name="link" type="url" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
    handleSubmit() {
      const inputTitle = this.$refs.titleInput.value;
      const inputDescription = this.$refs.descriptionInput.value;
      const inputLink = this.$refs.linkInput.value;
      if (
        inputTitle.trim() === '' ||
        inputDescription.trim() === '' ||
        inputLink.trim() === ''
      ) {
        this.invalidInput = true;
        return;
      }
      this.addResource(inputTitle, inputDescription, inputLink);
    },
    dismissError() {
      this.invalidInput = false;
    },
  },
  data() {
    return {
      invalidInput: false,
    };
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
