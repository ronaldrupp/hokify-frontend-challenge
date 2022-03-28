<template>
  <main
    class="max-w-3xl mx-auto pt-12 min-h-screen flex justify-center items-center"
  >
    <button
      class="mt-6 flex items-center justify-center font-bold rounded-full bg-blue text-white px-8 py-2"
      @click="resetFormData"
    >
      Reset form data
    </button>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    resetFormData() {
      this.$store.commit("saveFormData", {});
      alert("Form reset");
    },
  },
});
</script>

<style scoped></style>
